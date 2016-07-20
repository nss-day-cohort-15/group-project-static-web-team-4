// Product page

// The team's product page will be driven from JavaScript code.
// Decide on the names of, at least,
// 8 products that your business manufactures.
// The product page must have a linked JavaScript file.

// Create an array to hold your products.
// Each item in the array must be an object that contains the following information:
// name, description, price, and URL for product image.
// You can add more properties if that's what the team wants, but it must have those.
// The team will use JavaScript to add each product to the DOM.
// Each product must be a card, much like everyone made in the Static Web quiz.
//  As a team, decide on the style of the card.
// The layout of the product page should be a grid of cards.
//  3-wide, 4-wide, 5-wide, the teams must decide how many cards are on each row.


    var productArray = [
  {name: "The Internet&rsquo;s Broken Mug",
  description: "Add some personality to your favorite brew. Good for all types of beverages, this classic container is a great way to make your hot cocoa cool again.",
  price: "$24.97",
  url: "https://image.spreadshirtmedia.com/image-server/v1/products/1012260118/views/1,width=800,height=800,appearanceId=258,version=1468544801.webp" }, //will use .innerHTML to code into DOM
  {name: "Hip Hip Array Joke Apron",
  description: "For the chef in the family, this full-body apron is perfect for keeping your clothing clean. Complete with pockets for your utensils and condiments.",
  price: "$22.98",
  url: "https://image.spreadshirtmedia.com/image-server/v1/products/14172065T158A2PC118720347PA238PT14X0Y119S81/views/1,width=800,height=800,appearanceId=2,version=1439463983.webp"},
  {name: "Life is too short Mousepad",
  description: "If you&rsquo;ve used a mouse on your desk with no mousepad, you know it can be shaky. Avoid the frustration in style with an ergonomic mousepad.",
  price: "$19.99",
  url: "https://image.spreadshirtmedia.com/image-server/v1/products/102973423T993A1PC1012583622PA2168PT10X22Y0S94/views/1,width=800,height=800,appearanceId=1,version=1440749389.webp"
},
  {name: "JavaScript mug",
  description: "Durable ceramic classic coffee mug. Magic Mug is black (design semi-hidden). Pour hot liquid and reveal the white and your design.",
  price: "$9.95",
  url: "http://i3.cpcache.com/product/376541894/javascript_coffee_mug.jpg?side=Back&color=White&height=460&width=460&qv=90"},

  {name: "Infant bodysuit",
  description: "OK. You're a tech person, a programmer, and you have a baby. Need to remember when it's changing time? Well, here's your script. Stinky = true.",
  price: "$17.95",
  url: "http://i3.cpcache.com/product/734296079/stinky_baby_infant_bodysuit.jpg?width=225&height=225&Filters=%5b%7b%22name%22%3a%22background%22%2c%22value%22%3a%22F2F2F2%22%2c%22sequence%22%3a2%7d%5d", },

  {name: "Mousepad",
  description: "This quality mousepad features rubber backing to keep it from sliding. Use it as a gaming pad, or simply to protect your desktop from scratches.",
  price: "$9.99",
  url: "http://i3.cpcache.com/product/1031057160/i_write_code_mousepad.jpg?height=460&width=460&qv=9"},

 {name:"I heart CSS pant",
 description: "These comfortable classic men's boxer shorts are equipped with a button fly and an exposed gray elastic waistband.",
 price:"$19.48",
 url:"https://image.spreadshirtmedia.com/image-server/v1/products/12771508T715A1PC113258726PA1517PT14X26Y0/views/1,width=800,height=800,appearanceId=1,version=1440417743.webp"},

  {name:"I heart CSS jacket",
description: "A current twist on the old-school varsity favorite, this trendy varsity sweatshirt jacket is very fashion-forward.",
price:"$55.48",
url:"https://image.spreadshirtmedia.com/image-server/v1/products/12771508T835A400PC113258726PA1758PT14X183Y39S65/views/1,width=800,height=800,appearanceId=400,version=1440417743.webp"},

  {name:"I heart CSS Sweatshirt",
  description: "Another year of the crew! Fitted raglan fleece crew, offered in a light weight fleece blend. Contrasting sleeves make this piece stand out from the rest.",
  price:"$31.48",
  url:"https://image.spreadshirtmedia.com/image-server/v1/products/12771508T908A550PC113258726PA1890PT14X0Y68S108/views/1,width=800,height=800,appearanceId=550,version=1440417743.webp"}
];
// console.log(productArray[2].name);




for(var i = 0; i < productArray.length; i++){
        document.getElementById("mug").innerHTML += `<h2> ${ productArray[i].name } </h2><p>${productArray[i].description}</p><p>${productArray[i].price}</p><img src= ${productArray[i].url}>`;
          // "<h2>" + productArray[i].name + "</h2><p>" + productArray[i].description + "</p>"
// console.log(productArray[i])
}

var navLinks = document.querySelectorAll('li')
var pages = document.querySelectorAll('.page')

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', clickedNavLink);
}

function clickedNavLink (evt) {
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.add('hidden')
  }
  showPage(evt.target.hash);
}

function showPage (id) {
  if (id) {
    document.querySelector(id).classList.remove('hidden')  // <---all this removes the # from the url line when on load
  } else {
    document.querySelector('#home').classList.remove('hidden')
  }
};

showPage(location.hash)


