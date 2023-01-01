// 1)

let student = {
    name : "Assaf",
    age : 23,
    grade : 85,
    classes : ["Math", "History", "English"]
}

// console.log(student.name)


// 2)

let book = {
    title: "Tennis world",
    author: "Novak J",
    year: 1999,
    genre: "Novel",
    publisher: "ATP",
    pages: 180,
    isbn: "123456789" 
}
book.rating = 4.25

// console.log(book)

// 3)

const car = {
    make: "Tesla",
     model: "Model S",
     year: 2020,
     color: "Red",
     features: ["Autopilot", "Ludicrous Mode", "Supercharging"]
   };

// console.log(car.features[1]);

// 4)

const store = {
    name : "The best store on the planet",
    location : "The best city",
    categories : ["A best", "B best", "C best"],
    products : [ {
        name: "Pro A",
        price: 10.99,
        quantity: 20
      },
      {
        name: "Pro B",
        price: 8.99,
        quantity: 25
      },
      {
        name: "Pro A",
        price: 9.99,
        quantity: 15
      }]
}

function totalPricePro (Pro){
    let sum = 0 
    for (let i = 0; i < store.products.length; i++){
        if (store.products[i].name === Pro){
            sum += store.products[i].price*store.products[i].quantity
        }
    }
    return sum
}

// console.log(totalPricePro("Pro A"))

