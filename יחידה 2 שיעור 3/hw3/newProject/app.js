
const express = require('express');
const app = express();
const port = 3000;

// ייבוא כל קובצי ה-Routes
const bookRouter = require('./routes/bookRoutes'); 
const authorRouter = require('./routes/authorRoutes');
const userRouter = require('./routes/userRoutes');

// טעינת הנתונים (נשארת ב-app.js כדי לוודא שהשרת עולה רק עם נתונים תקינים)
try {
    require('./data/books.json'); // טוענים כדי לבדוק תקינות
    require('./data/authors.json');
    require('./data/customers.json'); 
    
    console.log("Data loaded successfully.");

} catch (error) {
    console.error("Error loading data. Details:", error.message);
    process.exit(1); 
}

app.use(express.json()); // Middleware לקריאת גוף בקשות JSON

// נתיב בסיסי
app.get('/', (req, res) => {
    res.send('Server is running. Access data via /api/books, /api/author, or /api/users.');
});


// 1. חיבור ה-Router של הספרים
app.use('/api/books', bookRouter);

// 2. חיבור ה-Router של המחברים
app.use('/api/author', authorRouter);

// 3. חיבור ה-Router של המשתמשים
app.use('/api/users', userRouter);

// **4. טיפול בשגיאות גלובליות (_global error handler)**
// Middleware זה תמיד מקבל 4 ארגומנטים (err, req, res, next)
app.use((err, req, res, next) => {
    console.error("שגיאה גלובלית:", err.stack); // הדפסת השגיאה המלאה ל-console.log
    
    // סטטוס 500 Internal Server Error
    res.status(500).json({
        status: 'error',
        message: 'קרתה שגיאה בשרת.' // הודעה כללית למשתמש
    });
});


// 5. הפעלת השרת
app.listen(port, () => {
    console.log(`🚀 Express server running successfully at http://localhost:${port}`);
});


