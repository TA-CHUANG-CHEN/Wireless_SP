//click over-view  7 list
let ovallk = function ovall(){
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
/* const proto_1 = document.querySelector('.proto-1')
const proto_2 = document.querySelector('.proto-2')
const proto_3 = document.querySelector('.proto-3')
const proto_4 = document.querySelector('.proto-4')
const proto_5 = document.querySelector('.proto-5')
const proto_6 = document.querySelector('.proto-6')
const proto_7 = document.querySelector('.proto-7')
//over-view 7 button
const ov2_1 =document.querySelector('.ov2-1')
const ov2_2 =document.querySelector('.ov2-2')
const ov2_3 =document.querySelector('.ov2-3')
const ov2_4 =document.querySelector('.ov2-4')
const ov2_5 =document.querySelector('.ov2-5')
const ov2_6 =document.querySelector('.ov2-6')
const ov2_7 =document.querySelector('.ov2-7')
// over-view para4
const ov2_para4 = document.querySelector('.ov2-para4')
// listening document
document.addEventListener('click',(e)=>{
  switch(e.target){
    case ov2_1:
        proto_1.classList.remove('proto-display')
        break;
    case ov2_2:
        proto_2.classList.remove('proto-display')
        break;
    case ov2_3:
        proto_3.classList.remove('proto-display')
        break;
    case ov2_4:
        proto_4.classList.remove('proto-display')
        break;
    case ov2_5:
        proto_5.classList.remove('proto-display')
        break;
    case ov2_6:
        proto_6.classList.remove('proto-display')
        break;
    case ov2_7:
        proto_7.classList.remove('proto-display')
        break;     
  }
 /*  if(!!ov2_1 && e.target == ov2_1){
    proto_1.classList.remove('proto-display')
  }
  if(e.target !== ov2_1){
    proto_1.classList.add('proto-display')
  }
  if(!!ov2_3 && e.target == ov2_3){
    proto_2.classList.remove('proto-display')
  }
  if(e.target !== ov2_3){
    proto_2.classList.add('proto-display')
  }
  if(!!ov2_5 && e.target == ov2_5){
    proto_5.classList.remove('proto-display')
  }
  if(e.target !== ov2_5){
    proto_5.classList.add('proto-display')
  }
  if(!!ov2_6 && e.target == ov2_6){
    proto_6.classList.remove('proto-display')
  }
  if(e.target !== ov2_6){
    proto_6.classList.add('proto-display')
  }
  if(!!ov2_6 && e.target == ov2_6){
    proto_6.classList.remove('proto-display')
  }
  if(e.target !== ov2_6){
    proto_6.classList.add('proto-display')
  } 
 
})   */