


var productArray2 = [
{name: "JavaScript mug",
description: "Durable ceramic with easy grip handle, classic coffee mug",
price: "$9.95",
url: "http://i3.cpcache.com/product/376541894/javascript_coffee_mug.jpg?side=Back&color=White&height=460&width=460&qv=90"},

{name: "Infant bodysuit",
description: "OK. You're a tech person, a programmer, and you have a baby. Need to remember when it's changing time? Well, here's your script. Stinky = true.",
price: "$17.95",
url: "http://i3.cpcache.com/product/734296079/stinky_baby_infant_bodysuit.jpg?width=225&height=225&Filters=%5b%7b%22name%22%3a%22background%22%2c%22value%22%3a%22F2F2F2%22%2c%22sequence%22%3a2%7d%5d", },

{name: "Mousepad",
description: "This quality non-slip mousepad features rubber backing to keep your mousepad from sliding.",
price: "$9.99",
url: "http://i3.cpcache.com/product/1031057160/i_write_code_mousepad.jpg?height=460&width=460&qv=9"}]


    for(var i = 0; i < productArray2.length; i++){
document.getElementById("mug2").innerHTML += `<h2> ${
productArray2[i].name } </h2><p>${productArray2[i].description}</p><p>${
productArray2[i].price}</p><img src=${productArray2[i].url}>`;
}
