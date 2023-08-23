import { Children, PropsWithChildren } from "react";

const styles = {
  "vertical-divided": {
    list: "flex flex-col overflow-y-auto overscroll-none scrollbar",
    item: "child:w-full child:py-2 child:text-start border-b-2 first:border-t-2 border-black/5",
  },
};

interface ListProps extends PropsWithChildren {
  style: keyof typeof styles;
  itemClassName?: string;
}

const List = (props: ListProps) => {
  return (
    <ul className={styles[props.style].list}>
      {Children.map(props.children, (el) => (
        <li
          className={`${props.itemClassName ?? ""} ${
            styles[props.style].item
          }`}
        >
          {el}
        </li>
      ))}
    </ul>
  );
};

export default List;
