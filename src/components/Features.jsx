import Card from "./Card"
import Buttons from "./Utilities/Buttons"

const Features = () => {
  return (
    <section className="flex gap-5 lg:flex-row justify-center flex-col"> 
        <Card
        imageUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/women-fashion-free-img.jpg" discountInfo="20% OFF ON WINTER CLOTHING"
         body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum. "/>
        <Card 
        imageUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg" discountInfo="50% OFF ON SUMMER FASHION" 
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum. "/>
        <Card  
        imageUrl="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg" discountInfo="75% OFF ON HOLIDAY SALES"
         body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum. "/>
    </section>
  )
}

export default Features
