const clock = document.getElementById('clock');

function watch() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = 'AM';

  if (h == 12) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = 'PM';
  }

  h = h < 10 ? (h = '0' + h) : h;
  m = m < 10 ? (m = '0' + m) : m;
  s = s < 10 ? (s = '0' + s) : s;
  let digitalWAtch = (clock.innerText = `${h}:${m}:${s} ${session}`);

  setInterval(watch, 1000);
}

watch();
