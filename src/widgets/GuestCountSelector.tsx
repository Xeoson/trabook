import CountInput from "@/components/ui/CountInput";
import { useState } from "react";

interface GuestCountSelectorProps {
  className?: string;
}

const GuestCountSelector = (props: GuestCountSelectorProps) => {
	const [c1, setC1] = useState(0)
	const [c2, setC2] = useState(0)

  return (
    <div className={"flex flex-col p-4 gap-2"}>
      <p>Persons</p>
      <CountInput value={c1} onChange={(v) => setC1(v)} />
      <p>Children</p>
      <CountInput value={c2} onChange={(v) => setC2(v)} />
    </div>
  );
};

export default GuestCountSelector;
