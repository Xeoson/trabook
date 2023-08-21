import Image from "next/image";

const items = [
  {
    title: "Sign Up",
    icon: "/icons/List.svg",
    text: "Completes all the work associated with planning and processing",
  },
  {
    title: "Worth of money",
    icon: "/icons/Wallet.svg",
    text: "After successful access then book from exclusive deals & pricing",
  },
  {
    title: "Exciting Travel",
    icon: "/icons/Marker.svg",
    text: "Start and explore a wide range of exciting travel experience.",
  },
];

interface ToDoProps {
  className?: string;
}

const ToDo = (props: ToDoProps) => {
  return (
    <section className="bg-bg2 w-full px-page pt-0 pb-[7.5rem]">
      <div className="bg-url-[/icons/Aircraft.svg] pb-16 pt-[7.5rem] bg-no-repeat bg-[85%]">
        <h2 className="max-w-2xl mx-auto text-5xl font-bold text-center ">
          Things you need <span className="text-primary">to do</span>
        </h2>
        <p className="max-w-2xl mx-auto mt-5 text-lg text-center text-text3">
          We ensure that you’ll embark on a perfectly planned, safe vacation at
          a price you can afford.
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {items.map((el) => (
          <Item
            key={el.title}
            iconUrl={el.icon}
            text={el.text}
            title={el.title}
          />
        ))}
      </ul>
    </section>
  );
};

const Item = ({
  iconUrl,
  title,
  text,
  className,
}: {
  iconUrl: string;
  title: string;
  text: string;
  className?: string;
}) => (
  <div className={`${className ?? ""} max-md:items-center max-md:text-center flex flex-col p-10 bg-white rounded-lg`}>
    <Image
      src={iconUrl}
      alt={""}
      width={14}
      height={14}
      className="!w-12 !h-12"
    />
    <h3 className="mt-12 text-2xl font-semibold">{title}</h3>
    <p className="mt-4 max-w-[40ch]">{text}</p>
  </div>
);

export default ToDo;
