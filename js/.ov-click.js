//click over-view  7 list
/* const ov_all = function (){
  document.addEventListener('click',(e)=>{
    //for(let i =1 ; i<8 ;i++){
    let i = e.target.dataset.index
    let proto_all =document.querySelector(`.proto-${i}`)
    let ov_all =document.querySelector(`.ov2-${i}`)
    let dark_bg = document.getElementById('dark-bg')
    let dark_bg_display = document.querySelector('.dark-bg-display')
    dark_bg.style.height = document.documentElement.scrollHeight+`px`
    dark_bg.style.width = document.documentElement.scrollWidth+`px`
    if(e.target == ov_all){
        proto_all.classList.remove('proto-display')
        dark_bg.classList.remove('dark-bg-display')
        console.log(i)
    }
    if(!!e.target.closest(document.querySelector('ov-para4'))){
        proto_all.classList.add('proto-display')
        dark_bg.classList.add('dark-bg-display')
    }
    }
  )
}()
 */
const ov_all_1 = function() {
    let para4 = document.querySelector('.ov2-para4')
    para4.addEventListener('click',(e)=>{
      e.stopPropagation
      e.preventDefault
      let i = e.target.dataset.index
      let ov_2_1 =document.querySelector('.ov2-1')
      let ov_2_2 =document.querySelector('.ov2-2')
      let ov_2_3 =document.querySelector('.ov2-3')
      let ov_2_4 =document.querySelector('.ov2-4')
      let ov_2_5 =document.querySelector('.ov2-5')
      let ov_2_6 =document.querySelector('.ov2-6')
      let ov_2_7 =document.querySelector('.ov2-7')
      let proto_1 = document.querySelector('.proto-1')
      let proto_2 = document.querySelector('.proto-2')
      let proto_3 = document.querySelector('.proto-3')
      let proto_4 = document.querySelector('.proto-4')
      let proto_5 = document.querySelector('.proto-5')
      let proto_6 = document.querySelector('.proto-6')
      let proto_7 = document.querySelector('.proto-7')
      let dark_bg = document.getElementById('dark-bg')
      dark_bg.style.height = document.documentElement.scrollHeight+`px`
      dark_bg.style.width = document.documentElement.scrollWidth+`px`
      if(e.target == ov_2_1 ){
        proto_1.classList.remove('proto-display')
        dark_bg.style.display="none"
      }
      if(e.target == ov_2_2){
        proto_2.classList.remove('proto-display')
        dark_bg.style.display="none"
      }
      if(e.target !== ov_2_1){
        proto_1.classList.add('proto-display')
        dark_bg.style.display="block"
      }
      if(e.target !== ov_2_2){
        proto_2.classList.add('proto-display')
        dark_bg.style.display="block"
      }
      }
    )}()