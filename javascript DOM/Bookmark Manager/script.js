const DEFAULT_SETTINGS = Object.freeze({

    storageKey:"bookmarksData",

    categories:[
        "Work",
        "Study",
        "Entertainment"
    ],

    defaultCategory:"Work"

});



let bookmarks = [];

let currentFilter = "All";



const form = document.getElementById("bookmarkForm");

const bookmarksList = document.getElementById("bookmarksList");

const filterButtons = document.querySelectorAll(".filter-btn");







function addBookMark(e){


    e.preventDefault();



    const title =
    document.getElementById("websiteTitle").value.trim();



    const url =
    document.getElementById("websiteUrl").value.trim();



    const category =
    document.getElementById("category").value;





    const newBookmark = {


        id:Date.now(),

        title:title,

        url:url,

        category:category


    };



    bookmarks.push(newBookmark);



    saveBookmarks();



    form.reset();



    renderBookmarks();


}






function filterBookmarks(categoryFilter){


    if(categoryFilter==="All"){

        return bookmarks;

    }



    return bookmarks.filter(
        bookmark =>
        bookmark.category === categoryFilter
    );


}










function renderBookmarks(){


    bookmarksList.innerHTML="";



    const filteredBookmarks =
    filterBookmarks(currentFilter);




    if(filteredBookmarks.length===0){


        bookmarksList.innerHTML =
        "<div>No bookmarks found.</div>";

        return;


    }






    filteredBookmarks.forEach(bookmark=>{



        const div =
        document.createElement("div");



        div.className="bookmark-item";



        div.innerHTML = `

        <div class="bookmark-info">

            <h3>${bookmark.title}</h3>


            <a 
            class="bookmark-link"
            href="${bookmark.url}"
            target="_blank">

            ${bookmark.url}

            </a>


            <div class="bookmark-category">

            ${bookmark.category}

            </div>


        </div>


        <button 
        class="delete-btn"
        data-id="${bookmark.id}">

        Delete

        </button>


        `;



        const deleteBtn =
        div.querySelector(".delete-btn");



        deleteBtn.addEventListener(
            "click",
            ()=>deleteBookmark(bookmark.id)
        );



        bookmarksList.appendChild(div);



    });


}





function deleteBookmark(id){


    bookmarks =
    bookmarks.filter(
        bookmark =>
        bookmark.id !== id
    );



    saveBookmarks();


    renderBookmarks();


}








function saveBookmarks(){


    localStorage.setItem(

        DEFAULT_SETTINGS.storageKey,

        JSON.stringify(bookmarks)

    );


}






function loadBookmarks(){


    const data =
    localStorage.getItem(
        DEFAULT_SETTINGS.storageKey
    );



    if(data){


        bookmarks =
        JSON.parse(data);


    }


}









function init(){


    form.addEventListener(
        "submit",
        addBookMark
    );



    filterButtons.forEach(button=>{


        button.addEventListener(
            "click",
            ()=>{


                filterButtons.forEach(btn=>{

                    btn.classList.remove("active");

                });



                button.classList.add("active");



                currentFilter =
                button.dataset.category;



                renderBookmarks();


            }
        );


    });




    loadBookmarks();


    renderBookmarks();


}







document.addEventListener(
    "DOMContentLoaded",
    init
);