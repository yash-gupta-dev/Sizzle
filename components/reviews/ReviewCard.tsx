"use client"
import { StarHollowIcon } from "@/assets/icons";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Text } from "../ui/text"
import { motion } from "motion/react";

export interface CategoryCardProps {
  name: string;
  username: string;
  postedAt: string;
  profilePic: string,
  creatorImage: string,
  description: string,
  tags: string[],
  rating: number,
}

function ReviewCard({
  name,
  username,
  postedAt,
  profilePic,
  creatorImage,
  description,
  tags,
  rating
}: CategoryCardProps) {

  return (
    <motion.div 
    whileHover={{
      backgroundColor: 'var(--card-muted-hover)'
    }}
    className="p-5 overflow-hidden rounded-[15px] bg-card-hover-bg cursor-pointer">
      <div className="flex gap-3.75 mb-5">
        {/* @ts-ignore */}
        <Avatar style={{ cornerShape: 'squircle' }} className="h-12.5 w-auto aspect-square rounded-4xl [&::after]:border-0">
          {/* @ts-ignore */}
          <AvatarImage style={{ cornerShape: 'squircle' }} className="w-full h-full object-cover rounded-4xl" src={profilePic} />
        </Avatar>

        <div className="w-full">
          <div className="flex justify-between">
            <Text>{name}</Text>
            <Text size={'sm'} weight={'normal'} className="text-card-hover">{postedAt}</Text>
          </div>
          <Text size={'xs'} className="text-card-hover">@{username}</Text>
        </div>
      </div>

      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map(r => {
          const isRated = rating >= r;
          return <StarHollowIcon key={r} className={`w-5 h-5 ${isRated ? 'text-yellow-secondary' : 'text-foreground'}`} />
        })}
      </div>

      <Text size={'sm'} weight={'normal'}>"{description}"</Text>

      <div className="flex gap-1.5 mt-3.75">
        {/* @ts-ignore */}
        <Avatar style={{ cornerShape: 'squircle' }} className="h-7 w-auto aspect-square rounded-4xl [&::after]:border-0">
          {/* @ts-ignore */}
          <AvatarImage style={{ cornerShape: 'squircle' }} className="w-full h-full object-cover rounded-4xl" src={creatorImage} />
        </Avatar>

        {
          tags.map(tag => {
            return <div className="py-1 px-3 bg-card-muted-hover rounded-[12px]" key={tag}>
              <Text size={'xs'} className="leading-5.5 align-bottom">{tag}</Text>
            </div>
          })
        }

      </div>
    </motion.div >
  )
}

export default ReviewCard 
