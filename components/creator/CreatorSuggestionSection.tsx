import { AddIcon, UsdCircleIcon, UserIcon } from "@/assets/icons";
import { Text } from "../ui/text"
import Image from "next/image";
import { Button } from "../ui/button";
import SliderHOC from "@/hoc/SliderHOC";
import { TEMP_FEATURED_CREATORS } from "@/data/demo.data";
import { CarouselItem } from "../ui/carousel";
import CreatorPostCard from "./CreatorPostCard";

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
                <div className="flex items-center gap-44.5 w-full">
                    <SliderHOC contentClassName="gap-0">
                        <CarouselItem className="basis-1/2 w-61.5 p-0">
                            <div className="flex flex-col justify-center h-full pl-20 ">
                                <Image
                                    src={logo}
                                    alt={name}
                                    objectFit="contain"
                                    width={80}
                                    height={80}
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
                        </CarouselItem>

                        {
                            TEMP_FEATURED_CREATORS.map((creator, i) => {
                                return <CarouselItem className="basis-1/5 w-61.5 p-0" key={creator.title + i}>
                                    <CreatorPostCard {...creator} minHeight={95} isFromProfile={true} />
                                </CarouselItem>
                            })
                        }
                    </SliderHOC>
                </div>


            </div>
        </div>
    )
}

export default CreatorSuggestionSection 
