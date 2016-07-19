var products3 = [
{name: "JavaScript mug", description: "Durable ceramic with easy grip handle, classic coffee mug", price: "$9.95", url: "http://www.cafepress.com/mf/33645479/javascript-coffee_mugs?productId=376541894"},
{name: "Infant bodysuit", description: "OK. You're a tech person, a programmer, and you have a baby. Need to remember when it's changing time? Well, here's your script. Stinky = true.", URL: "http://www.cafepress.com/mf/73769200/stinky-baby_bodysuit?productId=734296079" }
{name: "Mousepad", description: "This quality non-slip mousepad features rubber backing to keep your mousepad from sliding.", url: "http://www.cafepress.com/+i_write_code_mousepad,1031057160" }]


function placeProducts ( ) {
  for (var i = 0; i < products3.length; i++) {
    document.getElementById("name3").innerHTML = products3.name;
    document.getElementById("description3").innerHTML;
    products3.price = document.getElementById("price3").innerHTML;
    products3.URL = document.getElementById("url3").innerHTML;
  }

}


console.log(products3.name[i])



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



Create an array to hold your products.
Each item in the array must be an object that contains the following information: name, description, price, and URL for product image. You can add more properties if that's what the team wants, but it must have those.
The team will use JavaScript to add each product to the DOM.
Each product must be a card, much like everyone made in the Static Web quiz. As a team, decide on the style of the card.
The layout of the product page should be a grid of cards. 3-wide, 4-wide, 5-wide, the teams must decide how many cards are on each row.