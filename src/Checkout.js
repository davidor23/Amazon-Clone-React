import React from "react";
import {useStateValue} from "./StateProvider";
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import Product from "./Product";
function Checkout() {
    const [{basket},] = useStateValue();
    {/*bringing in basket */}
    return (
    <div className="checkout">
        <div className="checkout__left">
        {/*importing image for ad*/}
        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt={"checkoutAd"}/>
        {basket?.length  === 0 ? (
        <div>
            <h2>Your basket is empty</h2>
            <p>You have no items in your basket. to buy one or more items,
                click "Add to basket" next to the item
            </p>
        </div>
        ) : (
            <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>

                {/*List all the checkout products here*/}
                {basket?.map((item) => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>

            )}
        </div>
        {basket.length > 0 && (
            <div className="checkout__right">
                <h1>Subtotal</h1>
                <Subtotal/>
            </div>
        )}
    </div>
    );
}

export default Checkout;