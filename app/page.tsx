import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import HeroCard from "@/components/hero/heroCard"
import SliderHOC from "@/hoc/SliderHOC"
import CreatorStarCard from "@/components/creator/CreatorStarCard"
import CategoryCard from "@/components/cartegories/CategoryCard";
import { TEMP_CATEGORIES, TEMP_CREATOR2_SUGGESTION_CARD, TEMP_CREATOR_DATA, TEMP_CREATOR_ORDER_CARD, TEMP_CREATOR_SUGGESTION_CARD, TEMP_FEATURED_CREATORS, TEMP_HERO_DATA, TEMP_REVIEWS, TEMP_USER_IMAGE } from "@/data/demo.data";
import CreatorPostCard from "@/components/creator/CreatorPostCard";
import CreatorCard from "@/components/creator/CreatorCard";
import CreatorSuggestionSection from "@/components/creator/CreatorSuggestionSection";
import CategoryChip from "@/components/cartegories/CategoryChip";
import CreatorSmallCard from "@/components/creator/CreatorSmallCard";
import HottestCreatorCard from "@/components/creator/HottestCreatorCard";
import EveryonesBookingCreatorCard from "@/components/creator/EveryonesBookingCreatorCard";
import ReviewCard from "@/components/reviews/ReviewCard";
import CreatorSuggestionCard from "@/components/creator/CreatorSuggestionCard";

