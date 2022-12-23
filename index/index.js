gsap.from(".nav-item", {
  x: 300,
  opacity: 0,
  delay: 0.6, 
  duration: 1.5,
  ease: "power1.in",
  stagger: 0.6
})
gsap.from("h1", {
  opacity: 0,
  scale: 2,
  delay: 0.2, 
  duration: 1.3,
  ease: "power1.out",
})
gsap.to(".main-page-heading", {
  x: -15,
  scale: 1.2,
  delay: 0.5, 
  duration: 1.5,
  ease: "power1.out",
})
gsap.to(".main-page-btn", {
  // scale: 1.2,
  delay: 0.9, 
  rotate: 720,
  duration: 1.3,
  ease: "power1.out",
})
gsap.from(".logo", {
  y: -100,
  delay: 1.2, 
  duration: 1.5,
  ease: "bounce",
})
// Nav Bar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//Menu-slides
const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener("mouseover", ()=> {
    removeFocus();
    item.classList.add("selected");
    })
    removeFocus = () => {
        items.forEach(item =>{
            item.classList.remove("selected");
        })
    } 
})
// Menu-data
const menu = [
    {
      id: 1,
      title: "HOUSE SALAD",
      category: "salads",
      price: 8.49,
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      desc: `Organic romaine, avocado, chickpeas, red onions, tomato, carrot  and crostini.`,
    },
    {
      id: 2,
      title: "CHICKEN CAESAR",
      category: "salads",
      price: 13.99,
      img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      desc: `Chicken, romaine, Parmesan, lemon juice & crostini.`,
    },
    {
      id: 3,
      title: "BEET & FETA",
      category: "salads",
      price: 10.99,
      img: "https://images.unsplash.com/photo-1595574446720-ca5f6736b8fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80",
      desc: `
      Arugula, beets, feta, candied walnuts and roasted onions.`,
    },
    {
      id: 4,
      title: "FLATBREAD & DIPS",
      category: "appetizers",
      price: 20.99,
      img: "https://images.unsplash.com/photo-1611599539392-0198d33c4c1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      desc: `Prosciutto, goat cheese and premium mozzarella on a fig jam base topped with organic arugula`,
    },
    {
      id: 5,
      title: "MOZZARELLA BITE",
      category: "appetizers",
      price: 10.99,
      img: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      desc: `Hand-breaded, premium mozzarella baked to perfection and served with a side of marinara.`,
    },
    {
      id: 6,
      title: "CANNOLI",
      category: "desserts",
      price: 12.99,
      img: "https://images.unsplash.com/photo-1600975814842-69bd3df9c798?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      desc: `Fried pastry dough with a sweet creamy ricotta filling and powdered sugar.`,
    },
    {
      id: 7,
      title: "THE CAPRESE",
      category: "appetizers",
      price: 8.99,
      img: "https://images.unsplash.com/photo-1622637103261-ae624e188bd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80",
      desc: `Organic romaine, sliced Roma tomatoes, fresh mozzarella and basil drizzled with a balsamic glaze. Served with our house-made crostini.`,
    },
    {
      id: 8,
      title: "DULCE DE LECHE",
      category: "desserts",
      price: 10.99,
      img: "https://images.unsplash.com/photo-1611755308542-23d69842bc30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      desc: `Small dessert pizza, with Dulce de Leche spread, candied walnuts and powdered sugar.`,
    },
    {
      id: 9,
      title: "GARLIC KNOTS",
      category: "appetizers",
      price: 6.99,
      img: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FybGljJTIwYnJlYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      desc: `House-made with fresh garlic and mozzarella cheese. Served with marinara and pesto-infused ranch.`,
    },
    {
      id: 10,
      title: "NUTELLA PIE",
      category: "desserts",
      price: 11.99,
      img: "https://images.unsplash.com/photo-1546898976-9850b9bba1e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      desc: `Dessert pizza with Nutella spread, candied walnuts and powdered sugar.`,
    },
  ];
  // Filter Menu
const sectionCenter = document.querySelector(".menu");
const btns = document.querySelectorAll(".menu-filter-btn");

window.addEventListener("DOMContentLoaded", displayMenuItems(menu));

btns.forEach(btn => {
  btn.addEventListener("click", function(event){
    let keyCategory = event.target.dataset.id;
    let newMenu = menu.filter(menuItem => {
      if(menuItem.category === keyCategory){
        return menuItem;
      }
    }) 
    if(keyCategory === "all"){
      displayMenuItems(menu);
    }
    else {
      displayMenuItems(newMenu);
    }
  });
});
function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(element => {
    return`<section class="menu">
            <article class="section-senter">
                <div class="img-container">
                    <img class="menu-item-img" src=${element.img} alt=${element.title}>
                </div>
                <div class="menu-description">
                    <h5 class="name">${element.title}</h5>
                    <h5 class="cost">$ ${element.price}</h5>
                    <p class="desc">${element.desc}</p>
                </div>
            </article>
        </section>`
        })
        displayMenu = displayMenu.join("");
        sectionCenter.innerHTML = displayMenu;
}
// reviews data
const reviews = [
  {
    id: 1,
    name: "Susan Walter",
    img:
      "https://images.unsplash.com/photo-1604364721460-0cbc5866219d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    text:
      "Food has always been excellent never once had a problem with a order I recommend this place to many people and all of them said the same thing. No matter what you order your going to enjoy it",
  },
  {
    id: 2,
    name: "Julia Jones",
    img:
      "https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    text:
      "Pizza was very good, the only bad  thing I would say is I would have liked it to be just a bit more crunchy crust but it was still very delicious. We ordered a large Veggie and garlic knots. Both items were absolutely amazing.",
  },
  {
    id: 3,
    name: "Peter Weber",
    img:
      "https://images.unsplash.com/photo-1583195763986-0231686dcd43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80",
    text:
      "I tried this place last night for the first time and let me just say WOW! This place is SPECTACULAR! They have the BEST garlic knots I've ever had in my life and for the cheapest price ever. The pizza is out of this world .",
  },
  {
    id: 4,
    name: "Harry Anderson",
    img:
      "https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    text:
      "I was not disappointed, and the food was fantastic. The pizza was cooked perfectly just the way I like it and the garlic knots were some of the best I’ve had in the area. Keep up the good work!",
  },
];
const personImg = document.querySelector("#person-img");
const personName = document.querySelector("#person-name");
const personText = document.querySelector("#person-text");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
let i = 0;

window.addEventListener("DOMContentLoaded", displayPerson());

function displayPerson(){
  let item = reviews[i];
  personImg.src = item.img;
  personName.textContent = item.name;
  personText.textContent = item.text;
  
}
next.addEventListener("click", function(){
  i++;
    if(i > reviews.length - 1){
    i = 0;
  }
  displayPerson();
})
prev.addEventListener("click", function(){
  i--;
  if(i < 0){
    i = reviews.length - 1
  }
  displayPerson()
})