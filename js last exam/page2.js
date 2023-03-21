let card1 = document.querySelector('.card1'),
    card2 = document.querySelector('.card2'),
    card3 = document.querySelector('.card3');


    card1.addEventListener('mouseenter' , ()=>{
        card1.classList.add('cardevent');
    })

   card1.addEventListener('mouseout' , ()=>{
    card1.classList.remove('cardevent');
   })

   card2.addEventListener('mouseenter' , ()=>{
    card2.classList.add('cardevent');
})

card2.addEventListener('mouseout' , ()=>{
card2.classList.remove('cardevent');
})


card3.addEventListener('mouseenter' , ()=>{
    card3.classList.add('cardevent');
})

card3.addEventListener('mouseout' , ()=>{
card3.classList.remove('cardevent');
})