import { Button } from "../ui/button";
import { Text } from "../ui/text"
import Image from "next/image";

export interface CategoryCardProps {
  name: string;
}

function CategoryChip({
  name,
}: CategoryCardProps) {

  const isAll = name === 'All';

  return (
    <Button
      className={!isAll ? 'bg-transparent' : ""}
      variant={isAll ? 'active' : 'inactiveWithActiveText'}
      weight={'normal'}
      bordered={'slim'}
    >
      {!isAll ? "#" : null}{name}
    </Button>
  )
}

export default CategoryChip 
