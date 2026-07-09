import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import HeroCard from "@/components/ui/heroCard"

export default function Page() {
  const TEMP_DATA = [
    {
      image: "/images/banner1.webp",
      badge: "ORIGINAL",
      logo: "/images/Chucky_logo.png",
      director: "Adela Morales",
      duration: "6:03",
      tags: ["Beauty"],
      views: 812,
      description: 'Seems like you have found a LUCKY POST on your feed 💖😊 today is gonna be a good',
      stats: {}
    },
    {
      image: "/images/banner2.webp",
      badge: "TOP EARNER",
      logo: "/images/American-Pie.png",
      director: "Saint Lavigne",
      duration: "6:03",
      tags: ["Beauty"],
      views: 812,
      description: "Life got so serious lately, I have almost forgot I used to paint 😅 may this post will be a",
      stats: {}
    },
  ]
  return (
    <div className="flex flex-col">
      <Carousel className="w-full mx-auto" opts={{
        align: "center",   // centers the active pair -> equal peek on both sides
        loop: true,         // remove if you don't want infinite looping
        slidesToScroll: 1,  // step one slide at a time
      }}>
        <CarouselContent className="w-full ml-0 flex justify-between">
          {
            TEMP_DATA.map((item) => {
              return <CarouselItem key={item.director} className="flex-1 pl-0">
                <HeroCard
                  image={item.image}
                  director={item.director}
                  badge={item.badge}
                  logo={item.logo}
                  tags={item.tags}
                  duration={"6:03"}
                  views={item.views}
                  description={item.description}
                />
              </CarouselItem>
            })
          }
        </CarouselContent>
      </Carousel>
    </div>
  )
}
