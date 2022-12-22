const ThemeBtn = document.querySelector("#change-theme")

//toggle light mode
function TogglelightMode() {
    document.body.classList.toggle("light")
}


//load light or light mode
function loadTheme() {
    const lightMode = localStorage.getItem("light");

    if(lightMode){
        TogglelightMode();
    }
}

loadTheme();

ThemeBtn.addEventListener("change", function() {
    TogglelightMode();

    //save or remove light mode
    localStorage.removeItem("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("light", 1);
    }
})
