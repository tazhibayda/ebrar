const pruductBtn = document.querySelectorAll('.toBasket');
const basket = document.querySelectorAll('.countBask')

let products = [];

const addToCart = (e) => {
	let btn = e;
	let countOfProducts = products.length;
	// let im = document.getElementById('123').src;
	// console.log(im)	

	const price = btn.parentElement.previousSibling.previousSibling.querySelector('.price_new').innerText;
	const name = btn.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.innerText;
	const lol = btn.parentElement.parentElement.parentElement.getElementsByTagName('img')[0].src;
	const counter = document.querySelector('.countBask');
	counter.innerText = countOfProducts+1;
	products.push(
		{
			name:name,
			price:price,
			src:lol
		}
	)
	addToCarHandler(products);
}

const addToCarHandler = (products) => {
	let htmlText = "";
;	const menu = document.querySelector('.dropdown-menu');
	products.map(item => {
		htmlText += `
			<li>
				<div class="card mb-3" style="max-width: 540px;">
				  <div class="row g-0">
				    <div class="col-md-4">
				      <img src="${item.src}" class="img-fluid rounded-start top_margin" alt="...">
				    </div>
				    <div class="col-md-8">
				      <div class="card-body">
				        <p class="card-text">${item.name}</p>
				        <p class="card-text"><strong >${item.price}</strong></p>
				      </div>
				    </div>
				    <button class="btn">
				    <i class="fas fa-trash-alt" style=""></i>
				      	</button>
				  </div>
			</div>
			</li>
		`
	})
	menu.innerHTML = htmlText;
}