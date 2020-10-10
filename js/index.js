/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//polyfill for closest
var closest_polyfill = function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
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
}();
/* eslint-disable no-unused-vars */

/* eslint-disable linebreak-style */

/* eslint-disable camelcase */

/* eslint-disable eqeqeq */

/* eslint-disable no-shadow */
// check device type


var hastouchscreen = function has() {
  var hastouchscreen = false;

  if ('maxTouchPoints' in navigator) {
    var _hastouchscreen = navigator.maxTouchPoints > 0;

    return _hastouchscreen;
  }

  if ('msMaxTouchPoints' in navigator) {
    var _hastouchscreen2 = navigator.msMaxTouchPoints > 0;

    return _hastouchscreen2;
  }

  var mq = window.matchMedia && matchMedia('(max-width:580px)');

  if (mq && mq.media === '(max-width:580px)') {
    hastouchscreen = true;
    return hastouchscreen;
  }

  if ('orientation' in window) {
    hastouchscreen = true;
    return hastouchscreen;
  } // not recommanded userAgent


  var mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone', 'IEMobile', 'Opera Mini'];
  hastouchscreen = mobileDevice.some(function (e) {
    return navigator.userAgent.match(e);
  });
  return hastouchscreen;
}(); // resources parts


var resources_all = function resources_all() {
  var res_all = document.querySelector('.res-over-view');
  var res_content = document.querySelector('.res-content');
  var res_item = document.querySelector('.res-item');
  var left_arrow = document.querySelector('.left-arrow img');
  var right_arrow = document.querySelector('.right-arrow img');
  var res_item1 = document.querySelector('.res-item-1');
  var res_item2 = document.querySelector('.res-item-2');
  var res_item3 = document.querySelector('.res-item-3');
  var res_item_a = document.querySelector('.res-item a');
  var res_item4 = document.querySelector('.res-item-4');
  var res_item5 = document.querySelector('.res-item-5');
  var res_item6 = document.querySelector('.res-item-6');
  var res_item1_img = document.querySelector('.res-item-1 img');
  var res_item2_img = document.querySelector('.res-item-2 img');
  var res_item3_img = document.querySelector('.res-item-3 img');
  var res_item4_img = document.querySelector('.res-item-4 img');
  var res_item5_img = document.querySelector('.res-item-5 img');
  var res_item6_img = document.querySelector('.res-item-6 img');
  var res_para1 = document.querySelector('.resource-para1');
  var res_para2 = document.querySelector('.resource-para2');
  var res_para3 = document.querySelector('.resource-para3');
  var resource_tag_1 = document.querySelector('.resource-1');
  var resource_tag_2 = document.querySelector('.resource-2');
  var resource_tag_3 = document.querySelector('.resource-3');
  var resource_tag_4 = document.querySelector('.resource-4');
  var res_button = document.querySelector('.download-button div');
  var res_button_slide = document.querySelector('.download-button');
  res_all.addEventListener('mouseenter', function (e) {
    if (e.target.closest('.res-over-view') !== null) {
      res_content.setAttribute('style', 'border:#10c5e9 1px solid;');
    }
  });
  res_all.addEventListener('mouseleave', function (e) {
    if (e.target.closest('.res-over-view')) {
      res_content.setAttribute('style', 'border:#bbbdbe 1px solid;');
    }
  });
  res_all.addEventListener('click', function (e) {
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
      res_button_slide.setAttribute('href', 'https://www.advantech.com/form/0b3f1dd1-14b2-41ed-914a-3a98c8eb51e7?callback=5739621b-66ed-48bc-a874-e4f83ddbf28d&utm_campaign=Report&utm_medium=Banner-on-Corp-Site&utm_source=Banner-on-Corp-Site');
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
      res_button_slide.setAttribute('href', 'https://www.advantech.com/form/0b3f1dd1-14b2-41ed-914a-3a98c8eb51e7?callback=5739621b-66ed-48bc-a874-e4f83ddbf28d&utm_campaign=Report&utm_medium=Banner-on-Corp-Site&utm_source=Banner-on-Corp-Site');
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
      res_button_slide.setAttribute('href', 'https://www.advantech.com/form/c49f4ea1-d6da-4c4e-a3ed-27bda76e8542?callback=fc0e36f6-a788-4a26-8026-e0c74352867c&utm_campaign=Report&utm_medium=Banner-on-Corp-Site&utm_source=Banner-on-Corp-Site');
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
      res_item3.setAttribute('href', 'https://www.advantech.com/form/8682f2e6-a11a-4caa-92d2-abb6be1b9ac9?callback=dbfa0572-99ad-490b-a08e-2301ba0456c3&utm_campaign=Report&utm_medium=Banner-on-Corp-Site&utm_source=Banner-on-Corp-Site');
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
      res_button_slide.setAttribute('href', 'https://www.advantech.com/form/a7e9ba7b-b30d-4358-8db5-3670ec1f103e?callback=8402b62c-e7f2-423a-80a8-4b5a4ae1d9c7&utm_campaign=Report&utm_medium=Banner-on-Corp-Site&utm_source=Banner-on-Corp-Site'); // res_item1.setAttribute('href','https://www2.advantech.com/ia/iiot/case-study/Intelligent%20Connectivity_Success%20Stories.pdf')
    }
  });
  res_item.addEventListener('click', function (e) {
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
}(); // over-view parts


var over_view = function over_view() {
  document.addEventListener('click', function (e) {
    var ov2_para1 = document.querySelector('.ov2-para1');

    if (!hastouchscreen) {
      for (var i = 1; i < 8; i += 1) {
        var proto_all = document.querySelector(".proto-".concat(i));
        var dark_bg = document.getElementById('dark-bg');
        var close_icon = document.querySelector(".close-icon-1-".concat(i));
        var proto_id = document.getElementById("proto-".concat(i));

        if (e.target.closest(".ov2-".concat(i))) {
          proto_all.classList.remove('proto-display');
          dark_bg.style.display = 'block';
          close_icon.style.display = 'block';
          proto_id.style.display = 'block';
          break;
        }

        if (e.target === dark_bg || e.target.closest(".close-icon-1-".concat(i))) {
          proto_all.classList.add('proto-display');
          dark_bg.style.display = 'none';
          close_icon.style.display = 'none';
          proto_id.style.display = 'none';
          ov2_para1.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    }

    if (hastouchscreen) {
      for (var _i = 1; _i < 8; _i += 1) {
        var _dark_bg = document.getElementById('dark-bg');

        var _close_icon = document.querySelector(".close-icon-1-".concat(_i));

        var _proto_id = document.getElementById("proto-".concat(_i, "-rwd"));

        if (e.target.closest(".ov2-".concat(_i))) {
          _proto_id.classList.remove('proto-display');

          _dark_bg.style.display = 'block';
          _close_icon.style.display = 'block';
          _proto_id.style.display = 'block';
          break;
        } else if (e.target === _dark_bg || e.target.closest(".close-icon-1-".concat(_i))) {
          _proto_id.classList.add('proto-display');

          _dark_bg.style.display = 'none';
          _close_icon.style.display = 'none';
          _proto_id.style.display = 'none';
          ov2_para1.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    }
  });
}(); // 3x 66.5%
// 2x 62%


var products = function products() {
  var dark_bg_3 = document.getElementById('dark-bg-3');
  var factory = document.getElementById('factory');
  var ee_all = document.querySelector('.E-E-all');
  var product_1 = document.getElementById('products-1');
  var product_2 = document.getElementById('products-2');
  var product_3 = document.getElementById('products-3');
  var transport_all = document.querySelector('.transport-all');
  document.addEventListener('click', function (e) {
    dark_bg_3.style.height = "".concat(document.documentElement.scrollHeight, "px");
    dark_bg_3.style.width = "".concat(document.documentElement.scrollWidth, "px");

    if (e.target.closest('#products-1')) {
      factory.style.display = 'block';
      dark_bg_3.style.display = 'block';
    }

    if (factory.style.display === 'block' && e.target === dark_bg_3) {
      factory.style.display = 'none';
      dark_bg_3.style.display = 'none';
      product_1.scrollIntoView({
        behavior: 'smooth'
      });
    }

    if (e.target.closest('#products-2')) {
      ee_all.style.display = 'block';
      dark_bg_3.style.display = 'block';
    }

    if (ee_all.style.display === 'block' && e.target === dark_bg_3) {
      ee_all.style.display = 'none';
      dark_bg_3.style.display = 'none';
      product_2.scrollIntoView({
        behavior: 'smooth'
      });
    }

    if (e.target.closest('#products-3')) {
      transport_all.style.display = 'block';
      dark_bg_3.style.display = 'block';
    }

    if (transport_all.style.display === 'block' && e.target === dark_bg_3) {
      transport_all.style.display = 'none';
      dark_bg_3.style.display = 'none';
      product_3.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
}(); // products parts -factory


var products_fac = function products_fac() {
  var close_icon_2 = document.querySelector('.close-icon-2');

  if (!hastouchscreen) {
    document.addEventListener('click', function (e) {
      var all_array = [item_1_1, item_1_2, item_2_1, item_2_2, item_2_3];
      var scroll_item = document.getElementById('products-1');
      var item_1_1_1 = document.querySelector('#item-1-1-1');
      var item_1_2_1 = document.querySelector('#item-1-2-1');
      var item_2_1_1 = document.querySelector('#item-2-1-1');
      var item_2_2_1 = document.querySelector('#item-2-2-1');
      var item_2_3_1 = document.querySelector('#item-2-3-1');
      var item_2_4_1 = document.querySelector('#item-2-4-1');
      var item_3_1_1 = document.querySelector('#item-3-1-1');
      var item_3_1_2 = document.querySelector('#item-3-1-2');
      var item_3_1_3 = document.querySelector('#item-3-1-3');
      var item_1_1 = document.querySelector('.item-1-1');
      var item_1_2 = document.querySelector('.item-1-2');
      var item_2_1 = document.querySelector('.item-2-1');
      var item_2_2 = document.querySelector('.item-2-2');
      var item_2_3 = document.querySelector('.item-2-3');
      var item_2_4 = document.querySelector('.item-2-4');
      var item_3_1 = document.querySelector('.item-3-1');
      var item_3_2 = document.querySelector('.item-3-2');
      var item_3_3 = document.querySelector('.item-3-3');
      var dark_bg_2 = document.getElementById('dark-bg-2');
      var close_icon_2 = document.querySelector('.close-icon-2');
      dark_bg_2.style.height = "".concat(document.documentElement.scrollHeight, "px");
      dark_bg_2.style.width = "".concat(document.documentElement.scrollWidth, "px");

      if (e.target === item_1_1_1) {
        item_1_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_1_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-1-1-2')) {
        item_1_1.style.cssText = 'display:block;;top:50%';
        dark_bg_2.style.display = 'block';
        item_1_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_1_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_1_2_1) {
        item_1_2.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_1_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-1-2-2')) {
        item_1_2.style.cssText = 'display:block;;top:50%';
        dark_bg_2.style.display = 'block';
        item_1_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_1_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_2_1_1) {
        item_2_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_2_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-2-1-2')) {
        item_2_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_2_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_2_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_2_2_1) {
        item_2_2.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_2_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-2-2-2')) {
        item_2_2.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_2_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_2_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_2_3_1) {
        item_2_3.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_2_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-2-3-2')) {
        item_2_3.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_2_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_2_3.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_2_4_1) {
        item_2_4.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_2_4.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-2-4-2')) {
        item_2_4.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_2_4.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_2_4.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_3_1_1) {
        item_3_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_3_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-3-1-4')) {
        item_3_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_3_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_3_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_3_1_2) {
        item_3_2.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_3_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-3-1-5')) {
        item_3_2.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_3_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_3_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_3_1_3) {
        item_3_3.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_3_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-3-1-6')) {
        item_3_3.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_3_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_3_3.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }
    });
  }

  if (hastouchscreen) {
    document.addEventListener('click', function (e) {
      var item_1_1_1 = document.querySelector('#item-1-1-1');
      var scroll_item = document.getElementById('products-1');
      var item_1_2_1 = document.querySelector('#item-1-2-1');
      var item_2_1_1 = document.querySelector('#item-2-1-1');
      var item_2_2_1 = document.querySelector('#item-2-2-1');
      var item_2_3_1 = document.querySelector('#item-2-3-1');
      var item_2_4_1 = document.querySelector('#item-2-4-1');
      var item_3_1_1 = document.querySelector('#item-3-1-1');
      var item_3_1_2 = document.querySelector('#item-3-1-2');
      var item_3_1_3 = document.querySelector('#item-3-1-3');
      var item_1_1 = document.getElementById('item-rwd-1-1');
      var item_1_2 = document.getElementById('item-rwd-1-2');
      var item_2_1 = document.getElementById('item-rwd-2-1');
      var item_2_2 = document.getElementById('item-rwd-2-2');
      var item_2_3 = document.getElementById('item-rwd-2-3');
      var item_2_4 = document.getElementById('item-rwd-2-4');
      var item_3_1 = document.getElementById('item-rwd-3-1');
      var item_3_2 = document.getElementById('item-rwd-3-2');
      var item_3_3 = document.getElementById('item-rwd-3-3');
      var dark_bg_2 = document.getElementById('dark-bg-2');
      var close_icon_2 = document.querySelector('.close-icon-2');
      dark_bg_2.style.height = "".concat(document.documentElement.scrollHeight, "px");
      dark_bg_2.style.width = "".concat(document.documentElement.scrollWidth, "px");

      if (e.target === item_1_1_1) {
        item_1_1.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_1_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-1-1-2')) {
        item_1_1.style.cssText = 'display:block;top:30%';
        dark_bg_2.style.display = 'block';
        item_1_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_1_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_1_2_1) {
        item_1_2.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_1_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-1-2-2')) {
        item_1_2.style.cssText = 'display:block;top:30%';
        dark_bg_2.style.display = 'block';
        item_1_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_1_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_2_1_1) {
        item_2_1.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_2_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-2-1-2')) {
        item_2_1.style.cssText = 'display:block;top:35%;';
        dark_bg_2.style.display = 'block';
        item_2_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_2_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
      }

      if (e.target === item_2_2_1) {
        item_2_2.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_2_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-2-2-2')) {
        item_2_2.style.cssText = 'display:block;top:35%;;';
        dark_bg_2.style.display = 'block';
        item_2_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_2_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
      }

      if (e.target === item_2_3_1) {
        item_2_3.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_2_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-2-3-2')) {
        item_2_3.style.cssText = 'display:block;top:35%;;';
        dark_bg_2.style.display = 'block';
        item_2_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_2_3.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
      }

      if (e.target === item_2_4_1) {
        item_2_4.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_2_4.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-2-4-2')) {
        item_2_4.style.cssText = 'display:block;top:35%;';
        dark_bg_2.style.display = 'block';
        item_2_4.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_2_4.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
      }

      if (e.target === item_3_1_1) {
        item_3_1.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_3_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-3-1-4')) {
        item_3_1.style.cssText = 'display:block;top:40%;';
        dark_bg_2.style.display = 'block';
        item_3_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_3_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
      }

      if (e.target === item_3_1_2) {
        item_3_2.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_3_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-3-1-5')) {
        item_3_2.style.cssText = 'display:block;top:40%;';
        dark_bg_2.style.display = 'block';
        item_3_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_3_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
      }

      if (e.target === item_3_1_3) {
        item_3_3.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_3_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-3-1-6')) {
        item_3_3.style.cssText = 'display:block;top:40%;';
        dark_bg_2.style.display = 'block';
        item_3_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_3_3.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
      }
    });
  }
}(); // products parts -E-E


var products_ee = function products_ee() {
  if (!hastouchscreen) {
    document.addEventListener('click', function (e) {
      var scroll_item = document.getElementById('products-2');
      var item_4_1_1 = document.querySelector('#item-4-1-1');
      var item_4_1_2 = document.querySelector('#item-4-1-2');
      var item_4_2_1 = document.querySelector('#item-4-2-1');
      var item_4_2_4 = document.querySelector('#item-4-2-4');
      var item_4_3_1 = document.querySelector('#item-4-3-1');
      var item_5_1_1 = document.querySelector('#item-5-1-1');
      var item_6_1_1 = document.querySelector('#item-6-1-1');
      var item_7_1_1 = document.querySelector('#item-7-1-1');
      var item_8_1_1 = document.querySelector('#item-8-1-1');
      var item_8_1_2 = document.querySelector('#item-8-1-2');
      var item_8_2_1 = document.querySelector('#item-8-2-1');
      var item_4_1 = document.querySelector('.item-4-1');
      var item_4_2 = document.querySelector('.item-4-2');
      var item_4_3 = document.querySelector('.item-4-3');
      var item_4_4 = document.querySelector('.item-4-4');
      var item_4_5 = document.querySelector('.item-4-5');
      var item_5_1 = document.querySelector('.item-5-1');
      var item_6_1 = document.querySelector('.item-6-1');
      var item_7_1 = document.querySelector('.item-7-1');
      var item_8_1 = document.querySelector('.item-8-1');
      var item_8_2 = document.querySelector('.item-8-2');
      var item_8_3 = document.querySelector('.item-8-3');
      var dark_bg_2 = document.getElementById('dark-bg-2');
      var close_icon_2 = document.querySelector('.close-icon-2');
      dark_bg_2.style.height = "".concat(document.documentElement.scrollHeight, "px");
      dark_bg_2.style.width = "".concat(document.documentElement.scrollWidth, "px");

      if (e.target === item_4_1_1) {
        item_4_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_4_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-4-1-3')) {
        item_4_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_4_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_4_1_2) {
        item_4_4.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_4_4.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-4-1-4')) {
        item_4_4.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_4_4.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_4.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_4_2_1) {
        item_4_2.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_4_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-4-2-2')) {
        item_4_2.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_4_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_4_3_1) {
        item_4_3.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_4_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-4-3-2')) {
        item_4_3.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_4_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_3.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_4_2_4) {
        item_4_5.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_4_5.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-4-2-3')) {
        item_4_5.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_4_5.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_5.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_5_1_1) {
        item_5_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_5_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-5-1-2')) {
        item_5_1.style.cssText = 'display:block;top:55%;';
        dark_bg_2.style.display = 'block';
        item_5_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_5_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_6_1_1) {
        item_6_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_6_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-6-1-2')) {
        item_6_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_6_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_6_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_7_1_1) {
        item_7_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_7_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-7-1-2')) {
        item_7_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_7_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_7_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_8_1_1) {
        item_8_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_8_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-8-1-3')) {
        item_8_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_8_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_8_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_8_2_1) {
        item_8_2.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_8_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-8-2-2')) {
        item_8_2.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_8_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_8_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_8_1_2) {
        item_8_3.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_8_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-8-1-4')) {
        item_8_3.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_8_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_8_3.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }
    });
  }

  if (hastouchscreen) {
    document.addEventListener('click', function (e) {
      var item_4_1_1 = document.querySelector('#item-4-1-1');
      var item_4_1_2 = document.querySelector('#item-4-1-2');
      var item_4_2_1 = document.querySelector('#item-4-2-1');
      var item_4_2_4 = document.querySelector('#item-4-2-4');
      var item_4_3_1 = document.querySelector('#item-4-3-1');
      var item_5_1_1 = document.querySelector('#item-5-1-1');
      var item_6_1_1 = document.querySelector('#item-6-1-1');
      var item_7_1_1 = document.querySelector('#item-7-1-1');
      var item_8_1_1 = document.querySelector('#item-8-1-1');
      var item_8_1_2 = document.querySelector('#item-8-1-2');
      var item_8_2_1 = document.querySelector('#item-8-2-1');
      var scroll_item = document.getElementById('products-2');
      var item_4_1 = document.getElementById('item-rwd-4-1');
      var item_4_2 = document.getElementById('item-rwd-4-2');
      var item_4_3 = document.getElementById('item-rwd-4-3');
      var item_4_4 = document.getElementById('item-rwd-4-4');
      var item_4_5 = document.getElementById('item-rwd-4-5');
      var item_5_1 = document.getElementById('item-rwd-5-1');
      var item_6_1 = document.getElementById('item-rwd-6-1');
      var item_7_1 = document.getElementById('item-rwd-7-1');
      var item_8_1 = document.getElementById('item-rwd-8-1');
      var item_8_2 = document.getElementById('item-rwd-8-2');
      var item_8_3 = document.getElementById('item-rwd-8-3');
      var dark_bg_2 = document.getElementById('dark-bg-2');
      var close_icon_2 = document.querySelector('.close-icon-2');
      dark_bg_2.style.height = "".concat(document.documentElement.scrollHeight, "px");
      dark_bg_2.style.width = "".concat(document.documentElement.scrollWidth, "px");

      if (e.target === item_4_1_1) {
        item_4_1.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_4_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-4-1-3')) {
        item_4_1.style.cssText = 'display:block;top:35%;';
        dark_bg_2.style.display = 'block';
        item_4_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_4_1_2) {
        item_4_4.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_4_4.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-4-1-4')) {
        item_4_4.style.cssText = 'display:block;top:35%;';
        dark_bg_2.style.display = 'block';
        item_4_4.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_4.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_4_2_1) {
        item_4_2.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_4_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-4-2-2')) {
        item_4_2.style.cssText = 'display:block;top:40%;';
        dark_bg_2.style.display = 'block';
        item_4_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_4_3_1) {
        item_4_3.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_4_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-4-3-2')) {
        item_4_3.style.cssText = 'display:block;top:40%;';
        dark_bg_2.style.display = 'block';
        item_4_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_3.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_4_2_4) {
        item_4_5.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_4_5.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-4-2-3')) {
        item_4_5.style.cssText = 'display:block;top:40%;';
        dark_bg_2.style.display = 'block';
        item_4_5.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_4_5.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_5_1_1) {
        item_5_1.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_5_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-5-1-2')) {
        item_5_1.style.cssText = 'display:block;top:45%;';
        dark_bg_2.style.display = 'block';
        item_5_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_5_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_6_1_1) {
        item_6_1.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_6_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-6-1-2')) {
        item_6_1.style.cssText = 'display:block;top:50%;';
        dark_bg_2.style.display = 'block';
        item_6_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_6_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_7_1_1) {
        item_7_1.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_7_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-7-1-2')) {
        item_7_1.style.cssText = 'display:block;top:55%;';
        dark_bg_2.style.display = 'block';
        item_7_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_7_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_8_1_1) {
        item_8_1.style.cssText = 'display:block;top:60%;';
        dark_bg_2.style.display = 'block';
        item_8_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-8-1-3')) {
        item_8_1.style.cssText = 'display:block;top:60%;';
        dark_bg_2.style.display = 'block';
        item_8_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_8_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_8_2_1) {
        item_8_2.style.cssText = 'display:block;top:60%;';
        dark_bg_2.style.display = 'block';
        item_8_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-8-2-2')) {
        item_8_2.style.cssText = 'display:block;top:60%;';
        dark_bg_2.style.display = 'block';
        item_8_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_8_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_8_1_2) {
        item_8_3.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_8_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-8-1-4')) {
        item_8_3.style.cssText = 'display:block;top:60%;';
        dark_bg_2.style.display = 'block';
        item_8_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_8_3.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }
    });
  }
}(); // products parts -transport


var products_trans = function products_trans() {
  if (!hastouchscreen) {
    document.addEventListener('click', function (e) {
      var scroll_item = document.getElementById('products-3');
      var item_9_1_1 = document.querySelector('#item-9-1-1');
      var item_9_2_1 = document.querySelector('#item-9-2-1');
      var item_9_3_1 = document.querySelector('#item-9-3-1');
      var item_10_1_1 = document.querySelector('#item-10-1-1');
      var item_10_2_1 = document.querySelector('#item-10-2-1');
      var item_10_3_1 = document.querySelector('#item-10-3-1');
      var item_10_3_2 = document.querySelector('#item-10-3-2');
      var item_10_3_3 = document.querySelector('#item-10-3-3');
      var item_11_1_1 = document.querySelector('#item-11-1-1');
      var item_11_2_1 = document.querySelector('#item-11-2-1');
      var item_11_2_2 = document.querySelector('#item-11-2-2');
      var item_11_3_1 = document.querySelector('#item-11-3-1');
      var item_12_1_1 = document.querySelector('#item-12-1-1');
      var item_12_1_2 = document.querySelector('#item-12-1-2');
      var item_9_1 = document.querySelector('.item-9-1');
      var item_9_2 = document.querySelector('.item-9-2');
      var item_9_3 = document.querySelector('.item-9-3');
      var item_10_1 = document.querySelector('.item-10-1');
      var item_10_2 = document.querySelector('.item-10-2');
      var item_10_3 = document.querySelector('.item-10-3');
      var item_10_4 = document.querySelector('.item-10-4');
      var item_10_5 = document.querySelector('.item-10-5');
      var item_11_1 = document.querySelector('.item-11-1');
      var item_11_2 = document.querySelector('.item-11-2');
      var item_11_3 = document.querySelector('.item-11-3');
      var item_11_4 = document.querySelector('.item-11-4');
      var item_12_1 = document.querySelector('.item-12-1');
      var item_12_2 = document.querySelector('.item-12-2');
      var dark_bg_2 = document.getElementById('dark-bg-2');
      var close_icon_2 = document.querySelector('.close-icon-2');
      dark_bg_2.style.height = "".concat(document.documentElement.scrollHeight, "px");
      dark_bg_2.style.width = "".concat(document.documentElement.scrollWidth, "px");

      if (e.target === item_9_1_1) {
        item_9_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_9_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-9-1-2')) {
        item_9_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_9_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_9_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_9_2_1) {
        item_9_2.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_9_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-9-2-2')) {
        item_9_2.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_9_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_9_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_9_3_1) {
        item_9_3.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_9_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-9-3-2')) {
        item_9_3.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_9_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_9_3.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_10_1_1) {
        item_10_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_10_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block';
      }

      if (e.target.closest('#item-10-1-2')) {
        item_10_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_10_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_10_2_1) {
        item_10_2.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_10_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-10-2-2')) {
        item_10_2.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_10_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_10_3_1) {
        item_10_3.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_10_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-10-3-4')) {
        item_10_3.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_10_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_3.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_10_3_2) {
        item_10_4.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_10_4.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-10-3-5')) {
        item_10_4.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_10_4.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_4.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_10_3_3) {
        item_10_5.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_10_5.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-10-3-6')) {
        item_10_5.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_10_5.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_5.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_11_1_1) {
        item_11_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_11_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-11-1-2')) {
        item_11_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_11_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_11_2_1) {
        document.querySelector('.item-11-2-title').textContent = 'Staff Identity';
        item_11_2.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_11_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target.closest('#item-11-2-3')) {
        document.querySelector('.item-11-2-title').textContent = "Staff Identity/Entrance Control";
        item_11_2.style.cssText = 'display:block;;top:50%;;';
        dark_bg_2.style.display = 'block';
        item_11_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block';
      }

      if (e.target === item_11_3_1) {
        item_11_3.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_11_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-11-3-2')) {
        item_11_3.style.cssText = 'display:block;;top:50%;;';
        dark_bg_2.style.display = 'block';
        item_11_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_3.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_11_2_2) {
        document.querySelector('.item-11-2-title').textContent = "Entrance Control";
        item_11_4.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_11_4.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_4.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_12_1_1) {
        item_12_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_12_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block';
      }

      if (e.target.closest('#item-12-1-3')) {
        item_12_1.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_12_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_12_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_12_1_2) {
        item_12_2.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_12_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block';
      }

      if (e.target.closest('#item-12-1-4')) {
        item_12_2.style.cssText = 'display:block;;top:50%;';
        dark_bg_2.style.display = 'block';
        item_12_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_12_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }
    });
  }

  if (hastouchscreen) {
    document.addEventListener('click', function (e) {
      var scroll_item = document.getElementById('products-3');
      var item_9_1_1 = document.querySelector('#item-9-1-1');
      var item_9_2_1 = document.querySelector('#item-9-2-1');
      var item_9_3_1 = document.querySelector('#item-9-3-1');
      var item_10_1_1 = document.querySelector('#item-10-1-1');
      var item_10_2_1 = document.querySelector('#item-10-2-1');
      var item_10_3_1 = document.querySelector('#item-10-3-1');
      var item_10_3_2 = document.querySelector('#item-10-3-2');
      var item_10_3_3 = document.querySelector('#item-10-3-3');
      var item_11_1_1 = document.querySelector('#item-11-1-1');
      var item_11_2_1 = document.querySelector('#item-11-2-1');
      var item_11_2_2 = document.querySelector('#item-11-2-2');
      var item_11_3_1 = document.querySelector('#item-11-3-1');
      var item_12_1_1 = document.querySelector('#item-12-1-1');
      var item_12_1_2 = document.querySelector('#item-12-1-2');
      var item_9_1 = document.getElementById('item-rwd-9-1');
      var item_9_2 = document.getElementById('item-rwd-9-2');
      var item_9_3 = document.getElementById('item-rwd-9-3');
      var item_10_1 = document.getElementById('item-rwd-10-1');
      var item_10_2 = document.getElementById('item-rwd-10-2');
      var item_10_3 = document.getElementById('item-rwd-10-3');
      var item_10_4 = document.getElementById('item-rwd-10-4');
      var item_10_5 = document.getElementById('item-rwd-10-5');
      var item_11_1 = document.getElementById('item-rwd-11-1');
      var item_11_2 = document.getElementById('item-rwd-11-2');
      var item_11_3 = document.getElementById('item-rwd-11-3');
      var item_11_4 = document.getElementById('item-rwd-11-4');
      var item_12_1 = document.getElementById('item-rwd-12-1');
      var item_12_2 = document.getElementById('item-rwd-12-2');
      var dark_bg_2 = document.getElementById('dark-bg-2');
      var close_icon_2 = document.querySelector('.close-icon-2');
      var item_11_2_t = document.querySelectorAll('.item-rwd-11-2-title');

      var item_11_2_title = _toConsumableArray(item_11_2_t);

      dark_bg_2.style.height = "".concat(document.documentElement.scrollHeight, "px");
      dark_bg_2.style.width = "".concat(document.documentElement.scrollWidth, "px");

      if (e.target === item_9_1_1) {
        item_9_1.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_9_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-9-1-2')) {
        item_9_1.style.cssText = 'display:block;top:42%;';
        dark_bg_2.style.display = 'block';
        item_9_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_9_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_9_2_1) {
        item_9_2.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_9_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-9-2-2')) {
        item_9_2.style.cssText = 'display:block;top:42%;';
        dark_bg_2.style.display = 'block';
        item_9_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_9_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_9_3_1) {
        item_9_3.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_9_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-9-3-2')) {
        item_9_3.style.cssText = 'display:block;top:42%;';
        dark_bg_2.style.display = 'block';
        item_9_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_9_3.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_10_1_1) {
        item_10_1.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_10_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block';
      }

      if (e.target.closest('#item-10-1-2')) {
        item_10_1.style.cssText = 'display:block;top:47%;';
        dark_bg_2.style.display = 'block';
        item_10_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_10_2_1) {
        item_10_2.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_10_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-10-2-2')) {
        item_10_2.style.cssText = 'display:block;top:47%;';
        dark_bg_2.style.display = 'block';
        item_10_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_10_3_1) {
        item_10_3.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_10_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-10-3-4')) {
        item_10_3.style.cssText = 'display:block;top:52%;';
        dark_bg_2.style.display = 'block';
        item_10_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_3.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_10_3_2) {
        item_10_4.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_10_4.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-10-3-5')) {
        item_10_4.style.cssText = 'display:block;top:52%;';
        dark_bg_2.style.display = 'block';
        item_10_4.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_4.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_10_3_3) {
        item_10_5.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_10_5.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-10-3-6')) {
        item_10_5.style.cssText = 'display:block;top:52%;';
        dark_bg_2.style.display = 'block';
        item_10_5.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_5.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_11_1_1) {
        item_11_1.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_11_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-11-1-2')) {
        item_11_1.style.cssText = 'display:block;top:59%;';
        dark_bg_2.style.display = 'block';
        item_11_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_11_2_1) {
        item_11_2_title.textContent = 'Staff Identity';
        item_11_2.style.cssText = 'display:block;top:59%;';
        dark_bg_2.style.display = 'block';
        item_11_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target.closest('#item-11-2-3')) {
        item_11_2_title.textContent = "Staff Identity/\n      Entrance Control";
        item_11_2.style.cssText = 'display:block;top:59%;';
        dark_bg_2.style.display = 'block';
        item_11_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === item_11_3_1) {
        item_11_3.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_11_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target.closest('#item-11-3-2')) {
        item_11_3.style.cssText = 'display:block;top:59%;';
        dark_bg_2.style.display = 'block';
        item_11_3.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_3.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_11_2_2) {
        item_11_2_title.textContent = "\n      Entrance Control";
        item_11_4.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_11_4.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_4.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_12_1_1) {
        item_12_1.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_12_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block';
      }

      if (e.target.closest('#item-12-1-3')) {
        item_12_1.style.cssText = 'display:block;top:64%;';
        dark_bg_2.style.display = 'block';
        item_12_1.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_12_1.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }

      if (e.target === item_12_1_2) {
        item_12_2.style.cssText = 'display:block;top:5%;';
        dark_bg_2.style.display = 'block';
        item_12_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block';
      }

      if (e.target.closest('#item-12-1-4')) {
        item_12_2.style.cssText = 'display:block;top:64%;';
        dark_bg_2.style.display = 'block';
        item_12_2.appendChild(close_icon_2);
        close_icon_2.style.cssText = 'display:block;';
      }

      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_12_2.style.cssText = 'display:none';
        dark_bg_2.style.display = 'none';
        close_icon_2.style.display = 'none';
      }
    });
  }
}(); // RWD dropdown


var nav_touch = function nav_touch() {
  if (hastouchscreen) {
    var target_1 = document.querySelector('.nav-products>a');
    var target_2 = document.querySelectorAll('.first-layer>a');
    var target_3 = document.querySelectorAll('.sec-layer>a');
    var layer_1 = document.querySelector('.nav-products>ul');
    var layer_2 = document.querySelectorAll('.first-layer > ul');
    var layer_3 = document.querySelectorAll('.sec-layer > ul');
    document.addEventListener('touchstart', function (e) {
      if (layer_1.style.display == 'block' && e.target == target_1) layer_1.style.display = 'none';else if (e.target == target_1) layer_1.style.display = 'block';

      for (var i = 0; i < layer_2.length; i += 1) {
        if (layer_2[i].style.display == 'block' && e.target == target_2[i]) {
          // displays aren't inline-style, so need add style block first
          layer_2[i].style.display = 'none';
        } else if (e.target == target_2[i]) {
          (function layer() {
            // close none-target layer
            var layers = _toConsumableArray(layer_2).filter(function (la) {
              return e.target !== la;
            });

            for (var _i2 = 0; _i2 < _toConsumableArray(layer_2).length; _i2 += 1) {
              layers[_i2].style.display = 'none';
            }
          })(); // layer have to execute first to disappar before


          layer_2[i].style.display = 'block';
        }
      }

      for (var _i3 = 0; _i3 < layer_3.length; _i3 += 1) {
        if (layer_3[_i3].style.display == 'block' && e.target == target_3[_i3]) {
          // displays aren't inline-style, so need add style block first
          layer_3[_i3].style.display = 'none';
        } else if (e.target == target_3[_i3]) {
          // close none-target layer
          (function layer() {
            var layers = _toConsumableArray(layer_3).filter(function (la) {
              return e.target !== la;
            });

            for (var _i4 = 0; _i4 < _toConsumableArray(layer_3).length; _i4 += 1) {
              layers[_i4].style.display = 'none';
            }
          })();

          layer_3[_i3].style.display = 'block';
        }
      }
    });
  }
}(); // 580px banner


var banner_switch = function banner_switch() {
  var rowf = document.querySelectorAll('.row-fluid');

  if (hastouchscreen && window.screen.availWidth < 580) {
    rowf[1].style.cssText = 'background:url(./css/css-img/580x410_banner.jpg) no-repeat top ;width:100%;';
  }
}();

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map