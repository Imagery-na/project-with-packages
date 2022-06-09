const today = new Date();
window.console.log(today);
const stringDate = today.toLocaleDateString();
window.console.log(stringDate);
const dateBlock = document.getElementById('date');
dateBlock.append(stringDate);

