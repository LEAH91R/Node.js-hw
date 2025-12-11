
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
app.use(express.json());
let bookIdCounter=booksData.length>0? Math.max(...booksData.map(book=>book.id))+1 : 1;


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

app.get('/api/books/:id', (req, res) => {
    const bookId= parseInt(req.params.id);
    const book = booksData.find(b => b.id === bookId);

    if (book) {
        res.json(book);
    } else {
        res.status(404).send('הספר לא נמצא (404)');
    }
});

app.post('/api/books', (req, res) => {
    const newBookData = req.body;
    if(!newBookData.title ||!newBookData.authorId){
        return res.status(400).send('נדרשים שדות: title ו-authorId');
    }
    const newBook = {
        id: bookIdCounter++, // שימוש במונה והגדלתו
        title: newBookData.title,
        authorId: parseInt(newBookData.authorId),
        year: newBookData.year || null 
    };
    booksData.push(newBook);
    res.status(201).json(newBook); 
});

app.put('/api/books/:id', (req, res) => {
    const bookId=parseInt(req.params.id);
    const updateData = req.body;
    const bookIndex = booksData.findIndex(b => b.id === bookId);
    if (bookIndex !== -1) {
        // עדכון האובייקט - שימוש באופרטור ... לשמירת שדות קיימים ועדכון החדשים
        booksData[bookIndex] = { 
            ...booksData[bookIndex], 
            ...updatedData,
            id: bookId // ודא שה-ID נשאר קבוע
        };
        res.json(booksData[bookIndex]);
    } else {
        res.status(404).send('הספר לא נמצא לעדכון (404)');
    }
});
app.delete('/api/books/:id', (req, res) => {
    const bookId=parseInt(req.params.id);
    const initialLength = booksData.length;
    booksData = booksData.filter(b => b.id !== bookId);
    if (booksData.length < initialLength) {
        res.status(204).send();
    } else {
        res.status(404).send('הספר לא נמצא למחיקה (404)');
    }


app.listen(port, () => {
    console.log(`🚀 Express server running successfully at http://localhost:${port}`);
  
});
}
);
