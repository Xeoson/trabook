import Image from "next/image";
import Button from "./Button";
import { IDeal } from "@/shared/types/models/deal";

interface DealProps extends Omit<IDeal, "durationDays"> {
  className?: string;
}

const Deal = (props: DealProps) => {
  return (
    <div
      className={`${
        props.className ?? ""
      } border rounded-lg group border-accent bg-bg1`}
    >
      <div className="relative rounded-lg overflow-hidden aspect-[9/10]">
        <Image
          src={props.picture}
          alt="destination picture"
          fill
        />
        <div className="absolute flex w-full h-full hovered:hidden bg-black/10 group-hover:flex">
          <Button
            className="mx-auto mt-auto hovered:mb-[25%] mb-4 motion-safe:transition animate-up"
            theme="primary"
            size="lg"
          >
            Book Now
          </Button>
        </div>
      </div>
      <div className="px-4 py-8 ">
        <div className="flex items-center justify-between">
          <h6>{props.title}</h6>
          <div className="flex items-center gap-1">
            <Image src={"/icons/Star.png"} alt="" width={14} height={14} />
            <span className="text-text3">{props.rating}</span>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-1">
            <Image src={"icons/Mark.svg"} alt="" width={14} height={14} />{" "}
            <span className="text-text3">{props.destination}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="line-through text-medium text-text3">
              ${props.oldPrice}
            </span>
            <div className="rounded-[0.25rem] py-1 px-2 bg-primary/10">
              <span className="text-primary">${props.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
