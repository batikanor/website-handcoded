document.querySelector(".menuIcon").onclick = function(){
    //This is an anonymous function
    
    //x is true if its now turned on
    let x = document.querySelector(".navLinks").classList.toggle("navActive");
    if (x){
        document.querySelectorAll(".navLinks li").forEach((element, ind) => {
            setTimeout(function(){element.style.opacity = "1";}, ind*300);   
        });
    }else{
        document.querySelectorAll(".navLinks li").forEach((element, ind) => {
            setTimeout(function(){element.style.opacity = "0";}, ind*300);
            //console.log(ind, ind*300);
        });
    }
    
  
   
}
//window.setInterval(function(){alert("You've been on this window for 1000 seconds");}, 100000);