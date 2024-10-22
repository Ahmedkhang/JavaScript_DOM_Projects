let arr = [
    
    {dp:"https:images.unsplash.com/photo-1728598554555-503dd3fd3ec1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https:images.unsplash.com/photo-1728482222332-83073443895a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    
    {dp:"https://plus.unsplash.com/premium_photo-1727896379006-53c33319d06b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1725610147161-5caa05b3b156?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    
    {dp:"https://images.unsplash.com/photo-1728404725348-4adec23dbb23?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https:images.unsplash.com/photo-1726856667612-5252bd459a69?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    
    {dp:"https://images.unsplash.com/photo-1727784891998-58db0d9249ac?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1726232409063-00c6b4009b08?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    
    {dp:"https://images.unsplash.com/photo-1727638786395-6df4fc4a2048?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https:images.unsplash.com/photo-1728482222332-83073443895a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {dp:"https:images.unsplash.com/photo-1728482222332-83073443895a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https:images.unsplash.com/photo-1728482222332-83073443895a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    
]

let storiyan = document.querySelector("#storiyan");
let clutter= "";

arr.forEach(function(elem,idx){

    clutter+= `<div class="story">
                <img src="${elem.dp}" id="${idx}" alt="">
            </div>`
})
storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display ="block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr [dets.target.id] .story})`;

    setTimeout(function(){

        document.querySelector("#full-screen").style.display ="none";
    },2500)
})

