import { IDeal } from "@/shared/types/models/deal";
import Image from "next/image";

interface Deal2Props extends IDeal {
  className?: string;
}

const Deal2 = (props: Deal2Props) => {
  return (
    <div
      className={`${
        props.className ?? ""
      } border rounded-lg group border-accent bg-bg1`}
    >
      <div className="relative rounded-lg hovered:hover:bg-black/10 overflow-hidden aspect-[9/10]">
        <Image src={props.picture} alt="destination picture" fill />
      </div>
      <div className="px-4 py-8 ">
        <div className="flex items-center justify-between !text-lg md:!text-2xl">
          <h6>
            {props.title}
            {", "}
            {props.destination}
          </h6>
          <p className="font-semibold text-primary">
            {"$"}
            {props.price}
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-4">
            <div className="relative w-4 h-4">
              <Image fill src="/icons/Navigation.svg" alt={""} />
            </div>
            <p className="text-base">{props.durationDays} Days Trip</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src={"/icons/Star.png"} alt="" width={14} height={14} />
            <span className="text-text3">{props.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal2;
