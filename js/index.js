// check screen-size
const hastouchscreen = function hastouchscreen(){
  let hastouchscreen = false
  if('maxTouchPoints' in navigator){
    let hastouchscreen = navigator.maxTouchPoints > 0
    return hastouchscreen 
  }else if('msMaxTouchPoints' in navigator){
    let hastouchscreen = navigator.msMaxTouchPoints > 0
    return hastouchscreen 
  }else{
    let mq =window.matchMedia && matchMedia('(max-width:580px)')
    if(mq && mq.media == ('(max-width:580px)') ){
      hastouchscreen = true
       return hastouchscreen 
    }else if('orientation' in window){
      hastouchscreen = true
       return hastouchscreen 
    }else{
      const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone','IEMobile','Opera Mini']
      let hastouchscreen  = mobileDevice.some(e => navigator.userAgent.match(e))
      return hastouchscreen 
    }
  }
}()
// resources parts
const resources_all = function(){
const res_all = document.querySelector('.res-over-view')
const res_content = document.querySelector('.res-content')
const res_item = document.querySelector('.res-item')
const left_arrow = document.querySelector('.left-arrow img')
const right_arrow = document.querySelector('.right-arrow img')
const res_item1  = document.querySelector('.res-item-1')
const res_item2  = document.querySelector('.res-item-2')
const res_item3  = document.querySelector('.res-item-3')
const res_item4  = document.querySelector('.res-item-4')
const res_item5  = document.querySelector('.res-item-5')
const res_item6  = document.querySelector('.res-item-6')
const res_item1_img  = document.querySelector('.res-item-1 img')
const res_item2_img  = document.querySelector('.res-item-2 img')
const res_item3_img  = document.querySelector('.res-item-3 img')
const res_item4_img  = document.querySelector('.res-item-4 img')
const res_item5_img  = document.querySelector('.res-item-5 img')
const res_item6_img  = document.querySelector('.res-item-6 img')
const res_para1 = document.querySelector('.resource-para1')
const res_para2 = document.querySelector('.resource-para2')
const res_para3 = document.querySelector('.resource-para3')
const res_para4 = document.querySelector('.resource-para4')
const res_para5 = document.querySelector('.resource-para5')
const res_para6 = document.querySelector('.resource-para6')
const resource_tag_1 = document.querySelector('.resource-1')
const resource_tag_2 = document.querySelector('.resource-2')
const resource_tag_3 = document.querySelector('.resource-3')
const resource_tag_4 = document.querySelector('.resource-4')
const res_button = document.querySelector('.download-button div')
const res_button_slide = document.querySelector('.download-button')
res_all.addEventListener('mouseover',(e)=>{
   if(e.target.closest('.res-over-view') !==null ){
     res_content.setAttribute('style','border:#10c5e9 1px solid;')
   }
})
res_all.addEventListener('mouseleave',(e)=>{
    if(!!e.target.closest('.res-over-view') ){
      res_content.setAttribute('style','border:#bbbdbe 1px solid;')
      }
})
res_all.addEventListener('click',(e)=>{
  res_item2.style="display:flex"
  left_arrow.style = `visibility:hidden`
  right_arrow.style = `visibility:hidden`
  res_item1.style = `padding:0 0 0 0;`
  res_item3.style = `padding:0 0 0 0;`
  res_button_slide.style=`display:block`
  if(e.target == resource_tag_1 && !hastouchscreen ){
    res_para1.innerHTML = `Advanced Industrial<br>LoRaWAN Wireless I/O Module`
    res_para2.innerHTML =`Wzzard Edge & IIoT<br>Starter Kits Selection Guide`
    res_para3.innerHTML =`Proprietary LPWAN IoT <br>Wireless I/O Module`
    res_item1_img.src = `images/leaflet_1.jpg`
    res_item2_img.src = `images/leaflet_2.jpg`
    res_item3_img.src = `images/leaflet_3.jpg`
    res_item4_img.style = 'margin: 0 0 0 80px'
    res_item5_img.style = 'margin: 0 0 0 80px'
    res_item6_img.style = 'margin: 0 0 0 80px'
    //res_item1.setAttribute('href','https://advcloudfiles.advantech.com/ecatalog/2020/07170936.pdf')
    //res_item2.setAttribute('href','http://advcloudfiles.advantech.com/ecatalog/2018/09191348.pdf')
    //res_item3.setAttribute('href','https://advcloudfiles.advantech.com/ecatalog/2020/07170935.pdf')
    right_arrow.style = `visibility:visible`
    res_button.textContent = `Download All`
  }
  else if(e.target == resource_tag_1 && !!hastouchscreen){
    res_para1.innerHTML = `Advanced Industrial<br>LoRaWAN Wireless I/O Module`
    res_para2.innerHTML =`Wzzard Edge & IIoT<br>Starter Kits Selection Guide`
    res_para3.innerHTML =`Proprietary LPWAN IoT <br>Wireless I/O Module`
    res_item1_img.src = `images/leaflet_1.jpg`
    res_item2_img.src = `images/leaflet_2.jpg`
    res_item3_img.src = `images/leaflet_3.jpg`
    res_item4.style.display = 'block'
    res_item5.style.display = 'block'
    res_item6.style.display = 'block'
    res_item4_img.style = 'margin: 0 0 0 80px'
    res_item5_img.style = 'margin: 0 0 0 80px'
    res_item6_img.style = 'margin: 0 0 0 80px'
    //res_item1.setAttribute('href','https://advcloudfiles.advantech.com/ecatalog/2020/07170936.pdf')
    //res_item2.setAttribute('href','http://advcloudfiles.advantech.com/ecatalog/2018/09191348.pdf')
    //res_item3.setAttribute('href','https://advcloudfiles.advantech.com/ecatalog/2020/07170935.pdf')
    right_arrow.style = `visibility:visible`
    res_button.textContent = `Download Leaflet`
  }
  
  if(e.target == resource_tag_2 ){
    res_item2.style="display:none"
    res_para1.innerHTML = `Cellular Routers & Gateways <br>For Industrial IoT & Enahced Networking`
    res_para3.innerHTML =`WebAccess/DMP Generation2`
    res_item1_img.src = `images/brochure_1.jpg`
    res_item3_img.src = `images/brochure_2.jpg`
    res_button.textContent = `Download All`
    res_item4.style.display="none"
    res_item5.style.display="none"
    res_item6.style.display="none"
    //res_item1.setAttribute('href','https://mega.nz/file/pw8zWCYA#DIW9c0xUOpWulyuDlqBrbG34D9VvXLTba2OwbKb3jbo')
    //res_item3.setAttribute('href','https://advcloudfiles.advantech.com/ecatalog/2019/01081359.pdf')

  }
  if(e.target == resource_tag_3){
    res_item2.style="display:none"
    res_para1.innerHTML = `WISE-4000 IoT Wireless<br> Sensor Node, Advantech (EN)`
    res_para3.innerHTML =`NB-IoT/LET-M Solutions and Use Cases`
    res_item1_img.src = `images/video_1.jpg`
    res_item3_img.src = `images/video_2.jpg`
    res_item1.style = `padding:30px 0 0 0;`
    res_item3.style = `padding:30px 0 0 0;`
    res_button.textContent = `Download Video/Webinar `
    res_button_slide.style=`display:none`
    res_item4.style.display="none"
    res_item5.style.display="none"
    res_item6.style.display="none"
    //res_item1.setAttribute('href','https://www.youtube.com/watch?v=O4Ez3dmBTe8&feature=youtu.be')
    //res_item3.setAttribute('href','https://www.youtube.com/watch?v=5LrEnn6ALdM&feature=youtu.be')

  }
  if(e.target == resource_tag_4){
    res_item2.style="display:none"
    res_item3.style="display:none"
    res_item4.style.display="none"
    res_item5.style.display="none"
    res_item6.style.display="none"
    //res_item1.setAttribute('href','https://www2.advantech.com/ia/iiot/case-study/Intelligent%20Connectivity_Success%20Stories.pdf')
    res_para1.innerHTML = `Intelligent Connectivity Wireless<br>Success Stories`
    res_item1_img.src = `images/Success Story_1.jpg`
    res_item1.style = `padding:30px 0 0 0;`
    res_button.innerHTML = `Download`
  }
})
res_item.addEventListener('click',(e)=>{
  if(e.target == right_arrow){
    //res_item1.setAttribute('href','https://www.dropbox.com/sh/rvgpkh0rfytxfsr/AABXMhouixyGg9F2OiVai7gga?dl=0&preview=AdvantechBB_WzzardWirelessSensingProducts_1220.pdf')
    //res_item2.setAttribute('href','https://www.dropbox.com/sh/a8idmft5jdwjddq/AAB_YKtwP3aW1NH8_GOBJOMoa?dl=0&preview=AdvantechBB_WzzardStarterKitsOverview_2120ss.pdf')
    res_item3.removeAttribute('href')
    left_arrow.style = `visibility:visible`
    right_arrow.style = `visibility:hidden`
    res_para1.innerHTML = `The Wzzard Intelligent <br>Sensing Platform`
    res_para2.innerHTML =`Wzzard Edge & IIoT <br> Starter Kits Selection Guide    `
    res_para3.innerHTML =`OBD Intelligent <br>  Cellular Gateway`
    res_item1_img.src = `images/leaflet_4.jpg`
    res_item2_img.src = `images/leaflet_5.jpg`
    res_item3_img.src = `images/leaflet_6.jpg`
  }
  if(e.target == left_arrow){
    //res_item1.setAttribute('href','https://advcloudfiles.advantech.com/ecatalog/2020/07170936.pdf')
    //res_item2.setAttribute('href','http://advcloudfiles.advantech.com/ecatalog/2018/09191348.pdf')
    //res_item3.setAttribute('href','https://advcloudfiles.advantech.com/ecatalog/2020/07170935.pdf')
    left_arrow.style = `visibility:hidden`
    right_arrow.style = `visibility:visible`
    res_para1.textContent = `Advanced IndustrialLoRaWAN Wireless I/O Module`
    res_para2.innerHTML =`Industrial NB-IoT/LTE-M <br>Wireless I/O Module`
    res_para3.innerHTML =`Proprietary LPWAN IoT <br>Wireless I/O Module`
    res_item1_img.src = `images/leaflet_1.jpg`
    res_item2_img.src = `images/leaflet_2.jpg`
    res_item3_img.src = `images/leaflet_3.jpg`
  }
})
}()
// over-view parts
const over_view = function (){
  document.addEventListener('click',(e)=>{
    for(let i =1 ; i<8 ;i++){
    let proto_all = document.querySelector(`.proto-${i}`)
    let dark_bg = document.getElementById('dark-bg')
    let close_icon = document.querySelector(`.close-icon-1-${i}`)
    let proto_id = document.getElementById(`proto-${i}`)
    dark_bg.style.height =document.documentElement.offsetHeight+`px`
    dark_bg.style.width =document.documentElement.offsetWidth+`px`;
    if(e.target.closest(`.ov2-${i}`)){
        proto_all.classList.remove('proto-display')
        dark_bg.style.display =`block`
        close_icon.style.display =`block`
        proto_id.style.display =`block`
        break;
    }
    if(e.target == dark_bg || e.target.closest(`.close-icon-1-${i}`)){
        proto_all.classList.add('proto-display')
        dark_bg.style.display =`none`
        close_icon.style.display =`none`
        proto_id.style.display =`none`
    }
    }
  })
}()
//3x 66.5%
//2x 62%
const products = function (){
  const dark_bg_3 = document.getElementById('dark-bg-3')
  const factory = document.getElementById('factory')
  const ee_all = document.querySelector('.E-E-all')
  const transport_all = document.querySelector('.transport-all')
  dark_bg_3.style.height = document.documentElement.scrollHeight+'px'
  dark_bg_3.style.width = document.documentElement.scrollWidth+'px'
  document.addEventListener('click', e =>{
    if(e.target.closest('#products-1')){
      factory.style.display = `block`
      dark_bg_3.style.display = `block`
    }
    if(e.target == dark_bg_3){
      factory.style.display = `none`
      dark_bg_3.style.display = `none`
    }
    if(e.target.closest('#products-2')){
      ee_all.style.display = `block`
      dark_bg_3.style.display = `block`
    }
    if(e.target == dark_bg_3){
      ee_all.style.display = `none`
      dark_bg_3.style.display = `none`
    }
    if(e.target.closest('#products-3')){
      transport_all.style.display = `block`
      dark_bg_3.style.display = `block`
    }
    if(e.target == dark_bg_3){
      transport_all.style.display = `none`
      dark_bg_3.style.display = `none`
    }
  
  })

}()
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
    close_icon_2.style = `display:block;margin: -420px 0 0 980px;`
   }
   if(e.target.closest('#item-1-1-2')){
    item_1_1.style =`display:block;top:40%`
    dark_bg_2.style.display =`block`
    close_icon_2.style = `display:block;margin:1680px 0 0 980px;`  
   } if(e.target == dark_bg_2 || e.target == close_icon_2){
    item_1_1.style =`display:none`
    dark_bg_2.style.display =`none`
    close_icon_2.style.display =`none`
   }
   if(e.target == item_1_2_1){
    item_1_2.style =`display:block;top:10%;`
    dark_bg_2.style.display =`block`
    close_icon_2.style = `display:block;margin: -420px 0 0 880px;`
    
   }if(e.target.closest('#item-1-2-2')){
    item_1_2.style =`display:block;top:40%`
    dark_bg_2.style.display =`block`
    close_icon_2.style= `display:block;margin:1680px 0 0 880px;`  
    
   } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_1_2.style =`display:none`
    dark_bg_2.style.display =`none`;
    close_icon_2.style.display =`none`
   }
   if(e.target == item_2_1_1){
    item_2_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 880px;`
   }
   if(e.target.closest('#item-2-1-2')){
    item_2_1.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style =  `display:block;margin:1680px 0 0 880px;`  
   } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_2_1.style =`display:none`;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
   }
   if(e.target == item_2_2_1){
    item_2_2.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 1090px;`
   } 
   if(e.target.closest('#item-2-2-2')){
    item_2_2.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 1680px 0 0 1090px;`
   }if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_2_2.style =`display:none`;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
   }
   if(e.target == item_2_3_1){
    item_2_3.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 1090px;`
   } 
   if(e.target.closest('#item-2-3-2')){
    item_2_3.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 1680px 0 0 1090px;`
   } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_2_3.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
   }
   if(e.target == item_2_4_1){
    item_2_4.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 980px;`
   }
   if(e.target.closest('#item-2-4-2')){
    item_2_4.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 1680px 0 0 980px;`
   }  if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_2_4.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
   }
   if(e.target == item_3_1_1){
    item_3_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 880px;`
   }
   if(e.target.closest('#item-3-1-4') ){
    item_3_1.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 1680px 0 0 880px;`
   } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_3_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
   }
   if(e.target == item_3_1_2){
    item_3_2.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 880px;`
   }
   if(e.target.closest('#item-3-1-5') ){
    item_3_2.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 1680px 0 0 880px;`
   } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_3_2.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
   }
   if(e.target == item_3_1_3){
    item_3_3.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 880px;`
   }
   if(e.target.closest('#item-3-1-6') ){
    item_3_3.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 1680px 0 0 880px;`
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
      item_4_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 1090px;`
    } 
    if(e.target.closest('#item-4-1-3')){
      item_4_1.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 1680px 0 0 1090px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_4_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_4_1_2){
      item_4_4.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 1090px;`
    } 
    if(e.target.closest('#item-4-1-4')){
      item_4_4.style =`display:block;top:40%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 1680px 0 0 1090px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_4_4.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_4_2_1 ){
      item_4_2.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 1090px;`
    }
    if( e.target.closest('#item-4-2-2') ){
      item_4_2.style =`display:block;top:48%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 2240px 0 0 1090px;`
    }  if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_4_2.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }  
    if(e.target == item_4_3_1){
      item_4_3.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 980px;`
    }
    if(e.target.closest('#item-4-3-2')){
      item_4_3.style =`display:block;top:48%;`;dark_bg_2.style.display =`block`;close_icon_2.style =`display:block;margin: 2240px 0 0 980px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_4_3.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_4_2_4){
      item_4_5.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 1090px;`
    }
    if(e.target.closest('#item-4-2-3')){
      item_4_5.style =`display:block;top:48%;`;dark_bg_2.style.display =`block`;close_icon_2.style =`display:block;margin: 2240px 0 0 1090px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_4_5.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_5_1_1){
    item_5_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 1090px;`
    } 
    if(e.target.closest('#item-5-1-2')){
      item_5_1.style =`display:block;top:55%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 2730px 0 0 1090px;`
      } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_5_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_6_1_1){
    item_6_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 880px;`
    } 
    if(e.target.closest('#item-6-1-2')){
      item_6_1.style =`display:block;top:62%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin:3220px 0 0 880px;`
      } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_6_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_7_1_1){
    item_7_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 1090px;`
    } 
    if(e.target.closest('#item-7-1-2')){
      item_7_1.style =`display:block;top:65%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin:3430px 0 0 1090px;`
      } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_7_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_8_1_1){
    item_8_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 1130px;`
    } 
    if(e.target.closest('#item-8-1-3')){
      item_8_1.style =`display:block;top:70%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3780px 0 0 1130px;`
      } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_8_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_8_2_1){
    item_8_2.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 1190px;`
    }
    if( e.target.closest('#item-8-2-2')){
      item_8_2.style =`display:block;top:70%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3770px 0 0 1190px;`
      } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
    item_8_2.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_8_1_2){
      item_8_3.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 1130px;`
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
      item_9_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 980px;`
    }
    if(e.target.closest('#item-9-1-2') ){
      item_9_1.style =`display:block;top:48%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 2240px 0 0 980px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_9_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_9_2_1 ){
      item_9_2.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 880px;`
    } 
    if( e.target.closest('#item-9-2-2') ){
      item_9_2.style =`display:block;top:48%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 2240px 0 0 880px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_9_2.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_9_3_1){
      item_9_3.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 880px;`
    } 
    if( e.target.closest('#item-9-3-2') ){
      item_9_3.style =`display:block;top:48%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 2240px 0 0 880px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_9_3.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_10_1_1){
      item_10_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 770px;`
    }
    if( e.target.closest('#item-10-1-2') ){
      item_10_1.style =`display:block;top:55%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 2730px  0 0 770px;`
    }
     if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_10_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_10_2_1){
      item_10_2.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 880px;`
    } 
    if(e.target.closest('#item-10-2-2')  ){
      item_10_2.style =`display:block;top:55%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 2730px  0 0 880px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_10_2.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_10_3_1){
      item_10_3.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 980px;`
    }
    if(e.target.closest('#item-10-3-4')){
      item_10_3.style =`display:block;top:62%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3220px 0 0 980px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_10_3.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_10_3_2){
      item_10_4.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 980px;`
    } 
    if(e.target.closest('#item-10-3-5')){
      item_10_4.style =`display:block;top:62%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3220px 0 0 980px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_10_4.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_10_3_3){
      item_10_5.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 980px;`
    } 
    if(e.target.closest('#item-10-3-6')){
      item_10_5.style =`display:block;top:62%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3220px 0 0 980px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_10_5.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_11_1_1){
      item_11_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 880px;`
    } 
    if(e.target.closest('#item-11-1-2')){
      item_11_1.style =`display:block;top:65%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3430px 0 0 880px;`
    }if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_11_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_11_2_1 ){
      document.querySelector('.item-11-2-title').textContent = `Staff Identity`
      item_11_2.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 980px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_11_2.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if( e.target.closest('#item-11-2-3')){
      document.querySelector('.item-11-2-title').textContent = `Staff Identity/
      Entrance Control`
      item_11_2.style =`display:block;top:65%;;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3430px 0 0 980px;`
    }
    if(e.target == item_11_3_1){
      item_11_3.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 880px;`
    }
    if(e.target.closest('#item-11-3-2')  ){
      item_11_3.style =`display:block;top:65%;;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: 3430px 0 0 880px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_11_3.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_11_2_2){
      document.querySelector('.item-11-2-title').textContent = `
      Entrance Control`
      item_11_4.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 980px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_11_4.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_12_1_1) {
      item_12_1.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 770px;`
    }
    if(e.target.closest('#item-12-1-3')) {
      item_12_1.style =`display:block;top:70%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin:  3780px 0 0 770px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_12_1.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
    if(e.target == item_12_1_2) {
      item_12_2.style =`display:block;top:10%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin: -420px 0 0 770px;`
    }
    if(e.target.closest('#item-12-1-4')) {
      item_12_2.style =`display:block;top:70%;`;dark_bg_2.style.display =`block`;close_icon_2.style = `display:block;margin:  3780px 0 0 770px;`
    } if(e.target == dark_bg_2 || e.target == close_icon_2 ){
      item_12_2.style =`display:none`;;dark_bg_2.style.display =`none`;close_icon_2.style.display =`none`
    }
  })
}()
// RWD dropdown 
const nav_touch = function nav_touch() {
  if(hastouchscreen){
    const nav_touch = function(){
      const target_1 = document.querySelector('.nav-products>a')
      const target_2 = document.querySelectorAll('.first-layer>a')
      const target_3 = document.querySelectorAll('.sec-layer>a')
      const layer_1 = document.querySelector('.nav-products>ul')
      const layer_2 = document.querySelectorAll('.first-layer > ul')
      const layer_3 = document.querySelectorAll('.sec-layer > ul')
      document.addEventListener('touchstart', e => {
        if(layer_1.style.display == 'block' && e.target == target_1)
        layer_1.style.display = 'none';
        else if(e.target == target_1)
        layer_1.style.display = 'block';
        for(let i = 0; i <layer_2.length ;i++){
          if(layer_2[i].style.display == 'block' && e.target == target_2[i]){
            layer_2[i].style.display = 'none';
          }else if(e.target == target_2[i]){
            let layers =  [...layer_2].filter(la=>{
              return e.target !== la
            })
            for(let i =0; i <  [...layer_2].length; i++){
              layers[i].style.display='none';
            }
            layer_2[i].style.display = 'block';
          }
        }
        for(let i = 0; i <layer_3.length ;i++){
          if(layer_3[i].style.display == 'block' && e.target == target_3[i]){
            layer_3[i].style.display = 'none';
          }else if(e.target == target_3[i]){
            let layers =  [...layer_3].filter(la=>{
              return e.target !== la
            })
            for(let i =0; i <  [...layer_3].length; i++){
              layers[i].style.display='none';
            }
            layer_3[i].style.display = 'block';
          }
        }
      })
    }()
  }
}()




 
  