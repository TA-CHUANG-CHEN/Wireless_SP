// products parts -factory
const products_fac = function (){
  document.addEventListener('click',(e)=>{
    const item_1_1_1 = document.querySelector('#item-1-1-1')
    const item_1_1_2 = document.querySelector('#item-1-1-2 div')
    const item_1_2_1 = document.querySelector('#item-1-2-1')
    const item_1_2_2 = document.querySelector('#item-1-2-2')
    const item_2_1_1 = document.querySelector('#item-2-1-1')
    const item_2_1_2 = document.querySelector('#item-2-1-2')
    const item_2_2_1 = document.querySelector('#item-2-2-1')
    const item_2_2_2 = document.querySelector('#item-2-2-2')
    const item_2_3_1 = document.querySelector('#item-2-3-1')
    const item_2_3_2 = document.querySelector('#item-2-3-2')
    const item_2_4_1 = document.querySelector('#item-2-4-1')
    const item_2_4_2 = document.querySelector('#item-2-4-2')
    const item_3_1_1 = document.querySelector('#item-3-1-1')
    const item_3_1_2 = document.querySelector('#item-3-1-2')
    const item_3_1_3 = document.querySelector('#item-3-1-3')
    const item_3_1_4 = document.querySelector('#item-3-1-4')
    const item_3_1_5 = document.querySelector('#item-3-1-5')
    const item_3_1_6 = document.querySelector('#item-3-1-6')
    const item_1_1 = document.querySelector('.item-1-1')
    const item_1_2 = document.querySelector('.item-1-2')
    const item_2_1 = document.querySelector('.item-2-1')
    const item_2_2 = document.querySelector('.item-2-2')
    const item_2_3 = document.querySelector('.item-2-3')
    const item_2_4 = document.querySelector('.item-2-4')
    const item_3_1 = document.querySelector('.item-3-1')
    const item_3_2 = document.querySelector('.item-3-2')
    const item_3_3 = document.querySelector('.item-3-3')
    const dark_bg_2 = document.getElementById('dark-bg-2')
    const close_icon_2 = document.querySelector('.close-icon-2')
    dark_bg_2.style.height = document.documentElement.scrollHeight+'px'
    dark_bg_2.style.width = document.documentElement.scrollWidth+'px'
   if(e.target == item_1_1_1){
    item_1_1.style =`display:block;top:10%;`
    dark_bg_2.style.display =`block`
    close_icon_2.style = `display:block;margin: -390px 0 0 980px;`
   }
   if(e.target.closest('#item-1-1-2')){
    item_1_1.style =`display:block;top:40%`
    dark_bg_2.style.display =`block`
    close_icon_2.style = `display:block;margin:1800px 0 0 980px;`  
   } if(e.target == dark_bg_2 || e.target == close_icon_2){
    item_1_1.style =`display:none`
    dark_bg_2.style.display =`none`
    close_icon_2.style.display =`none`
   }
   if(e.target == item_1_2_1){
    item_1_2.style =`display:block;top:10%;`
    dark_bg_2.style.display =`block`
    close_icon_2.style = `display:block;margin: -390px 0 0 880px;`
    
   }if(e.target.closest('#item-1-2-2')){
    item_1_2.style =`display:block;top:40%`
    dark_bg_2.style.display =`block`
    close_icon_2.style= `display:block;margin:1800px 0 0 880px;`  
    
   } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_1_2.style =`display:none`
    dark_bg_2.style.display =`none`;
    close_icon_2.style.display =`none`
   }
   if(e.target == item_2_1_1){
    item_2_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 880px;`
   }
   if(e.target.closest('#item-2-1-2')){
    item_2_1.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style =  `display:block;margin:1800px 0 0 880px;`  
   } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_2_1.style =`display:none`;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
   }
   if(e.target == item_2_2_1){
    item_2_2.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 1090px;`
   } 
   if(e.target.closest('#item-2-2-2')){
    item_2_2.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 1800px 0 0 1090px;`
   }if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_2_2.style =`display:none`;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
   }
   if(e.target == item_2_3_1){
    item_2_3.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 1090px;`
   } 
   if(e.target.closest('#item-2-3-2')){
    item_2_3.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 1800px 0 0 1090px;`
   } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_2_3.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
   }
   if(e.target == item_2_4_1){
    item_2_4.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 980px;`
   }
   if(e.target.closest('#item-2-4-2')){
    item_2_4.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 1800px 0 0 980px;`
   }  if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_2_4.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
   }
   if(e.target == item_3_1_1){
    item_3_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 880px;`
   }
   if(e.target.closest('#item-3-1-4') ){
    item_3_1.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 1800px 0 0 880px;`
   } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_3_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
   }
   if(e.target == item_3_1_2){
    item_3_2.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 880px;`
   }
   if(e.target.closest('#item-3-1-5') ){
    item_3_2.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 1800px 0 0 880px;`
   } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_3_2.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
   }
   if(e.target == item_3_1_3){
    item_3_3.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 880px;`
   }
   if(e.target.closest('#item-3-1-6') ){
    item_3_3.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 1800px 0 0 880px;`
   } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_3_3.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
   }
  })
}()
// products parts -E-E
const products_ee = function (){
  document.addEventListener('click',(e)=>{
  const item_4_1_1 = document.querySelector('#item-4-1-1')
  const item_4_1_2 = document.querySelector('#item-4-1-2')
  const item_4_1_3 = document.querySelector('#item-4-1-3')
  const item_4_1_4 = document.querySelector('#item-4-1-4')
  const item_4_2_1 = document.querySelector('#item-4-2-1')
  const item_4_2_2 = document.querySelector('#item-4-2-2')
  const item_4_2_3 = document.querySelector('#item-4-2-3')
  const item_4_2_4 = document.querySelector('#item-4-2-4')
  const item_4_3_1 = document.querySelector('#item-4-3-1')
  const item_4_3_2 = document.querySelector('#item-4-3-2')
  const item_5_1_1 = document.querySelector('#item-5-1-1')
  const item_5_1_2 = document.querySelector('#item-5-1-2')
  const item_6_1_1 = document.querySelector('#item-6-1-1')
  const item_6_1_2 = document.querySelector('#item-6-1-2')
  const item_7_1_1 = document.querySelector('#item-7-1-1')
  const item_7_1_2 = document.querySelector('#item-7-1-2')
  const item_8_1_1 = document.querySelector('#item-8-1-1')
  const item_8_1_2 = document.querySelector('#item-8-1-2')
  const item_8_1_3 = document.querySelector('#item-8-1-3')
  const item_8_1_4 = document.querySelector('#item-8-1-4')
  const item_8_2_1 = document.querySelector('#item-8-2-1')
  const item_8_2_2 = document.querySelector('#item-8-2-2')
  const item_4_1 = document.querySelector('.item-4-1')
  const item_4_2 = document.querySelector('.item-4-2')
  const item_4_3 = document.querySelector('.item-4-3')
  const item_4_4 = document.querySelector('.item-4-4')
  const item_4_5 = document.querySelector('.item-4-5')
  const item_5_1 = document.querySelector('.item-5-1')
  const item_6_1 = document.querySelector('.item-6-1')
  const item_7_1 = document.querySelector('.item-7-1')
  const item_8_1 = document.querySelector('.item-8-1')
  const item_8_2 = document.querySelector('.item-8-2')
  const item_8_3 = document.querySelector('.item-8-3')
  let dark_bg_2 = document.getElementById('dark-bg-2')
  const close_icon_2 = document.querySelector('.close-icon-2')
  dark_bg_2.style.height = document.documentElement.scrollHeight+`px`
  dark_bg_2.style.width = document.documentElement.scrollWidth+`px`;
    if(e.target == item_4_1_1){
      item_4_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 1090px;`
    } 
    if(e.target.closest('#item-4-1-3')){
      item_4_1.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 1800px 0 0 1090px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_4_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_4_1_2){
      item_4_4.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 1090px;`
    } 
    if(e.target.closest('#item-4-1-4')){
      item_4_4.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 1800px 0 0 1090px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_4_4.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_4_2_1 ){
      item_4_2.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 1090px;`
    }
    if( e.target.closest('#item-4-2-2') ){
      item_4_2.style =`display:block;top:48%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 2380px 0 0 1090px;`
    }  if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_4_2.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }  
    if(e.target == item_4_3_1){
      item_4_3.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 980px;`
    }
    if(e.target.closest('#item-4-3-2')){
      item_4_3.style =`display:block;top:48%;`;dark_bg_2.style.display =`block`;close_icon_2.style =`display:block;margin: 2380px 0 0 980px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_4_3.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_4_2_4){
      item_4_5.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 1090px;`
    }
    if(e.target.closest('#item-4-2-3')){
      item_4_5.style =`display:block;top:48%;`;dark_bg_2.style.display =`block`;close_icon_2.style =`display:block;margin: 2380px 0 0 1090px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_4_5.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_5_1_1){
    item_5_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 1090px;`
    } 
    if(e.target.closest('#item-5-1-2')){
      item_5_1.style =`display:block;top:55%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 2730px 0 0 1090px;`
      } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_5_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_6_1_1){
    item_6_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 880px;`
    } 
    if(e.target.closest('#item-6-1-2')){
      item_6_1.style =`display:block;top:62%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin:3220px 0 0 880px;`
      } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_6_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_7_1_1){
    item_7_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 1090px;`
    } 
    if(e.target.closest('#item-7-1-2')){
      item_7_1.style =`display:block;top:65%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin:3430px 0 0 1090px;`
      } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_7_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_8_1_1){
    item_8_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 1130px;`
    } 
    if(e.target.closest('#item-8-1-3')){
      item_8_1.style =`display:block;top:70%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3780px 0 0 1130px;`
      } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_8_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_8_2_1){
    item_8_2.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 1190px;`
    }
    if( e.target.closest('#item-8-2-2')){
      item_8_2.style =`display:block;top:70%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3770px 0 0 1190px;`
      } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_8_2.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_8_1_2){
      item_8_3.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 1130px;`
      } 
      if(e.target.closest('#item-8-1-4')){
        item_8_3.style =`display:block;top:70%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3780px 0 0 1130px;`
        } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_8_3.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
      }
  })
}()
// products parts -transport
const products_trans = function (){
  document.addEventListener('click',(e)=>{
    const item_9_1_1 = document.querySelector('#item-9-1-1')
    const item_9_1_2 = document.querySelector('#item-9-1-2')
    const item_9_2_1 = document.querySelector('#item-9-2-1')
    const item_9_2_2 = document.querySelector('#item-9-2-2')
    const item_9_3_1 = document.querySelector('#item-9-3-1')
    const item_9_3_2 = document.querySelector('#item-9-3-2')
    const item_10_1_1 = document.querySelector('#item-10-1-1')
    const item_10_1_2 = document.querySelector('#item-10-1-2')
    const item_10_2_1 = document.querySelector('#item-10-2-1')
    const item_10_2_2 = document.querySelector('#item-10-2-2')
    const item_10_3_1 = document.querySelector('#item-10-3-1')
    const item_10_3_2 = document.querySelector('#item-10-3-2')
    const item_10_3_3 = document.querySelector('#item-10-3-3')
    const item_10_3_4 = document.querySelector('#item-10-3-4')
    const item_10_3_5 = document.querySelector('#item-10-3-5')
    const item_10_3_6 = document.querySelector('#item-10-3-6')
    const item_11_1_1 = document.querySelector('#item-11-1-1')
    const item_11_1_2 = document.querySelector('#item-11-1-2')
    const item_11_2_1 = document.querySelector('#item-11-2-1')
    const item_11_2_2 = document.querySelector('#item-11-2-2')
    const item_11_2_3 = document.querySelector('#item-11-2-3')
    const item_11_3_1 = document.querySelector('#item-11-3-1')
    const item_11_3_2 = document.querySelector('#item-11-3-2')
    const item_12_1_1 = document.querySelector('#item-12-1-1')
    const item_12_1_2 = document.querySelector('#item-12-1-2')
    const item_12_1_3 = document.querySelector('#item-12-1-3')
    const item_12_1_4 = document.querySelector('#item-12-1-4')
    const item_9_1 = document.querySelector('.item-9-1')
    const item_9_2 = document.querySelector('.item-9-2')
    const item_9_3 = document.querySelector('.item-9-3')
    const item_10_1 = document.querySelector('.item-10-1')
    const item_10_2 = document.querySelector('.item-10-2')
    const item_10_3 = document.querySelector('.item-10-3')
    const item_10_4 = document.querySelector('.item-10-4')
    const item_10_5 = document.querySelector('.item-10-5')
    const item_11_1 = document.querySelector('.item-11-1')
    const item_11_2 = document.querySelector('.item-11-2')
    const item_11_3 = document.querySelector('.item-11-3')
    const item_11_4 = document.querySelector('.item-11-4')
    const item_12_1 = document.querySelector('.item-12-1')
    const item_12_2 = document.querySelector('.item-12-2')
    let dark_bg_2 = document.getElementById('dark-bg-2')
    const close_icon_2 = document.querySelector('.close-icon-2')
    dark_bg_2.style.height = document.documentElement.scrollHeight+`px`
    dark_bg_2.style.width = document.documentElement.scrollWidth+`px`;
    if(e.target == item_9_1_1){
      item_9_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 980px;`
    }
    if(e.target.closest('#item-9-1-2') ){
      item_9_1.style =`display:block;top:48%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 2380px 0 0 980px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_9_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_9_2_1 ){
      item_9_2.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 880px;`
    } 
    if( e.target.closest('#item-9-2-2') ){
      item_9_2.style =`display:block;top:48%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 2380px 0 0 880px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_9_2.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_9_3_1){
      item_9_3.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 880px;`
    } 
    if( e.target.closest('#item-9-3-2') ){
      item_9_3.style =`display:block;top:48%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 2380px 0 0 880px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_9_3.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_10_1_1){
      item_10_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 770px;`
    }
    if( e.target.closest('#item-10-1-2') ){
      item_10_1.style =`display:block;top:55%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 2730px  0 0 770px;`
    }
     if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_10_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_10_2_1){
      item_10_2.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 880px;`
    } 
    if(e.target.closest('#item-10-2-2')  ){
      item_10_2.style =`display:block;top:55%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 2730px  0 0 880px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_10_2.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_10_3_1){
      item_10_3.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 980px;`
    }
    if(e.target.closest('#item-10-3-4')){
      item_10_3.style =`display:block;top:62%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3220px 0 0 980px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_10_3.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_10_3_2){
      item_10_4.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 980px;`
    } 
    if(e.target.closest('#item-10-3-5')){
      item_10_4.style =`display:block;top:62%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3220px 0 0 980px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_10_4.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_10_3_3){
      item_10_5.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 980px;`
    } 
    if(e.target.closest('#item-10-3-6')){
      item_10_5.style =`display:block;top:62%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3220px 0 0 980px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_10_5.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_11_1_1){
      item_11_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 880px;`
    } 
    if(e.target.closest('#item-11-1-2')){
      item_11_1.style =`display:block;top:65%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3430px 0 0 880px;`
    }if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_11_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_11_2_1 ){
      document.querySelector('.item-11-2-title').textContent = `Staff Identity`
      item_11_2.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 980px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_11_2.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if( e.target.closest('#item-11-2-3')){
      document.querySelector('.item-11-2-title').textContent = `Staff Identity/
      Entrance Control`
      item_11_2.style =`display:block;top:65%;;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3430px 0 0 980px;`
    }
    if(e.target == item_11_3_1){
      item_11_3.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 880px;`
    }
    if(e.target.closest('#item-11-3-2')  ){
      item_11_3.style =`display:block;top:65%;;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3430px 0 0 880px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_11_3.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_11_2_2){
      document.querySelector('.item-11-2-title').textContent = `
      Entrance Control`
      item_11_4.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 980px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_11_4.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_12_1_1) {
      item_12_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 770px;`
    }
    if(e.target.closest('#item-12-1-3')) {
      item_12_1.style =`display:block;top:70%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin:  3780px 0 0 770px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_12_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_12_1_2) {
      item_12_2.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -390px 0 0 770px;`
    }
    if(e.target.closest('#item-12-1-4')) {
      item_12_2.style =`display:block;top:70%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin:  3780px 0 0 770px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_12_2.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
  })
}()