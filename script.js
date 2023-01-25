let random1=Math.floor(Math.random()*6)+1;
let randomimg1="images/" + "dice" + random1 + ".png";
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimg1);

let random2=Math.floor(Math.random()*6)+1;
let randomimg2="images/" + "dice" + random2 + ".png";
let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimg2);

if(random1>random2)
{
    document.querySelector("h1").innerHTML="Player 1 Won";
}
else if(random2>random1)
document.querySelector("h1").innerHTML="Player 2 Won";
else
document.querySelector("h1").innerHTML="Draw";

