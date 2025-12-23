import BannerSection from "../components/main/BannerSection"
import CategorySection from "../components/main/CategorySection"
import Footer from "../components/main/Footer"
import Header from "../components/main/Header"
import ProductSection from "../components/main/ProductSection"

const MainPage = () => {
  return (
    <div className="main-page">
      <BannerSection />
      <CategorySection />
      <Footer />
      <Header />
      <ProductSection />
      </div>
  )
}

export default MainPage