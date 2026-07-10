import { RightDirectionIcon } from "@/assets/icons";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { PropsWithChildren } from "react";

export interface CategoriesCardProps {
    title: string;
    supTitle?: string;
    className?: ClassValue;
    contentClassName?: ClassValue;
}

function SliderHOC({
    title,
    supTitle,
    children,
    className,
    contentClassName
}: PropsWithChildren<CategoriesCardProps>) {

    return (
        <>
            <div className="px-7.5 mt-14.25 mb-7.5">
                {supTitle && <Text size={'sm'} weight={'normal'} className="mb-2 text-(--hero-director-text)">{supTitle}</Text>}
                <div className="flex items-center gap-[8.75px]">
                    <Text className="leading-none" size={'md'}>{title}</Text>
                    <RightDirectionIcon className="h-2.5" />
                </div>
            </div>

            <Carousel className={cn("w-full", className)} opts={{
                align: "center",   // centers the active pair -> equal peek on both sides
                slidesToScroll: 1,  // step one slide at a time
                skipSnaps: true
            }}>
                <CarouselContent className={cn("w-full ml-0 flex gap-3.75", contentClassName)}>
                    {children}
                </CarouselContent>
            </Carousel>
        </>
    )
}

export default SliderHOC 
