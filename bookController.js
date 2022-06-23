//Create all of creates, reads, deletes etc.. here...
const createError = require('http-errors')

let booklist = []
let idnumber = 0

// exports.index = function (req, res) {
//     res.send({key: "item"})
// }
exports.index = function (req, res) {
    res.send(booklist)
}


//CREATE
//put in some errors alerts to make sure people type in the correct formats
exports.create = function (req, res, next) {
    if(!req.body.title) { //name could be changed to Author/Title etc... (repeat code in a if statement for each)
        return(next(createError(400, "title is required")))
    }
    booklist.push({id: idnumber, title: req.body.title, author: req.body.author, available: req.body.available, type: req.body.type}) //push all variables that are required, e.g. title, author, red/not, read ID numberetc...
    res.send({result:true})
    idnumber++ //everytime we create new name/data the id will increase by 1
}



//FIND
//find the book - is it available?
exports.show = function (req, res, next) {
    const bookitem = booklist.find((book) => book.id == req.params.id)
    if(!bookitem) {
        return(next(createError(404, "no book with that id")))
    }
    res.send(bookitem)
}


exports.sort = function (req, res, next) {
    const bookitem = booklist.filter((book) => book.type == req.params.type)
    if(!bookitem) {
        return(next(createError(404, "no books of that type")))
    }
    res.send(bookitem)
}


//DELETE BY ID
//add the delete functionality to the API
exports.delete = function (req, res, next) {
    const bookitem = booklist.find((book) => book.id == req.params.id)
    if(!bookitem) {
        return(next(createError(404, "no book with that id")))
    }
    booklist = booklist.filter((book) => book.id != req.params.id)
    res.send({result: true})
}


//EDIT
//add the edit functionality to the API
exports.update = function (req, res, next) {
    const bookitem = booklist.find((book) => book.id == req.params.id)
    if(!bookitem) {
        return(next(createError(400, "title is required")))
    }
    if (!bookitem) {
        return(next(createError(404, "no book with that id")))
    }
    booklist = booklist.map((book) => {
        if (book.id == req.params.id) {
            book.title = req.body.title
            book.author = req.body.author
            book.available = req.body.available
            book.type = req.body.type
          }
        return book
    })
    res.send({result: true})
}





// exports.create = function(req,res, next) {
//     if(!req.body.name) {
//         return(next(createError(400,"name is required")))
//     }
//     todolist.push({id: idno, name: req.body.name})
//     res.send({result:true})
//     idno++
// }
// exports.show = function (req, res, next) {
//     const todoitem = todolist.find((todo) => todo.id == req.params.id)
//     if(!todoitem) {
//         return(next(createError(404, "no todo with that id")))
//     }
//     res.send(todoitem)
// }
// exports.delete =function (req, res, next) {
//     const todoitem= todolist.find((todo) => todo.id == req.params.id)
//     if(!todoitem){
//         return(next(createError(404, "no todo with that id")))
//     }
//     todolist = todolist.filter((todo) => todo.id != req.params.id)
//     res.send({result: true})
// }
// exports.update = function (req, res, next) {
//     const todoitem = todolist.find((todo) => todo.id == req.params.id)
//     if (!req.body.name) {
//         return (next(createError(400, "name is required")))
//     }
//     if (!todoitem) {
//         return (next(createError(404, "no todo with that id")))
//     }
//     tdolist = todolist.map((todo) => {
//         if (todo.id == req.params.id) {
//             todo.name = req.body.name
//         }
//         return todo
//     })
//     res.send({ result:true})
// }







