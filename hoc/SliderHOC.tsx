import { RightDirectionIcon } from "@/assets/icons";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { PropsWithChildren } from "react";

export interface CategoriesCardProps {
    title?: string;
    supTitle?: string;
    leftImage?: string;
    className?: ClassValue;
    contentClassName?: ClassValue;
}

function SliderHOC({
    title,
    supTitle,
    leftImage,
    children,
    className,
    contentClassName
}: PropsWithChildren<CategoriesCardProps>) {

    return (
        <>
            {leftImage || title ? <div className="flex items-center gap-3.75 mt-14.25 px-7.5 mb-7.5">
                {/* @ts-ignore */}
                {leftImage && <Avatar style={{ cornerShape: 'squircle' }} className="h-12.5 w-auto aspect-square rounded-4xl [&::after]:border-0">
                    {/* @ts-ignore */}
                    <AvatarImage style={{ cornerShape: 'squircle' }} className="w-full h-full object-cover rounded-4xl" src={leftImage} />
                </Avatar>}
                {title && <div className="flex flex-col gap-2 leading-5">
                    {supTitle && <Text size={'sm'} weight={'normal'} className="mb-2 text-card-hover leading-3.5">{supTitle}</Text>}
                    <div className="flex items-center gap-[8.75px]">
                        <Text className="leading-none" size={'md'}>{title}</Text>
                        <RightDirectionIcon className="h-2.5" />
                    </div>
                </div>}
            </div> : null}

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
