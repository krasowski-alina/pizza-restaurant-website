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


