import Deal from "@/components/ui/Deal";
import * as Carousel from "@/modules/Carousel";
import deal from "@/shared/mocks/deal";

interface ExclusiveDealsProps {
  className?: string;
}

const ExclusiveDeals = (props: ExclusiveDealsProps) => {
  return (
    <div className={"py-[7.5rem] px-page text-center"}>
      <h2>
        Exclusive <span className="text-primary">deals & discounts</span>
      </h2>
      <p>
        Discover our fantastic early booking discounts & start planning your
        journey.
      </p>
      <Carousel.HorizontalProvider initState={{ columns: { zero: 2, md: 3 } }}>
        <Carousel.HorizontalContainer className="mx-auto mt-16">
          {Array.from({ length: 8 }, (_, i) => (
            <Deal key={i} {...deal} />
          ))}
        </Carousel.HorizontalContainer>
        <Carousel.ButtonsNav className="mt-12" />
      </Carousel.HorizontalProvider>
    </div>
  );
};

export default ExclusiveDeals;
