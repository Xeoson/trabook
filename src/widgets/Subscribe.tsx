import ElipsesSvg from "@/../public/icons/Elipses.svg";
import MailSvg from "@/../public/icons/Mail.svg";
import PalmsSvg from "@/../public/icons/Palms.svg";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import MatchMedia from "@/shared/components/MatchMedia";

interface SubscribeProps {
  className?: string;
}

const Subscribe = (props: SubscribeProps) => {
  return (
    <section
      className={
        "relative flex flex-col pt-0 after:absolute before:bottom-0 px-page before:absolute before:block before:bg-bg2 before:min-h-[50%]  after:bg-bg1 after:z-[-1] after:top-0 after:block after:min-h-[50%]"
      }
    >
      <div className="relative flex flex-col items-center w-full py-20 rounded-2xl bg-primary">
        <PalmsSvg className="absolute right-0 top-2 text-primary-inverted w-28 h-28" />
        <ElipsesSvg className="absolute text-[0.5rem] bottom-0 left-0 text-primary-inverted" />
        <div className="w-[70%] text-center z-10">
          <h2 className="text-primary-inverted">
            Subscribe and get exclusive deals & offer
          </h2>
          <div className="mt-16">
            <MatchMedia
              zero={
                <>
                  <Input
                    startChild={<MailSvg className={"ml-3 my-4"} />}
                    className="mt-16"
                    placeholder="Enter your mail"
                  />
                  <Button
                    theme="primary"
                    className="mx-auto mt-8 font-bold bg-primary-inverted !text-primary"
                    size="lg"
                  >
                    Subscribe
                  </Button>
                </>
              }
              md={
                <Input
                  className="w-full mt-16"
                  startChild={<MailSvg className={"ml-3 my-4"} />}
                  endChild={
                    <Button size="lg" className="h-full" theme="primary">
                      Subscribe
                    </Button>
                  }
                  placeholder="Enter your mail"
                />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
