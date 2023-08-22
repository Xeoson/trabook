import Post from "@/components/ui/Post";
import * as Carousel from "@/modules/Carousel";

const post = {
  title: "The Amazing Difference a Year of Travelling.",
  createdAt: Date.now(),
  image:
    "https://s3-alpha-sig.figma.com/img/01b1/3303/abba92856e24cc6aac237490ac280f57?Expires=1692576000&Signature=QDERKrW2Do-ZhsV~bBvglyJ5F1aaBAGdWKBa3LP1hlvk3zTyOrfqF~WvI7grto9UUHLnb~dIL8gAobt7qr3ovySedyaVOlpmBmKjtbU-BwG~-WeMZrPR17ibE2JxTuAPbhlOGPLmT9GXukJuJKsxfO3KQvNRCgCCRmr3QPXOjJs-sBOvSl1UHnnFADnXHVNhn01Qn8OIugenHGb64jPzxUnCuxJ0jgbrWcOQq9TRqW5JTRuMAX7msYvjTf2lqCEraXQVfXL1fseS89tES4O-z34CIbf-LVnWsUKEWViWTID4NkJYAAwHnHtZWeSD0ANosc70a7z0mfT~ECdILc4asQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
};

interface PostsProps {
  className?: string;
}

const Posts = (props: PostsProps) => {
  return (
    <section className="flex flex-col px-page">
      <h1 className="text-center mx-auto max-md:max-w-[15ch]">
        Get update with <span className=" text-primary">latest blog</span>
      </h1>
      <div className="flex flex-col w-full mx-auto mt-16">
        <Carousel.HorizontalProvider initState={{ columns: { zero: 3, md: 4 } }}>
          <Carousel.HorizontalContainer itemGapRem={2}>
            {Array.from({ length: 6 }, (_, i) => (
              <Post
                key={i}
                image={post.image}
                title={post.title}
                dateTimestamp={post.createdAt}
              />
            ))}
          </Carousel.HorizontalContainer>
          <Carousel.DotsNav className="mx-auto mt-12" />
        </Carousel.HorizontalProvider>
      </div>
    </section>
  );
};

export default Posts;
