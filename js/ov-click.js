const proto_1 = document.querySelector('.proto-1')
const ov2_para4 = document.querySelector('.ov2-para4')
const ov2_1 =document.querySelector('.ov2-1')
document.addEventListener('click',(e)=>{
  if(!!ov2_1 && e.target == ov2_1){
    proto_1.classList.remove('proto-display')
  }
  if(e.target !== ov2_1){
    proto_1.classList.add('proto-display')
  }
})  