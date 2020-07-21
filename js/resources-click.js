const res_all = document.querySelector('.res-over-view')
const res_content = document.querySelector('.res-content')
const res_item = document.querySelector('.res-item')
const left_arrow = document.querySelector('.left-arrow img')
const right_arrow = document.querySelector('.right-arrow img')
const res_item1  = document.querySelector('.res-item-1')
const res_item2  = document.querySelector('.res-item-2')
const res_item3  = document.querySelector('.res-item-3')
const res_item1_img  = document.querySelector('.res-item-1 img')
const res_item2_img  = document.querySelector('.res-item-2 img')
const res_item3_img  = document.querySelector('.res-item-3 img')
const res_para1 = document.querySelector('.resource-para1')
const res_para2 = document.querySelector('.resource-para2')
const res_para3 = document.querySelector('.resource-para3')
const resource_tag_1 = document.querySelector('.resource-1')
const resource_tag_2 = document.querySelector('.resource-2')
const resource_tag_3 = document.querySelector('.resource-3')
const resource_tag_4 = document.querySelector('.resource-4')
const res_button = document.querySelector('.download-button div')
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
  if(e.target == resource_tag_1 ){
    res_para1.innerHTML = `Advanced Industrial<br>LoRaWAN Wireless I/O Module`
    res_para2.innerHTML =`Wzzard Edge & IIoT<br>Starter Kits Selection Guide`
    res_para3.innerHTML =`OBD Intelligent <br>Cellular Gateway`
    res_item1_img.src = `images/leaflet_1.jpg`
    res_item2_img.src = `images/leaflet_2.jpg`
    res_item3_img.src = `images/leaflet_3.jpg`
    right_arrow.style = `visibility:visible`
    res_button.textContent = `Download Leaflet`
  }
  if(e.target == resource_tag_2 ){
    res_item2.style="display:none"
    res_para1.innerHTML = `Cellular Routers & Gateways <br>For Industrial IoT & Enahced Networking`
    res_para3.innerHTML =`WebAccess/DMP Generation2`
    res_item1_img.src = `images/brochure_1.jpg`
    res_item3_img.src = `images/brochure_2.jpg`
    res_button.textContent = `Download Brochure`
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
  }
  if(e.target == resource_tag_4){
    res_item2.style="display:none"
    res_item3.style="display:none"
    res_para1.innerHTML = `Intelligent Connectivity Wireless<br>Success Stories`
    res_item1_img.src = `images/Success Story_1.jpg`
    res_item1.style = `padding:30px 0 0 0;`
    res_button.innerHTML = `Download<br>Success Story    `
  }
  

})
res_item.addEventListener('click',(e)=>{
  if(e.target == right_arrow){
    left_arrow.style = `visibility:visible`
    right_arrow.style = `visibility:hidden`
    res_para1.innerHTML = `The Wzzard Intelligent <br>Sensing Platform`
    res_para2.innerHTML =`Industrial NB-IoT/LTE-M<br>Wireless I/O Module`
    res_para3.innerHTML =`Industrial LPWAN <br>Wireless I/O Module`
    res_item1_img.src = `images/leaflet_4.jpg`
    res_item2_img.src = `images/leaflet_5.jpg`
    res_item3_img.src = `images/leaflet_6.jpg`
  }
  if(e.target == left_arrow){
    left_arrow.style = `visibility:hidden`
    right_arrow.style = `visibility:visible`
    res_para1.textContent = `Advanced IndustrialLoRaWAN Wireless I/O Module`
    res_para2.innerHTML =`Wzzard Edge & IIoT<br>Starter Kits Selection Guide`
    res_para3.innerHTML =`OBD Intelligent <br>Cellular Gateway`
    res_item1_img.src = `images/leaflet_1.jpg`
    res_item2_img.src = `images/leaflet_2.jpg`
    res_item3_img.src = `images/leaflet_3.jpg`
  }
})
