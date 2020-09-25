import React from "react";
import Product from "./Product";
import "./Home.css"
function Home() {
    return(
        <div className ="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner"/>

            <div className="home__row">
                <Product
                id="12321341"
                title="The Hobbit"
                image="https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg"
                price={11.96}
                rating={5}
            />
                <Product
                    id="12321341"
                    title="Darth Maul - Deluxe Action Figure"
                    image="https://images-na.ssl-images-amazon.com/images/I/814KbqKPk7L._AC_SL1500_.jpg"
                    price={20.99}
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product
                    id="12321341"
                    title="Fifa 20 - Champions Edition Xbox One"
                    image="https://i.ebayimg.com/images/g/AQYAAOSwB3pdb7y5/s-l300.jpg"
                    price={11.96}
                    rating={1}
                />
                <Product
                    id="12321341"
                    title="OnePlus 7 Pro"
                    image="https://www.celticrepairs.ie/wp-content/uploads/2019/09/OnePlus-7-Pro-Screen-Repair-Celtic-Repairs.jpg"
                    price={11.96}
                    rating={4}
                />
                <Product
                    id="12321341"
                    title="Dracula - Bram Stoker"
                    image="https://ih1.redbubble.net/image.1139423062.9197/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                    price={11.96}
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product
                    id="12321341"
                    title="Playstation 5"
                    image="https://o.aolcdn.com/images/dims?quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-06%2F65068ac0-acbf-11ea-b9fb-ee297695f454&client=amp-blogside-v2&signature=216ba1935fe005fc987ff791bf49bf1285f6216b"
                    price={11.96}
                    rating={3}
                />
            </div>
        </div>
    )
}
export  default  Home;