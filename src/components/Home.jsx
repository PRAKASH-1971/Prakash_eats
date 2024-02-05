import React from 'react'
import Navbar from './Navbar'
import "./css/Home.css"
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import Foods from './Foods';
import { bestdeal, mangeos, fruits, VEGETABLES, herbs, dryfruits, staples } from "./data"
const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            {/* offer */}
            <div className='off'>
                Get <b style={{ "color": 'white', "fontSize": '22px', "fontWeight": '700', "margin": '0px 10px' }}>60% OFF</b> on your first order
            </div>
            {/* Prakash Eats */}
            <div className='pe'>
                <div className='pelogo'>
                    <p>Prakash</p>
                    <p>Eats</p>
                </div>
                <div className='peatsintero'>
                    <p>All cuisines in an App</p>
                </div>
            </div>
            {/* caraseoul and menu */}
            <div className="landing">
                <div className='caraseoul'>
                    <CCarousel indicators>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/21e0a04c73c8b39b5616799e219ce032"} alt="slide 1" style={{ "width": "100px" }} />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/4588eea459c19a835bac4f75e44267b5"} alt="slide 1" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={"https://prataplunchhome.com/images/blog/best-seafood-restaurant.jpg"} style={{ "width": "100px" }} alt="slide 1" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/36749d1c590ce640d60bbccb3713297a"} style={{ "width": "100px" }} alt="slide 1" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/492a6416c1228ecdfe95ac8f72696712"} style={{ "width": "100px" }} alt="slide 1" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/3963a0fc870fda8b179798c0c8f055f4"} style={{ "width": "100px" }} alt="slide 1" />
                        </CCarouselItem>
                    </CCarousel>
                </div>
            </div>
            <div className='menu'>
                <h3 style={{ "font-family": "'Lobster', cursive;", "fontWeight": 700, "color": 'black', 'fontSize': '18px' }}>Menu</h3>
                <div className='items'>
                    <div className='itema'>
                        <div className='item1'>
                            <img className='item_img' src="https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/kfc-fried-chicken-62e0ca.jpg" alt="Fried Chicken" />
                            <h6>Crispy Chick</h6>
                        </div>
                        <div className='item3'>
                            <img className='item_img' src="https://samarascuisine.com/wp-content/uploads/2021/03/Tandoori-Chicken-Recipe.jpg" alt="Tandoori" />
                            <h6>Tandoori</h6>
                        </div>
                        <div className='item13'>
                            <img className='item_img' src="https://fullofplants.com/wp-content/uploads/2021/05/easy-virgin-mojito-alcohol-free-kid-friendly-refreshing-drink-thumb.jpg" alt="Coolers" />
                            <h6>Coolers</h6>
                        </div>
                        <div className='item8'>
                            <img className='item_img' src="https://lh3.googleusercontent.com/El9nhfuwyCdKQ0JhIzTP3-vDQiTinIMLGVOJlCNa8Hs4haqRRRn4kPD0Zbt7ipjkChgqNwmvKn110_diGR1AXNHbhIXGo9TVsuhRBITApA=w512-rw" alt="Momos" />
                            <h6>Momos</h6>
                        </div>
                        <div className='item8'>
                            <img className='item_img' src="http://sharehappycows.com/uploads/7/5/6/7/75676257/s696838836161483376_p167_i1_w1200.jpeg" alt="Momos" />
                            <h6>Wings</h6>
                        </div>
                    </div>

                    <div className='itemb'>
                        <div className='item5'>
                            <img className='item_img' src="https://b.zmtcdn.com/data/dish_photos/131/d256f07dc0da10e511f6442ee0886131.jpg" alt="Pizza" />
                            <h6>Pizza</h6>
                        </div>
                        <div className='item12'>
                            <img className='item_img' src="https://i.pinimg.com/1200x/f0/8a/98/f08a988305b52ab0e4aeadae71332616.jpg" alt="Shakes" />
                            <h6>Shakes</h6>
                        </div>
                        <div className='item2'>
                            <img className='item_img' src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" alt="Burgers" />
                            <h6>Burgers</h6>
                        </div>
                        <div className='item9'>
                            <img className='item_img' src="https://tolepizza.sairameducation.in/wp-content/uploads/2022/01/french-fries-masala.jpg" alt="Fries" />
                            <h6>Fries</h6>
                        </div>
                        <div className='item4'>
                            <img className='item_img' src="https://www.dalesseasoning.com/wp-content/uploads/chicken-wrap.jpg" alt="Wraps" />
                            <h6>Wraps</h6>
                        </div>
                    </div>

                    <div className='itemc'>
                        <div className='item7'>
                            <img className='item_img' src="https://www.kannammacooks.com/wp-content/uploads/masala-fish-fry-recipe-ayala-meen-Mackerel-fry-8.jpg" alt="Seafood" />
                            <h6>Fish</h6>
                        </div>
                        <div className='item2'>
                            <img className='item_img' src="https://www.yumofchina.com/wp-content/uploads/2022/08/imitation-crab.jpg" alt="Crab" />
                            <h6>Crab</h6>
                        </div>
                        <div className='item10'>
                            <img className='item_img' src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/789388/300/200/m2/fpc/wm0/vaqjl10ih3ttqeefaptw4fixxnsww1fzhtxs8u4vkiklpxcq4yl1eyce6wn9fcpg-.jpg?1447873710&s=acf1fcfec5536728d4d303597b1e3eb9" alt="Fish Fry" />
                            <h6>Prawns</h6>
                        </div>
                        <div className='item10'>
                            <img className='item_img' src="https://www.whiskaffair.com/wp-content/uploads/2021/10/Andhra-Chicken-Curry-2-3.jpg" alt="Curry" />
                            <h6>Curry</h6>
                        </div>
                    </div>
                </div>
            </div>
            {/* Prakash Points */}
            <div className='off'>
                Get <b style={{ "color": 'white', "fontSize": '20px', "fontWeight": '700', "margin": '0px 8px' }}> Prakash Points </b>on evry order
            </div>
            {/* Restaurents */}
            <div className='restroes'>
                <h3 style={{ "font-family": "'Lobster', cursive;", "fontWeight": 700, "color": 'black', 'fontSize': '18px', "margin": "auto", "borderBottom": '0.5px solid black', "paddingBottom": "10px" }}>Our Restuarents</h3>

                {/* TCB */}
                <div className='restro'>
                    <img src="https://iili.io/HyD8hgI.png" alt="" />
                    <div className='restro-info'>
                        <a href="https://thecrispbite.netlify.app">
                            <h3>The Crisp Bite</h3>
                        </a>
                        <p>Western Cuisines - Burgers, pizza, wraps, Pasta...</p>
                    </div>
                </div>
                {/* HH */}
                <div className='restro'>
                    <img src="https://iili.io/HyDgZIn.png" alt="" />
                    <div className='restro-info'>
                        <a href="https://64f1e1824fc8aa6bb0e7ef8b--harbourhraven.netlify.app/">
                            <h3>Harbour Heaven</h3>
                        </a>
                        <p>Seafood Cuisines - Fish, Prawns, Crab...</p>
                    </div>
                </div>
                {/* Sb */}
                <div className='restro'>
                    <img src="https://png.pngtree.com/png-vector/20220131/ourmid/pngtree-sb-rounded-monogram-logo-on-various-backgrounds-letter-icon-isolated-vector-png-image_28960046.png" alt="" />
                    <div className='restro-info'>
                        <a href="https://harbourhraven.netlify.app/">
                            <h3>Shanghai Bristo</h3>
                        </a>
                        <p>Chinese Cuisines - Fried Rice & Noodles...</p>
                    </div>
                </div>
                {/* Pveg */}
                <div className='restro'>
                    <img src="https://iili.io/HyDrWjn.md.jpg" alt="" />
                    <div className='restro-info'>
                        <a href="">
                            <h3>Prakash Veg Restro</h3>
                        </a>
                        <p>Veg Cuisines - Mastered all types of veg cuisine dishes...</p>
                    </div>
                </div>
                {/* KE */}
                <div className='restro'>
                    <img src="https://iili.io/HyDri6x.jpg" alt="" />
                    <div className='restro-info'>
                        <a href="">
                            <h3>Kudla Express Restro kitchen</h3>
                        </a>
                        <p>South Indian Cuisines - Kori Rotti, Uruval, Pulimunchi...</p>
                    </div>
                </div>
                {/* Ak */}
                <div className='restro'>
                    <img src="https://i.ytimg.com/vi/5COX0GCZpao/maxresdefault.jpg" alt="" />
                    <div className='restro-info'>
                        <a href="">
                            <h3>The Arabic Koyla</h3>
                        </a>
                        <p>Arabic Cuisines - Tikka, Alpham, Grilled chik...</p>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Home

