//import '../scss/sytle.scss';
const closest_polyfill = function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (Element.prototype.matches.call(el, s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }
}()
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */

// check device type
const hastouchscreen = (function has() {
  let hastouchscreen = false;
  if ('maxTouchPoints' in navigator) {
    const hastouchscreen = navigator.maxTouchPoints > 0;
    return hastouchscreen;
  } if ('msMaxTouchPoints' in navigator) {
    const hastouchscreen = navigator.msMaxTouchPoints > 0;
    return hastouchscreen;
  }
  const mq = window.matchMedia && matchMedia('(max-width:580px)');
  if (mq && mq.media === ('(max-width:580px)')) {
    hastouchscreen = true;
    return hastouchscreen;
  } if ('orientation' in window) {
    hastouchscreen = true;
    return hastouchscreen;
  }
  // not recommanded userAgent
  const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone', 'IEMobile', 'Opera Mini'];
  hastouchscreen = mobileDevice.some((e) => navigator.userAgent.match(e));
  return hastouchscreen;
}());
// resources parts
const resources_all = (function resources_all() {
  const res_all = document.querySelector('.res-over-view');
  const res_content = document.querySelector('.res-content');
  const res_item = document.querySelector('.res-item');
  const left_arrow = document.querySelector('.left-arrow img');
  const right_arrow = document.querySelector('.right-arrow img');
  const res_item1 = document.querySelector('.res-item-1');
  const res_item2 = document.querySelector('.res-item-2');
  const res_item3 = document.querySelector('.res-item-3');
  const res_item_a = document.querySelector('.res-item a');
  const res_item4 = document.querySelector('.res-item-4');
  const res_item5 = document.querySelector('.res-item-5');
  const res_item6 = document.querySelector('.res-item-6');
  const res_item1_img = document.querySelector('.res-item-1 img');
  const res_item2_img = document.querySelector('.res-item-2 img');
  const res_item3_img = document.querySelector('.res-item-3 img');
  const res_item4_img = document.querySelector('.res-item-4 img');
  const res_item5_img = document.querySelector('.res-item-5 img');
  const res_item6_img = document.querySelector('.res-item-6 img');
  const res_para1 = document.querySelector('.resource-para1');
  const res_para2 = document.querySelector('.resource-para2');
  const res_para3 = document.querySelector('.resource-para3');
  const resource_tag_1 = document.querySelector('.resource-1');
  const resource_tag_2 = document.querySelector('.resource-2');
  const resource_tag_3 = document.querySelector('.resource-3');
  const resource_tag_4 = document.querySelector('.resource-4');
  const res_button = document.querySelector('.download-button div');
  const res_button_slide = document.querySelector('.download-button');
  res_all.addEventListener('mouseenter', (e) => {
    if (e.target.closest('.res-over-view') !== null) {
      res_content.setAttribute('style', 'border:#10c5e9 1px solid;');
    }
  });
  res_all.addEventListener('mouseleave', (e) => {
    if (e.target.closest('.res-over-view')) {
      res_content.setAttribute('style', 'border:#bbbdbe 1px solid;');
    }
  });
  res_all.addEventListener('click', (e) => {
    res_item2.style.cssText = 'display:flex';
    left_arrow.style.setProperty('visibility', 'hidden');
    right_arrow.style.setProperty('visibility', 'hidden');
    res_item1.style.cssText = 'padding:0 0 0 0;';
    res_item3.style.cssText = 'padding:0 0 0 0;';
    res_button_slide.style.cssText = 'display:block';
    if (e.target === resource_tag_1 && !hastouchscreen) {
      res_para1.innerHTML = 'Advanced Industrial<br>LoRaWAN Wireless I/O Module';
      res_para2.innerHTML = 'Wzzard Edge & IIoT<br>Starter Kits Selection Guide';
      res_para3.innerHTML = 'Proprietary LPWAN IoT <br>Wireless I/O Module';
      res_item1_img.src = 'images/leaflet_1.jpg';
      res_item2_img.src = 'images/leaflet_2.jpg';
      res_item3_img.src = 'images/leaflet_3.jpg';
      res_item4_img.style.cssText = 'margin: 0 0 0 80px';
      res_item5_img.style.cssText = 'margin: 0 0 0 80px';
      res_item6_img.style.cssText = 'margin: 0 0 0 80px';
      // res_item1.setAttribute('href','https://advcloudfiles.advantech.com/ecatalog/2020/07170936.pdf')
      // res_item2.setAttribute('href','http://advcloudfiles.advantech.com/ecatalog/2018/09191348.pdf')
      // res_item3.setAttribute('href','https://advcloudfiles.advantech.com/ecatalog/2020/07170935.pdf')
      right_arrow.style.setProperty('visibility', 'visible');
      res_button.textContent = 'Download All';
      res_item1.removeAttribute('href', 'https://www.youtube.com/watch?v=O4Ez3dmBTe8&feature=youtu.be');
      res_item3.removeAttribute('href', 'https://www.youtube.com/watch?v=5LrEnn6ALdM&feature=youtu.be');
    } else if (e.target === resource_tag_1 && !!hastouchscreen) {
      res_para1.innerHTML = 'Advanced Industrial<br>LoRaWAN Wireless I/O Module';
      res_para2.innerHTML = 'Wzzard Edge & IIoT<br>Starter Kits Selection Guide';
      res_para3.innerHTML = 'Proprietary LPWAN IoT <br>Wireless I/O Module';
      res_item1_img.src = 'images/leaflet_1.jpg';
      res_item2_img.src = 'images/leaflet_2.jpg';
      res_item3_img.src = 'images/leaflet_3.jpg';
      res_item4.style.display = 'block';
      res_item5.style.display = 'block';
      res_item6.style.display = 'block';
      res_item4_img.style.cssText = 'margin: 0 0 0 80px';
      res_item5_img.style.cssText = 'margin: 0 0 0 80px';
      res_item6_img.style.cssText = 'margin: 0 0 0 80px';
      // res_item1.setAttribute('href','https://advcloudfiles.advantech.com/ecatalog/2020/07170936.pdf')
      // res_item2.setAttribute('href','http://advcloudfiles.advantech.com/ecatalog/2018/09191348.pdf')
      // res_item3.setAttribute('href','https://advcloudfiles.advantech.com/ecatalog/2020/07170935.pdf')
      right_arrow.style.setProperty('visibility', 'visible');
      res_button.textContent = 'Download Leaflet';
      res_item1.removeAttribute('href', 'https://www.youtube.com/watch?v=O4Ez3dmBTe8&feature=youtu.be');
      res_item3.removeAttribute('href', 'https://www.youtube.com/watch?v=5LrEnn6ALdM&feature=youtu.be');
    }

    if (e.target === resource_tag_2) {
      res_para1.innerHTML = 'Cellular Routers and Gateways For Industrial IoT and Enhanced Networking';
      res_para2.innerHTML = 'WebAccess/DMP Generation2';
      res_para3.innerHTML = 'WebAccess/VPN';
      res_item1_img.src = 'images/brochure_1.jpg';
      res_item3_img.src = 'images/brochure_3.jpg';
      res_item2_img.src = 'images/brochure_2.jpg';
      res_button.textContent = 'Download All';
      res_item4.style.display = 'none';
      res_item5.style.display = 'none';
      res_item6.style.display = 'none';
      res_item1.removeAttribute('href', 'https://www.youtube.com/watch?v=O4Ez3dmBTe8&feature=youtu.be');
      res_item3.removeAttribute('href', 'https://www.youtube.com/watch?v=5LrEnn6ALdM&feature=youtu.be');
    }
    if (e.target === resource_tag_3) {
      res_item1.setAttribute('href', 'https://www.youtube.com/watch?v=O4Ez3dmBTe8&feature=youtu.be');
      res_item1.style.cssText = 'text-decoration:underline;color: #007bff; padding:30px 0 0 0;cursor:pointer';
      res_item1_img.src = 'images/video_1.jpg';
      res_item2.style.cssText = 'display:none';
      res_item3.setAttribute('href', 'https://www.youtube.com/watch?v=5LrEnn6ALdM&feature=youtu.be');
      res_item3.style.cssText = 'text-decoration:underline;color:#007bff;padding:30px 0 0 0;cursor:pointer';
      res_item3_img.src = 'images/video_2.jpg';
      res_item4.style.display = 'none';
      res_item5.style.display = 'none';
      res_item6.style.display = 'none';
      res_para1.innerHTML = 'WISE-4000 IoT Wireless<br> Sensor Node, Advantech (EN)';
      res_para3.innerHTML = 'NB-IoT/LET-M Solutions and Use Cases';
      res_button.textContent = 'Download Video/Webinar ';
      res_button_slide.style.cssText = 'display:none';
    }
    if (e.target === resource_tag_4) {
      res_item1_img.src = 'images/Success Story_1.jpg';
      res_item1.removeAttribute('href', 'https://www.youtube.com/watch?v=O4Ez3dmBTe8&feature=youtu.be');
      res_item1.style.cssText = 'padding:30px 0 0 0;';
      res_item2.style.cssText = 'display:none';
      res_item3.style.cssText = 'display:none';
      res_item3.removeAttribute('href', 'https://www.youtube.com/watch?v=5LrEnn6ALdM&feature=youtu.be');
      res_item4.style.display = 'none';
      res_item5.style.display = 'none';
      res_item6.style.display = 'none';
      res_para1.innerHTML = 'Intelligent Connectivity Wireless<br>Success Stories';
      res_button.innerHTML = 'Download';
      // res_item1.setAttribute('href','https://www2.advantech.com/ia/iiot/case-study/Intelligent%20Connectivity_Success%20Stories.pdf')

    }
  });
  res_item.addEventListener('click', (e) => {
    if (e.target === right_arrow) {
      // res_item1.setAttribute('href','https://www.dropbox.com/sh/rvgpkh0rfytxfsr/AABXMhouixyGg9F2OiVai7gga?dl=0&preview=AdvantechBB_WzzardWirelessSensingProducts_1220.pdf')
      // res_item2.setAttribute('href','https://www.dropbox.com/sh/a8idmft5jdwjddq/AAB_YKtwP3aW1NH8_GOBJOMoa?dl=0&preview=AdvantechBB_WzzardStarterKitsOverview_2120ss.pdf')
      res_item3.removeAttribute('href');
      left_arrow.style.setProperty('visibility', 'visible');
      right_arrow.style.setProperty('visibility', 'hidden');
      res_para1.innerHTML = 'The Wzzard Intelligent <br>Sensing Platform';
      res_para2.innerHTML = 'Wzzard Edge & IIoT <br> Starter Kits Selection Guide    ';
      res_para3.innerHTML = 'OBD Intelligent <br>  Cellular Gateway';
      res_item1_img.src = 'images/leaflet_4.jpg';
      res_item2_img.src = 'images/leaflet_5.jpg';
      res_item3_img.src = 'images/leaflet_6.jpg';

    }
    if (e.target === left_arrow) {
      // res_item1.setAttribute('href','https://advcloudfiles.advantech.com/ecatalog/2020/07170936.pdf')
      // res_item2.setAttribute('href','http://advcloudfiles.advantech.com/ecatalog/2018/09191348.pdf')
      // res_item3.setAttribute('href','https://advcloudfiles.advantech.com/ecatalog/2020/07170935.pdf')
      left_arrow.style.setProperty('visibility', 'hidden');
      right_arrow.style.setProperty('visibility', 'visible');
      res_para1.textContent = 'Advanced IndustrialLoRaWAN Wireless I/O Module';
      res_para2.innerHTML = 'Industrial NB-IoT/LTE-M <br>Wireless I/O Module';
      res_para3.innerHTML = 'Proprietary LPWAN IoT <br>Wireless I/O Module';
      res_item1_img.src = 'images/leaflet_1.jpg';
      res_item2_img.src = 'images/leaflet_2.jpg';
      res_item3_img.src = 'images/leaflet_3.jpg';
    }
  });
}());
// over-view parts
const over_view = (function over_view() {
  document.addEventListener('click', (e) => {
    const ov2_para1 = document.querySelector('.ov2-para1');
    if (!hastouchscreen) {
      for (let i = 1; i < 8; i += 1) {
        const proto_all = document.querySelector(`.proto-${i}`);
        const dark_bg = document.getElementById('dark-bg');
        const close_icon = document.querySelector(`.close-icon-1-${i}`);
        const proto_id = document.getElementById(`proto-${i}`);
        dark_bg.style.height = `${document.documentElement.offsetHeight}px`;
        dark_bg.style.width = `${document.documentElement.offsetWidth}px`;
        if (e.target.closest(`.ov2-${i}`)) {
          proto_all.classList.remove('proto-display');
          dark_bg.style.display = 'block';
          close_icon.style.display = 'block';
          proto_id.style.display = 'block';
          break;
        }
        if (e.target === dark_bg || e.target.closest(`.close-icon-1-${i}`)) {
          proto_all.classList.add('proto-display');
          dark_bg.style.display = 'none';
          close_icon.style.display = 'none';
          proto_id.style.display = 'none';
          ov2_para1.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    if (hastouchscreen) {
      for (let i = 1; i < 8; i += 1) {
        const dark_bg = document.getElementById('dark-bg');
        const close_icon = document.querySelector(`.close-icon-1-${i}`);
        const proto_id = document.getElementById(`proto-${i}-rwd`);
        dark_bg.style.height = `${document.documentElement.offsetHeight}px`;
        dark_bg.style.width = `${document.documentElement.offsetWidth}px`;
        if (e.target.closest(`.ov2-${i}`)) {
          proto_id.classList.remove('proto-display');
          dark_bg.style.display = 'block';
          close_icon.style.display = 'block';
          proto_id.style.display = 'block';
          break;
        } else if (e.target === dark_bg || e.target.closest(`.close-icon-1-${i}`)) {
          proto_id.classList.add('proto-display');
          dark_bg.style.display = 'none';
          close_icon.style.display = 'none';
          proto_id.style.display = 'none';
          ov2_para1.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  });
}());
// 3x 66.5%
// 2x 62%
const products = (function products() {
  const dark_bg_3 = document.getElementById('dark-bg-3');
  const factory = document.getElementById('factory');
  const ee_all = document.querySelector('.E-E-all');
  const product_1 = document.getElementById('products-1');
  const product_2 = document.getElementById('products-2');
  const product_3 = document.getElementById('products-3');
  const transport_all = document.querySelector('.transport-all');
  document.addEventListener('click', (e) => {
    dark_bg_3.style.height = `${document.documentElement.scrollHeight}px`;
    dark_bg_3.style.width = `${document.documentElement.scrollWidth}px`;
    if (e.target.closest('#products-1')) {
      factory.style.display = 'block';
      dark_bg_3.style.display = 'block';
    }
    if (factory.style.display === 'block' && e.target === dark_bg_3) {
      factory.style.display = 'none';
      dark_bg_3.style.display = 'none';
      product_1.scrollIntoView({ behavior: 'smooth' });
    }
    if (e.target.closest('#products-2')) {
      ee_all.style.display = 'block';
      dark_bg_3.style.display = 'block';
    }
    if (ee_all.style.display === 'block' && e.target === dark_bg_3) {
      ee_all.style.display = 'none';
      dark_bg_3.style.display = 'none';
      product_2.scrollIntoView({ behavior: 'smooth' });
    }
    if (e.target.closest('#products-3')) {
      transport_all.style.display = 'block';
      dark_bg_3.style.display = 'block';
    }
    if (transport_all.style.display === 'block' && e.target === dark_bg_3) {
      transport_all.style.display = 'none';
      dark_bg_3.style.display = 'none';
      product_3.scrollIntoView({ behavior: 'smooth' });
    }
  });
}());
// products parts -factory
const products_fac = (function products_fac() {
  if (!hastouchscreen) {
    document.addEventListener('click', (e) => {
      const scroll_item = document.getElementById('products-1');
      const item_1_1_1 = document.querySelector('#item-1-1-1');
      const item_1_2_1 = document.querySelector('#item-1-2-1');
      const item_2_1_1 = document.querySelector('#item-2-1-1');
      const item_2_2_1 = document.querySelector('#item-2-2-1');
      const item_2_3_1 = document.querySelector('#item-2-3-1');
      const item_2_4_1 = document.querySelector('#item-2-4-1');
      const item_3_1_1 = document.querySelector('#item-3-1-1');
      const item_3_1_2 = document.querySelector('#item-3-1-2');
      const item_3_1_3 = document.querySelector('#item-3-1-3');
      const item_1_1 = document.querySelector('.item-1-1');
      const item_1_2 = document.querySelector('.item-1-2');
      const item_2_1 = document.querySelector('.item-2-1');
      const item_2_2 = document.querySelector('.item-2-2');
      const item_2_3 = document.querySelector('.item-2-3');
      const item_2_4 = document.querySelector('.item-2-4');
      const item_3_1 = document.querySelector('.item-3-1');
      const item_3_2 = document.querySelector('.item-3-2');
      const item_3_3 = document.querySelector('.item-3-3');
      const dark_bg_2 = document.getElementById('dark-bg-2');
      const close_icon_2 = document.querySelector('.close-icon-2');
      dark_bg_2.style.height = `${document.documentElement.scrollHeight}px`;
      dark_bg_2.style.width = `${document.documentElement.scrollWidth}px`;
      if (e.target === item_1_1_1) {
        item_1_1.style.cssText = 'display:block;top:10%;';
        dark_bg_2.style.display = 'block';
        close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-1-1-2')) {
        item_1_1.style.cssText = 'display:block;top:40%';
        dark_bg_2.style.display = 'block';
        close_icon_2.style.cssText = 'display:block;margin:1680px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_1_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }
      if (e.target === item_1_2_1) {
        item_1_2.style.cssText = 'display:block;top:10%;';
        dark_bg_2.style.display = 'block';
        close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      } if (e.target.closest('#item-1-2-2')) {
        item_1_2.style.cssText = 'display:block;top:40%';
        dark_bg_2.style.display = 'block';
        close_icon_2.style.cssText = 'display:block;margin:1680px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_1_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }
      if (e.target === item_2_1_1) {
        item_2_1.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-2-1-2')) {
        item_2_1.style.cssText = 'display:block;top:40%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin:1680px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_2_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_2_2_1) {
        item_2_2.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1090px;';
      }
      if (e.target.closest('#item-2-2-2')) {
        item_2_2.style.cssText = 'display:block;top:40%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 1680px 0 0 1090px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_2_2.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_2_3_1) {
        item_2_3.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1090px;';
      }
      if (e.target.closest('#item-2-3-2')) {
        item_2_3.style.cssText = 'display:block;top:40%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 1680px 0 0 1090px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_2_3.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_2_4_1) {
        item_2_4.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-2-4-2')) {
        item_2_4.style.cssText = 'display:block;top:40%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 1680px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_2_4.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_3_1_1) {
        item_3_1.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-3-1-4')) {
        item_3_1.style.cssText = 'display:block;top:40%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 1680px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_3_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_3_1_2) {
        item_3_2.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-3-1-5')) {
        item_3_2.style.cssText = 'display:block;top:40%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 1680px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_3_2.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_3_1_3) {
        item_3_3.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-3-1-6')) {
        item_3_3.style.cssText = 'display:block;top:40%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 1680px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_3_3.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
    });
  }
  if (hastouchscreen) {
    document.addEventListener('click', (e) => {
      const item_1_1_1 = document.querySelector('#item-1-1-1');
      const scroll_item = document.getElementById('products-1');
      const item_1_2_1 = document.querySelector('#item-1-2-1');
      const item_2_1_1 = document.querySelector('#item-2-1-1');
      const item_2_2_1 = document.querySelector('#item-2-2-1');
      const item_2_3_1 = document.querySelector('#item-2-3-1');
      const item_2_4_1 = document.querySelector('#item-2-4-1');
      const item_3_1_1 = document.querySelector('#item-3-1-1');
      const item_3_1_2 = document.querySelector('#item-3-1-2');
      const item_3_1_3 = document.querySelector('#item-3-1-3');
      const item_1_1 = document.getElementById('item-rwd-1-1');
      const item_1_2 = document.getElementById('item-rwd-1-2');
      const item_2_1 = document.getElementById('item-rwd-2-1');
      const item_2_2 = document.getElementById('item-rwd-2-2');
      const item_2_3 = document.getElementById('item-rwd-2-3');
      const item_2_4 = document.getElementById('item-rwd-2-4');
      const item_3_1 = document.getElementById('item-rwd-3-1');
      const item_3_2 = document.getElementById('item-rwd-3-2');
      const item_3_3 = document.getElementById('item-rwd-3-3');
      const dark_bg_2 = document.getElementById('dark-bg-2');
      const close_icon_2 = document.querySelector('.close-icon-2');
      dark_bg_2.style.height = `${document.documentElement.scrollHeight}px`;
      dark_bg_2.style.width = `${document.documentElement.scrollWidth}px`;
      if (e.target === item_1_1_1) {
        item_1_1.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-1-1-2')) {
        item_1_1.style.cssText = 'display:block;top:30%';
        dark_bg_2.style.display = 'block';
        close_icon_2.style.cssText = 'display:block;margin:1680px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_1_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }
      if (e.target === item_1_2_1) {
        item_1_2.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      } if (e.target.closest('#item-1-2-2')) {
        item_1_2.style.cssText = 'display:block;top:30%';
        dark_bg_2.style.display = 'block';
        close_icon_2.style.cssText = 'display:block;margin:1680px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_1_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }
      if (e.target === item_2_1_1) {
        item_2_1.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-2-1-2')) {
        item_2_1.style.cssText = 'display:block;top:35%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin:1680px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_2_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none';
      }
      if (e.target === item_2_2_1) {
        item_2_2.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1090px;';
      }
      if (e.target.closest('#item-2-2-2')) {
        item_2_2.style.cssText = 'display:block;top:35%;;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 1680px 0 0 1090px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_2_2.style.cssText = 'display:none'; dark_bg_2.style.display = 'none';
      }
      if (e.target === item_2_3_1) {
        item_2_3.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1090px;';
      }
      if (e.target.closest('#item-2-3-2')) {
        item_2_3.style.cssText = 'display:block;top:35%;;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 1680px 0 0 1090px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_2_3.style.cssText = 'display:none'; dark_bg_2.style.display = 'none';
      }
      if (e.target === item_2_4_1) {
        item_2_4.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-2-4-2')) {
        item_2_4.style.cssText = 'display:block;top:35%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 1680px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_2_4.style.cssText = 'display:none'; dark_bg_2.style.display = 'none';
      }
      if (e.target === item_3_1_1) {
        item_3_1.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-3-1-4')) {
        item_3_1.style.cssText = 'display:block;top:40%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 1680px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_3_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none';
      }
      if (e.target === item_3_1_2) {
        item_3_2.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-3-1-5')) {
        item_3_2.style.cssText = 'display:block;top:40%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 1680px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_3_2.style.cssText = 'display:none'; dark_bg_2.style.display = 'none';
      }
      if (e.target === item_3_1_3) {
        item_3_3.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-3-1-6')) {
        item_3_3.style.cssText = 'display:block;top:40%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 1680px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_3_3.style.cssText = 'display:none'; dark_bg_2.style.display = 'none';
      }
    });
  }
}());
// products parts -E-E
const products_ee = (function products_ee() {
  if (!hastouchscreen) {
    document.addEventListener('click', (e) => {
      const scroll_item = document.getElementById('products-2');
      const item_4_1_1 = document.querySelector('#item-4-1-1');
      const item_4_1_2 = document.querySelector('#item-4-1-2');
      const item_4_2_1 = document.querySelector('#item-4-2-1');
      const item_4_2_4 = document.querySelector('#item-4-2-4');
      const item_4_3_1 = document.querySelector('#item-4-3-1');
      const item_5_1_1 = document.querySelector('#item-5-1-1');
      const item_6_1_1 = document.querySelector('#item-6-1-1');
      const item_7_1_1 = document.querySelector('#item-7-1-1');
      const item_8_1_1 = document.querySelector('#item-8-1-1');
      const item_8_1_2 = document.querySelector('#item-8-1-2');
      const item_8_2_1 = document.querySelector('#item-8-2-1');
      const item_4_1 = document.querySelector('.item-4-1');
      const item_4_2 = document.querySelector('.item-4-2');
      const item_4_3 = document.querySelector('.item-4-3');
      const item_4_4 = document.querySelector('.item-4-4');
      const item_4_5 = document.querySelector('.item-4-5');
      const item_5_1 = document.querySelector('.item-5-1');
      const item_6_1 = document.querySelector('.item-6-1');
      const item_7_1 = document.querySelector('.item-7-1');
      const item_8_1 = document.querySelector('.item-8-1');
      const item_8_2 = document.querySelector('.item-8-2');
      const item_8_3 = document.querySelector('.item-8-3');
      const dark_bg_2 = document.getElementById('dark-bg-2');
      const close_icon_2 = document.querySelector('.close-icon-2');
      dark_bg_2.style.height = `${document.documentElement.scrollHeight}px`;
      dark_bg_2.style.width = `${document.documentElement.scrollWidth}px`;
      if (e.target === item_4_1_1) {
        item_4_1.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1090px;';
      }
      if (e.target.closest('#item-4-1-3')) {
        item_4_1.style.cssText = 'display:block;top:40%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 1680px 0 0 1090px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_4_1_2) {
        item_4_4.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1090px;';
      }
      if (e.target.closest('#item-4-1-4')) {
        item_4_4.style.cssText = 'display:block;top:40%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 1680px 0 0 1090px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_4.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_4_2_1) {
        item_4_2.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1090px;';
      }
      if (e.target.closest('#item-4-2-2')) {
        item_4_2.style.cssText = 'display:block;top:48%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2240px 0 0 1090px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_2.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_4_3_1) {
        item_4_3.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-4-3-2')) {
        item_4_3.style.cssText = 'display:block;top:48%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2240px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_3.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_4_2_4) {
        item_4_5.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1090px;';
      }
      if (e.target.closest('#item-4-2-3')) {
        item_4_5.style.cssText = 'display:block;top:48%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2240px 0 0 1090px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_5.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_5_1_1) {
        item_5_1.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1090px;';
      }
      if (e.target.closest('#item-5-1-2')) {
        item_5_1.style.cssText = 'display:block;top:55%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2730px 0 0 1090px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_5_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_6_1_1) {
        item_6_1.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-6-1-2')) {
        item_6_1.style.cssText = 'display:block;top:62%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin:3220px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_6_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_7_1_1) {
        item_7_1.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1090px;';
      }
      if (e.target.closest('#item-7-1-2')) {
        item_7_1.style.cssText = 'display:block;top:65%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin:3430px 0 0 1090px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_7_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_8_1_1) {
        item_8_1.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1130px;';
      }
      if (e.target.closest('#item-8-1-3')) {
        item_8_1.style.cssText = 'display:block;top:70%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3780px 0 0 1130px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_8_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_8_2_1) {
        item_8_2.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1190px;';
      }
      if (e.target.closest('#item-8-2-2')) {
        item_8_2.style.cssText = 'display:block;top:70%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3770px 0 0 1190px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_8_2.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_8_1_2) {
        item_8_3.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1130px;';
      }
      if (e.target.closest('#item-8-1-4')) {
        item_8_3.style.cssText = 'display:block;top:70%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3780px 0 0 1130px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_8_3.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
    });
  }
  if (hastouchscreen) {
    document.addEventListener('click', (e) => {
      const item_4_1_1 = document.querySelector('#item-4-1-1');
      const item_4_1_2 = document.querySelector('#item-4-1-2');
      const item_4_2_1 = document.querySelector('#item-4-2-1');
      const item_4_2_4 = document.querySelector('#item-4-2-4');
      const item_4_3_1 = document.querySelector('#item-4-3-1');
      const item_5_1_1 = document.querySelector('#item-5-1-1');
      const item_6_1_1 = document.querySelector('#item-6-1-1');
      const item_7_1_1 = document.querySelector('#item-7-1-1');
      const item_8_1_1 = document.querySelector('#item-8-1-1');
      const item_8_1_2 = document.querySelector('#item-8-1-2');
      const item_8_2_1 = document.querySelector('#item-8-2-1');
      const scroll_item = document.getElementById('products-2');
      const item_4_1 = document.getElementById('item-rwd-4-1');
      const item_4_2 = document.getElementById('item-rwd-4-2');
      const item_4_3 = document.getElementById('item-rwd-4-3');
      const item_4_4 = document.getElementById('item-rwd-4-4');
      const item_4_5 = document.getElementById('item-rwd-4-5');
      const item_5_1 = document.getElementById('item-rwd-5-1');
      const item_6_1 = document.getElementById('item-rwd-6-1');
      const item_7_1 = document.getElementById('item-rwd-7-1');
      const item_8_1 = document.getElementById('item-rwd-8-1');
      const item_8_2 = document.getElementById('item-rwd-8-2');
      const item_8_3 = document.getElementById('item-rwd-8-3');
      const dark_bg_2 = document.getElementById('dark-bg-2');
      const close_icon_2 = document.querySelector('.close-icon-2');
      dark_bg_2.style.height = `${document.documentElement.scrollHeight}px`;
      dark_bg_2.style.width = `${document.documentElement.scrollWidth}px`;
      if (e.target === item_4_1_1) {
        item_4_1.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1090px;';
      }
      if (e.target.closest('#item-4-1-3')) {
        item_4_1.style.cssText = 'display:block;top:35%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 1680px 0 0 1090px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_4_1_2) {
        item_4_4.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1090px;';
      }
      if (e.target.closest('#item-4-1-4')) {
        item_4_4.style.cssText = 'display:block;top:35%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 1680px 0 0 1090px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_4.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_4_2_1) {
        item_4_2.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1090px;';
      }
      if (e.target.closest('#item-4-2-2')) {
        item_4_2.style.cssText = 'display:block;top:40%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2240px 0 0 1090px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_2.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_4_3_1) {
        item_4_3.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-4-3-2')) {
        item_4_3.style.cssText = 'display:block;top:40%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2240px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_3.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_4_2_4) {
        item_4_5.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1090px;';
      }
      if (e.target.closest('#item-4-2-3')) {
        item_4_5.style.cssText = 'display:block;top:40%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2240px 0 0 1090px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_5.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_5_1_1) {
        item_5_1.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1090px;';
      }
      if (e.target.closest('#item-5-1-2')) {
        item_5_1.style.cssText = 'display:block;top:45%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2730px 0 0 1090px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_5_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_6_1_1) {
        item_6_1.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-6-1-2')) {
        item_6_1.style.cssText = 'display:block;top:50%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin:3220px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_6_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_7_1_1) {
        item_7_1.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1090px;';
      }
      if (e.target.closest('#item-7-1-2')) {
        item_7_1.style.cssText = 'display:block;top:55%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin:3430px 0 0 1090px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_7_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_8_1_1) {
        item_8_1.style.cssText = 'display:block;top:60%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1130px;';
      }
      if (e.target.closest('#item-8-1-3')) {
        item_8_1.style.cssText = 'display:block;top:60%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3780px 0 0 1130px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_8_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_8_2_1) {
        item_8_2.style.cssText = 'display:block;top:60%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1190px;';
      }
      if (e.target.closest('#item-8-2-2')) {
        item_8_2.style.cssText = 'display:block;top:60%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3770px 0 0 1190px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_8_2.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_8_1_2) {
        item_8_3.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 1130px;';
      }
      if (e.target.closest('#item-8-1-4')) {
        item_8_3.style.cssText = 'display:block;top:60%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3780px 0 0 1130px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_8_3.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
    });
  }
}());
// products parts -transport
const products_trans = (function products_trans() {
  if (!hastouchscreen) {
    document.addEventListener('click', (e) => {
      const scroll_item = document.getElementById('products-3');
      const item_9_1_1 = document.querySelector('#item-9-1-1');
      const item_9_2_1 = document.querySelector('#item-9-2-1');
      const item_9_3_1 = document.querySelector('#item-9-3-1');
      const item_10_1_1 = document.querySelector('#item-10-1-1');
      const item_10_2_1 = document.querySelector('#item-10-2-1');
      const item_10_3_1 = document.querySelector('#item-10-3-1');
      const item_10_3_2 = document.querySelector('#item-10-3-2');
      const item_10_3_3 = document.querySelector('#item-10-3-3');
      const item_11_1_1 = document.querySelector('#item-11-1-1');
      const item_11_2_1 = document.querySelector('#item-11-2-1');
      const item_11_2_2 = document.querySelector('#item-11-2-2');
      const item_11_3_1 = document.querySelector('#item-11-3-1');
      const item_12_1_1 = document.querySelector('#item-12-1-1');
      const item_12_1_2 = document.querySelector('#item-12-1-2');
      const item_9_1 = document.querySelector('.item-9-1');
      const item_9_2 = document.querySelector('.item-9-2');
      const item_9_3 = document.querySelector('.item-9-3');
      const item_10_1 = document.querySelector('.item-10-1');
      const item_10_2 = document.querySelector('.item-10-2');
      const item_10_3 = document.querySelector('.item-10-3');
      const item_10_4 = document.querySelector('.item-10-4');
      const item_10_5 = document.querySelector('.item-10-5');
      const item_11_1 = document.querySelector('.item-11-1');
      const item_11_2 = document.querySelector('.item-11-2');
      const item_11_3 = document.querySelector('.item-11-3');
      const item_11_4 = document.querySelector('.item-11-4');
      const item_12_1 = document.querySelector('.item-12-1');
      const item_12_2 = document.querySelector('.item-12-2');
      const dark_bg_2 = document.getElementById('dark-bg-2');
      const close_icon_2 = document.querySelector('.close-icon-2');
      dark_bg_2.style.height = `${document.documentElement.scrollHeight}px`;
      dark_bg_2.style.width = `${document.documentElement.scrollWidth}px`;
      if (e.target === item_9_1_1) {
        item_9_1.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-9-1-2')) {
        item_9_1.style.cssText = 'display:block;top:48%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2240px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_9_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_9_2_1) {
        item_9_2.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-9-2-2')) {
        item_9_2.style.cssText = 'display:block;top:48%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2240px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_9_2.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_9_3_1) {
        item_9_3.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-9-3-2')) {
        item_9_3.style.cssText = 'display:block;top:48%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2240px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_9_3.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_10_1_1) {
        item_10_1.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 770px;';
      }
      if (e.target.closest('#item-10-1-2')) {
        item_10_1.style.cssText = 'display:block;top:55%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2730px  0 0 770px;';
      }
      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_10_2_1) {
        item_10_2.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-10-2-2')) {
        item_10_2.style.cssText = 'display:block;top:55%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2730px  0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_2.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_10_3_1) {
        item_10_3.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-10-3-4')) {
        item_10_3.style.cssText = 'display:block;top:62%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3220px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_3.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_10_3_2) {
        item_10_4.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-10-3-5')) {
        item_10_4.style.cssText = 'display:block;top:62%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3220px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_4.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_10_3_3) {
        item_10_5.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-10-3-6')) {
        item_10_5.style.cssText = 'display:block;top:62%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3220px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_5.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_11_1_1) {
        item_11_1.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-11-1-2')) {
        item_11_1.style.cssText = 'display:block;top:65%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3430px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_11_2_1) {
        document.querySelector('.item-11-2-title').textContent = 'Staff Identity';
        item_11_2.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_2.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target.closest('#item-11-2-3')) {
        document.querySelector('.item-11-2-title').textContent = `Staff Identity/
      Entrance Control`;
        item_11_2.style.cssText = 'display:block;top:65%;;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3430px 0 0 980px;';
      }
      if (e.target === item_11_3_1) {
        item_11_3.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-11-3-2')) {
        item_11_3.style.cssText = 'display:block;top:65%;;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3430px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_3.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_11_2_2) {
        document.querySelector('.item-11-2-title').textContent = `
      Entrance Control`;
        item_11_4.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_4.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_12_1_1) {
        item_12_1.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 770px;';
      }
      if (e.target.closest('#item-12-1-3')) {
        item_12_1.style.cssText = 'display:block;top:70%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin:  3780px 0 0 770px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_12_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_12_1_2) {
        item_12_2.style.cssText = 'display:block;top:10%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 770px;';
      }
      if (e.target.closest('#item-12-1-4')) {
        item_12_2.style.cssText = 'display:block;top:70%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin:  3780px 0 0 770px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_12_2.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
    });
  }
  if (hastouchscreen) {
    document.addEventListener('click', (e) => {
      const scroll_item = document.getElementById('products-3');
      const item_9_1_1 = document.querySelector('#item-9-1-1');
      const item_9_2_1 = document.querySelector('#item-9-2-1');
      const item_9_3_1 = document.querySelector('#item-9-3-1');
      const item_10_1_1 = document.querySelector('#item-10-1-1');
      const item_10_2_1 = document.querySelector('#item-10-2-1');
      const item_10_3_1 = document.querySelector('#item-10-3-1');
      const item_10_3_2 = document.querySelector('#item-10-3-2');
      const item_10_3_3 = document.querySelector('#item-10-3-3');
      const item_11_1_1 = document.querySelector('#item-11-1-1');
      const item_11_2_1 = document.querySelector('#item-11-2-1');
      const item_11_2_2 = document.querySelector('#item-11-2-2');
      const item_11_3_1 = document.querySelector('#item-11-3-1');
      const item_12_1_1 = document.querySelector('#item-12-1-1');
      const item_12_1_2 = document.querySelector('#item-12-1-2');
      const item_9_1 = document.getElementById('item-rwd-9-1');
      const item_9_2 = document.getElementById('item-rwd-9-2');
      const item_9_3 = document.getElementById('item-rwd-9-3');
      const item_10_1 = document.getElementById('item-rwd-10-1');
      const item_10_2 = document.getElementById('item-rwd-10-2');
      const item_10_3 = document.getElementById('item-rwd-10-3');
      const item_10_4 = document.getElementById('item-rwd-10-4');
      const item_10_5 = document.getElementById('item-rwd-10-5');
      const item_11_1 = document.getElementById('item-rwd-11-1');
      const item_11_2 = document.getElementById('item-rwd-11-2');
      const item_11_3 = document.getElementById('item-rwd-11-3');
      const item_11_4 = document.getElementById('item-rwd-11-4');
      const item_12_1 = document.getElementById('item-rwd-12-1');
      const item_12_2 = document.getElementById('item-rwd-12-2');
      const dark_bg_2 = document.getElementById('dark-bg-2');
      const close_icon_2 = document.querySelector('.close-icon-2');
      const item_11_2_t = document.querySelectorAll('.item-rwd-11-2-title');
      const item_11_2_title = [...item_11_2_t];
      dark_bg_2.style.height = `${document.documentElement.scrollHeight}px`;
      dark_bg_2.style.width = `${document.documentElement.scrollWidth}px`;
      if (e.target === item_9_1_1) {
        item_9_1.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-9-1-2')) {
        item_9_1.style.cssText = 'display:block;top:42%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2240px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_9_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_9_2_1) {
        item_9_2.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-9-2-2')) {
        item_9_2.style.cssText = 'display:block;top:42%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2240px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_9_2.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_9_3_1) {
        item_9_3.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-9-3-2')) {
        item_9_3.style.cssText = 'display:block;top:42%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2240px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_9_3.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_10_1_1) {
        item_10_1.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 770px;';
      }
      if (e.target.closest('#item-10-1-2')) {
        item_10_1.style.cssText = 'display:block;top:47%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2730px  0 0 770px;';
      }
      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_10_2_1) {
        item_10_2.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-10-2-2')) {
        item_10_2.style.cssText = 'display:block;top:47%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 2730px  0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_2.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_10_3_1) {
        item_10_3.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-10-3-4')) {
        item_10_3.style.cssText = 'display:block;top:52%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3220px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_3.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_10_3_2) {
        item_10_4.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-10-3-5')) {
        item_10_4.style.cssText = 'display:block;top:52%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3220px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_4.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_10_3_3) {
        item_10_5.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-10-3-6')) {
        item_10_5.style.cssText = 'display:block;top:52%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3220px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_5.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_11_1_1) {
        item_11_1.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-11-1-2')) {
        item_11_1.style.cssText = 'display:block;top:59%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3430px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_11_2_1) {
        item_11_2_title.textContent = 'Staff Identity';
        item_11_2.style.cssText = 'display:block;top:59%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_2.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target.closest('#item-11-2-3')) {
        item_11_2_title.textContent = `Staff Identity/
      Entrance Control`;
        item_11_2.style.cssText = 'display:block;top:59%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3430px 0 0 980px;';
      }
      if (e.target === item_11_3_1) {
        item_11_3.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-11-3-2')) {
        item_11_3.style.cssText = 'display:block;top:59%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: 3430px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_3.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_11_2_2) {
        item_11_2_title.textContent = `
      Entrance Control`;
        item_11_4.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_4.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_12_1_1) {
        item_12_1.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 770px;';
      }
      if (e.target.closest('#item-12-1-3')) {
        item_12_1.style.cssText = 'display:block;top:64%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin:  3780px 0 0 770px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_12_1.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
      if (e.target === item_12_1_2) {
        item_12_2.style.cssText = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin: -420px 0 0 770px;';
      }
      if (e.target.closest('#item-12-1-4')) {
        item_12_2.style.cssText = 'display:block;top:64%;'; dark_bg_2.style.display = 'block'; close_icon_2.style.cssText = 'display:block;margin:  3780px 0 0 770px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_12_2.style.cssText = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none';
      }
    });
  }
}());
// RWD dropdown
const nav_touch = (function nav_touch() {
  if (hastouchscreen) {
    const target_1 = document.querySelector('.nav-products>a');
    const target_2 = document.querySelectorAll('.first-layer>a');
    const target_3 = document.querySelectorAll('.sec-layer>a');
    const layer_1 = document.querySelector('.nav-products>ul');
    const layer_2 = document.querySelectorAll('.first-layer > ul');
    const layer_3 = document.querySelectorAll('.sec-layer > ul');
    document.addEventListener('touchstart', (e) => {
      if (layer_1.style.display == 'block' && e.target == target_1) layer_1.style.display = 'none';
      else if (e.target == target_1) layer_1.style.display = 'block';
      for (let i = 0; i < layer_2.length; i += 1) {
        if (layer_2[i].style.display == 'block' && e.target == target_2[i]) {
          // displays aren't inline-style, so need add style block first
          layer_2[i].style.display = 'none';
        } else if (e.target == target_2[i]) {
          (function layer() {
            // close none-target layer
            const layers = [...layer_2].filter((la) => e.target !== la);
            for (let i = 0; i < [...layer_2].length; i += 1) {
              layers[i].style.display = 'none';
            }
          }());
          // layer have to execute first to disappar before
          layer_2[i].style.display = 'block';
        }
      }
      for (let i = 0; i < layer_3.length; i += 1) {
        if (layer_3[i].style.display == 'block' && e.target == target_3[i]) {
          // displays aren't inline-style, so need add style block first
          layer_3[i].style.display = 'none';
        } else if (e.target == target_3[i]) {
          // close none-target layer
          (function layer() {
            const layers = [...layer_3].filter((la) => e.target !== la);
            for (let i = 0; i < [...layer_3].length; i += 1) {
              layers[i].style.display = 'none';
            }
          }());
          layer_3[i].style.display = 'block';
        }
      }
    });
  }
}());
// 580px banner
const banner_switch = (function banner_switch() {
  const rowf = document.querySelectorAll('.row-fluid');
  if (hastouchscreen) {
    rowf[1].style.cssText = 'background:url(./css/css-img/580x410_banner.jpg) no-repeat top ;width:100%;';
  }
}());
