darkModeButton = document.getElementById("dark_mode_button")

handleButtonClick = function(){
    document.body.style.backgroundColor = "#091d1e"
    document.body.style.color = "#aaaaaa"
}

darkModeButton.addEventListener("click", handleButtonClick)