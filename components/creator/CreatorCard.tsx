import { ChatBubbleIcon, EyeIcon, HeartFilledIcon, LockFilledIcon, OptionsIcon, SaveBookmarkIcon, UsdCircleIcon } from "@/assets/icons";
import { Text } from "../ui/text"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";

export interface CreatorCardProps {
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
}: CreatorCardProps) {

  return (
    <div className="p-3 rounded-[15px] cursor-pointer hover:bg-(--hero-background-hover)">

    </div>
  )
}

export default CreatorPostCard 
