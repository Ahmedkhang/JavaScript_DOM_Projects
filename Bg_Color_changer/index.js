const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
button.forEach(function(button) {
    button.addEventListener('click', function(event){
        // event.target.background = 'green';
        console.log(event)
        if(event.target.id === 'gray'){
            body.style.background = event.target.id
        }
        if(event.target.id === 'red'){
            body.style.background = event.target.id
        }
        if(event.target.id === 'yellow'){
            body.style.background = event.target.id
        }
        if(event.target.id === 'blue'){
            body.style.background = event.target.id
        }
    })
})

// const buttons = document.querySelectorAll('button');
// const body =  document.querySelector('body');
// buttons.forEach(function(button){
//     button.addEventListener('click', function(e){
//         console.log(e)
//         if(e.target.id === 'blue'){
//             body.style.backgroundColor = e.target.id
//         }
//     })
// })