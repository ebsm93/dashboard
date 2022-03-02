import './style.css';

import documentIcon from './images/document_icon.svg';
import emailIcon from './images/email.svg';




const tech = document.querySelector('#tech');
const general = document.querySelector('#general');
const contact = document.querySelector('#contact');



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





console.log(`testing 123`);