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
}];
// console.log(productArray[2].name);




    for(var i = 0; i < productArray.length; i++){
        document.getElementById("mug").innerHTML += `<h2> ${ productArray[i].name } </h2><p>${productArray[i].description}</p><p>${productArray[i].price}</p><img src= ${productArray[i].url}>`;
          // "<h2>" + productArray[i].name + "</h2><p>" + productArray[i].description + "</p>"
// console.log(productArray[i])
}


