const usersData = require('../data/customers.json');
exports.getAllUsers = (req, res) => {
    res.json(usersData);
};
exports.getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = usersData.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        // סטטוס 404 אם המשאב (המשתמש) לא נמצא
        res.status(404).send('המשתמש לא נמצא (404)');
    }
};
