// Write your code below:
const subheading = document.createElement('h3');

const subtext = document.createTextNode('Buy high quality organic fruits online');
subheading.appendChild(subtext);

subheading.style.fontStyle = 'italic';

const divs = document.getElementsByTagName('div');
const first = divs[0];
first.appendChild(subheading);

const second = divs[1];
const para = document.createElement('p');
para.id = "fruits-total";
para.textContent = 'Total fruits: 4';

const fruitslist = second.querySelector('ul');
second.insertBefore(para, fruitslist);

