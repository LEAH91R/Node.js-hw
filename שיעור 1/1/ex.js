let trip = [
    {
        name: "נחל חרמון",
        adrees: "צפון",
        discrab: "רטוב",
        pric: 50,
        taim: {
            open: 7,
            closs: 22,
        },
        to_take: ["מגבת", "נעליים סגורות"]
    },
    {
        name: "מדבר יהודה",
        adrees: "דרום",
        discrab: "יבש",
        pric: 100,
        taim: {
            open: 10,
            closs: 21,
        },
        to_take: ["כובע שמש", "נעליים סגורות"]

    },
    {
        name: "נחל קיבוצים",
        adrees: "צפון",
        discrab: "רטוב",
        pric: 10,
        taim: {
            open: 8,
            closs: 20,
        },
        to_take: ["מגבת", "נעליים סגורות"]

    },
    {
        name: "גשר הצבים ",
        adrees: "צפון",
        discrab: "יבש",
        pric: 0,
        taim: {
            open: 10,
            closs: 17,
        },
        to_take: ["אוכל", "נעליים סגורות"]

    },
    {
        name: "מכתש רמון ",
        adrees: "דרום",
        discrab: "יבש",
        pric: 200,
        taim: {
            open: 21,
            closs: 6,
        },
        to_take: ["פנס קטן", "נעליים סגורות"]

    },
    {
        name: "נחל עמוד",
        adrees: "צפון",
        discrab: "רטוב",
        pric: 40,
        taim: {
            open: 6,
            closs: 23,
        },
        to_take: ["מגבת", "נעליים סגורות"]

    }
];
trip.sort((a,b)=>b.pric-a.pric);
console.log(trip);

//האתר הכמעט הכי זול
let selectTrip=[];
let byPrices= [...trip].sort((a,b) => a.pric - b.pric);
let almot=byPrices[1];
selectTrip.push(almot);

//האתר הזול ביותר שנסגר אחרי 7 בערב
let closs_after_7=byPrices.find(site =>site.taim.closs>19);
if(closs_after_7)
    selectTrip.push(closs_after_7);

//האתר היקר ביותר שנפתח לפני 9 בבוקר
let pric_9=byPrices.find(site=>site.taim.open>9);
if(pric_9)
    selectTrip.push(selectTrip);

selectTrip=selectTrip.filter((trip,index,self)=> index === self.findIndex(t => t.name === trip.name));


// let nestedAccessories = trip.map(site => site.to_take);
// let allAccessories = trip.map(site => site.to_take).flat();
// console.log("\nמערך האביזרים (דרך קצרה):");
// console.log(allAccessories);