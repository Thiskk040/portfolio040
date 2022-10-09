window.onload = pageLoad;
function pageLoad()
{
    var backbutton  = document.getElementById("button1");
    backbutton.onclick = previouspage;

}

function previouspage()
{
    location.href = "index.html"
}