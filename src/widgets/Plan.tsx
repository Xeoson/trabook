import Deal2 from "@/components/ui/Deal2";
import * as Carousel from "@/modules/Carousel";
import deal from "@/shared/mocks/deal";
import Image from "next/image";

interface PlanProps {
  className?: string;
}

const Plan = (props: PlanProps) => {
  return (
    <section className="relative flex flex-col text-center px-page">
      <div className="absolute top-0 right-[30%]">
        <Image fill src="/icons/Palms.svg" alt="palms" />
      </div>
      <h2>
        Best <span className="text-primary">vacation plan</span>
      </h2>
      <p className="mt-6">
        Plan your perfect vacation with our travel agency. Choose among hundreds
        of all-inclusive offers!
      </p>
      <div className="flex flex-col w-full mx-auto">
        <Carousel.HorizontalProvider initState={{ columns: { zero: 2, md: 3 } }}>
          <Carousel.ButtonsNav className="ml-auto" />
          <Carousel.HorizontalContainer className="mt-6">
            {Array.from({ length: 7 }, (_, i) => (
              <Deal2 key={i} {...deal} />
            ))}
          </Carousel.HorizontalContainer>
        </Carousel.HorizontalProvider>
      </div>
    </section>
  );
};

export default Plan;
