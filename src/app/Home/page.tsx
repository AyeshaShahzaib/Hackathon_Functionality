// import Chef from "../components/Chef";
// import AboutUs from "../components/AboutUs";
// import FoodCategory from "../components/FoodCategory";
// import Header from "../components/Header";
// export default function Home() {
//   return (
// <div>
//   <Header></Header>
//   <AboutUs/>
//   <FoodCategory/>
//   <Chef></Chef>
// </div>
//   );
// }

import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import FoodCategory from "../components/FoodCategory";
import Chef from "../components/Chef";
// Define the page component
const HomePage =  () => {

  return (
    <div>
    <Header></Header>
    <AboutUs/>
    <FoodCategory/>
    <Chef></Chef>
  </div>
  );
};

export default HomePage;