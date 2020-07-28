//click over-view  7 list

const ov_all = function (){
  
  document.addEventListener('click',(e)=>{
    for(let i =1 ; i<8 ;i++){
    let proto_all =document.querySelector(`.proto-${i}`)
    let ov_all =document.querySelector(`.ov2-${i}`)
    let nth = document.querySelectorAll(`div:nth-child(5)`)
    if(e.target == ov_all){
        proto_all.classList.remove('proto-display')
        console.log(nth)
    }
    if(e.target !== ov_all){
        proto_all.classList.add('proto-display')
    }
    }
  })
}()