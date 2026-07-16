"use client"

import { GalleryIcon, PlaylistIcon } from "@/assets/icons";
import { Text } from "../ui/text"
import { motion } from "motion/react";
import { useId } from "react";

export interface CreatorStarCard {
  name: string;
  image: string
  photos: number,
  videos: number
}

function CreatorStarCard({
  name,
  image,
  photos,
  videos
}: CreatorStarCard) {
  const patternId = useId().replace(/:/g, ""); // sanitize, ids can't contain ':' safely in all contexts

  const BADGE_PATH =
    "M186.284 83.5327L173.363 68.5269C170.893 65.6776 168.898 60.3589 168.898 56.5599V40.4139C168.898 30.3464 160.632 22.0834 150.562 22.0834H134.411C130.706 22.0834 125.29 20.0889 122.44 17.6195L107.429 4.7027C100.874 -0.900901 90.1382 -0.900901 83.4878 4.7027L68.5717 17.7145C65.7215 20.0889 60.3062 22.0834 56.6009 22.0834H40.1649C30.0943 22.0834 21.8288 30.3464 21.8288 40.4139V56.6549C21.8288 60.3589 19.8337 65.6776 17.4585 68.5269L4.63275 83.6277C-0.877584 90.1811 -0.877584 100.818 4.63275 107.372L17.4585 122.473C19.8337 125.322 21.8288 130.641 21.8288 134.345V150.586C21.8288 160.654 30.0943 168.917 40.1649 168.917H56.6009C60.3062 168.917 65.7215 170.911 68.5717 173.38L83.5828 186.297C90.1382 191.901 100.874 191.901 107.524 186.297L122.535 173.38C125.385 170.911 130.706 168.917 134.506 168.917H150.657C160.727 168.917 168.993 160.654 168.993 150.586V134.44C168.993 130.736 170.988 125.322 173.458 122.473L186.379 107.467C191.889 100.913 191.889 90.0861 186.284 83.5327Z";

  return (
    <div className="cursor-pointer relative">

      <motion.svg
        whileHover={{ scale: 1.05 }}
        className="mb-3 w-47.5 h-47.5"
        viewBox="0 0 191 192"
      >
        <defs>
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="191" height="192">
            <image
              href={image}
              width="191"
              height="192"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>
        <path
          d={BADGE_PATH}
          fill={`url(#${patternId})`}
          stroke="#ffffff"      // border color
          strokeWidth={1}      // 0.5px each side
          strokeOpacity={0.15}
          vectorEffect="non-scaling-stroke" // keeps border crisp during the hover scale
        />
      </motion.svg>

      <Text>{name}</Text>

      <div className="flex gap-3">
        <div className="flex gap-1.5 items-center text-card-hover">
          <GalleryIcon className="w-3" />
          <Text size={'sm'} weight={'normal'}>{photos}</Text>
        </div>
        <div className="flex gap-1.5 items-center text-card-hover">
          <PlaylistIcon className="w-3" />
          <Text size={'sm'} weight={'normal'}>{videos}</Text>
        </div>
      </div>
    </div >
  )
}

export default CreatorStarCard 
