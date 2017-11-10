var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(99*Math.random() + 1)
 cart.push({[item]: price})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  let line
  if (cart.length == 0) {
    line = "Your shopping cart is empty."
  } else {
    line = "In your cart, you have "
    for (let i = 0; i < cart.length; i++ ) {
      let name = Object.keys(cart[i])[0]
      let price = cart[i][name]
      line += `${name} at $${price}`
      if (cart.length == i + 1) {
        line += "."
      } else if (cart.length == 2 && i == 0) {
        line += " and "
      } else if (cart.length > 2 && i + 2 == cart.length) {
        line += ", and "
      } else {
        line += ", "
      }
    }
  }
  console.log(line)
}

function total() {
  let tot = 0
  for (let i = 0; i < cart.length; i++) {
    let name = Object.keys(cart[i])[0]
    tot += cart[i][name]
  }
  return tot
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
