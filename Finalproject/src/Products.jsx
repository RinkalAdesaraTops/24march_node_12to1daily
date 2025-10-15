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

	// Re-attach isotope/filter click handlers after React renders categories/products.
	useEffect(() => {
		const $ = window.$ || window.jQuery;
		const attach = () => {
			if (!$ || !$.fn || !$.fn.isotope) return;

			// ensure isotope has basic init (safe to call multiple times)
			try {
				$('.product-grid').isotope({ itemSelector: '.product-item', layoutMode: 'fitRows' });
			} catch (err) {
				// ignore if isotope not ready
			}

			const buttons = document.querySelectorAll('.grid_sorting_button');
			buttons.forEach(btn => {
				// use a stable handler so we can clean up if needed
				btn.onclick = function(e) {
					e.preventDefault();
					try {
						$('.grid_sorting_button.active').removeClass('active');
						$(this).addClass('active');
						const selector = $(this).attr('data-filter');
						$('.product-grid').isotope({
							filter: selector,
							animationOptions: { duration: 750, easing: 'linear', queue: false }
						});
					} catch (err) {
						console.warn('Isotope filter failed', err);
					}
					return false;
				}
			});
		}

		// Small timeout to ensure DOM updated by React before we attach
		const t = setTimeout(attach, 50);
		return () => {
			clearTimeout(t);
			const buttons = document.querySelectorAll('.grid_sorting_button');
			buttons.forEach(btn => { btn.onclick = null; });
		}
	}, [allpr, products]);

	// Contract: handleAddToCart will be called when the user clicks "add to cart".
	// Inputs: click event + product object
	// Outputs: prevents default navigation and logs/stores the product (no network side-effects)
	// Errors: safe for missing id/name
	const handleAddToCart = (e, product) => {
		e.preventDefault();
		// Minimal behavior: log to console and store a small cart in localStorage
		try {
			console.log('Add to cart clicked:', product);
			const existing = JSON.parse(localStorage.getItem('cart') || '[]');
			const next = [...existing, { id: product?._id || product?.id || product?.prname, name: product?.prname || 'unknown', price: product?.prprice || null }];
			localStorage.setItem('cart', JSON.stringify(next));
		} catch (err) {
			console.warn('Could not update cart', err);
		}
	}

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
									const raw = i.catname || '';
									const safe = (raw || '').toString().trim().replace(/\s+/g, '-').toLowerCase();
									const filter = '.' + safe;
									return(
										<li key={i._id || raw} className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter={filter}>{raw}</li>
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
									const rawCat = i.catid?.catname || '';
									const catClass = (rawCat || '').toString().trim().replace(/\s+/g, '-').toLowerCase();
									return (
										<div key={i._id || i.prname} className={`product-item ${catClass}`}>
							<div className="product discount product_filter">
								<div className="product_image">
									<img src={`admin/public/uploads/${i.primage}`} alt="" />
								</div>
								<div className="favorite favorite_left"></div>
								<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-${i.prprice}</span></div>
								<div className="product_info">
									<h6 className="product_name"><a href="single.html">{i.prname}</a></h6>
									<div className="product_price">$520.00<span>$590.00</span></div>
									</div>
							</div>
							<div className="red_button add_to_cart_button">
								<a href="#" onClick={(e)=>handleAddToCart(e,i)}>add to cart</a>
							</div>
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
