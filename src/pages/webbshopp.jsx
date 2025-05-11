import { useShop } from "../providers/shopProvider";
import BannerSlider from '../components/bannerSlider';
import ContactPage from '../contactPage';

const WebbShopp = ()=>{
    const {selectShop,selectedShop} = useShop();
    
    return (
      <>
        <div>
            <BannerSlider/>
            <section className='p-2.5'></section>
            <div>
              <button onClick={()=>{selectShop({"shopName":"apple"})}}>apple</button>
            </div>
        </div>
      </>
    );

}

export default WebbShopp

