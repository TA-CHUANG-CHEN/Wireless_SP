//click over-view  7 list
const ovall = function (){
  document.addEventListener('click',(e)=>{
    for(let i =1 ; i<8 ;i++){
    let proto_all =document.querySelector(`.proto-${i}`)
    let ov_all =document.querySelector(`.ov2-${i}`)
    if(e.target == ov_all){
        proto_all.classList.remove('proto-display')
    }
    if(e.target !== ov_all){
        proto_all.classList.add('proto-display')
    }
    }
  })
}()
const factoryall = function(){
  let item_1_1 = document.querySelector('.item-1-1')
  let item_1_2 = document.querySelector('.item-1-2')
  let item_2_1 = document.querySelector('.item-2-1')
  let item_2_2 = document.querySelector('.item-2-2')
  let item_2_3 = document.querySelector('.item-2-3')
  let item_2_4 = document.querySelector('.item-2-4')
  let item_3_1 = document.querySelector('.item-3-1')
  let item_all = [item_1_1,item_1_2, item_2_1,item_2_2,item_2_3,item_2_4 ,item_3_1]
  document.addEventListener('mouseover',(e)=>{
    for(let i=0; i<7 ;i++){
      let factory_item_all = document.querySelector(`.factory-item-${i+1}`)
      if(!!e.target.closest(factory_item_all) ){
        console.log('fuck')
        //item_all[i].classList.remove('items-display')
      }
    }
  })
}()