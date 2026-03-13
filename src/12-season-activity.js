/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(mon, temp) {
  if(mon === 12 || mon === 1 || mon === 2){
    if(temp < 0){
      return ({season: "Winter", activity: "skiing"})
    }
    else { return ({season: "Winter", activity: "ice skating"}) }
  }
  else if(mon === 3 || mon === 4 || mon === 5){
    if(temp > 20 ){
      return ({season: "Spring", activity: "hiking"})
    }
    else { return ({season: "Spring", activity: "museum visit"}) }
  }
  else if(mon === 6 || mon === 7 || mon === 8){
    if(temp > 35 ){
      return ({season: "Summer", activity: "swimming"})
    }
    else { return ({season: "Summer", activity: "cycling"}) }
  }
  else if(mon === 9 || mon === 10 || mon === 11){
    if(temp > 15 ){
      return ({season: "Autumn", activity: "nature walk"})
    }
    else { return ({season: "Autumn", activity: "reading at a cafe"}) }
  }
  else { return null }
}
