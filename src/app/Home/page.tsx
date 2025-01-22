import Chef from "../components/Chef";
import AboutUs from "../components/AboutUs";
import FoodCategory from "../components/FoodCategory";
import Header from "../components/Header";
export default function Home() {
  return (
<div>
  <Header></Header>
  <AboutUs/>
  <FoodCategory/>
  <Chef></Chef>
</div>
  );
}