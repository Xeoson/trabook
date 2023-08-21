import Image from "next/image";

interface ReviewProps {
  className?: string;
  body: string;
  authorName: string;
  authorAbout?: string;
  authorAvatar?: string;
}

const Review = (props: ReviewProps) => {
  return (
    <div className={props.className}>
      <div
        className={
          "rounded-lg ml-8 mt-8 relative shadow-review py-8 px-7 pr-16"
        }
      >
        {props.authorAvatar && (
          <div className="absolute top-0 translate-x-[-50%] translate-y-[-50%] left-0">
            <Image
              src={props.authorAvatar}
              alt={"user"}
              width={50}
              height={50}
              className="!w-16 !h-16 rounded-full"
            />
          </div>
        )}
        <p className="text-text2">{`“${props.body}“`}</p>
        <p className="mt-8 font-semibold text-text">{props.authorName}</p>
        {props.authorAbout && (
          <p className="mt-1 text-text3">{props.authorAbout}</p>
        )}
      </div>
    </div>
  );
};

export default Review;
