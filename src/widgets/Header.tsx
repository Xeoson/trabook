import Button from "@/components/ui/Button";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative flex pt-20 pb-2 bg-right-top bg-no-repeat bg-contain">
      <div className="max-w-[56ch] max-md:mx-auto text-center md:text-start">
        <h1>
          Get started your exciting{" "}
          <span className="text-primary">journey</span> with us.
        </h1>
        <p className="mt-8 text-xl text-text3 md:text-text">
          A Team of experienced tourism professionals will provide you with the
          best advice and tips for your desire place.{" "}
        </p>
        <Button className="mt-16 mr-auto" theme="secondary" size="lg">
          Discover Now
        </Button>
      </div>
      <Image
        src={"/img/HeaderImage.png"}
        alt={"smiling man in panama showing thumbs up"}
        fill
        className="object-contain max-md:hidden max-lg:blur-sm max-lg:opacity-70 z-[-1] !w-auto ml-auto"
      />
    </div>
  );
};

export default Header;
