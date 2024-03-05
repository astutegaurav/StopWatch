// Basic 

 let hr = 0;
 let min = 0;
 let sec = 0;

 let timer = false;

//  Functions

 function start(){
    timer = true;
    stopwatch()

 }

 
 function stop(){
    timer = false;
    
 }

 
 function reset(){ 
    location.reload();
 }

//  Main Function 

 function stopwatch(){
     
    if(timer == true){

        sec = sec + 1;
       
 
        if(sec == 60){
            min = min+1;
            sec=0;
        }
        if(min == 60){
            hr = hr+1;
            min = 0;
        } 
        
        var getHour = hr;
        var getMin = min;
        var getSec = sec;

        if(hr<10){
            getHour = "0"+ hr; 
        }
        if(min<10){
            getMin = "0"+ min;
        }
        if(sec < 10){
            getSec = "0"+ sec;
        }

 
        document.getElementById("sec").innerHTML= getSec ;
        document.getElementById("min").innerHTML=getMin; 
        document.getElementById("hr").innerHTML=getHour; 


       let timeOut = setTimeout("stopwatch()", 1000);
        
    }
 }