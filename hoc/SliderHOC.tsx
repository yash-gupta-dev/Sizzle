"use client"

import { LeftDirectionIcon, RightDirectionIcon } from "@/assets/icons";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselPrevious, useCarousel } from "@/components/ui/carousel";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { PropsWithChildren, useEffect, useState } from "react";

export interface CategoriesCardProps {
    title?: string;
    showNavButtons?: boolean;
    supTitle?: string;
    leftImage?: string;
    className?: ClassValue;
    contentClassName?: ClassValue;
}

function SliderHOC({
    title,
    showNavButtons = true,
    supTitle,
    leftImage,
    children,
    className,
    contentClassName
}: PropsWithChildren<CategoriesCardProps>) {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();

    const handlePrevious = () => {
        carouselApi?.scrollPrev();
    }

    const handleNext = () => {
        carouselApi?.scrollNext()
    }

    return (
        <>
            {leftImage || title ? <div className="flex items-center justify-between mt-14.25 px-7.5 mb-7.5">
                <div className="flex items-center gap-3.75">
                    {/* @ts-ignore */}
                    {leftImage && <Avatar style={{ cornerShape: 'squircle' }} className="h-12.5 w-auto aspect-square rounded-4xl [&::after]:border-0">
                        {/* @ts-ignore */}
                        <AvatarImage style={{ cornerShape: 'squircle' }} className="w-full h-full object-cover rounded-4xl" src={leftImage} />
                    </Avatar>}
                    {title && <div className="flex flex-col gap-2 leading-5">
                        {supTitle && <Text size={'sm'} weight={'normal'} className="mb-2 text-card-hover leading-3.5">{supTitle}</Text>}
                        <div className="flex items-end gap-[8.75px]">
                            <Text className="leading-5" size={'md'}>{title}</Text>
                            <RightDirectionIcon className="4.5" />
                        </div>
                    </div>}
                </div>

                {showNavButtons ? <div className="flex gap-1.5">
                    <Button icon={<LeftDirectionIcon className="w-3 h-3" />} onClick={handlePrevious} className={'p-3 rounded-[12px]'} />
                    <Button icon={<RightDirectionIcon className="w-3 h-3" />} onClick={handleNext} className={'p-3 rounded-[12px]'} />
                </div> : null}
            </div>
                : null}

            <Carousel className={cn("w-full", className)} setApi={setCarouselApi} opts={{
                align: "start",   // centers the active pair -> equal peek on both sides
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
