// import {trip} from './trips.js';
// export function selectTrip(allTrips){
//     const byPrices=[...allTrips].sort((a,b)=>a.pric-b.pric);
//     let selectTrip=[];

//      const second = byPrices[1];
//     selectedTrips.push(second);

//     // טיול שנסגר אחרי 19:00
//     const lateTrip = byPrices.find(site => site.taim.closs > 19);
//     if (lateTrip) {
//         selectedTrips.push(lateTrip);
//     }

//     return selectedTrips;
// }
// const favorites = selectTrip(trip);
// console.log(favorites);

// // }
// // //האתר השני הכי זול
// // const second=byPrices[1];
// // selectTrip.push(second);

// // const close=byPrices.find(site=>site.taim.close>19);
// // if(close){
// //     selectTrip.push(close);
// // }







import { trip } from './trips.js';

export function selectTrip(allTrips) {
    // ממיין את כל הטיולים מהזול ליקר
    const byPrices = [...allTrips].sort((a, b) => a.pric - b.pric);
    let selectedTrips = [];

    // הטיול השני הכי זול
    const second = byPrices[1];
    selectedTrips.push(second);

    // טיול שנסגר אחרי 19:00
    const lateTrip = byPrices.find(site => site.taim.closs > 19);
    if (lateTrip) {
        selectedTrips.push(lateTrip);
    }

    return selectedTrips;
}

// קריאה לפונקציה ובדיקה בתוצאה
const favorites = selectTrip(trip);
console.log(favorites);
