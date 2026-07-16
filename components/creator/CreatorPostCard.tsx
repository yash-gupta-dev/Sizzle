"use client"

import { AmericanPieIcon, ChatBubbleIcon, ChuckyLogoIcon, DexterIcon, EyeIcon, HeartFilledIcon, LockFilledIcon, OptionsIcon, SaveBookmarkIcon, UsdCircleIcon } from "@/assets/icons";
import { Text } from "../ui/text"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { motion } from "motion/react";
import { GradientText } from "../ui/gradientText";
import { TEMP_FEATURED_CREATORS } from "@/data/demo.data";
import { Slider } from "../ui/slider";
import GradientSemiBorder from "../ui/gradientSemiBorder";
import { cn } from "@/lib/utils";

type PostDataType = typeof TEMP_FEATURED_CREATORS[0]

export interface CreatorCardPostProps extends PostDataType {
  index?: number | null;
  minHeight?: number;
  isFromProfile?: boolean;
  isCertified?: boolean;
  rank?: number;
}

function CreatorPostCard({
  index = null,
  cover,
  title,
  creator,
  duration,
  tags,
  isLocked,
  isNew,
  rank,
  isVideo,
  minHeight = 120,
  isFromProfile = false,
  isCertified = false,
  stats
}: CreatorCardPostProps) {

let Logo = <AmericanPieIcon className="w-30 h-12"/>;

if (index !== null) {
  const indexModulo = index % 4;

  switch (indexModulo) {
    case 0:
      Logo = <DexterIcon className="w-30 h-11.5" />;
      break;
    case 1:
      Logo = <ChuckyLogoIcon className="w-30 h-8" />;
      break;
    case 2:
      Logo = <AmericanPieIcon className="w-30 h-12"/>;
      break;
    case 3:
      Logo = <AmericanPieIcon className="w-30 h-12"/>;
      break;
  }
}

  const parentVariants = {
    initial: {},
    hover: {
      backgroundColor: 'var(--card-muted-hover)'
    },
  };

  const tagsVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 0 },
  };

  const buttonsVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
  };

  const imageVariants = {
    initial: { opacity: 0.9 },
    hover: { opacity: 1 },
  };

  return (
    <motion.div
      variants={parentVariants}
      initial={'initial'}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      whileHover={'hover'}
      className="p-3 rounded-[15px] cursor-pointer h-full flex flex-col">
      <motion.div
        variants={imageVariants}
        className={`relative rounded-[15px] min-h-${minHeight} bg-center bg-cover`}
        style={{ backgroundImage: `url(${cover})`, aspectRatio: '1/1.5434083601' }}
      >

        {isCertified ? <GradientSemiBorder /> : null}


        <div className={`relative flex w-full h-full min-h-${minHeight} pl-3.75 bg-[rgba(0,0,0,0.1)] group`}>
          {/* Un-Hovered State */}
          {!isCertified ? <motion.div
            variants={tagsVariants}
            className="absolute flex top-3.75 left-3.75 gap-1.25">
            {
              isNew ? <div
                className="flex items-center justify-center w-10 h-6 bg-center bg-cover text-foreground text-xs align-middle rounded-[6px]"
                style={{ backgroundImage: `url('/images/gradient-background.png')` }}
              >
                <Text className="leading-4" size={'xs'}>New</Text>
              </div> : null
            }
            {
              isLocked ? <div className="h-6 w-6 flex items-center justify-center bg-premium text-black rounded-[6px]">
                <LockFilledIcon className="h-3 w-3"/>
              </div> : null
            }
          </motion.div> : null}

          {/* Tags\Duration */}
          <motion.div variants={tagsVariants} className="flex flex-col gap-5 self-end group-hover:hidden">
            {index !== null ? Logo : null}
            <div className="flex gap-1.25 mb-3.75">
              {
                duration ? <div className="flex h-fit bg-translucent-bg py-0.5 px-2 gap-1 text-[12px] rounded-[6px]">
                  <Text size={'sm'}>4K</Text>
                  <Text size={'sm'} weight={'normal'}>{duration}</Text>
                </div> : null
              }
              {
                tags.map(t => {
                  return <div className="h-fit bg-translucent-bg py-0.5 px-2 text-[12px] rounded-[6px]" key={t}>
                    <Text size={'sm'} weight={'normal'}>#{t}</Text>
                  </div>
                })
              }
            </div>

          </motion.div>
          {/* Hovered */}
          {(!isCertified && !isVideo) ? <motion.div className="flex justify-between absolute top-3.5 right-3.75" variants={buttonsVariants}>
            <div className="h-fit bg-translucent-bg py-0.5 px-2 text-[12px] rounded-[6px]">
              <Text weight={'normal'} size={'xxs'}>1/80</Text>
            </div>
          </motion.div> : null}

          <motion.div className="flex flex-col items-end gap-2.5 justify-between absolute bottom-5 left-3.75 right-3.75" variants={buttonsVariants}>
            {!isVideo ?<div className={cn("relative flex flex-col items-center gap-2.5", isCertified ? 'right-3.75' : '')}>
              <div className="flex flex-col items-center gap-0.5">
                <HeartFilledIcon className="h-7 w-7" />
                <Text size={'xxs'}>{stats.likes}</Text>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <ChatBubbleIcon className="h-7 w-7" />
                <Text size={'xxs'}>{stats.likes}</Text>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <UsdCircleIcon className="h-7 w-7" />
                <Text size={'xxs'}>{stats.likes}</Text>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <SaveBookmarkIcon className="h-7 w-7" />
                <Text size={'xxs'}>{stats.likes}</Text>
              </div>

              <OptionsIcon className="w-4" />
            </div> : null}
            {
              isVideo ? <Slider
              // value={50}
              // defaultValue={50}
              /> : null
            }
          </motion.div>

        </div>
      </motion.div>

      {/* Details */}
      <div className="flex items-center gap-3.75">
        {rank && <GradientText gradient="linear-gradient(to bottom, #FFFFFF, #FFFFFF10)">{rank}</GradientText>}
        <div className="pt-3 text-[16px]">
          <Text weight={'normal'}>{title}</Text>
          <div className="flex items-center gap-2 text-text-secondary">
            <div className="flex items-center gap-1">
              <Avatar className="h-3.5 w-auto aspect-square rounded-[5px] [&::after]:border-0">
                <AvatarImage className="w-full h-full object-cover rounded-sm border-[0.5px] border-foreground/15" src={creator.image} />
                <AvatarFallback>SZ</AvatarFallback>
              </Avatar>
              {!isFromProfile ? <Text size={'sm'} className="text-card-hover">{creator.name}</Text> : null}
            </div>

            <div className="flex items-center gap-1">
              {!isFromProfile ? <EyeIcon className="w-3 text-card-hover" /> : null}
              <Text weight={'normal'} className="text-card-hover" size={'sm'}>{stats.views} views • 2d</Text>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CreatorPostCard 
