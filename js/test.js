const ov_all = function (){
  document.addEventListener('click',(e)=>{
    for(let i =1 ; i<8 ;i++){
    let proto_all =document.querySelector(`.proto-${i}`)
    let ov_all =document.querySelector(`.ov2-${i}`)
    let dark_bg = document.getElementById('dark-bg')
    dark_bg.style.height = document.documentElement.scrollHeight+`px`
    dark_bg.style.width = document.documentElement.scrollWidth+`px`;
    if(e.target == ov_all){
        proto_all.classList.remove('proto-display')
        dark_bg.style.display =`block`
    }
    if(e.target !== ov_all){
        proto_all.classList.add('proto-display')
      
    }
    }
  })
}()

const pro_fac = function (){
  const item_1_1_1 = document.getElementById('item-1-1-1')
  const item_1_1_2 = document.getElementById('item-1-1-2')
  const item_1_2_1 = document.getElementById('item-1-2-1')
  const item_1_2_2 = document.getElementById('item-1-2-2')
  const item_2_1_1 = document.getElementById('item-2-1-1')
  const item_2_1_2 = document.getElementById('item-2-1-2')
  const item_2_2_1 = document.getElementById('item-2-2-1')
  const item_2_2_2 = document.getElementById('item-2-2-2')
  const item_2_3_1 = document.getElementById('item-2-3-1')
  const item_2_3_2 = document.getElementById('item-2-3-2')
  const item_2_4_1 = document.getElementById('item-2-4-1')
  const item_2_4_2 = document.getElementById('item-2-4-2')
  const item_3_1_1 = document.getElementById('item-3-1-1')
  const item_3_1_2 = document.getElementById('item-3-1-2')
  const item_3_1_3 = document.getElementById('item-3-1-3')
  const item_3_1_4 = document.getElementById('item-3-1-4')
  const item_3_1_5 = document.getElementById('item-3-1-5')
  const item_3_1_6 = document.getElementById('item-3-1-6')
  const item_1_1 = document.querySelector('.item-1-1')
  const item_1_2 = document.querySelector('.item-1-2')
  const item_2_1 = document.querySelector('.item-2-1')
  const item_2_2 = document.querySelector('.item-2-2')
  const item_2_3 = document.querySelector('.item-2-3')
  const item_2_4 = document.querySelector('.item-2-4')
  const item_3_1 = document.querySelector('.item-3-1')
  const fac_button =document.querySelector('.factory-button')
  document.addEventListener('click',(e)=>{
   if(e.target == item_1_1_1 || e.target == item_1_1_2){
      item_1_1.style =`display:block`
   }else{
      item_1_1.style =`display:none`
   }
   if(e.target == item_1_2_1 || e.target == item_1_2_2){
    item_1_2.style =`display:block`
   }else{
    item_1_2.style =`display:none`
   }
   if(e.target == item_2_1_1 || e.target == item_2_1_2){
    item_2_1.style =`display:block`
   }else{
    item_2_1.style =`display:none`
   }
   if(e.target == item_2_2_1 || e.target == item_2_2_2){
    item_2_2.style =`display:block`
   }else{
    item_2_2.style =`display:none`
   }
   if(e.target == item_2_3_1 || e.target == item_2_3_2){
    item_2_3.style =`display:block`
   }else{
    item_2_3.style =`display:none`
   }
   if(e.target == item_3_1_1 || e.target == item_3_1_2 || e.target == item_3_1_3 || e.target == item_3_1_4 || e.target == item_3_1_5 || e.target == item_3_1_6){
    item_2_4.style =`display:block`
   }else{
    item_2_4.style =`display:none`
   }
   if(e.target == item_2_4_1 || e.target == item_2_4_2){
    item_3_1.style =`display:block`
   }else{
    item_3_1.style =`display:none`
   }

  })
  
  
  
}()
const pro_ee = function (){
  const item_4_1_1 = document.getElementById('item-4-1-1')
  const item_4_1_2 = document.getElementById('item-4-1-2')
  const item_4_1_3 = document.getElementById('item-4-1-3')
  const item_4_1_4 = document.getElementById('item-4-1-4')
  const item_4_2_1 = document.getElementById('item-4-2-1')
  const item_4_2_2 = document.getElementById('item-4-2-2')
  const item_4_2_3 = document.getElementById('item-4-2-3')
  const item_4_3_1 = document.getElementById('item-4-3-1')
  const item_4_3_2 = document.getElementById('item-4-3-2')
  const item_5_1_1 = document.getElementById('item-5-1-1')
  const item_5_1_2 = document.getElementById('item-5-1-2')
  const item_6_1_1 = document.getElementById('item-6-1-1')
  const item_7_1_2 = document.getElementById('item-6-1-2')
  const item_7_1_1 = document.getElementById('item-7-1-1')
  const item_7_1_2 = document.getElementById('item-7-1-2')
  const item_8_1_1 = document.getElementById('item-8-1-1')
  const item_8_1_2 = document.getElementById('item-8-1-2')
  const item_8_1_3 = document.getElementById('item-8-1-3')
  const item_8_1_3 = document.getElementById('item-8-1-4')
  const item_8_2_1 = document.getElementById('item-8-2-1')
  const item_8_2_2 = document.getElementById('item-8-2-2')
  const item_4_1 = document.querySelector('.item-4-1')
  const item_4_2 = document.querySelector('.item-4-2')
  const item_4_3 = document.querySelector('.item-4-3')
  const item_5_1 = document.querySelector('.item-5-1')
  const item_6_1 = document.querySelector('.item-6-1')
  const item_7_1 = document.querySelector('.item-7-1')
  const item_8_1 = document.querySelector('.item-8-1')
  const item_8_2 = document.querySelector('.item-8-2')
  document.addEventListener('click')
}()
const pro_trans = function (){
  const trans = document.querySelector(`transport-icon-${t}`)
}
 