// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
window.onload = function () {
    setTimeout(function () {
        document.getElementsByTagName("body")[0].style.opacity = "1";
    }, 1000);
}

if(document.querySelector(".page__logo")){
    let lastScroll = 0;
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const logo = document.querySelector(".page__logo");
        const navbar = document.querySelector(".header__links");
        const scrollIcon = document.querySelector(".scroll-icon-page");
        const swipeIcon = document.querySelector(".swipe-icon-page");
        const header = document.querySelector(".header");
        const allPage = this.document.querySelector(".page");
        if ((1 - (scrollPosition/window.innerHeight)) > 0.2 && !navbar.classList.contains("active")){
            logo.style.top = `${((1-(scrollPosition/window.innerHeight))/2)*100}%`;
            logo.style.transform = `translate(-50%, -50%) scale(${1 - (scrollPosition/window.innerHeight)})`;
        }
        else{
            if(!navbar.classList.contains("active")){
                navbar.classList.add("active");
            }
            if (window.innerWidth<600){
                logo.style.top = "-40%";
                logo.style.transform = `translate(-50%, -45%) scale(0.4)`;
            }
            else{
                logo.style.transform = `translate(-50%, -45%) scale(0.2)`;
                logo.style.top = "47%";
            }
            header.style.backgroundColor = "#fff";
            document.querySelector(".header__logo").appendChild(logo);
            if((1 - (scrollPosition/window.innerHeight)) > 0.2 && navbar.classList.contains("active") && !allPage.classList.contains("lock")){
                header.style.position = "fixed";
                header.style.top = 0;
                
                allPage.style.padding = `${scrollPosition+250*window.innerWidth/1920}px 0 0 0`;
                if(scrollPosition == 0){
                    allPage.classList.add("lock");
                    header.style.top = 0;
                    allPage.style.padding = `${250*window.innerWidth/1920}px 0 0 0`;
                    if(window.innerWidth<600){
                        allPage.style.padding = `150px 0 0 0`
                    }
                }
    
            }
            else{
                if(allPage.classList.contains("lock")){
                    header.style.top = `0px`;
                }
            }
            
            const containsHide = header.classList.contains("hide");
            const burger = document.querySelector(".menu__icon");
            if(navbar.classList.contains("active")){
                if(lastScroll < scrollPosition && !containsHide){
                    header.classList.add("hide");
                    burger.classList.add("hide");
                }
                else if(lastScroll > scrollPosition && containsHide){
                    header.classList.remove("hide");
                    burger.classList.remove("hide");
                }
                lastScroll = scrollPosition;
            }
    
    
        }
        if(scrollPosition>100){
            scrollIcon.classList.remove("active");
            scrollIcon.classList.add("inactive");
            swipeIcon.classList.remove("active");
            swipeIcon.classList.add("inactive");
        }
      });
}
if(document.querySelector(".usual")){
    
    const head = document.querySelector(".header");
    let lastScroll = 0;
    
    window.addEventListener("scroll", function(){
        const scrollPosition = window.scrollY;
        const containsHide = head.classList.contains("hide");
        const burger = document.querySelector(".menu__icon");
        if(scrollPosition>30){
            if(head.classList.contains("usual") && burger){
                if(lastScroll < scrollPosition && !containsHide){
                    head.classList.add("hide");
                    burger.classList.add("hide");
                }
                else if(lastScroll > scrollPosition && containsHide){
                    head.classList.remove("hide");
                    burger.classList.remove("hide");
                }
                lastScroll = scrollPosition;
            }
        }

    })
}


if(document.querySelector(".title")){
    window.addEventListener('scroll', function(){
        const titles = document.querySelectorAll(".title");
        for(let i=0; i<titles.length; i++){
            if(titles[i].classList.contains("_watcher-view")){
                titles[i].classList.add("_stop");
            }
            
        }
        const complex = document.querySelector(".main-we-do");
        if(complex.classList.contains("_watcher-view")){
            complex.classList.add("_stop-anim")
        }
    })
} 

function setColor(e){
    let num = Math.random();
    if(num >= 0 && num <0.2){
        e.target.style.color = "#96C"
    }
    else if (num >= 0.2 && num < 0.4){
        e.target.style.color = "#4CBB17";
    }
    else if (num >= 0.4 && num < 0.6){
        e.target.style.color = "#FF1C60"
    }
    else if(num >= 0.6 && num < 0.8){
        e.target.style.color = "#1E90FF";
    }
    else if(num >= 0.8 && num < 1){
        e.target.style.color = "#FF891C";
    }
}
function returnColor(e){
    e.target.style.color = "#000";
}

const headerLinks = document.querySelectorAll(".header__link");
const headerItems = document.querySelectorAll(".header__item");
if(headerLinks[0]){
    headerLinks[0].addEventListener("mouseover", setColor);
    headerLinks[0].addEventListener("mouseout", returnColor);
    headerLinks[1].addEventListener("mouseover", setColor);
    headerLinks[1].addEventListener("mouseout", returnColor);
    headerLinks[2].addEventListener("mouseover", setColor);
    headerLinks[2].addEventListener("mouseout", returnColor);
    headerLinks[3].addEventListener("mouseover", setColor);
    headerLinks[3].addEventListener("mouseout", returnColor);
}
if(headerItems[0]){
    headerItems[0].addEventListener("mouseover", setColor);
    headerItems[0].addEventListener("mouseout", returnColor);
    headerItems[1].addEventListener("mouseover", setColor);
    headerItems[1].addEventListener("mouseout", returnColor);
    headerItems[2].addEventListener("mouseover", setColor);
    headerItems[2].addEventListener("mouseout", returnColor);
    headerItems[3].addEventListener("mouseover", setColor);
    headerItems[3].addEventListener("mouseout", returnColor);
}
const inputs = document.querySelector('.description-form__file');

if(inputs){
        let label = inputs.nextElementSibling,
          labelVal = label.querySelector('.description-form__file-button-text').innerText;
      
        inputs.addEventListener('change', function (e) {
          let countFiles = '';
          if (this.files && this.files.length >= 1)
            countFiles = this.files.length;
      
          if (countFiles)
            label.querySelector('.description-form__file-button-text').innerText = 'Файл выбран';
          else
            label.querySelector('.description-form__file-button-text').innerText = labelVal;
        });
}

const discuss = document.querySelector(".discuss");
if(discuss){
    const body = document.querySelector("body");

    window.addEventListener("scroll", function(){
        let scrollPosition = window.scrollY;
        let windowHeight = window.innerHeight;
        var scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
          );
          console.log(scrollHeight);
        if((scrollHeight-windowHeight-300)<scrollPosition && !discuss.classList.contains('hide')){
            discuss.classList.add("hide");
        }
        else if((scrollHeight-windowHeight-260)>scrollPosition && discuss.classList.contains('hide') && scrollPosition>800){
            discuss.classList.remove('hide');
        }
        else if(document.querySelector('.page__logo') && scrollPosition<800){
            discuss.classList.add("hide");
        }

    })
}



