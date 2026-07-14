const addBookSection = document.querySelector(".add-book-section");

const toggleFormBtn = document.getElementById("toggle-form");

const typeSelect = document.getElementById("type");

const ebookDetails = document.getElementById("ebook-details");

const form = document.getElementById("book-form");

const bookList = document.getElementById("book-list");

let books = [];

toggleFormBtn.addEventListener("click", () => {
  if (addBookSection.style.display === "none") {
    addBookSection.style.display = "block";

    toggleFormBtn.textContent = "Hide Form";
  } else {
    addBookSection.style.display = "none";

    toggleFormBtn.textContent = "Add New Book";
  }
});

typeSelect.addEventListener("change", () => {
  if (typeSelect.value === "ebook") {
    ebookDetails.style.display = "block";
  } else {
    ebookDetails.style.display = "none";
  }
});

class Book {
  constructor(title, author) {
    this.id = Date.now();

    this.title = title;

    this.author = author;

    this.type = "physical";

    this.available = true;

    this.borrower = null;
  }

  getHTML() {
    const div = document.createElement("div");

    div.className = `book-card ${this.available ? "" : "unavailable"}`;

    div.innerHTML = `


        <h3>${this.title}</h3>


        <p>Author: ${this.author}</p>


        <p>
        Status:
        ${this.available ? "Available" : "Borrowed"}
        </p>


        ${this.borrower ? `<p>Borrower: ${this.borrower}</p>` : ""}


        ${
          this.available
            ? `<button class="borrow">
            Borrow
            </button>`
            : `<button class="return">
            Return
            </button>`
        }


        <button class="remove">
        Remove
        </button>


        `;

    return div;
  }
}



class Ebook extends Book {
  constructor(title, author, fileSize) {
    super(title, author);

    this.type = "ebook";

    this.fileSize = fileSize;
  }

  getHTML() {
    const div = document.createElement("div");

    div.className = "book-card ebook";

    div.innerHTML = `


        <h3>${this.title}</h3>


        <p>
        Author: ${this.author}
        </p>


        <p>
        File Size: ${this.fileSize} MB
        </p>



        <button class="download">
        Download
        </button>



        <button class="remove">
        Remove
        </button>


        `;

    return div;
  }
}



form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;

  const author = document.getElementById("author").value;

  let book;

  if (typeSelect.value === "ebook") {
    const size = document.getElementById("fileSize").value;

    book = new Ebook(title, author, size);
  } else {
    book = new Book(title, author);
  }

  books.push(book);

  saveBooks();

  displayBooks();

  form.reset();
});



function displayBooks() {
  bookList.innerHTML = "";

  books.forEach((book) => {
    const card = book.getHTML();

    if (book.type === "physical") {
      const borrow = card.querySelector(".borrow");

      const returnBtn = card.querySelector(".return");

      if (borrow) {
        borrow.onclick = () => {
          const name = prompt("Enter borrower name");

          if (name) {
            book.available = false;

            book.borrower = name;

            saveBooks();

            displayBooks();
          }
        };
      }

      if (returnBtn) {
        returnBtn.onclick = () => {
          book.available = true;

          book.borrower = null;

          saveBooks();

          displayBooks();
        };
      }
    }

    const remove = card.querySelector(".remove");

    remove.onclick = () => {
      if (confirm("Remove this book?")) {
        books = books.filter((item) => item.id !== book.id);

        saveBooks();

        displayBooks();
      }
    };

    bookList.appendChild(card);
  });
}



function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}



function loadBooks() {
  const data = localStorage.getItem("books");

  if (data) {
    const parsed = JSON.parse(data);

    books = parsed.map((book) => {
      if (book.type === "ebook") {
        const ebook = new Ebook(book.title, book.author, book.fileSize);

        ebook.id = book.id;

        return ebook;
      }

      const physical = new Book(book.title, book.author);

      physical.id = book.id;

      physical.available = book.available;

      physical.borrower = book.borrower;

      return physical;
    });
  }

  displayBooks();
}

loadBooks();
