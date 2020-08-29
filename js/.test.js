 if (hastouchscreen) {
    document.addEventListener('click', (e) => {
      const item_1_1 = document.getElementById('products-3');
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
        item_9_1.style = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-9-1-2')) {
        item_9_1.style = 'display:block;top:42%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: 2240px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_9_1.style = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none'; item_1_1.scrollIntoView({ behavior: 'smooth' });
      }
      if (e.target === item_9_2_1) {
        item_9_2.style = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-9-2-2')) {
        item_9_2.style = 'display:block;top:42%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: 2240px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_9_2.style = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none'; item_1_1.scrollIntoView({ behavior: 'smooth' });
      }
      if (e.target === item_9_3_1) {
        item_9_3.style = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-9-3-2')) {
        item_9_3.style = 'display:block;top:42%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: 2240px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_9_3.style = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none'; item_1_1.scrollIntoView({ behavior: 'smooth' });
      }
      if (e.target === item_10_1_1) {
        item_10_1.style = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: -420px 0 0 770px;';
      }
      if (e.target.closest('#item-10-1-2')) {
        item_10_1.style = 'display:block;top:47%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: 2730px  0 0 770px;';
      }
      if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_1.style = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none'; item_1_1.scrollIntoView({ behavior: 'smooth' });
      }
      if (e.target === item_10_2_1) {
        item_10_2.style = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-10-2-2')) {
        item_10_2.style = 'display:block;top:47%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: 2730px  0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_2.style = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none'; item_1_1.scrollIntoView({ behavior: 'smooth' });
      }
      if (e.target === item_10_3_1) {
        item_10_3.style = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-10-3-4')) {
        item_10_3.style = 'display:block;top:52%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: 3220px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_3.style = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none'; item_1_1.scrollIntoView({ behavior: 'smooth' });
      }
      if (e.target === item_10_3_2) {
        item_10_4.style = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-10-3-5')) {
        item_10_4.style = 'display:block;top:52%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: 3220px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_4.style = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none'; item_1_1.scrollIntoView({ behavior: 'smooth' });
      }
      if (e.target === item_10_3_3) {
        item_10_5.style = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: -420px 0 0 980px;';
      }
      if (e.target.closest('#item-10-3-6')) {
        item_10_5.style = 'display:block;top:52%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: 3220px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_10_5.style = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none'; item_1_1.scrollIntoView({ behavior: 'smooth' });
      }
      if (e.target === item_11_1_1) {
        item_11_1.style = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-11-1-2')) {
        item_11_1.style = 'display:block;top:59%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: 3430px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_1.style = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none'; item_1_1.scrollIntoView({ behavior: 'smooth' });
      }
      if (e.target === item_11_2_1) {
        item_11_2_title.textContent = 'Staff Identity';
        item_11_2.style = 'display:block;top:59%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: -420px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_2.style = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none'; item_1_1.scrollIntoView({ behavior: 'smooth' });
      }
      if (e.target.closest('#item-11-2-3')) {
        item_11_2_title.textContent = `Staff Identity/
      Entrance Control`;
        item_11_2.style = 'display:block;top:59%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: 3430px 0 0 980px;';
      }
      if (e.target === item_11_3_1) {
        item_11_3.style = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: -420px 0 0 880px;';
      }
      if (e.target.closest('#item-11-3-2')) {
        item_11_3.style = 'display:block;top:59%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: 3430px 0 0 880px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_3.style = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none'; item_1_1.scrollIntoView({ behavior: 'smooth' });
      }
      if (e.target === item_11_2_2) {
        item_11_2_title.textContent = `
      Entrance Control`;
        item_11_4.style = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: -420px 0 0 980px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_11_4.style = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none'; item_1_1.scrollIntoView({ behavior: 'smooth' });
      }
      if (e.target === item_12_1_1) {
        item_12_1.style = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: -420px 0 0 770px;';
      }
      if (e.target.closest('#item-12-1-3')) {
        item_12_1.style = 'display:block;top:64%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin:  3780px 0 0 770px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_12_1.style = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none'; item_1_1.scrollIntoView({ behavior: 'smooth' });
      }
      if (e.target === item_12_1_2) {
        item_12_2.style = 'display:block;top:5%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin: -420px 0 0 770px;';
      }
      if (e.target.closest('#item-12-1-4')) {
        item_12_2.style = 'display:block;top:64%;'; dark_bg_2.style.display = 'block'; close_icon_2.style = 'display:block;margin:  3780px 0 0 770px;';
      } if (e.target === dark_bg_2 || e.target === close_icon_2) {
        item_12_2.style = 'display:none'; dark_bg_2.style.display = 'none'; close_icon_2.style.display = 'none'; item_1_1.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }