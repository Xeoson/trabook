"use client";

import LocationSearch from "@/widgets/LocationSearch";
import Button from "../components/ui/Button";
import Dropdown from "../components/ui/Dropdown";
import SelectTripOption from "../components/ui/SelectTripOption";
import GuestCountSelector from "./GuestCountSelector";

interface SelectTripProps {
  className?: string;
}

const SelectTrip = (props: SelectTripProps) => {
  return (
    <div
      className={`${
        props.className ?? ""
      } max-sm:flex-col max-sm:w-[60%] max-sm:min-w-[12rem] gap-4 flex justify-between shadow-section shadow-shadow max-w-3xl px-6 py-8 bg-white rounded-lg`}
    >
      <Dropdown
        contentClassName="mt-2 md:justify-self-center max-sm:w-full"
        outsideContent={({ onOpen }) => (
          <SelectTripOption
            btnText="Location"
            onClick={onOpen}
            text="Where are you going"
          />
        )}
      >
        <LocationSearch />
      </Dropdown>
      <Dropdown
        contentClassName="mt-2 md:justify-self-center max-sm:w-full"
        outsideContent={({ onOpen }) => (
          <SelectTripOption
            btnText="Date"
            onClick={onOpen}
            text="When you will go"
          />
        )}
      ></Dropdown>
      <Dropdown
        contentClassName="mt-2 md:justify-self-center max-sm:w-full"
        outsideContent={({ onOpen }) => (
          <SelectTripOption
            btnText="Guest"
            onClick={onOpen}
            text="Number of guest"
          />
        )}
      >
        <GuestCountSelector />
      </Dropdown>
      <Button className="max-sm:mt-4" theme="primary" size="lg">
        Explore Now
      </Button>
    </div>
  );
};

export default SelectTrip;
