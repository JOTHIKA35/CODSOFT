document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle_btn');
    const menu = document.getElementById('menu');

    toggleBtn.addEventListener('click', function () {
        menu.classList.toggle('open');
        const isOpen = menu.classList.contains('open');
        const toggleIcon = toggleBtn.querySelector('i');
        const iconOpenClass = 'fa-solid fa-xmark';
        const iconClosedClass = 'fa-solid fa-bars';
        toggleIcon.className = isOpen ? iconOpenClass : iconClosedClass;
    });
});


let calcScrollValue =()=>{
    let scrollProgress = document.getElementById("scroll-progress");
    let progressValue =  document.getElementById("scroll-progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let ScrollValue = Math.round((pos *100)/ calcHeight);
    if(pos>100){
        scrollProgress.style.display="grid";
    }
    else{
        scrollProgress.style.display="none";
    }
  scrollProgress.addEventListener("click",()=>{
    document.documentElement.scrollTop=0;
  });

  scrollProgress.style.background=`conic-gradient(#408697 ${ScrollValue}%,#d7d7d7 ${ScrollValue}%)`;
}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;