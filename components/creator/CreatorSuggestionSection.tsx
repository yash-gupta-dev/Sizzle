"use client"

import { AddIcon, LeftDirectionIcon, RightDirectionIcon, UsdCircleIcon, UserIcon } from "@/assets/icons";
import { Text } from "../ui/text"
import Image from "next/image";
import { Button } from "../ui/button";
import SliderHOC from "@/hoc/SliderHOC";
import { TEMP_FEATURED_CREATORS } from "@/data/demo.data";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel";
import CreatorPostCard from "./CreatorPostCard";
import { cn } from "@/lib/utils";
import { useState } from "react";

export interface CreatorSuggestionSection {
    name: string;
    cover: string;
    logo: string;
    categories: string[];
}

function CreatorSuggestionSection({
    name,
    cover,
    logo,
    categories
}: CreatorSuggestionSection) {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();

    const handlePrevious = () => {
        carouselApi?.scrollPrev();
    }

    const handleNext = () => {
        carouselApi?.scrollNext()
    }

    return (
        <div
            className="h-screen w-screen overflow-hidden relative my-19 bg-center bg-cover"
            style={{ backgroundImage: `url(${cover})` }}>
            {/* Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 z-0" style={{ backgroundColor: '#00000090' }}>
                <div className="h-full w-full"
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, #000000 0%, #00000000 50%, #00000000 50%, #000000 100%)'
                    }} />
            </div>

            <div className="absolute top-0 left-0 right-0 bottom-0 z-20 flex items-center">
                <div className="flex flex-col justify-center h-full pl-20 min-w-[50%]">
                    <Image
                        src={logo}
                        alt={name}
                        objectFit="contain"
                        width={120}
                        height={22}
                    />
                    <div className="mb-5">
                        {
                            name.split(" ").map((word, index) => (
                                <Text
                                    key={index}
                                    size={"5xl"}
                                    className="whitespace-pre font-(--font-plak-condensed) tracking-normal leading-25 capitalize"
                                    weight={"extrabold"}
                                    style={{ fontFamily: 'plakCondensed', fontWeight: '900' }}
                                >
                                    {word.toUpperCase()}
                                </Text>
                            ))
                        }
                    </div>

                    <div className="flex mb-7.5">
                        <Text weight={'normal'}>{categories.join(" · ")}</Text>
                    </div>

                    <div className="flex gap-2.5">
                        <Button
                            icon={<UserIcon className="w-4 h-4" />}
                            className={'px-6.5 py-3.75 h-12.5'}
                            variant={"active"}
                            fontSize={'base'}
                            size={'lg'}>
                            View Profile
                        </Button>

                        <Button
                            icon={<UsdCircleIcon className="w-5.5 h-5.5 text-foreground" />}
                            className={'px-6.5 py-3.75 h-12.5 bg-foreground/20'}
                            size={'lg'}>
                        </Button>

                        <Button
                            icon={<AddIcon className="w-3.5 h-3.5 text-foreground" />}
                            className={'px-6.5 py-3.75 h-12.5 bg-foreground/20'}
                            size={'lg'}>
                        </Button>

                    </div>
                </div>

                <div>
                    <div className="flex justify-end max-w-[50vw] gap-1.5 mb-4.5 pr-7.5">
                    <Button icon={<LeftDirectionIcon className="w-4.5 h-4.5 text-foreground" />} onClick={handlePrevious} className={'h-8.5 w-8.5 rounded-[12px] bg-slider-btn-bg hover:bg-slider-btn-hover'} />
                    <Button icon={<RightDirectionIcon className="w-4.5 h-4.5 text-foreground" />} onClick={handleNext} className={'h-8.5 w-8.5 rounded-[12px] bg-slider-btn-bg hover:bg-slider-btn-hover'} />
                    </div>
                    <Carousel className={"w-[50vw]"} setApi={setCarouselApi} opts={{
                        align: "start",   // centers the active pair -> equal peek on both sides
                        slidesToScroll: 1,  // step one slide at a time
                        skipSnaps: true
                    }}>
                        <CarouselContent className={"w-[50vw] ml-0 flex gap-0"}>
                            {
                                TEMP_FEATURED_CREATORS.map((creator, i) => {
                                    return <CarouselItem className="basis-3/8 min-w-61.5 p-0" key={creator.title + i}>
                                        <CreatorPostCard {...creator} minHeight={95} isFromProfile={true} />
                                    </CarouselItem>
                                })
                            }
                        </CarouselContent>
                    </Carousel>
                </div>


            </div>
        </div>
    )
}

export default CreatorSuggestionSection 
