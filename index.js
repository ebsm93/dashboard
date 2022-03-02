// import './style.css';
// require('./style.css');

import personImage from './images/person_portrait_wt.svg';
import documentIcon from './images/document_icon_wt.svg';
import emailIcon from './images/email.svg';
import ghIcon from './images/github_wt.svg';
import ytImage from './images/yt_icon_wt.svg';



//DOM

const aboutMe = document.querySelector('#about');
const tech = document.querySelector('#tech');
const general = document.querySelector('#general');
const contact = document.querySelector('#contact');
const ghub = document.querySelector('#github');
const yt = document.querySelector('#yt');

const aboutIcon = new Image();
aboutIcon.src = personImage;
aboutIcon.classList.add('icon');
aboutMe.prepend(aboutIcon);

const docIcon = new Image();
docIcon.src = documentIcon;
const docIconCopy = new Image();
docIconCopy.src = documentIcon;
docIcon.classList.add('icon');
docIconCopy.classList.add('icon');
tech.prepend(docIcon);
general.prepend(docIconCopy);


const contactIcon = new Image();
contactIcon.src = emailIcon;
contactIcon.classList.add('icon');
contact.prepend(contactIcon);

const ghubIcon = new Image();
ghubIcon.src = ghIcon;
ghubIcon.classList.add('icon');
ghub.prepend(ghubIcon);

const ytIcon = new Image();
ytIcon.src = ytImage;
ytIcon.classList.add('icon');
yt.prepend(ytIcon);




console.log(`testing 123`);