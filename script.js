const navBar = document.getElementById('navbarNav');
const menu = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const speakersList = document.querySelectorAll('.f-speaker');

const toggle = () => {
  navBar.classList.toggle('d-none');
  navBar.classList.toggle('show');
  menu.classList.toggle('d-none');
  closeBtn.classList.toggle('d-none');
};

menu.addEventListener('click', toggle);
closeBtn.addEventListener('click', toggle);

const speakers = [
  {
    mutauri: 'John Phiri',
    title: 'Engineer at We can build anything',
    background: ' Community advocate for the people in their endeavours',
    img: 'img/engineer.jpeg',
  },

  {
    mutauri: 'Lesbon Mabasa',
    title: 'Doctor at Murapo We can surgion anything',
    background: ' Community advocate for the people in their endeavours',
    img: 'img/doctor.jpeg',
  },

  {
    mutauri: 'Tarisai Homwe',
    title: 'Developer  at We can craete anything',
    background: ' Community advocate for the people in their endeavours',
    img: 'img/software.jpeg',
  },

  {
    mutauri: 'Changara Chinx',
    title: 'Farmer at Varimi vanhasi Corporates for Feeding the country',
    background: ' Community advocate for the people in their endeavours',
    img: 'img/farmer.jpeg',
  },

];

const imgs = (() => {
    const img = document.createElement('img');
    return img;
  });
  
  for (let eachCollab = 0; eachCollab < speakersList.length; eachCollab += 1) {
    const speakerNodes = speakersList[eachCollab].childNodes;
    speakerNodes[1].appendChild(imgs()).src = speakers[eachCollab].img;
    const collabInfoNodes = speakerNodes[3].childNodes;
    collabInfoNodes[1].innerHTML = speakers[eachCollab].mutauri;
    collabInfoNodes[3].innerHTML = speakers[eachCollab].title;
    collabInfoNodes[5].innerHTML = speakers[eachCollab].background;
}
