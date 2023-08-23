import Input from "@/components/ui/Input";
import List from "@/components/ui/List";
import { countries } from "@/shared/mocks/countries";

interface LocationSearchProps {
  className?: string;
}

const LocationSearch = (props: LocationSearchProps) => {
  return (
    <div className={"flex py-4 max-h-[50vh] flex-col gap-4"}>
      <Input autoFocus className="mx-4" style="bordedred" placeholder="Where to?" />
      <List style="vertical-divided">
        {countries.map((el) => (
          <button key={el.id} className="px-4 transition duration-75 hovered:hover:text-primary" type='button'>{el.title}</button>
        ))}
      </List>
    </div>
  );
};

export default LocationSearch;
