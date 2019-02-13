const fs = require('fs');

let booksJson = fs.readFileSync('books.json');
let books = JSON.parse(booksJson);

module.exports = {
    async index(req, res){
        res.json(books);
    }
}