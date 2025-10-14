import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Products = () => {
	let [allpr,setAllPr] = useState([])
	const [products,setProducts] = useState([])
	useEffect(()=>{
		axios.get("http://localhost:5000/category/")
		.then((res)=>setAllPr(res.data.data))

		axios.get("http://localhost:5000/product/")
		.then((res)=>setProducts(res.data.data))
	},[])
  return (
    <>
    <div className="new_arrivals">
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<div className="section_title new_arrivals_title">
						<h2>New Arrivals</h2>
					</div>
				</div>
			</div>
			<div className="row align-items-center">
				<div className="col text-center">
					<div className="new_arrivals_sorting">
						<ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
							<li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">all</li>
							{
								allpr.map((i)=>{
									return(
										<li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter={"."+i.catname}>{i.catname}</li>
									)
								})
							}
							{/* <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">women's</li>
							<li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">accessories</li>
							<li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">men's</li> */}
						</ul>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<div className="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
							{
								products.map((i)=>{
									return (
										<div className={"product-item "+i.catid.catname}>
							<div className="product discount product_filter">
								<div className="product_image">
									<img src="images/product_1.png" alt="" />
								</div>
								<div className="favorite favorite_left"></div>
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-${i.prprice}</span></div>
								<div className="product_info">
									<h6 className="product_name"><a href="single.html">{i.prname}</a></h6>
									<div className="product_price">$520.00<span>$590.00</span></div>
								</div>
							</div>
							<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
						</div>
									)
								})
							}

					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default Products
