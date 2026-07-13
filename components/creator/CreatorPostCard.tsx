import { ChatBubbleIcon, EyeIcon, HeartFilledIcon, LockFilledIcon, OptionsIcon, SaveBookmarkIcon, UsdCircleIcon } from "@/assets/icons";
import { Text } from "../ui/text"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { GradientText } from "../ui/gradientText";

export interface CreatorCardPostProps {
  isNew: boolean;
  isLocked: boolean;
  duration: string;
  cover: string[];
  stats: {
    quality: string;
    views: number;
    likes: number;
    comments: number;
  };
  rank?: number;
  uploaded: string;
  title: string;
  tags: string[];
  minHeight?: number;
  isFromProfile?: boolean;
  creator: {
    image: string;
    name: string;
    logo: string;
  };
}

function CreatorPostCard({
  cover,
  title,
  creator,
  duration,
  tags,
  isLocked,
  isNew,
  rank,
  minHeight = 120,
  isFromProfile = false,
  stats
}: CreatorCardPostProps) {

  return (
    <div className="p-3 rounded-[15px] cursor-pointer hover:bg-card-hover-bg">
      <div
        className={`rounded-[15px] min-h-${minHeight} bg-center bg-cover`}
        style={{ backgroundImage: `url(${cover})`, aspectRatio: '1/1.5434083601' }}
      >
        <div className={`relative flex w-full h-full min-h-${minHeight} pl-3.75 bg-[rgba(0,0,0,0.1)] group`}>
          {/* Un-Hovered State */}
          <div className="absolute flex top-3.75 left-3.75 gap-1.25 group-hover:hidden">
            {
              isNew ? <div
                className="py-1 px-2.25 bg-center bg-cover text-foreground text-xs align-middle rounded-[6px]"
                style={{ backgroundImage: `url('/images/gradient-background.png')` }}
              >
                <Text className="leading-4" size={'xs'}>New</Text>
              </div> : null
            }
            {
              isLocked ? <div className="p-1.5 bg-premium text-black rounded-[6px]">
                <LockFilledIcon />
              </div> : null
            }
          </div>

          {/* Tags\Duration */}
          <div className="flex flex-col gap-5 self-end group-hover:hidden">
            <Image
              src={creator.logo}
              alt={creator.name}
              objectFit="contain"
              width={80}
              height={20}
            />
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

          </div>
          {/* Hovered */}
          <div className="hidden justify-between absolute top-3.5 right-3.75 group-hover:flex">
            <div className="h-fit bg-translucent-bg py-0.5 px-2 text-[12px] rounded-[6px]">
              <Text weight={'normal'} size={'xxs'}>1/80</Text>
            </div>
          </div>

          <div className="hidden flex-col gap-2.5 justify-between items-center absolute bottom-5 right-3.75 group-hover:flex">
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
          </div>

        </div>

        {/* Hovered State */}
      </div>

      {/* Details */}
      <div className="flex items-center gap-3.75">
        {rank && <GradientText>{rank}</GradientText>}
        <div className="pt-3 text-[16px]">
          <Text weight={'normal'}>{title}</Text>
          <div className="flex items-center gap-2 text-text-secondary">
            <div className="flex items-center gap-1">
              <Avatar className="h-3.5 w-auto aspect-square rounded-[5px] [&::after]:border-0">
                <AvatarImage className="w-full h-full object-cover rounded-sm" src={creator.image} />
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
    </div>
  )
}

export default CreatorPostCard 
