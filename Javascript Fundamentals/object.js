
// Task 1: Object property access using prompt


const user = {
    username: "srija_dev",
    email: "srija@example.com",
    city: "Hyderabad"
};


let detail = prompt("Enter detail you want (username, email, city):");


if (user[detail]) {
    console.log(user[detail]);
}
else {
    console.log("Detail is not available");
}



// Task 2: Increase object values by 5


const marks = {
    math: 70,
    english: 65,
    science: 80
};


const updatedMarks = {};


for (let subject in marks) {

    updatedMarks[subject] = marks[subject] + 5;

}


console.log("The values of updatedMarks are:", updatedMarks);




// Task 3: Update book object 


const book = {
    title: "The Mystery Box",
    author: "A. Writer",
    publishedYear: 2010,
    isAvailable: true
};


// Change title

book.title = "The secret key";


// Add genre property

book.genre = "Thriller";


// Remove isAvailable property

delete book.isAvailable;


// Remove author using bracket notation

delete book["author"];


console.log(book);




// Task 4: Product object with methods



const product = {

    name: "Laptop",
    price: 1000,
    discount: 10,


    calculateFinalPrice: function () {

        let discountAmount = (this.price * this.discount) / 100;

        return this.price - discountAmount;

    },


    updateDiscount: function (newDiscount) {

        this.discount = newDiscount;

        console.log(
            "Final price after new discount:",
            this.calculateFinalPrice()
        );

    }

};


console.log(product.calculateFinalPrice());


product.updateDiscount(20);