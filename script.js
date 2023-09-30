let counter = 1;

setInterval(() => {
  document.getElementById(`radio${counter}`).checked = true;
  counter = (counter % 4) + 1;
}, 5000);