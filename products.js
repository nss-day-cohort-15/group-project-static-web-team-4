

var productArray2 = [
{name: "JavaScript mug",
description: "Durable ceramic with easy grip handle, classic coffee mug",
price: "$9.95",
url: "http://i3.cpcache.com/product/376541894/javascript_coffee_mug.jpg?side=Back&color=White&height=460&width=460&qv=90"},

{name: "Infant bodysuit",
description: "OK. You're a tech person, a programmer, and you have a baby. Need to remember when it's changing time? Well, here's your script. Stinky = true.",
price: "17.95",
url: "http://i3.cpcache.com/product/734296079/stinky_baby_infant_bodysuit.jpg?width=225&height=225&Filters=%5b%7b%22name%22%3a%22background%22%2c%22value%22%3a%22F2F2F2%22%2c%22sequence%22%3a2%7d%5d", },

{name: "Mousepad",
description: "This quality non-slip mousepad features rubber backing to keep your mousepad from sliding.",
price: "$9.99",
url: "http://i3.cpcache.com/product/1031057160/i_write_code_mousepad.jpg?height=460&width=460&qv=9"}]


    for(var i = 0; i < productArray2.length; i++){
document.getElementById("mug").innerHTML += `<h2> ${
productArray[i].name } </h2><p>${productArray[i].description}</p><p>${
productArray[i].price}</p><img src=${productArray[i].url}>`;

}


// Another way to write this
 // "<h2>" + productArray[i].name + "</h2><p>" + productArray[i].description + "</p>"


// Name: JavaScript mug,
// Description: Durable ceramic with easy grip handle, classic coffee mug
// Price: $9.95,
// URL:


// Name: Infant bodysuit,
// Description: OK. You're a tech person, a programmer, and you have a baby. Need to remember when it's changing time? Well, here's your script. Stinky = true.""
// Price: $17.95,
// URL: http://www.cafepress.com/mf/73769200/stinky-baby_bodysuit?productId=734296079

// Name: Mousepad,
// Description: This quality non-slip mousepad measures 9.25"x7.75". Features rubber backing to keep your mousepad from sliding.
// Price: $9.99
// URL: http://www.cafepress.com/+i_write_code_mousepad,1031057160



// Create an array to hold your products.
// Each item in the array must be an object that contains the following information: name, description, price, and URL for product image. You can add more properties if that's what the team wants, but it must have those.
// The team will use JavaScript to add each product to the DOM.
// Each product must be a card, much like everyone made in the Static Web quiz. As a team, decide on the style of the card.
// The layout of the product page should be a grid of cards. 3-wide, 4-wide, 5-wide, the teams must decide how many cards are on each row.