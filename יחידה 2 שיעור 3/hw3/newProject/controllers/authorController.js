const authorsData = require('../data/authors.json');
exports.getAllAuthors = (req, res) => {
    // אין כאן כשלון צפוי, לכן 200 OK
    res.json(authorsData);
};
exports.getAuthorById = (req, res) => {
    const authorId = parseInt(req.params.id);
    const author = authorsData.find(a => a.id === authorId);

    if (author) {
        res.json(author);
    } else {
        // סטטוס 404 אם המשאב (המחבר) לא נמצא
        res.status(404).send('המחבר לא נמצא (404)');
    }
};