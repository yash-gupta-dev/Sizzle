import { AddIcon, ChatBubbleIcon, EyeIcon, FlashFilledIcon, HeartFilledIcon, LikeFilledIcon, LockFilledIcon, OptionsIcon, SaveBookmarkIcon, UsdCircleIcon } from "@/assets/icons";
import { Text } from "../ui/text"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { Button } from "../ui/button";

export interface CreatorCardProps {
  image: string;
  name: string;
  isSuggestion?: boolean;
  categories?: string[];
  likePercentage: number;
  likes: number;
}

function CreatorCard({
  image,
  name,
  isSuggestion = false,
  categories,
  likes,
  likePercentage,
}: CreatorCardProps) {

  return (
    <div>
      <div
        className="w-50 h-50 mb-3 overflow-hidden bg-center bg-cover rounded-full"
        // @ts-ignore: Corner shape casuses issues
        style={{ cornerShape: 'squircle', backgroundImage: `url(${image})` }}
      />

      <Text className="leading-5">{name}</Text>

      {isSuggestion ? <Text className="text-card-hover" weight={'normal'} size={'sm'}>{categories?.join(" · ")}</Text>
        :
        <>
          <div className="flex items-center my-1.5 gap-2.5">
            <div className="flex items-center gap-1.25">
              <LikeFilledIcon className="h-3" />
              <Text weight={'normal'} size={"sm"}>{likePercentage}%</Text>
              <Text weight={'light'} size={"xs"} className="text-text-secondary">({likes})</Text>
            </div>
            <div className="flex items-center gap-1">
              <FlashFilledIcon className="h-3 text-premium" />
              <Text weight={'normal'} size={"sm"}>24hr</Text>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Text weight={'normal'} size={"sm"} className="text-card-hover">Voice Messages</Text>
            <Text weight={'normal'} size={"sm"}>$24.99</Text>
          </div>
          <div className="flex items-center gap-1">
            <Text weight={'normal'} size={"sm"} className="text-card-hover">Voice Note</Text>
            <Text weight={'normal'} size={"sm"}>$19.99</Text>
          </div>
        </>
      }

      <Button
        className={'mt-3 px-3 rounded-[12px]'}
        variant={isSuggestion ? 'active' : 'default'}
        icon={isSuggestion ? <AddIcon className="w-2.5" /> : null}
      >
        {isSuggestion ? "Follow" : "+10 more"}
      </Button>
    </div>
  )
}

export default CreatorCard 
