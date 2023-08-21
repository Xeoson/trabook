import Button from "@/components/ui/Button";
import MatchMedia from "@/shared/components/MatchMedia";
import { IoLogInOutline } from "react-icons/io5";

interface LoginButtonsProps {
  className?: string;
}

const LoginButtons = (props: LoginButtonsProps) => {
  return (
    <div
      className={`${props.className ?? ""} justify-end flex gap-2`}
    >
      <MatchMedia
        lg={
          <>
            <Button size="lg">Login</Button>
            <Button size="lg" theme="primary">
              Sign up
            </Button>
          </>
        }
        zero={
          <Button theme="primary" className="p-1">
            <IoLogInOutline className="text-3xl" />
          </Button>
        }
      />
    </div>
  );
};

export default LoginButtons;
