
const product = [
  {
    id: 0,
    title: "5 Leg Pc & 2 Dips Bucket",
    Image: "img/menu-item/D-PR00002144.jpg",
    price: 449.00,
    vegIcon: "img/login/non-veg.png",
    type: " Non veg",
    content: `' Save 29% on 5 Spicy Peri Peri Leg Pieces, paired with 2
    delicous dips (20gm each).'`
  },
  {
    id: 1,
    title: "Peri Peri 10 Leg Pc & 4 Dips",
    Image: "img/menu-item/D-PR00000892.jpg",
    price: 548.57,
    vegIcon: "img/login/non-veg.png",
    type: " Non veg",
    content: `' Save 29% on 5 Spicy Peri Peri Leg Pieces, paired with 2
    delicous dips (20gm each).'`
  },
  {
    id: 2,
    title: "Peri Peri 6pc Chicken Strips",
    Image: "img/menu-item/D-PR00002319.jpg",
    price: 399.00,
    vegIcon: "img/login/non-veg.png",
    type: " Non veg",
    content: `' Save 29% on 5 Spicy Peri Peri Leg Pieces, paired with 2
    delicous dips (20gm each).'`
  },
  {
    id: 3,
    title: "The Allu Arjun Combo",
    Image: "img/menu-item/chicken-bucket/D-PR00000638.jpg",
    price: 478.00,
    vegIcon: "img/login/non-veg.png",
    type: " Non veg",
    content: `'Save 29% on 5 Spicy Peri Peri Leg Pieces, paired with 2
    delicous dips (20gm each).'`
  },
  {
    id: 4,
    title: "Ultimate Savings Bucket",
    Image: "img/menu-item/chicken-bucket/D-PR00000638.jpg",
    price: 699.00,
    vegIcon: "img/login/non-veg.png",
    type: " Non veg",
    content: `'  Save 29% on 5 Spicy Peri Peri Leg Pieces, paired with 2
    delicous dips (20gm each).'`
  },
  {
    id: 5,
    title: "Big 8",
    Image: "img/menu-item/chicken-bucket/D-PR00000891.jpg",
    price: 684.76,
    vegIcon: "img/login/non-veg.png",
    type: " Non veg",
    content: `'  Save 29% on 5 Spicy Peri Peri Leg Pieces, paired with 2
    delicous dips (20gm each).'`
  },
  {
    id: 6,
    title: "Smoky Grilled Biryani Bucket",
    Image: "img/menu-item/briyani/D-K622.jpg",
    price: 229.52,
    vegIcon: "img/login/non-veg.png",
    type: " Non veg",
    content: `' Save 29% on 5 Spicy Peri Peri Leg Pieces, paired with 2
    delicous dips (20gm each).'`
  },
  {
    id: 7,
    title: "Popcorn Chicken Biryani Bucket",
    Image: "img/menu-item/briyani/D-K625.jpg",
    price: 229.52,
    vegIcon: "img/login/non-veg.png",
    type: " Non veg",
    content: `'  Save 29% on 5 Spicy Peri Peri Leg Pieces, paired with 2
    delicous dips (20gm each).'`
  },
  {
    id: 8,
    title: "  Classic Chicken Biryani Bucket Large",
    Image: "img/menu-item/briyani/D-K623.jpg",
    price: 199.05,
    vegIcon: "img/login/non-veg.png",
    type: " Non veg",
    content: `'Save 29% on 5 Spicy Peri Peri Leg Pieces, paired with 2
    delicous dips (20gm each).'`
  },
  {
    id: 9,
    title: "Mixed Zinger Doubles",
    Image: "img/menu-item/burger/D-PR00001025.jpg",
    price: 248.57,
    vegIcon: "img/login/non-veg.png",
    type: " Non veg",
    content: `' Save 29% on 5 Spicy Peri Peri Leg Pieces, paired with 2
    delicous dips (20gm each).'`
  },
  {
    id: 10,
    title: "2 Veg Krisper Burgers",
    Image: "img/menu-item/briyani/D-K625.jpg",
    price: 179.05,
    vegIcon: "img/login/non-veg.png",
    type: " Non veg",
    content: `'  Save 29% on 5 Spicy Peri Peri Leg Pieces, paired with 2
    delicous dips (20gm each).'`
  },
  {
    id: 11,
    title: "Tandoori Zinger Burger",
    Image: "img/menu-item/briyani/D-K623.jpg",
    price: 208.57,
    vegIcon: "img/login/non-veg.png",
    type: " Non veg",
    content: `'Save 29% on 5 Spicy Peri Peri Leg Pieces, paired with 2
    delicous dips (20gm each).'`
  },
  {
    id: 12,
    title: "Pepsi 475ml PET",
    Image: "img/menu-item/beverges/D-K350.jpg",
    price: 53.57,
  },
  {
    id: 13,
    title: "Pepsi Black Can 300 ml",
    Image: "img/menu-item/beverges/D-K486.jpg",
    price: 57.27,
  },
  {
    id: 14,
    title: "Mirinda Can 300 ml",
    Image: "img/menu-item/beverges/D-K488.jpg",
    price: 57.37,
  },
];

const categories = [...new Set(product.map( item => {
{return item}}))]

let i = 0;

