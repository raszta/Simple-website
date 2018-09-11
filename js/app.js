document.addEventListener("DOMContentLoaded", function() {
  const prevBtn = document.querySelector(".slider__button--prev");
  const nextBtn = document.querySelector(".slider__button--next");
  const sliderImage = document.querySelectorAll(".slider__image");
  const sliderArticle = document.querySelectorAll(".slider__article");
  let counter =0;
  

  sliderImage[counter].classList.add('visible');
  sliderArticle[counter].classList.add('visible');
  nextBtn.addEventListener("click", function () {    
      sliderImage[counter].classList.remove("visible");
    sliderArticle[counter].classList.remove("visible");
    counter++;
    if (counter >= sliderImage.length) {
      counter = 0;
    }
    sliderImage[counter].classList.add("visible");
    sliderArticle[counter].classList.add("visible");  
    
  });

  prevBtn.addEventListener("click", function () {
    sliderImage[counter].classList.remove("visible");
    sliderArticle[counter].classList.remove("visible");
    counter--;
    if (counter < 0) {
      counter = sliderImage.length - 1;
    }
    sliderImage[counter].classList.add("visible");
    sliderArticle[counter].classList.add("visible");
  });
//application choosing chair
  const appColor = document.querySelectorAll(".application__list-panel-item--color");
  const appMaterial = document.querySelectorAll(".application__list-panel-item--material");
  const appChair = document.querySelectorAll(".application__list-panel-item--chair");
  const appArr = document.querySelectorAll(".application__list_arrow");
  const appTick = document.querySelector(".application__checkbox-input");
  let sumShow = document.querySelector(".application__sum-place");
  const optionL = document.querySelectorAll(".application__panel-left--option");
  const chairPrice = document.querySelector(".application__title--right");
  const chairName = document.querySelector(".application__title--left");
  var optionR = document.querySelectorAll(".application__panel_right--option");
 
  function orderSum() {
    sumShow.innerText = Number(optionR[2].innerText) + Number(chairPrice.innerText) + Number(optionR[0].innerText) + Number(optionR[1].innerText);
  }

  appArr.forEach(function(el){
    el.addEventListener('click',function(){
    this.nextElementSibling.classList.toggle("show");    
  });
});

  appChair.forEach(function(el){
      el.addEventListener('click', function () {
        this.parentElement.classList.toggle("show");
        this.parentElement.parentElement.firstElementChild.innerText = this.innerText;    
        chairPrice.innerText = this.dataset.cost;
        chairName.innerText = 'Chair ' + this.innerText;
        orderSum();
    });
  });
  appMaterial.forEach(function(el){
      el.addEventListener('click', function () {
        this.parentElement.classList.toggle("show");  
        this.parentElement.parentElement.firstElementChild.innerText = this.innerText;     
        optionR[1].innerText = this.dataset.cost;
        optionL[1].innerText =  this.innerText;
        orderSum();
    });
  });

  appColor.forEach(function(el){
      el.addEventListener('click', function () {
        this.parentElement.classList.toggle("show");  
        this.parentElement.parentElement.firstElementChild.innerText = this.innerText;     
        optionR[0].innerText = this.dataset.cost;
        optionL[0].innerText =  this.innerText;
        orderSum();
    });
  });

 
  appTick.addEventListener('change', function(){
    if(appTick.checked == true){
      optionR[2].innerText = this.dataset.cost;
      optionL[2].innerText = "Transport ";  
      orderSum();
    } else{
      optionR[2].innerText = '0';
      optionL[2].innerText = "";
      orderSum();
    }      
  });
});


