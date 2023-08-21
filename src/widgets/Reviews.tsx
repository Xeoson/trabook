import ArrowButton from "@/components/ui/ArrowButton";
import Review from "@/components/ui/Review";
import { IReviewPopulated } from "@/shared/types/models/review";

const review: IReviewPopulated = {
  author: {
    id: "3",
    name: "Mike",
    surname: "Taylor",
    about: "Lahore, Pakistan",
    avatar:
      "https://s3-alpha-sig.figma.com/img/7243/5153/7059b05297b2de0c67e18d6509eef339?Expires=1692576000&Signature=SRLaXvd08uVYEekKOphjJd52-j1K9rh6Emqm5MQx~ecXlwDlyHS34ttXNLYk8etvPCTAb3AXcxmMYYgNWhi~-WyDlOpVZCfZUn3ukHZ1-YDB7tLpABFcDOhj9zY4d-bfm5imhSGw4h48BECyeA6pU4IEGNtW2jt5goi2qapri1EL-mheUG~kehy6T52qzxfbGzbn2oHQZbVvShja3UXk74F3EiRYnCZPqtLVwTAgwSE2Q~ig5nkLkF8XE68eFaaUbGjIZtqCsPxEgQhTixVuGpRWSEfyyzKIu1O1aGDt28sGug2GswJr8jIv2LXToXzdMXjNP1s3TKPFB1J1ynz-dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  authorId: "3",
  body: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  id: "1",
};

interface ReviewsProps {
  className?: string;
}

const Reviews = (props: ReviewsProps) => {
  return (
    <section className="w-full px-page py-[7.5rem] bg-bg2">
      <div className="grid px-page gap-8 max-md:grid-cols-1 grid-cols-[50ch_1fr]">
        <div className="max-md:items-center max-md:flex max-md:flex-col">
          <h2>
            What people say <span className="text-primary">about Us</span>.
          </h2>
          <p className="mt-6">
            Our Clients send us bunch of smilies with our services and we love
            them.
          </p>
          <div className="flex gap-8 mt-8">
            <ArrowButton />
            <ArrowButton direction="right" />
          </div>
        </div>
        <div className="w-[60]">
          <Review
            authorName={`${review.author.name} ${review.author.surname}`}
            body={review.body}
            authorAvatar={review.author.avatar}
            authorAbout={review.author.about}
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