const rootOne = document.getElementById('root1')
rootOne.innerHTML = categories.slice(0,3).map((item) => {
var { price,Image,type,vegIcon,content,title,id} = item;

return `
     <div  class="col-lg-4 col-md-8 col-9 mx-auto mx-lg-none my-2">
     <div id=${id} class="card h-100">
      <img
        src=${Image}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <span class=""
          ><img
            src=${vegIcon}
            alt="non-veg"
            loading="lazy"
            width="20px"
            class="object-fit"
          />
          ${type}</span
        >
        <span>₹</span>
        <span class="my-2">${price}</span>
        <p class="card-text mt-3">
         ${content}
        </p>
      </div>
      <div class="footer text-center border-0 my-2">
     `+"<button class='add-to-cart btn btn-danger fs-6 mb-2 px-2' onclick='addtocart("+(i++)+")'> ADD To Cart<i class='fa-solid fa-plus mx-2'></i></button>"+ 
    `</div> 
    </div>
    </div>`
  })
  .join("");

const roottwo = document.getElementById('root2')
roottwo.innerHTML = categories.slice(3, 6).map((item) => {
var { price,Image,type,vegIcon,content,title,id} = item;

    return `
     <div  class="col-lg-4 col-md-8 col-9 mx-auto mx-lg-none my-2">
    <div id=${id} class="card h-100">
      <img
        src=${Image}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <span class=""
          ><img
            src=${vegIcon}
            alt="non-veg"
            loading="lazy"
            width="20px"
            class="object-fit"
          />
          ${type}</span
        >
        <span>₹</span>
        <span class="my-2">${price}</span>
        <p class="card-text mt-3">
         ${content}
        </p>
      </div>
      <div class="footer text-center border-0 my-2">
      `+"<button class='add-to-cart btn btn-danger fs-6 mb-2 px-2' onclick='addtocart("+(i++)+")'> ADD To Cart<i class='fa-solid fa-plus mx-2'></i></button>"+ 
       `</div>
    </div>
    </div>
    `
  })
  .join("");

const rootthird = document.getElementById('root3')
rootthird.innerHTML = categories.slice(6, 9).map((item) => {
var { price,Image,type,vegIcon,content,title,id} = item;

    return `
     <div  class="col-lg-4 col-md-8 col-9 mx-auto mx-lg-none my-2">
    <div id=${id} class="card h-100">
      <img
        src=${Image}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <span class=""
          ><img
            src=${vegIcon}
            alt="non-veg"
            loading="lazy"
            width="20px"
            class="object-fit"
          />
          ${type}</span
        >
        <span>₹</span>
        <span class="my-2">${price}</span>
        <p class="card-text mt-3">
         ${content}
        </p>
      </div>
      <div class="footer text-center border-0 my-2">
      `+"<button class='add-to-cart btn btn-danger fs-6 mb-2 px-2' onclick='addtocart("+(i++)+")'> ADD To Cart<i class='fa-solid fa-plus mx-2'></i></button>"+ 
     `</div>
    </div>
    </div>
    `
  })
  .join("");

const rootfour = document.getElementById('root4')
rootfour.innerHTML = categories.slice(9, 12).map((item) => {
var { price,Image,type,vegIcon,content,title,id} = item;

    return `
     <div  class="col-lg-4 col-md-8 col-9 mx-auto mx-lg-none my-2">
    <div id=${id} class="card h-100">
      <img
        src=${Image}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <span class=""
          ><img
            src=${vegIcon}
            alt="non-veg"
            loading="lazy"
            width="20px"
            class="object-fit"
          />
          ${type}</span
        >
        <span>₹</span>
        <span class="my-2">${price}</span>
        <p class="card-text mt-3">
         ${content}
        </p>
      </div>
      <div class="footer text-center border-0 my-2">
      `+"<button class='add-to-cart btn btn-danger fs-6 mb-2 px-2' onclick='addtocart("+(i++)+")'> ADD To Cart<i class='fa-solid fa-plus mx-2'></i></button>"+ `
      </div>
    </div>
    </div>
    `
  })
  .join("");

  const rootfive = document.getElementById('root5')
  rootfive.innerHTML = categories.slice(12, 15).map((item) => {
  var { price,Image,title,id} = item;

      return `
       <div  class="col-lg-4 col-md-8 col-9 mx-auto mx-lg-none py-lg-4 pb-lg-5 my-2">
      <div id=${id} class="card h-100">
        <img
          src=${Image}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <span class=""
            >
          <span>₹</span>
          <span class="my-2">${price}</span>
        </div>
        <div class="footer text-center border-0 my-2">
        `+"<button class='add-to-cart btn btn-danger fs-6 mb-2 px-2' onclick='addtocart("+(i++)+")'> ADD To Cart<i class='fa-solid fa-plus mx-2'></i></button>"+ `
        </div>
      </div>
      </div>
      `
    }).join("");



var cart = [];

function addtocart(a) {
  cart.push({...categories[a]});
  displaycart();
}



function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let j = 0, total=0;
  document.getElementById("count").innerHTML = cart.length;

  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "your cart is empty";
    document.getElementById("total").innerHTML = "$"+0+".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { Image, title, price } = items;
        total=total+price;
        document.getElementById("total").innerHTML = "$ "+total;
        return (
          ` <div class='container d-inline align-center'>
              <div class="row border border-1">
              <div class='col-4'>
              <img class='img-fluid' src=${Image} Alt='...'/>
              </div>
              <div class="col-4 my-auto">
              <p class="fs-6">${title}</p>
              </div>
              <div class="col-4 my-auto">
              <h2 class="fs-6">${price}</h2>
             ` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div></div></div>"
        );
      })
      .join("");
  }
}
