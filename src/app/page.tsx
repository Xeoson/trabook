import ExclusiveDeals from "@/widgets/ExclusiveDeals";
import Plan from "@/widgets/Plan";
import Posts from "@/widgets/Posts";
import Reviews from "@/widgets/Reviews";
import Subscribe from "@/widgets/Subscribe";
import ToDo from "@/widgets/ToDo";

const Home = () => {
  return (
    <div>
      <ToDo />
      <ExclusiveDeals />
      <Plan />
			<Reviews />
			<Posts />
			<Subscribe />
    </div>
  );
};

export default Home;
