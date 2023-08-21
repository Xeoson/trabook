import formatDate from "@/shared/helpers/formatDate";
import Image from "next/image";

interface PostProps {
  className?: string;
  image: string;
  title: string;
  dateTimestamp: number;
}

const Post = (props: PostProps) => {
  return (
    <article>
      <div className="rounded-lg overflow-hidden relative aspect-[1]">
        <Image src={props.image} fill alt={"preview"} />
      </div>
      <h3 className="mt-6 text-text">{props.title}</h3>
      <data className="mt-4 font-normal text-text3">{formatDate(props.dateTimestamp)}</data>
    </article>
  );
};

export default Post;
