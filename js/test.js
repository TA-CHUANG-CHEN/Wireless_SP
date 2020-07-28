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
        let div_new = document.createElement('div')
        dark_bg.appendChild('div_new')
        div_new.classList.add('dark-display')
        console.log('div_new')
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
  
  
  
  
}()
const pro_ee = function (){
  const ee = document.querySelector(`.E-E-text-${ee}`)
}
const pro_trans = function (){
  const trans = document.querySelector(`transport-icon-${t}`)
}
 