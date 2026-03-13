/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  var price=0
  if(size === "small"){
    price = price + 3.00
    if(type === "latte"){
      if(extras.whippedCream && extras.extraShot){
        price = price + 2.25
      }
      else if(extras.whippedCream){
        price = price + 1.50
      }
      else if(extras.extraShot){
        price = price + 1.75
      }
      else { price = price + 1.00}
    }
    else if(type === "regular"){
      if(extras.whippedCream && extras.extraShot){
        price = price + 1.25
      }
      else if(extras.whippedCream){
        price = price + 0.50
      }
      else if(extras.extraShot){
        price = price + 0.75
      }
      else { price = price + 0.00}
    }
    else if(type === "cappuccino"){
      if(extras.whippedCream && extras.extraShot){
        price = price + 2.75
      }
      else if(extras.whippedCream){
        price = price + 2.00
      }
      else if(extras.extraShot){
        price = price + 2.25
      }
      else { price = price + 1.50}
    }
    else if(type === "mocha"){
      if(extras.whippedCream && extras.extraShot){
        price = price + 3.25
      }
      else if(extras.whippedCream){
        price = price + 2.50
      }
      else if(extras.extraShot){
        price = price + 2.75
      }
      else { price = price + 2.00}
    }
    else { return -1 }
  }
  else if(size === "medium"){
    price = price + 4.00
    if(type === "regular"){
      if(extras.whippedCream && extras.extraShot){
        price = price + 1.25
      }
      else if(extras.whippedCream){
        price = price + 0.50
      }
      else if(extras.extraShot){
        price = price + 0.75
      }
      else { price = price + 0.00}
    }
    else if(type === "latte"){
      if(extras.whippedCream && extras.extraShot){
        price = price + 2.25
      }
      else if(extras.whippedCream){
        price = price + 1.50
      }
      else if(extras.extraShot){
        price = price + 1.75
      }
      else { price = price + 1.00}
    }
    else if(type === "cappuccino"){
      if(extras.whippedCream && extras.extraShot){
        price = price + 2.75
      }
      else if(extras.whippedCream){
        price = price + 2.00
      }
      else if(extras.extraShot){
        price = price + 2.25
      }
      else { price = price + 1.50}
    }
    else if(type === "mocha"){
      if(extras.whippedCream && extras.extraShot){
        price = price + 3.25
      }
      else if(extras.whippedCream){
        price = price + 2.50
      }
      else if(extras.extraShot){
        price = price + 2.75
      }
      else { price = price + 2.00}
    }
    else { return -1 }
  }
  else if(size === "large"){
    price = price + 5.00
    if(type === "regular"){
      if(extras.whippedCream && extras.extraShot){
        price = price + 1.25
      }
      else if(extras.whippedCream){
        price = price + 0.50
      }
      else if(extras.extraShot){
        price = price + 0.75
      }
      else { price = price + 0.00}
    }
    else if(type === "latte"){
      if(extras.whippedCream && extras.extraShot){
        price = price + 2.25
      }
      else if(extras.whippedCream){
        price = price + 1.50
      }
      else if(extras.extraShot){
        price = price + 1.75
      }
      else { price = price + 1.00}
    }
    else if(type === "cappuccino"){
      if(extras.whippedCream && extras.extraShot){
        price = price + 2.75
      }
      else if(extras.whippedCream){
        price = price + 2.00
      }
      else if(extras.extraShot){
        price = price + 2.25
      }
      else { price = price + 1.50}
    }
    else if(type === "mocha"){
      if(extras.whippedCream && extras.extraShot){
        price = price + 3.25
      }
      else if(extras.whippedCream){
        price = price + 2.50
      }
      else if(extras.extraShot){
        price = price + 2.75
      }
      else { price = price + 2.00}
    }
    else { return -1 }
  }
  else { return -1 }
  return Number(price.toFixed(2))
}


