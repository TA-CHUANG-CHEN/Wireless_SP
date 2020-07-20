const res_all = document.querySelector('.res-over-view')
const rescontent = document.querySelector('.res-content')
res_all.addEventListener('mouseover',(e)=>{
   if(e.target.closest('.res-over-view') !==null ){
     rescontent.setAttribute('style','border:#10c5e9 1px solid;')
   }
})
res_all.addEventListener('mouseleave',(e)=>{
    if(!!e.target.closest('.res-over-view') ){
      rescontent.setAttribute('style','border:#bbbdbe 1px solid;')
      }
})
