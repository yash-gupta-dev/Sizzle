"use client"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Text } from "../ui/text";
import { motion } from "motion/react";

export interface CreatorCardProps {
  name: string;
  tagline: string;
  image: string;
}

function CreatorSmallCard({
  image,
  name,
  tagline
}: CreatorCardProps) {

  return (
    <motion.div
    whileHover={{
      backgroundColor: 'var(--card-hover-bg)'
    }}
    className="flex p-3 gap-3.75 rounded-[15px] cursor-pointer">
      {/* @ts-ignore */}
      <Avatar style={{ cornerShape: 'squircle' }} className="h-15 w-auto aspect-square rounded-4xl [&::after]:border-0">
        {/* @ts-ignore */}
        <AvatarImage alt={name} style={{ cornerShape: 'squircle' }} className="w-full h-full object-cover rounded-4xl" src={image} />
      </Avatar>

      <div className="flex flex-col justify-center">
        <Text weight={'normal'}>{name}</Text>
        <Text className="text-card-hover" weight={'normal'}>{tagline}</Text>
      </div>
    </motion.div>
  )
}

export default CreatorSmallCard 
