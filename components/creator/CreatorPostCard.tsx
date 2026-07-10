import { ChatBubbleIcon, EyeIcon, HeartFilledIcon, LockFilledIcon, OptionsIcon, SaveBookmarkIcon, UsdCircleIcon } from "@/assets/icons";
import { Text } from "../ui/text"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";

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
  uploaded: string;
  title: string;
  tags: string[];
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
  stats
}: CreatorCardPostProps) {

  return (
    <div className="p-3 rounded-[15px] cursor-pointer hover:bg-(--hero-background-hover)">
      <div
        className="rounded-[15px] min-h-110 bg-center bg-cover"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="relative flex w-full min-h-110 pl-3.75 bg-[rgba(0,0,0,0.1)] group">
          {/* Un-Hovered State */}
          <div className="absolute flex top-3.75 left-3.75 gap-1.25 group-hover:hidden">
            {
              isNew ? <div
                className="py-1 px-2.25 bg-center bg-cover text-foreground text-xs rounded-[6px]"
                style={{ backgroundImage: `url('/images/gradient-background.png')` }}
              >
                <Text className="leading-4">New</Text>
              </div> : null
            }
            {
              isLocked ? <div className="p-1.5 bg-(--lock-yellow-card) text-black rounded-[6px]">
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
                duration ? <div className="flex h-fit bg-(--tag-background) py-0.5 px-2 gap-1 text-[12px] rounded-md">
                  <Text>4K</Text>
                  <Text>{duration}</Text>
                </div> : null
              }
              {
                tags.map(t => {
                  return <div className="h-fit bg-(--tag-background) py-0.5 px-2 text-[12px] rounded-md" key={t}>
                    <Text>#{t}</Text>
                  </div>
                })
              }
            </div>

          </div>
          {/* Hovered */}
          <div className="hidden justify-between absolute top-3.5 right-3.75 group-hover:flex">
            <div className="h-fit bg-(--tag-background) py-0.5 px-2 text-[12px] rounded-md">
              <Text>1/80</Text>
            </div>
          </div>

          <div className="hidden flex-col gap-1.5 justify-between items-center absolute bottom-5 right-3.75 group-hover:flex">
            <div className="flex flex-col items-center gap-0.5">
              <HeartFilledIcon className="h-7 w-7" />
              <Text className="text-[10px]">{stats.likes}</Text>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <ChatBubbleIcon className="h-7 w-7" />
              <Text className="text-[10px]">{stats.likes}</Text>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <UsdCircleIcon className="h-7 w-7" />
              <Text className="text-[10px]">{stats.likes}</Text>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <SaveBookmarkIcon className="h-7 w-7" />
              <Text className="text-[10px]">{stats.likes}</Text>
            </div>

            <OptionsIcon className="w-4" />
          </div>

        </div>

        {/* Hovered State */}
      </div>

      {/* Details */}
      <div className="pt-3 text-[16px]">
        <Text>{title}</Text>
        <div className="flex items-center gap-2 text-(--hero-director-text)">
          <div className="flex items-center gap-1">
            <Avatar className="h-3.5 w-auto aspect-square rounded-[5px] [&::after]:border-0">
              <AvatarImage className="w-full h-full object-cover rounded-sm" src={creator.image} />
              <AvatarFallback>SZ</AvatarFallback>
            </Avatar>
            <Text>{creator.name}</Text>
          </div>

          <div className="flex items-center gap-1">
            <EyeIcon />
            <Text weight={'normal'}>{stats.views} views • 2d</Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatorPostCard 
