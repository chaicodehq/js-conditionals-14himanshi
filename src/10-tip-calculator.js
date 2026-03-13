/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  var tipAmount;
  function percentage(rating, total){
    return Number(((rating / 100) * total).toFixed(2))
  }
  if(serviceRating < 1 || serviceRating > 5 || billAmount <= 0 ){
    return null
  }
  else if(serviceRating === 1){
    tipAmount = percentage(5, billAmount);
    return {tipPercentage: 5, tipAmount: Math.trunc(tipAmount), totalAmount: Math.trunc(billAmount + tipAmount)}
  }
  else if(serviceRating === 2){
    tipAmount = percentage(10, billAmount);
    return {tipPercentage: 10, tipAmount: tipAmount, totalAmount: (billAmount + tipAmount)}
  }
  else if(serviceRating === 3){
    tipAmount = percentage(15, billAmount);
    return {tipPercentage: 15, tipAmount: tipAmount, totalAmount: (billAmount + tipAmount)}
  }
  else if(serviceRating === 4){
    tipAmount = percentage(20, billAmount);
    return {tipPercentage: 20, tipAmount: tipAmount, totalAmount: (billAmount + tipAmount)}
  }
  else if(serviceRating === 5){
    tipAmount = percentage(25, billAmount);
    return {tipPercentage: 25, tipAmount: tipAmount, totalAmount: (billAmount + tipAmount)}
  }
  else{
    return null;
  }
}
