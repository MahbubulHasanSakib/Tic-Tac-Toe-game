

/*Author:Mahbubul Hasan Sakib*/


var c = 1;
var flag=0;
function fun(s)
{
    document.getElementById(s).style.margin = "0px";
    if (flag == 0) {
        if (c % 2 != 0) {
            if (document.getElementById(s).innerText!='O'){
                document.getElementById(s).innerHTML = "<b>X</b>";
                c++;
            }
            
        }
        else {
            if(document.getElementById(s).innerText!='X'){
                document.getElementById(s).innerHTML = "<b>O</b>";
                c++;
            }
        }
        findres(c - 1);
    }
	
}
function findres(r)
{
	
    if(flag==0){
   if(document.getElementById('b1').innerText=="X"&& document.getElementById('b2').innerText=="X" &&document.getElementById('b3').innerText=="X")
   {
       document.getElementsByTagName("p")[0].innerHTML = "<b>Congrats! X is winner&#9787;</b>";
       document.getElementById('b1').style.backgroundColor = "grey";
       document.getElementById('b2').style.backgroundColor = "grey";
       document.getElementById('b3').style.backgroundColor = "grey";
    flag=1;
   }
   else if (document.getElementById('b4').innerText == "X" && document.getElementById('b5').innerText == "X" && document.getElementById('b6').innerText == "X")
   {
       document.getElementsByTagName("p")[0].innerHTML = "<b>Congrats! X is winner&#9787;</b>";
       document.getElementById('b4').style.backgroundColor = "grey";
       document.getElementById('b5').style.backgroundColor = "grey";
       document.getElementById('b6').style.backgroundColor = "grey";
    flag=1;
   }
   else if (document.getElementById('b7').innerText == "X" && document.getElementById('b8').innerText == "X" && document.getElementById('b9').innerText == "X")
   {
       document.getElementsByTagName("p")[0].innerHTML = "<b>Congrats! X is winner&#9787;</b>";
       document.getElementById('b7').style.backgroundColor = "grey";
       document.getElementById('b8').style.backgroundColor = "grey";
       document.getElementById('b9').style.backgroundColor = "grey";
    flag=1;
   }
   else if (document.getElementById('b1').innerText == "X" && document.getElementById('b4').innerText == "X" && document.getElementById('b7').innerText == "X")
   {
       document.getElementsByTagName("p")[0].innerHTML = "<b>Congrats! X is winner&#9787;</b>";
       document.getElementById('b1').style.backgroundColor = "grey";
       document.getElementById('b4').style.backgroundColor = "grey";
       document.getElementById('b7').style.backgroundColor = "grey";
    flag=1;
   }
   else if (document.getElementById('b2').innerText == "X" && document.getElementById('b5').innerText == "X" && document.getElementById('b8').innerText == "X")
   {
       document.getElementsByTagName("p")[0].innerHTML = "<b>Congrats! X is winner&#9787;</b>";
       document.getElementById('b2').style.backgroundColor = "grey";
       document.getElementById('b5').style.backgroundColor = "grey";
       document.getElementById('b8').style.backgroundColor = "grey";
    flag=1;
   }
   else if (document.getElementById('b3').innerText == "X" && document.getElementById('b6').innerText == "X" && document.getElementById('b9').innerText == "X")
   {
       document.getElementsByTagName("p")[0].innerHTML = "<b>Congrats! X is winner&#9787;</b>";
       document.getElementById('b3').style.backgroundColor = "grey";
       document.getElementById('b6').style.backgroundColor = "grey";
       document.getElementById('b9').style.backgroundColor = "grey";
    flag=1;
   }
   else if (document.getElementById('b1').innerText == "X" && document.getElementById('b5').innerText == "X" && document.getElementById('b9').innerText == "X")
   {
       document.getElementsByTagName("p")[0].innerHTML = "<b>Congrats! X is winner&#9787;</b>";
       document.getElementById('b1').style.backgroundColor = "grey";
       document.getElementById('b5').style.backgroundColor = "grey";
       document.getElementById('b9').style.backgroundColor = "grey";
    flag=1;
   }
   else if (document.getElementById('b3').innerText == "X" && document.getElementById('b5').innerText == "X" && document.getElementById('b7').innerText == "X")
   {
       document.getElementsByTagName("p")[0].innerHTML = "<b>Congrats! X is winner&#9787;</b>";
       document.getElementById('b3').style.backgroundColor = "grey";
       document.getElementById('b5').style.backgroundColor = "grey";
       document.getElementById('b7').style.backgroundColor = "grey";
    flag=1;
   }
   else if (document.getElementById('b1').innerText == "O" && document.getElementById('b2').innerText == "O" && document.getElementById('b3').innerText == "O")
   {
       document.getElementsByTagName("p")[0].innerHTML = "<b>Congrats! O is winner&#9787;</b>";
       document.getElementById('b1').style.backgroundColor = "grey";
       document.getElementById('b2').style.backgroundColor = "grey";
       document.getElementById('b3').style.backgroundColor = "grey";
    flag=1;
   }
   else if (document.getElementById('b4').innerText == "O" && document.getElementById('b5').innerText == "O" && document.getElementById('b6').innerText == "O")
   {
       document.getElementsByTagName("p")[0].innerHTML = "<b>Congrats! O is winner&#9787;</b>";
       document.getElementById('b4').style.backgroundColor = "grey";
       document.getElementById('b5').style.backgroundColor = "grey";
       document.getElementById('b6').style.backgroundColor = "grey";
    flag=1;
   }
   else if (document.getElementById('b7').innerText == "O" && document.getElementById('b8').innerText == "O" && document.getElementById('b9').innerText == "O")
   {
       document.getElementsByTagName("p")[0].innerHTML = "<b>Congrats! O is winner&#9787;</b>";
       document.getElementById('b7').style.backgroundColor = "grey";
       document.getElementById('b8').style.backgroundColor = "grey";
       document.getElementById('b9').style.backgroundColor = "grey";
    flag=1;
   }
   else if (document.getElementById('b1').innerText == "O" && document.getElementById('b4').innerText == "O" && document.getElementById('b7').innerText == "O")
   {
       document.getElementsByTagName("p")[0].innerHTML = "<b>Congrats! O is winner&#9787;</b>";
       document.getElementById('b1').style.backgroundColor = "grey";
       document.getElementById('b4').style.backgroundColor = "grey";
       document.getElementById('b7').style.backgroundColor = "grey";
    flag=1;
   }
   else if (document.getElementById('b2').innerText == "O" && document.getElementById('b5').innerText == "O" && document.getElementById('b8').innerText == "O")
   {
       document.getElementsByTagName("p")[0].innerHTML = "<b>Congrats! O is winner&#9787;</b>";
       document.getElementById('b2').style.backgroundColor = "grey";
       document.getElementById('b5').style.backgroundColor = "grey";
       document.getElementById('b8').style.backgroundColor = "grey";
    flag=1;
   }
   else if (document.getElementById('b3').innerText == "O" && document.getElementById('b6').innerText == "O" && document.getElementById('b9').innerText == "O")
   {
       document.getElementsByTagName("p")[0].innerHTML = "<b>Congrats! O is winner&#9787;</b>";
       document.getElementById('b3').style.backgroundColor = "grey";
       document.getElementById('b6').style.backgroundColor = "grey";
       document.getElementById('b9').style.backgroundColor = "grey";
    flag=1;
   }
   else if (document.getElementById('b1').innerText == "O" && document.getElementById('b5').innerText == "O" && document.getElementById('b9').innerText == "O")
   {
       document.getElementsByTagName("p")[0].innerHTML = "<b>Congrats! O is winner&#9787;</b>";
       document.getElementById('b1').style.backgroundColor = "grey";
       document.getElementById('b5').style.backgroundColor = "grey";
       document.getElementById('b9').style.backgroundColor = "grey";
    flag=1;
   }
   else if (document.getElementById('b3').innerText == "O" && document.getElementById('b5').innerText == "O" && document.getElementById('b7').innerText == "O")
   {
       document.getElementsByTagName("p")[0].innerHTML = "<b>Congrats! O is winner&#9787;</b>";
       document.getElementById('b3').style.backgroundColor = "grey";
       document.getElementById('b5').style.backgroundColor = "grey";
       document.getElementById('b7').style.backgroundColor = "grey";
    flag=1;
   }
	}
    if (flag == 1) {
        //document.getElementsByTagName("p")[1].innerHTML = "Reload page to start new game";//applause.mp3
        document.getElementById("load").style.visibility = "visible";
        document.getElementById("load").style.textAlign="center";
        var audio = new Audio('applause.mp3');
        audio.play();
    }
    else
        if (r == 9 && flag == 0) {
            //oh_no.mp3
            var audio = new Audio('Wrong.mp3');
            audio.play();
            document.getElementsByTagName("p")[0].innerHTML = "Match Draw&#9785;";
            document.getElementById("load").style.visibility = "visible";
            document.getElementById("load").style.textAlign = "center";
            document.getElementById('b1').style.backgroundColor = "red";
            document.getElementById('b2').style.backgroundColor = "red";
            document.getElementById('b3').style.backgroundColor = "red";
            document.getElementById('b4').style.backgroundColor = "red";
            document.getElementById('b5').style.backgroundColor = "red";
            document.getElementById('b6').style.backgroundColor = "red";
            document.getElementById('b7').style.backgroundColor = "red";
            document.getElementById('b8').style.backgroundColor = "red";
            document.getElementById('b9').style.backgroundColor = "red";
            //document.getElementsByTagName("p")[1].innerHTML = "Reload page to start new game";

        }
}
function reload()
{
    location.reload();
}