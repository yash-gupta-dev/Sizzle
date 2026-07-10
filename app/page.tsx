import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import HeroCard from "@/components/hero/heroCard"
import SliderHOC from "@/hoc/SliderHOC"
import CreatorStarCard from "@/components/creatorStar/CreatorStarCard"

export default function Page() {
  const TEMP_HERO_DATA = [
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
  ];

  const TEMP_CREATOR_DATA = [
    {
      id:1,
      image: '/images/creator-star1.jpg',
      name: "Sable Monroe",
      photos: 12,
      videos: 1
    },
    {
      id:2,
      image: '/images/creator-star2.jpg',
      name: "Roxie Sinclair",
      photos: 44,
      videos: 3
    },
    {
      id:3,
      image: '/images/creator-star1.jpg',
      name: "Sable Monroe",
      photos: 12,
      videos: 1
    },
    {
      id:4,
      image: '/images/creator-star2.jpg',
      name: "Roxie Sinclair",
      photos: 44,
      videos: 3
    },
    {
      id:5,
      image: '/images/creator-star1.jpg',
      name: "Sable Monroe",
      photos: 12,
      videos: 1
    },
    {
      id:6,
      image: '/images/creator-star2.jpg',
      name: "Roxie Sinclair",
      photos: 44,
      videos: 3
    },
    {
      id:7,
      image: '/images/creator-star1.jpg',
      name: "Sable Monroe",
      photos: 12,
      videos: 1
    },
    {
      id:8,
      image: '/images/creator-star2.jpg',
      name: "Roxie Sinclair",
      photos: 44,
      videos: 3
    },
    {
      id:9,
      image: '/images/creator-star1.jpg',
      name: "Sable Monroe",
      photos: 12,
      videos: 1
    },
    {
      id:10,
      image: '/images/creator-star2.jpg',
      name: "Roxie Sinclair",
      photos: 44,
      videos: 3
    }
  ]

  const TEMP_CATEGORIES = [
    {
      title: "Food",
      images: [
        '/images/creator-star2.jpg',
        '/images/creator-star1.jpg'
      ]
    },
    {
      title: "Cooking",
      images: [
        '/images/creator-star2.jpg',
        '/images/creator-star1.jpg'
      ]
    },
    {
      title: "Beats",
      images: [
        '/images/creator-star2.jpg',
        '/images/creator-star1.jpg'
      ]
    },
    {
      title: "Gaming",
      images: [
        '/images/creator-star2.jpg',
        '/images/creator-star1.jpg'
      ]
    },
    {
      title: "Lifestyle",
      images: [
        '/images/creator-star2.jpg',
        '/images/creator-star1.jpg'
      ]
    },
    {
      title: "Beauty",
      images: [
        '/images/creator-star2.jpg',
        '/images/creator-star1.jpg'
      ]
    },
  ]

  return (
    <div className="flex flex-col pb-30">
      {/* MARK: Hero */}
      <Carousel className="w-full mx-auto" opts={{
        align: "center",   // centers the active pair -> equal peek on both sides
        loop: true,         // remove if you don't want infinite looping
        slidesToScroll: 1,  // step one slide at a time
      }}>
        <CarouselContent className="w-full ml-0 flex justify-between">
          {
            TEMP_HERO_DATA.map((item) => {
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

      {/* MARK: Creators */}
      <SliderHOC title="Fresh from your creators" className="pl-7.5">
        {
          TEMP_CREATOR_DATA.map(creator => {
            return <CarouselItem className="md:basis-1/6 max-w-fit p-0" key={creator.id}>
              <CreatorStarCard name={creator.name} image={creator.image} photos={creator.photos} videos={creator.videos} />
            </CarouselItem>
          })
        }
      </SliderHOC>

      {/* MARK: Categories */}
      <SliderHOC title="Top categories right now" className="pl-7.5">
        {
          TEMP_CATEGORIES.map(category => {
            return <CarouselItem className="md:basis-1/6 max-w-fit p-0" key={category.title}>
              
            </CarouselItem>
          })
        }
      </SliderHOC>
    </div>
  )
}