export default function Page() {
  return (
    <div className="flex flex-col pb-30">
      {/* MARK: Hero */}
      <Carousel className="w-full mx-auto" opts={{
        align: "center",   // centers the active pair -> equal peek on both sides
        slidesToScroll: 1,  // step one slide at a time
      }}>
        <CarouselContent className="w-full ml-0 flex justify-between pl-3.5 pr-7.5">
          {
            TEMP_HERO_DATA.map((item, index) => {
              return <CarouselItem key={item.director} className="flex-1 min-w-[49vw] pl-0">
                <HeroCard
                  index={index}
                  image={item.image}
                  director={item.director}
                  badge={item.badge}
                  tags={item.tags}
                  duration={"6:03"}
                  views={item.views}
                  description={item.description}
                  stats={item?.stats}
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
            return <CarouselItem className="shrink-0 max-w-fit p-0" key={creator.id}>
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
              <CreatorPostCard index={i} {...creator} />
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

      {/* MARK: Most Tipped */}
      <SliderHOC title="Top 10 Most Tipped This Week" contentClassName="gap-0">
        {
          TEMP_FEATURED_CREATORS.map((creator, i) => {
            return <CarouselItem className="basis-1/4 w-78 p-0" key={creator.title + i}>
              <CreatorPostCard index={i} rank={i + 1} {...creator} />
            </CarouselItem>
          })
        }
      </SliderHOC>

      <CreatorSuggestionSection {...TEMP_CREATOR_SUGGESTION_CARD} />

      {/* MARK: Most Tipped */}
      <SliderHOC title="Top 10 Earning Videos This Week" contentClassName="gap-0">
        {
          TEMP_FEATURED_CREATORS.map((creator, i) => {
            return <CarouselItem className="basis-1/4 w-78 p-0" key={creator.title + i}>
              <CreatorPostCard index={i} rank={i + 1} {...creator} />
            </CarouselItem>
          })
        }
      </SliderHOC>

      {/* MARK: More like  */}
      <SliderHOC title="More like Mila Ferreira" supTitle="You clearly have a taste" contentClassName="gap-7.5 pl-7.5" leftImage={TEMP_USER_IMAGE}>
        {
          TEMP_CREATOR_ORDER_CARD.map((creator, i) => {
            return <CarouselItem className="md:basis-1/6 max-w-fit pl-0" key={creator.name + i}>
              <CreatorCard {...creator} isSuggestion />
            </CarouselItem>
          })
        }
      </SliderHOC>

      {/* MARK: Trending Categories */}
      <SliderHOC title="Trending in #Gaming" contentClassName="gap-0">
        {
          TEMP_FEATURED_CREATORS.map((creator, i) => {
            return <CarouselItem className="basis-1/4 w-78 p-0" key={creator.title + i}>
              <CreatorPostCard index={i} {...creator} />
            </CarouselItem>
          })
        }
      </SliderHOC>

      <SliderHOC title="More Creators Worth Knowing" supTitle="Explore by category" className="pl-7.5" contentClassName="gap-1.5" showNavButtons={false}>
        {
          [{ title: "All" }, ...TEMP_CATEGORIES].map(category => {
            return <CarouselItem className="md:basis-1/6 max-w-fit p-0" key={category.title}>
              <CategoryChip name={category.title} />
            </CarouselItem>
          })
        }
      </SliderHOC>

      <div className="grid grid-cols-3 px-7.5 mt-4.5">
        {
          TEMP_CREATOR_DATA.map(c => <CreatorSmallCard {...c} key={c.id} />)
        }
      </div>

      <SliderHOC title="Top 10 Creators This Week" supTitle="The hottest right now" className="pl-7.5" contentClassName="gap-30 pl-23.5">
        {
          TEMP_CREATOR_DATA.map((c, i) => <HottestCreatorCard {...c} key={c.id} rank={i + 1} />)

        }
      </SliderHOC>

      <SliderHOC title="Standout content this week" supTitle="Sizzle+ Certified" contentClassName="gap-0">
        {
          TEMP_FEATURED_CREATORS.map((creator, i) => {
            return <CarouselItem className="basis-1/4 w-78 p-0" key={creator.title + i}>
              <CreatorPostCard index={i} {...creator} isCertified />
            </CarouselItem>
          })
        }
      </SliderHOC>

      <SliderHOC title="Featured creators this week" contentClassName="gap-7.5 pl-7.5" >
        {
          TEMP_CREATOR_ORDER_CARD.map((creator, i) => {
            return <CarouselItem className="md:basis-1/6 max-w-fit pl-0" key={creator.name + i}>
              <CreatorCard {...creator} isSuggestion bordered />
            </CarouselItem>
          })
        }
      </SliderHOC>

      <CreatorSuggestionSection {...TEMP_CREATOR2_SUGGESTION_CARD} />

      <SliderHOC title="The 10 everyone's booking" supTitle="Top rated this week" className="pl-7.5" contentClassName="gap-30 pl-23.5">
        {
          TEMP_CREATOR_DATA.map((c, i) => <EveryonesBookingCreatorCard {...c} key={c.id} rank={i + 1} />)

        }
      </SliderHOC>

      <SliderHOC title="Fresh from creators you tipped" contentClassName="gap-0 pl-7.5">
        {
          TEMP_FEATURED_CREATORS.map((creator, i) => {
            return <CarouselItem className="basis-1/4 w-78 p-0" key={creator.title + i}>
              <CreatorPostCard index={i} {...creator} />
            </CarouselItem>
          })
        }
      </SliderHOC>

      <SliderHOC title="Straight from verified buyers" contentClassName="gap-5 pl-7.5">
        {
          TEMP_REVIEWS.map((review, i) => {
            return <CarouselItem className="basis-1/4 w-78 p-0" key={review.name + i}>
              <ReviewCard {...review} />
            </CarouselItem>
          })
        }
      </SliderHOC>

      <SliderHOC title="Be the first to discover them" supTitle="The latest creators" contentClassName="gap-7.5 pl-7.5" >
        {
          TEMP_CREATOR_ORDER_CARD.map((creator, i) => {
            return <CarouselItem className="md:basis-1/6 max-w-fit pl-0" key={creator.name + i}>
              <CreatorCard {...creator} isSuggestion isNew />
            </CarouselItem>
          })
        }
      </SliderHOC>

      <SliderHOC title="More from #Lifestyle" supTitle="You know what you like" contentClassName="gap-0 pl-7.5">
        {
          TEMP_FEATURED_CREATORS.map((creator, i) => {
            return <CarouselItem className="basis-1/4 w-78 p-0" key={creator.title + i}>
              <CreatorPostCard index={i} {...creator} />
            </CarouselItem>
          })
        }
      </SliderHOC>

      <SliderHOC title="Creators who earned the spotlight" supTitle="Sizzle+ Certified" className="pl-7.5" contentClassName="gap-6">
        {
          TEMP_CREATOR_DATA.map(c => <CarouselItem className="max-w-fit p-0" key={c.id}>
            <EveryonesBookingCreatorCard {...c} key={c.id} />
          </CarouselItem>)
        }
      </SliderHOC>

      <SliderHOC title="Creator highlights" contentClassName="gap-5 pl-7.5">
        {
          TEMP_CREATOR_DATA.map((creator, i) => {
            return <CarouselItem className="basis-2/7 max-w-fit p-0" key={creator.name + i}>
              <CreatorSuggestionCard {...creator} />
            </CarouselItem>
          })
        }
      </SliderHOC>
    </div>
  )
}
