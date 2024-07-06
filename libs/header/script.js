var OnTop_header = -1;
var HeaderControl = document.getElementById("mainTitleContainer_header");
var HeaderText = document.getElementById("mainTitle_header");
var MainControl = document.getElementById("maindiv_header");
var HeaderButtons = document.getElementsByClassName("titlebarBtn_header");

function UpdateHeaderSize() {
    var ScrollPosition = document.documentElement.scrollTop;
    var ViewWidth = window.innerWidth || document.documentElement.clientWidth;
    if(ScrollPosition <= 30)
    {   // If the user is on the top
        if(OnTop_header != ViewWidth)
        {
            HeaderControl.style.minHeight = "70px";

            if(ViewWidth > 840)
                HeaderText.style.fontSize = "24pt";
            else if (ViewWidth > 640)
                HeaderText.style.fontSize = "20pt";
            else if (ViewWidth > 440)
                HeaderText.style.fontSize = "16pt";
            else
                HeaderText.style.fontSize = "12pt";

            MainControl.style.marginBottom = "0px";
            MainControl.style.borderBottomColor = "transparent";
            for(var i = 0; i < HeaderButtons.length; i++)
            {
                HeaderButtons[i].style.height = "62px";
                //HeaderButtons[i].style.fontWeight = "700";
            }
            OnTop_header = ViewWidth;
        }
    } 
    else 
    {   // If the user is NOT on the top
        if(OnTop_header != -ViewWidth)
        {
            HeaderControl.style.minHeight = "50px";

            if(ViewWidth > 840)
                HeaderText.style.fontSize = "22pt";
            else if (ViewWidth > 640)
                HeaderText.style.fontSize = "19pt";
            else if (ViewWidth > 440)
                HeaderText.style.fontSize = "15pt";
            else
                HeaderText.style.fontSize = "11pt";

            MainControl.style.marginBottom = "20px";
            if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
                MainControl.style.borderBottomColor = "#34393e";
            else
                MainControl.style.borderBottomColor = "#d0d7de";
            for(var i = 0; i < HeaderButtons.length; i++)
            {
                HeaderButtons[i].style.height = "42px";
                //HeaderButtons[i].style.fontWeight = "400";
            }
            OnTop_header = -ViewWidth;
        }
    }
}

UpdateHeaderSize();
window.addEventListener('scroll', UpdateHeaderSize);
window.addEventListener('resize', UpdateHeaderSize);