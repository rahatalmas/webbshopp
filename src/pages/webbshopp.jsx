import { useShop } from "../providers/shopProvider";
import BannerSlider from '../components/bannerSlider';
import StoreCarusal from "../components/StoreCarusal";
import { stores } from "../components/storedata";
import SectionHeader from "../components/sectionHeader";
import { FiBox } from 'react-icons/fi';
const WebbShopp = ()=>{
    const {selectShop,selectedShop} = useShop();
    
    return (
      <>
        <div>
            <BannerSlider/>
            <section className='p-2.5'></section>
            <section className="px-6">
            <SectionHeader
                  title="Featured Stores"
                  icon={FiBox}
                  linkText="Browse All"
                  linkHref="/stores"
            />
            </section>
            <StoreCarusal stores={stores}/>         
            <div>
              <button onClick={()=>{selectShop({"shopName":"apple"})}}>apple</button>
            </div>
        </div>
      </>
    );

}

export default WebbShopp

