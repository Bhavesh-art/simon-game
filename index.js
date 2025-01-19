var arr=[];
var arr_button=["green","red","yellow","blue"];

var flag=1;
var t=0;
var arr2=[];
function random()
{ 
    if(flag>0)
        {
            var n=Math.floor(Math.random()*4)+1;
            arr.push(n);
            $("h1").text("Level "+arr.length)
            var h="."+arr_button[n-1];
            $(h).fadeToggle("fast");
            $(h).fadeToggle("fast");
            var audio = new Audio("sounds/"+arr_button[n-1]+".mp3");
            audio.play();
            clicker();
        }
    
}

function clicker(){
    arr2=[]
    $(".btn").off("click").on("click", function() {
	    let colorClass = $(this).attr("class").split(' ')[1];
        $("."+colorClass).addClass('pressed');
        var x=arr_button.indexOf(colorClass);
        var audio = new Audio("sounds/"+arr_button[x]+".mp3");
        audio.play();
        setTimeout(() => {
            $("."+colorClass).removeClass("pressed");
          }, 100);
        arr2.push(x+1);
        check();
    })
}
function check()
{
    for (var i=0;i<arr2.length;i++)
    {
        if(arr2[i]!=arr[i])
        {

        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
          }, 200);
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("h1").text("Game Over, Press any key to restart");
        flag=-1;
        return;
        }
    }
    if (arr2.length === arr.length) {
        setTimeout(random, 500); 
    }
}
$(document).one("keypress",random);
