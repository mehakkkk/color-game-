
var colors = generatecolors(6);

var squares = document.querySelectorAll(".square");

for(var i=0; i<squares.length ; i++)
{
    squares[i].style.backgroundColor = colors[i];
}
//assign any random colour
var pickcolor =pickedcolor();
var random = document.getElementById("guess");
random.textContent = pickcolor;
var message = document.getElementById("message");
var h1=document.querySelector("h1");
var easy=document.querySelector("#easy");
var hard= document.querySelector("#hard");

//working with easy button
easy.addEventListener("click",function(){
        easy.classList.add("selected");
        hard.classList.remove("selected");
        colors=generatecolors(3);
        pickcolor = pickedcolor();
        random.textContent = pickcolor;
        for(i=0;i<squares.length;i++)
        {
            if(i<3)
            {
            squares[i].style.backgroundColor = colors[i];
            }
            else
            {
                squares[i].style.display="none";  //for not display next 3 colours
            }
        }
});

//working with hard button
hard.addEventListener("click",function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors=generatecolors(6);
    random.textContent = pickcolor;
    for(i=0;i<squares.length;i++)
    {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display="block";  //for displaying all 6 colours
    }
});

//add an event listener
for(var i = 0; i < squares.length; i++)
{
 
    


    squares[i].addEventListener("click", function()
    {
        var clickedcolor = this.style.backgroundColor;
        if(clickedcolor === pickcolor)
        {
            //alert("correct!!");
            message.textContent = "correct!!";
           
                for(var i = 0; i < squares.length; i++)
            {
                squares[i].style.backgroundColor = clickedcolor;
            }
            h1.style.backgroundColor=clickedcolor;
            again.textContent="play again";

        }
        else
        {
            //alert("wrong!!");
            this.style.background = "#232323";  //it will give current selected square details
            message.textContent = "try again!";
        }
        console.log(clickedcolor);

    });
}


//function for getting random colour
function pickedcolor(s)
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//function for generating colors
function generatecolors(num)
{
    var arr = [];
    for(var i=0; i<num; i++)
    {
        arr.push(randomcolor());
    }
    return arr;
}
function randomcolor()
{
    var r = Math.floor(Math.random() * 256);
    //green from 0 to 255;
    var g = Math.floor(Math.random() * 256);

    //blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";
}
var again =document.querySelector("#reset");
again.addEventListener("click", function()
{
    colors = generatecolors(6);
    pickcolor = pickedcolor();
    random.textContent = pickcolor;
    for(i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
    message.textContent=" ";
    again.textContent = "new colors";
    h1.style.backgroundColor = "steelblue";
    
});