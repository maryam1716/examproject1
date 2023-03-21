let a = document.querySelectorAll("a");

a.forEach((item)=>{
    item.addEventListener('mouseenter', ()=>{
        item.classList.add('item');
        
    })

    item.addEventListener('mouseout', ()=>{
        item.classList.remove('item');
    })
    
    
    
})