import { Text } from "../ui/text"
import Image from "next/image";

export interface CategoryCardProps {
  name: string;
  images: Array<string>,
}

function CategoryCard({
  name,
  images,
}: CategoryCardProps) {

  return (
    <div className="flex p-0 overflow-hidden items-center gap-7.5 w-51 rounded-[15px] bg-card-hover-bg cursor-pointer">
      <Text
        className="w-[50%] max-w-[50%] pl-7.5 py-9.5 whitespace-pre font-(--font-plak-condensed) tracking-normal leading-1 capitalize text-[20px]"
        weight={"extrabold"}
        style={{ fontFamily: 'plakCondensed', fontWeight: '700' }}
      >
        #{name}
      </Text>

      <div className="flex gap-2.5 w-[50%]">
        {
          images.map(image => {
            return <Image
              src={image}
              key={image + name}
              alt={name}
              className="rounded-[15px] max-h-15 min-w-15 object-cover object-top"
              width={60}
              height={60} 
              />
          })
        }
      </div>
    </div >
  )
}

export default CategoryCard 
