
const express = require('express');
const app = express();
const port = 3000;

// 1. הגדרת משתנים לאחסון הנתונים בהיקף גלובלי (כדי שיהיו נגישים לנתיבים)
let booksData;
let authorData;
let usersData;

// 2. טעינת הנתונים מתוך קובצי ה-JSON
try {
    // Node.js טוען אוטומטית JSON והופך אותו לאובייקט/מערך JavaScript
    booksData = require('./data/books.json');
    authorData = require('./data/authors.json');
    // משתמשים בשם הקובץ שהצענו: customers.json
    usersData = require('./data/customers.json'); 
    
    console.log("successfully");

} catch (error) {
    // טיפול שגיאות במקרה שקובץ חסר או לא תקין
    console.error("Error loading ");
    console.error("Details:", error.message);
    // עצירת השרת כי הוא אינו יכול לפעול ללא הנתונים הבסיסיים
    process.exit(1); 
}


app.get('/', (req, res) => {
    res.send('Server is running. Access data via /api/books, /api/author, or /api/users.');
});


app.get('/api/books', (req, res) => {
    res.json(booksData);
});


app.get('/api/author', (req, res) => {
    res.json(authorData);
});


app.get('/api/users', (req, res) => {
    res.json(usersData);
});


app.listen(port, () => {
    console.log(`🚀 Express server running successfully at http://localhost:${port}`);
    
});