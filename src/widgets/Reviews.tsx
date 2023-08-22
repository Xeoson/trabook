import Review from "@/components/ui/Review";
import * as Carousel from "@/modules/Carousel";
import { IReviewPopulated } from "@/shared/types/models/review";

const reviews: IReviewPopulated[] = [
  {
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
  },
  {
    author: {
      id: "3",
      name: "Chris",
      surname: "Thomas",
      about: "SEO of Red Button",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7243/5153/7059b05297b2de0c67e18d6509eef339?Expires=1692576000&Signature=SRLaXvd08uVYEekKOphjJd52-j1K9rh6Emqm5MQx~ecXlwDlyHS34ttXNLYk8etvPCTAb3AXcxmMYYgNWhi~-WyDlOpVZCfZUn3ukHZ1-YDB7tLpABFcDOhj9zY4d-bfm5imhSGw4h48BECyeA6pU4IEGNtW2jt5goi2qapri1EL-mheUG~kehy6T52qzxfbGzbn2oHQZbVvShja3UXk74F3EiRYnCZPqtLVwTAgwSE2Q~ig5nkLkF8XE68eFaaUbGjIZtqCsPxEgQhTixVuGpRWSEfyyzKIu1O1aGDt28sGug2GswJr8jIv2LXToXzdMXjNP1s3TKPFB1J1ynz-dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    authorId: "3",
    body: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    id: "1",
  },
  {
    author: {
      id: "3",
      name: "Mike",
      surname: "Taylor",
      about: "Lahore, Pakistan 2",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7243/5153/7059b05297b2de0c67e18d6509eef339?Expires=1692576000&Signature=SRLaXvd08uVYEekKOphjJd52-j1K9rh6Emqm5MQx~ecXlwDlyHS34ttXNLYk8etvPCTAb3AXcxmMYYgNWhi~-WyDlOpVZCfZUn3ukHZ1-YDB7tLpABFcDOhj9zY4d-bfm5imhSGw4h48BECyeA6pU4IEGNtW2jt5goi2qapri1EL-mheUG~kehy6T52qzxfbGzbn2oHQZbVvShja3UXk74F3EiRYnCZPqtLVwTAgwSE2Q~ig5nkLkF8XE68eFaaUbGjIZtqCsPxEgQhTixVuGpRWSEfyyzKIu1O1aGDt28sGug2GswJr8jIv2LXToXzdMXjNP1s3TKPFB1J1ynz-dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    authorId: "3",
    body: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    id: "1",
  },
  {
    author: {
      id: "3",
      name: "Chris",
      surname: "Thomas",
      about: "SEO of Red Button 2",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7243/5153/7059b05297b2de0c67e18d6509eef339?Expires=1692576000&Signature=SRLaXvd08uVYEekKOphjJd52-j1K9rh6Emqm5MQx~ecXlwDlyHS34ttXNLYk8etvPCTAb3AXcxmMYYgNWhi~-WyDlOpVZCfZUn3ukHZ1-YDB7tLpABFcDOhj9zY4d-bfm5imhSGw4h48BECyeA6pU4IEGNtW2jt5goi2qapri1EL-mheUG~kehy6T52qzxfbGzbn2oHQZbVvShja3UXk74F3EiRYnCZPqtLVwTAgwSE2Q~ig5nkLkF8XE68eFaaUbGjIZtqCsPxEgQhTixVuGpRWSEfyyzKIu1O1aGDt28sGug2GswJr8jIv2LXToXzdMXjNP1s3TKPFB1J1ynz-dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    authorId: "3",
    body: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    id: "1",
  },
];

interface ReviewsProps {
  className?: string;
}

const Reviews = (props: ReviewsProps) => {
  return (
    <section className="w-full px-page py-[7.5rem] bg-bg2">
      <Carousel.VerticalProvider>
        <div className="grid gap-8 max-lg:grid-cols-1 grid-cols-[50ch_1fr]">
          <div className="max-lg:items-center max-lg:flex max-lg:flex-col">
            <h2>
              What people say <span className="text-primary">about Us</span>.
            </h2>
            <p className="mt-6">
              Our Clients send us bunch of smilies with our services and we love
              them.
            </p>
            <Carousel.ButtonsNav className="mt-4" />
          </div>
          <div className="w-[60]">
            <Carousel.VerticalContainer>
              {reviews.map((el, i) => (
                <Review
                  key={i}
                  authorName={`${el.author.name} ${el.author.surname}`}
                  body={el.body}
                  authorAvatar={el.author.avatar}
                  authorAbout={el.author.about}
                />
              ))}
            </Carousel.VerticalContainer>
          </div>
        </div>
      </Carousel.VerticalProvider>
    </section>
  );
};

export default Reviews;
