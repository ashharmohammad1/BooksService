const express = require('express')
const router = express.Router()

const fs = require('fs');



let read_json_file = () => {
    let file = './Booksjson.json';
    return fs.readFileSync(file);
}



exports.list = () => {
    return JSON.parse(read_json_file());
};





let books = JSON.parse(read_json_file());

// var books = [{
//   "Title": "Lord of the Rings",
//   "Author": "J.R.R Tolkien",
//   "price": 25.99,
//   "ISBN": "9780261102385",
//   "publisher": "HarperCollins"
// },
// {
//   "Title": "The Hobbit",
//   "Author": "J.R.R Tolkien",
//   "price": 9.88,
//   "ISBN": "0261102214",
//   "publisher": "HarperCollins"
// },
// {
//   "Title": "Lord of Souls",
//   "Author": "Greg Keyes",
//   "price": 12.98,
//   "ISBN": "0345508025",
//   "publisher": "Del Rey"
// },
// {
//   "Title": "Chronicles of Narnia",
//   "Author": "C. S. Lewis",
//   "price": 41.77,
//   "ISBN": "0064471195",
//   "publisher": "HarperCollins"
// }
// ]

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/team', (req, res) => {
  res.json({ "member 1": "C B Layamitra",
              "member 2": "Kritika M Pai",
            "member 2":"Mohammad Ashhar Arif"  })
})

// define the home page route
router.get('/', (req, res) => {
  res.json({ "hello": "there" })
})
// define the about route
router.get('/all/:location', (req, res) => {

  location = req.params.location
  if (location == "raleigh")
    for (item in books) {
      item.price += 0.075 * item.price
    }
  else if (location == "durham")
    for (item in books) {
      item.price += 0.08 * item.price
    }
  else {
    res.send("wrong data")
    return
  }


  res.send(books)
})

router.post('/', (req, res) => {
  console.log(req.body);
  var item = req.body;
  // const { authorization } = req.headers;
  books.push(item)
  res.status(200).send(books);
})



module.exports = router