interface LinkListProps {
  className?: string;
  title: string;
  links: Record<string, any>;
}

const LinkList = (props: LinkListProps) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <ul className="flex flex-col gap-4 mt-8">
        {Object.entries(props.links).map(([text, link], i) => (
          <li key={i}>
            <a className="text-lg text-text3" href={link}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkList;
