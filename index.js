




const contactBtn = document.getElementById('contact');

contactBtn.addEventListener('click', contact);

function contact() {
    contactBtn.textContent = '';
    contactBtn.style.display = 'flex';
    contactBtn.style.flexDirection = 'column';
    contactBtn.style.gap = '1vh';
    contactBtn.style.fontSize = '0.6em';
    contactBtn.style.cursor = 'pointer';
    contactBtn.innerHTML ='<div class="buttonText">email: ebs.m93@gmail.com</div><div class="buttonText">phone: 415.466.5952</div>';

}































// import './style.css';
// require('./style.css');

// import personImage from './images/person_portrait_wt.svg';
// import documentIcon from './images/document_icon_wt.svg';
// import emailIcon from './images/email.svg';
// import ghIcon from './images/github_wt.svg';
// import ytImage from './images/yt_icon_wt.svg';

// const aboutMe = document.querySelector('#about');
// const tech = document.querySelector('#tech');
// const general = document.querySelector('#general');
// const contact = document.querySelector('#contact');
// const ghub = document.querySelector('#github');
// const yt = document.querySelector('#yt');

// const aboutIcon = new Image();
// aboutIcon.src = personImage;
// aboutIcon.classList.add('icon');
// aboutMe.prepend(aboutIcon);

// const docIcon = new Image();
// docIcon.src = documentIcon;
// const docIconCopy = new Image();
// docIconCopy.src = documentIcon;
// docIcon.classList.add('icon');
// docIconCopy.classList.add('icon');
// tech.prepend(docIcon);
// general.prepend(docIconCopy);


// const contactIcon = new Image();
// contactIcon.src = emailIcon;
// contactIcon.classList.add('icon');
// contact.prepend(contactIcon);

// const ghubIcon = new Image();
// ghubIcon.src = ghIcon;
// ghubIcon.classList.add('icon');
// ghub.prepend(ghubIcon);

// const ytIcon = new Image();
// ytIcon.src = ytImage;
// ytIcon.classList.add('icon');
// yt.prepend(ytIcon);




console.log(`testing 123`);