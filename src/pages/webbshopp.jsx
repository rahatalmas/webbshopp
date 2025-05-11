import { useShop } from "../providers/shopProvider";

const WebbShopp = ()=>{
    const {selectShop,selectedShop} = useShop();
    return (
        <>
          <div>
            <h3>WebbShopp</h3>
            <button onClick={()=>{selectShop({"shopName":"apple"})}}>Enter into shop</button>
            <button onClick={()=>{alert(selectedShop)}}>see</button>
          </div>
        </>
    );
}

export default WebbShopp