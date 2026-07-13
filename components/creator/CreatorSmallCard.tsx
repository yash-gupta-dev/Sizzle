import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Text } from "../ui/text";

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
    <div className="flex p-3 gap-3.75">
      {/* @ts-ignore */}
      <Avatar style={{ cornerShape: 'squircle' }} className="h-15 w-auto aspect-square rounded-4xl [&::after]:border-0">
        {/* @ts-ignore */}
        <AvatarImage style={{ cornerShape: 'squircle' }} className="w-full h-full object-cover rounded-4xl" src={image} />
      </Avatar>

      <div className="flex flex-col justify-center">
        <Text weight={'normal'}>{name}</Text>
        <Text className="text-card-hover" weight={'normal'}>{tagline}</Text>
      </div>
    </div>
  )
}

export default CreatorSmallCard 
