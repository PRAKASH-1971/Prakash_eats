import { React, useState } from 'react'
import "./css/Foods.css"
import Row from './Row'
import { bestdeal, Tandoori, Chinese, Burgers, Crispymeal, BurgersMeal, TripleTreat, bigtreat, Crispy, FRIES, pizza, Momos, Sandwitch, Rolls, Soups, Starters, boxmeal, Seafooddelight, Salads, VegBurgers, ChineseMeal, MomosCombo, Coolers, Shakes, VegCombo, VegStarters, Wings, Lollipop, VegMainCourse, NonVegMainCourse, Breads, VegCourserice, NonVegCourserice, NonvegChinese, Pasta , springroll, Chats, pizzacombo, nonVegCombo} from "./data"

const Foods = () => {
    const [carts, setCarts] = useState(false)

    console.log(carts)

    return (
        <div className='foods'>

            {/* <Row title={bestdeal} name="Best-Deals" carts={carts} /> */}
            {/* <Row title={bigtreat} name="Big-Treat" carts={carts} /> */}
            {/* <Row title={TripleTreat} name="Triple Treat" carts={carts} /> */}
            {/* <Row title={boxmeal} name="Box-meal" carts={carts} /> */}
            {/* <Row title={Crispymeal} name="Crispy Meal" carts={carts} /> */}
            {/* <Row title={VegBurgers} name="Veg Burgers" carts={carts} /> */}
            {/* <Row title={BurgersMeal} name="Burgers Meal" carts={carts} /> */}


            <Row title={Seafooddelight} name="Seafood-Delight" carts={carts} />
            <Row title={Burgers} name="Burgers" carts={carts} />
            <Row title={Tandoori} name="Tandoori Chicken" carts={carts} />

            {/* <Row title={Lollipop} name="Lollipop" carts={carts} /> */}
            {/* <Row title={Pasta} name="Pasta" carts={carts} /> */}
            {/* <Row title={Wings} name="Wings" carts={carts} /> */}


            <Row title={Breads} name="Breads" carts={carts} />
            {/* <Row title={Salads} name="Salads" carts={carts} /> */}


            {/* <Row title={VegMainCourse} name="Veg Main Course" carts={carts} /> */}
            {/* <Row title={VegCourserice} name="Veg Main Course Rice" carts={carts} /> */}
            <Row title={NonVegMainCourse} name="Non-veg Main Course" carts={carts} />
            <Row title={NonVegCourserice} name="Non-veg Main Course Rice" carts={carts} />
            {/* <Row title={VegCombo} name="Veg Combo" carts={carts} /> */}
            {/* <Row title={nonVegCombo} name="Non-veg Combo" carts={carts} /> */}


            {/* <Row title={VegStarters} name="Veg Starters" carts={carts} /> */}
            {/* <Row title={Starters} name="Chinese / Starters" carts={carts} /> */}

            {/* <Row title={NonvegChinese} name="Nonveg Chinese Cousines" carts={carts} /> */}
            {/* <Row title={Chinese} name="veg Chinese Cousines" carts={carts} /> */}
            {/* <Row title={ChineseMeal} name="Chinese Combo" carts={carts} /> */}
            {/* <Row title={Soups} name="Soups" carts={carts} /> */}

            <Row title={FRIES} name="Fries" carts={carts} />
            {/* <Row title={pizza} name="Pizza" carts={carts} /> */}
            {/* <Row title={pizzacombo} name="Pizza Combo" carts={carts} /> */}
            <Row title={Momos} name="Momos" carts={carts} />
            {/* <Row title={MomosCombo} name="MOMOS" carts={carts} /> */}
            {/* <Row title={Sandwitch} name="SANDWITCH" carts={carts} /> */}


            <Row title={Rolls} name="Wraps" carts={carts} />
            <Row title={springroll} name="Rolls" carts={carts} />
            {/* <Row title={Chats} name="Chats" carts={carts} /> */}

            
            <Row title={Coolers} name="Coolers" carts={carts} />
            {/* <Row title={Shakes} name="Shakes" carts={carts} /> */}

        </div>
    )
}

export default Foods