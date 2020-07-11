var min=0;
var sec=0;
var msec=0;

var minHeading =document.getElementById("min");
var secHeading =document.getElementById("sec");
var msecHeading =document.getElementById("msec");

 function timer(){
     msec++;
     msecHeading.innerHTML=msec;
     if(msec>=100){
         sec++;
         secHeading.innerHTML=sec;
         msec=0;
    }
    else if(sec>=60){
        min++;
        sec=0;
        minHeading.innerHTML=min
    }
}
 function start(){
     status=1;
     document.getElementById("myBtn").disabled=true;
    timer();     
    interval=setInterval(timer,10)
 }
 function stop(){
     status=0;
     document.getElementById("myBtn").disabled=false;
     clearInterval(interval)
 }
 function reset(){
     status=0;
     document.getElementById("myBtn").disabled=false;
     min=0;
     sec =0;
     msec=0;
minHeading.innerHTML=min
secHeading.innerHTML=sec
msecHeading.innerHTML=msec
stop(); 
 }
 var status=0;
 
   

