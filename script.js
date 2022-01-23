//hide menu
//const hideMenu = document.getElementById("menu-items").style.display = "none";

//Open Menu
//const openMenu = document.getElementById("menu-items").style.display = "block";


/*
1. Start-Menu hidden
2. On click-Menu Opens
3. If "Letters" is clicked the menu hides and letters appear
4. If "numbers" is clicked, the menu hides and numbers appear
5. Use preventDefault() method for <a> in order to use those
for java methods
*/

//const hideMenu = document.getElementById("menu-items").style.display = "none";
const menuItems = document.getElementById("menu-items");
menuItems.style.display = "none";
const bodyText = document.getElementById("text");

const clickMenu = document.querySelector(".menu-btn");
clickMenu.addEventListener('click', (event) => {

    //make menu appear
    console.log("button was clicked");
    menuItems.style.display = "";
}
);
   
    //if letters is clicked, letters appear in p tag & menu hides
menuItems.addEventListener('click', (event)=>{
    event.preventDefault();
    //console.log(event);
    if(event.target.id === 'letters'){
        //console.log("letters was clicked");
        menuItems.style.display = "none";
        bodyText.innerText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if(event.target.id === 'numbers'){
        //console.log("numbers was clicked");
        menuItems.style.display = "none";
        bodyText.innerText = "12345678910";
    }
});
   

