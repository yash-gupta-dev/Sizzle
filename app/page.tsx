import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import HeroCard from "@/components/hero/heroCard"
import SliderHOC from "@/hoc/SliderHOC"
import CreatorStarCard from "@/components/creator/CreatorStarCard"
import CategoryCard from "@/components/cartegories/CategoryCard";
import { TEMP_CATEGORIES, TEMP_CREATOR_DATA, TEMP_CREATOR_ORDER_CARD, TEMP_FEATURED_CREATORS, TEMP_HERO_DATA } from "@/data/demo.data";
import CreatorPostCard from "@/components/creator/CreatorPostCard";
import CreatorCard from "@/components/creator/CreatorCard";

export default function Page() {
  return (
    <div className="flex flex-col pb-30">
      {/* MARK: Hero */}
      <Carousel className="w-full mx-auto" opts={{
        align: "center",   // centers the active pair -> equal peek on both sides
        loop: true,         // remove if you don't want infinite looping
        slidesToScroll: 1,  // step one slide at a time
      }}>
        <CarouselContent className="w-full ml-0 flex justify-between px-7.5">
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
              <CategoryCard name={category.title} images={category.images} />
            </CarouselItem>
          })
        }
      </SliderHOC>

      {/* MARK: Featured Creators */}
      <SliderHOC title="Creators for you" supTitle="Based on your memberships" contentClassName="gap-0">
        {
          TEMP_FEATURED_CREATORS.map((creator, i) => {
            return <CarouselItem className="basis-1/4 w-78 p-0" key={creator.title + i}>
              <CreatorPostCard {...creator} />
            </CarouselItem>
          })
        }
      </SliderHOC>

      {/* MARK: Order Personal */}
      <SliderHOC title="Order something personal" contentClassName="gap-7.5 pl-7.5">
        {
          TEMP_CREATOR_ORDER_CARD.map((creator, i) => {
            return <CarouselItem className="md:basis-1/6 max-w-fit pl-0" key={creator.name + i}>
              <CreatorCard {...creator} />
            </CarouselItem>
          })
        }
      </SliderHOC>

      {/* MARK: Featured Creators */}
      <SliderHOC title="Top 10 Most Tipped This Week" contentClassName="gap-0">
        {
          TEMP_FEATURED_CREATORS.map((creator, i) => {
            return <CarouselItem className="basis-1/4 w-78 p-0" key={creator.title + i}>
              <CreatorPostCard rank={i + 1} {...creator} />
            </CarouselItem>
          })
        }
      </SliderHOC>

      {/* MARK: Suggested Profile */}

    </div>
  )
}
