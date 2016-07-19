var products = [
  {name:"I heart CSS pant", description: "These comfortable classic men's boxer shorts are equipped with a button fly and an exposed gray elastic waistband. Made from 100% cotton with a fabric weight of 4.3 oz. Item is non returnable.",price:"$19.48", URL:"https://image.spreadshirtmedia.com/image-server/v1/products/12771508T715A1PC113258726PA1517PT14X26Y0/views/1,width=800,height=800,appearanceId=1,version=1440417743.webp"
  },
  {name:"I heart CSS jacket", description: "A current twist on the old-school varsity favorite, this trendy varsity sweatshirt jacket is very fashion-forward. It is warm and super comfortable and great for the fall. This one screams football games and raking the leaves.",price:"$55.48", URL:"https://image.spreadshirtmedia.com/image-server/v1/products/12771508T835A400PC113258726PA1758PT14X183Y39S65/views/1,width=800,height=800,appearanceId=400,version=1440417743.webp"
  },
  {name:"I heart CSS Sweatshirt", description: "Another year of the crew! Fitted raglan fleece crew, offered in a light weight fleece blend. Contrasting sleeves make this piece stand out from the rest.",price:"$31.48", URL:"https://image.spreadshirtmedia.com/image-server/v1/products/12771508T908A550PC113258726PA1890PT14X0Y68S108/views/1,width=800,height=800,appearanceId=550,version=1440417743.webp"
  }

]

for(var i = 0; i < products.length; i++) {
    document.getElementById("div1").innerHTML += `<h2> ${ products[i].name } </h2><p> ${products[i].description} </p><p> ${products[i].price}</p><img src=${products[i].URL}>`;
}




