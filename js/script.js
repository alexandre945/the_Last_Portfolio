

var navbar = document.querySelector("#navbar");

var folio = document.querySelector("#folio");

navbar.addEventListener("mouseover", function(){
    this.style.backgroundColor = "#00804b";
    folio.style.color = "#fff";

});

navbar.addEventListener("mouseout", function(){
    this.style.backgroundColor = "transparent";
    folio.style.color = "#00804b";

});

/* função do about*/

var subtitle = document.querySelector("#title");
// var legend = document.querySelector(".hiden");

    subtitle.addEventListener("mouseover", function(){
    this.style.color = "#00804b";

    console.log(teste);
    // legend.classList.remove("hiden");
    });