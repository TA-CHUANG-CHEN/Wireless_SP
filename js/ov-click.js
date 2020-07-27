//click over-view  7 list
const ov_all = function (){
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
const products_all = function(){
  const product_1 = document.getElementById('products-1')
  const product_2 = document.getElementById('products-2')
  const product_3 = document.getElementById('products-3')
  document.addEventListener('click',(e)=>{
  })

}()