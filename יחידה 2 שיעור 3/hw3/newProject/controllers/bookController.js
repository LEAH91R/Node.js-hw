const booksData = require('../data/books.json');
const authorsData = require('../data/authors.json');
let bookIdCounter=booksData.length > 0 ? Math.max(...booksData.map(book => book.id)) + 1 : 1;
// Get all books
exports.getAllBooks=(req,res)=>{
    res.json(booksData);
}
// Get book by ID
exports.getBookById = (req, res) =>{
    const bookId = parseInt(req.params.id);
    const book = booksData.find(b => b.id === bookId);
    if (book) {
        res.json(book);
    } 
    else
         {
        res.status(404).send('הספר לא נמצא (404)');
    }
};
exports.createBook = (req, res) => {
    const newBookData = req.body;
    if (!newBookData.title || !newBookData.authorId) {
        return res.status(400).send('נדרשים שדות: title ו-authorId');
    }
    const authorExists = authorsData.some(a => a.id === parseInt(newBookData.authorId));
    if (!authorExists) {
         return res.status(400).send('Author ID is invalid. Author must exist.');
    }
    const newBook = {
        id: bookIdCounter++,
        title: newBookData.title,
        authorId: parseInt(newBookData.authorId),
        year: newBookData.year ? parseInt(newBookData.year) : null // שימוש ב-parseInt לוודא מספר
    };
    
    booksData.push(newBook);
    res.status(201).json(newBook); // 201 Created
};
exports.updateBook = (req, res) => {
    const bookId = parseInt(req.params.id);
    const updateData = req.body;
    const bookIndex = booksData.findIndex(b => b.id === bookId);

    if (bookIndex !== -1) {
        // עדכון האובייקט באופן שלא משנה את ה-ID
        const updatedBook = { 
            ...booksData[bookIndex], 
            ...updateData,
            id: bookId 
        };
        booksData[bookIndex] = updatedBook;
        res.json(updatedBook);
    } else {
        res.status(404).send('הספר לא נמצא לעדכון (404)');
    }
};
exports.deleteBook = (req, res) => {
    const bookId = parseInt(req.params.id);
    const initialLength = booksData.length;
    
    // מחיקה ע"י יצירת מערך חדש ללא הספר הנבחר
    const newBooksData = booksData.filter(b => b.id !== bookId);

    if (newBooksData.length < initialLength) {
        // אם אכן נמחק פריט אחד, נעדכן את המערך הגלובלי
        booksData.length = 0; 
        Array.prototype.push.apply(booksData, newBooksData);
        res.status(204).send(); // 204 No Content
    } else {
        res.status(404).send('הספר לא נמצא למחיקה (404)');
    }
};

