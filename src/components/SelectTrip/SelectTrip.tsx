"use client"

import Button from "../ui/Button";
import SelectTripOption from "./SelectTripOption";

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
      <SelectTripOption
        btnText="Location"
        onClick={() => {}}
        text="Where are you going"
      />
      <SelectTripOption
        btnText="Date"
        onClick={() => {}}
        text="When you will go"
      />
      <SelectTripOption
        btnText="Guest"
        onClick={() => {}}
        text="Number of guest"
      />
      <Button className="max-sm:mt-4" theme="primary" size="lg">
        Explore Now
      </Button>
    </div>
  );
};

export default SelectTrip;
