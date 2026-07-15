"use client"

import { AddIcon, CrownRewardIcon, GalleryIcon, PlaylistIcon, StarHollowIcon } from "@/assets/icons";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Text } from "../ui/text"
import Image from "next/image";
import { Button } from "../ui/button";
import { GradientText } from "../ui/gradientText";
import { motion } from "motion/react";

export interface CreatorSuggestionCardProps {
  name: string;
  image: string,
  featuredImages: string[],
}

function CreatorSuggestionCard({
  name,
  image,
  featuredImages
}: CreatorSuggestionCardProps) {

  return (
    <motion.div 
    whileHover={{
      backgroundColor: 'var(--card-muted-hover)'
    }}
    className="p-5 overflow-hidden rounded-[15px] bg-card-hover-bg cursor-pointer border border-[#FFFFFF10]">
      <div className="flex gap-3.75 mb-5">
        {/* @ts-ignore */}
        <Avatar style={{ cornerShape: 'squircle' }} className="h-14.5 w-auto aspect-square rounded-4xl [&::after]:border-0">
          {/* @ts-ignore */}
          <AvatarImage style={{ cornerShape: 'squircle' }} className="w-full h-full object-cover rounded-4xl" src={image} />
        </Avatar>

        <div className="flex justify-between items-center w-full">
          <div>
            <Text>{name}</Text>
            <div className="flex items-center gap-2.5 mt-1.5 text-card-hover">
              <div className="flex items-center gap-1 5">
                <GalleryIcon className="h-3" />
                <Text weight={'normal'} size={'sm'}>3.4K</Text>
              </div>
              <div className="flex items-center gap-1 5">
                <PlaylistIcon className="h-3" />
                <Text weight={'normal'} size={'sm'}>3.4K</Text>
              </div>
              <div className="flex items-center gap-1 5">
                <CrownRewardIcon className="h-3" />
                <Text weight={'normal'} size={'sm'}>3.4K</Text>
              </div>
            </div>
          </div>
          <Button
            className={'mt-3 px-3 rounded-[12px]'}
            variant={'active'}
            icon={<AddIcon className="w-2.5" />}
          >
            Follow
          </Button>
        </div>
      </div>

      <div className="flex gap-2.5">
        {
          featuredImages.map((image, index) => {
            return <div className="relative" key={image + index}>
              <GradientText
                className="absolute top-0 left-3 z-20"
                gradient="linear-gradient(to bottom, #FFFFFF, #FFFFFF50)"
                style={{ lineHeight: 1 }}
                size={'xl'}
              >{index + 1}</GradientText>
              <Image
                src={image}
                alt={name}
                className="relative rounded-[15px] z-10"
                objectFit="contain"
                width={110}
                height={170}
              />
            </div>
          })
        }
      </div>
    </motion.div >
  )
}

export default CreatorSuggestionCard 
