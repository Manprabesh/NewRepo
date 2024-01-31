
var btn=document.querySelector("#smt");
var text=document.querySelectorAll('input[type="text"]');
var pop=document.querySelector("#pop")

btn.addEventListener("click", function(ev){
    ev.preventDefault();
    // if(text.value===""){
    //     pop.textContent="Error";
    //     pop.classList.add("highlight");
    // }
    for(var i=0; i<text.length;i++){
        if(text[i].value==="")
        {
         pop.textContent="Error";
         pop.classList.add("highlight");
         break;
        }
     else{
        pop.textContent="Done";
        pop.classList.add("highlight");
         }

    }

})