const time = document.getElementById("time");
const date = document.getElementById("date");
const toggleBtn = document.getElementById("toggleBtn");


let is24Hour = false;



function updateTime() {


    const now = new Date();


    let hours = now.getHours();

    let minutes = now.getMinutes();

    let seconds = now.getSeconds();


    let period = "";



    if(is24Hour){

        hours = hours.toString().padStart(2,"0");

    }
    else{


        period = hours >= 12 ? "PM" : "AM";


        hours = hours % 12;


        if(hours === 0){

            hours = 12;

        }


        hours = hours.toString().padStart(2,"0");

    }



    minutes = minutes.toString().padStart(2,"0");

    seconds = seconds.toString().padStart(2,"0");



    if(is24Hour){

        time.textContent = `${hours}:${minutes}:${seconds}`;

    }
    else{

        time.textContent = `${hours}:${minutes}:${seconds} ${period}`;

    }



    const day = now.getDate().toString().padStart(2,"0");

    const month = (now.getMonth()+1).toString().padStart(2,"0");

    const year = now.getFullYear();



    date.textContent = `${day}/${month}/${year}`;

}





toggleBtn.addEventListener("click",()=>{


    is24Hour = !is24Hour;


    if(is24Hour){

        toggleBtn.textContent = "Switch to 12-hour format";

    }
    else{

        toggleBtn.textContent = "Switch to 24-hour format";

    }


    updateTime();

});





// Show immediately
updateTime();


// Update every second
setInterval(updateTime,1000);