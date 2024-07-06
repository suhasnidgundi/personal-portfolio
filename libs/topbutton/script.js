var OnTop_button = -1;
var ButtonControl = document.getElementById("GoTopButton");

function ShowHideTopButton() {
    var ScrollPosition = document.documentElement.scrollTop;
    if(ScrollPosition <= 30)
    {   // If the user is on the top
        if(OnTop_button != 1)
        {
            ButtonControl.style.opacity = "0%";
            OnTop_button = 1;
        }
    } 
    else 
    {   // If the user is NOT on the top
        if(OnTop_button != 0)
        {
            ButtonControl.style.opacity = "100%";
            OnTop_button = 0;
        }
    }
}

ShowHideTopButton();
window.addEventListener('scroll', ShowHideTopButton);