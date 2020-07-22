const items = document.querySelector('.items')
const product_item_1= document.querySelectorAll('.product-item-1')
for(let pro of product_item_1){
console.log(pro[0])
}
/* product_item_1.forEach((el) => {
    console.log(typeof(el))
    el.addEventListener('mouseover',(e)=>{
      if(e.target == el){
        items.style = "display:block";
        console.log('yeah')
        alert('fuck')
      }
/*       if(e.target == el[1]){
        items.style = "display:block,margin: 1000px 0 0 0";
        alert('fuck')
      } 

    }) */
/*     el.addEventListener('mouseleave',(e)=>{
      if(e.target == el ){
        items.style = "display:none";
      }
    })
  }) */
/* product_item_1.addEventListener('mouseover',(e)=>{
  if(e.target == product_item_1){
    alert('fuck')
    items.style = "display:block";
  }
})
product_item_1.addEventListener('mouseleave',(e)=>{
    if(e.target == product_item_1){
      items.style = "display:none";
    }
  }) */