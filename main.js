window.onload = pageLoad;
function pageLoad() {
    var clickbutton = document.getElementById("button1");
    clickbutton.onclick = linkproject; 

    var twitterbutton = document.getElementById("twitter");
    twitterbutton.onclick = twitterlinklocation;

    var instagrambutton = document.getElementById("instagram");
    instagrambutton.onclick = instagramlinklocation;

    var facebookbutton = document.getElementById("facebook");
    facebookbutton.onclick = facebooklinklocation;

    var githubbutton = document.getElementById("github");
    githubbutton.onclick = githublinklocation;

    var linkass6 = document.getElementById("ass6");
    linkass6.onclick = linkAssignment6; 

    var linkass7 = document.getElementById("ass7");
    linkass7.onclick = linkAssignment7;

    var linkass4 = document.getElementById("ass4");
    linkass4.onclick = linkAssignment4;

    var linkass5 = document.getElementById("ass5");
    linkass5.onclick = linkAssignment5;

}
function linkproject(){
    location.href = "project.html";
}
function twitterlinklocation() {
    location.href = "https://twitter.com/Soyybad1";
}
function facebooklinklocation() {
    location.href = "https://www.facebook.com/khunanon.ngaobenjakul/";
}
function githublinklocation() {
    location.href = "https://github.com/Thiskk040";
}
function instagramlinklocation() {
    location.href = "https://www.instagram.com/thiskkay/";
}
function linkAssignment6()
{
    location.href = "https://thiskk040.github.io/html-week6/register.html";
}
function linkAssignment7()
{
    location.href = "https://thiskk040.github.io/assignment7/";
}
function linkAssignment4(){
    location.href = "https://thiskk040.github.io/Html-week4/recipe.html";
}
function linkAssignment5(){
    location.href = "https://thiskk040.github.io/Html-week-5/" ; 
}