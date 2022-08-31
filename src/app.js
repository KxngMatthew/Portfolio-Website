var typed = new Typed(".auto-type",{
    strings: ["Matthew Williams..", "a Web Developer..","a Full Stack Developer.."],
    typeSpeed:150,
    backSpeed:150,
    loop:true
});

const hamburgerBttn = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

/* function toggleBttn(){
    navList.classList.toggle('show');
}

hamburgerBttn.addEventListener('click',toggleBttn); */

hamburgerBttn.addEventListener('click',()=>{
    navList.classList.toggle('show');
});
