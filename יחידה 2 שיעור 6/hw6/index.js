const express = require('express');
const app = express();
let students = ["אסתר", "יעל","יהודית","רחל","חני"];

app.use((req, res, next) => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('he-IL', { hour12: false });
    const randomNumber = Math.floor(Math.random() * 11);

    console.log(`[${timeString}] ניסיון קריאה: ${req.method} ${req.url} | מספר שהוגרל: ${randomNumber}`);
  if (randomNumber === 9) {
        console.log("גישה נדחתה! (שגיאה 401)");
        return res.status(401).send("Error 401: הקריאה אינה מאובטחת.");
    }
  next();
});



function addStudent(name) {
    students.push(name);
}

function removeStudent(name) {
    students = students.filter(s => s !== name);
}

app.get('/students', (req, res) => {
    res.send(students);
});


app.post('/students', (req, res) => {
    const newName = req.body.name; 
    if (newName) {
        students.push(newName);
        res.status(201).send(`התלמיד ${newName} נוסף בהצלחה`);
    } else {
        res.status(400).send("חובה לשלוח שם בתוך ה-body");
    }
});

app.listen(3000, () => {
    console.log('השרת פועל על פורט 3000');
});



