import BannerSection from "../components/main/BannerSection";
import BannerSection2 from "../components/main/BannerSection2";
import BottomBlog from "../components/main/BottomBlog";
import CategorySection from "../components/main/CategorySection";
import MidBlog from "../components/main/MidBlog";
import ProductSection from "../components/main/ProductSection";
import ProductSection2 from "../components/main/ProductSection2";
import TopBlog from "../components/main/TopBlog";

const MainPage = () => {
  return (
    <div className="main-page">
      <BannerSection />
      <CategorySection />
      <TopBlog />
      <BannerSection2 />
      <ProductSection />
      <MidBlog />
      <ProductSection2 />
      <BottomBlog />
    </div>
  );
};

export default MainPage;
