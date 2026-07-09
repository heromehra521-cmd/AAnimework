// Explore button function

function explore(){

    alert("Welcome to AA Anime! Explore the world of anime news, reviews and products.");

}



// Anime search feature

const searchBox = document.querySelector("nav input");

const cards = document.querySelectorAll(".card");


searchBox.addEventListener("keyup", function(){

    let searchValue = searchBox.value.toLowerCase();


    cards.forEach(function(card){

        let text = card.innerText.toLowerCase();


        if(text.includes(searchValue)){

            card.style.display = "block";

        }

        else{

            card.style.display = "none";

        }

    });

});
