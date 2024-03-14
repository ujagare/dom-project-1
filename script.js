var istatus = document.querySelector("h5");
var add = document.querySelector("#add");
var flag = 0
add.addEventListener("click",function(){
    if (flag == 0) {
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"  
        add.innerHTML = "Remove Frieds" 
        flag = 1 
    }else{
        istatus.innerHTML = "Strenger"
        istatus.style.color = "red"   
        add.innerHTML = "Add Frieds" 
        flag = 0 
    }
})

