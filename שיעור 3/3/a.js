// const { error } = require('console');
// const fsPromises = require('fs/promises');//מאפשרת קריאת טקסטים
// // const filePromise=fsPromises.readFile('C:\\Users\\לאה הצדיקה\\Pictures\\Node.Js\\ש.ב\\3','utf8');
// // const filePath ='C:\\Users\\לאה הצדיקה\\Pictures\\Node.Js\\ש.ב\\3\\a.json';
// const filePath='./a.json';
// function then_pas(path){
//     fsPromises.readFile(path, 'utf8')//קריאת הקובץ
//      .then(fileContent =>{
//         const dataArray = JSON.parse(fileContent);
//         //סינון של האנשים שהם פעילים 
//         const obj=dataArray.filter(person=> person.isActive==true);
//         //מיפוי של השמות של האנשים שהם פעילים
//         const isActive_person=activePeople.map(person=>person.name);
//         return isActive_person;
//      })
//      .then (isActive_person=>{
//         console.log("שמות האנשים הפעילים");
//         console.log(isActive_person);

//      })
//      .catch(error=>{
//         console.log("שגיעה במהלך עיבוד הקובץ",error.message);
//      });
//      processFileWithPromiseChain(filePath);

//     }







// // async function processFile() {
// //   try {
// //     // 1. קריאה א-סינכרונית ש"ממתינה" לתוצאה (Resolve)
// //     const data = await readFile('config.txt', 'utf8');
    
// //     // 2. קוד זה ירוץ רק לאחר שהנתונים התקבלו בהצלחה
// //     console.log("תוכן הקובץ התקבל:");
// //     console.log(data);
    
// //   } catch (err) {
// //     // 3. אם יש כשל (Reject), בלוק ה-catch יטפל בשגיאה
// //     console.error("שגיאה בקריאת הקובץ:", err.message);
// //   }
// // }





// // processFile();
const fsPromises = require('fs/promises');

// הנתיב היחסי './a.json' הוא מצוין, בתנאי שקובץ ה-JSON נמצא באותה תיקייה כמו קובץ ה-JS.
const filePath = './a.json';

// הפונקציה המבצעת את קריאת הקובץ ועיבוד הנתונים
function processFileWithPromiseChain(path) {
    fsPromises.readFile(path, 'utf8') // קריאת הקובץ
        .then(fileContent => {
            // 1. ניתוח JSON
            const dataArray = JSON.parse(fileContent);

            // 2. סינון: יצירת מערך חדש רק עם האנשים הפעילים
            const activePeople = dataArray.filter(person => person.isActive === true);

            // 3. מיפוי: יצירת מערך שמות של האנשים הפעילים
            const activeNames = activePeople.map(person => person.name);
            const namesToChunk=[...activeNames];
            const arr_final=


            // מחזירים את השמות לבלוק then הבא
            return activeNames;
        })
        .then(activeNames => {
            // הדפסת התוצאה
            console.log("שמות האנשים הפעילים");
            console.log(activeNames);
        })
        .catch(error => {
            // טיפול בשגיאות
            console.error("שגיאה במהלך עיבוד הקובץ:", error.message);
        });
}

// הפעלת הפונקציה
processFileWithPromiseChain(filePath);