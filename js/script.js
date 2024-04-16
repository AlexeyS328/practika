const bg = ['./sources/bgs/bg-wel2.webp', './sources/bgs/bg-wel3.webp', './sources/bgs/bg-wel.webp'];

const an = document.querySelector('.an');
an.style.background = `url(${bg[0]}) 0% 0% / cover no-repeat`;


let index = 0;

setInterval(() => {
    const transitionTime = 300; // время анимации в миллисекундах
    an.style.transition = `opacity ${transitionTime/2}ms`;
    an.style.opacity = 0;
    
    setTimeout(() => {
        index = (index + 1) % bg.length;
        // an.style.background = `url(${bg[index]}) no-repeat`;
        an.style.background = `url(${bg[index]}) 0% 0% / cover no-repeat`;
        
        setTimeout(() => {
            an.style.opacity = 1;
            // console.log(`background: url(${bg[index]}) no-repeat;`);
        }, transitionTime/2);
    }, transitionTime/2);
}, 10000);

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      
      window.addEventListener('scroll', () => {
       
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        
        scrollY > 400 ? this.show() : this.hide();
      });
      
      document.querySelector('.btn-up').onclick = () => {
        
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();

  const overlay = document.getElementById("overlay");
  const actBtn = document.getElementById("clean");
  const actbtn2 = document.getElementById("actBtn2");
  const actbtn3 = document.getElementById("actBtn3");
  const actbtn4 = document.getElementById("actBtn4");
  const popup = document.getElementById("popup");
  const close = document.getElementById("cross");
  const succes = document.getElementById("subbut");

  actBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    overlay.classList.add("show");
  });
  actBtn2.addEventListener("click", () => {
    popup.style.display = "flex";
    overlay.classList.add("show");
  });
  actBtn3.addEventListener("click", () => {
    popup.style.display = "flex";
    overlay.classList.add("show");
  });
  actBtn4.addEventListener("click", () => {
    popup.style.display = "flex";
    overlay.classList.add("show");
  });
  close.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.classList.remove("show");
  });
  succes.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.classList.remove("show");
  });

  const back = document.getElementById("backForm");
  const btnF = document.getElementById("getf");
  const form = document.getElementById("form");
  const hide = document.getElementById("hide");

  btnF.addEventListener("click", () => {
    form.style.display = "flex";
    back.classList.add("show");
  });

  hide.addEventListener("click", () => {
    form.style.display = "none";
    back.classList.remove("show");
  });
  const nameli = document.getElementById("nameli");
  const comm = document.getElementById("comm");
  const submit = document.getElementById("submit");
 
  function toggleMenu() {
    document.querySelector('.menu-button').classList.toggle('open')
    document.querySelector('.menu').classList.toggle('menu-show')
}