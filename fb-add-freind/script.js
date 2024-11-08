let istatus = document.querySelector("h4");
let btn = document.querySelector("#add");
let check = 0;

btn.addEventListener('click', function(){
    if(check == 0){

    
      istatus.innerHTML ="Freinds";
        istatus.style.color = "green";
        btn.innerHTML = "Remove Freind";
        check = 1;
        btn.style.background = "red";

    }
    else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        btn.innerHTML = "Add Freind";
        btn.style.background = "cadetblue";
        check = 0 ;
    }
    }
)
