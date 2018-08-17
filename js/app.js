document.addEventListener("DOMContentLoaded", function() {
  var prevBtn = document.querySelector(".slider__button--prev");
  var nextBtn = document.querySelector(".slider__button--next");
  var sliderImage = document.querySelectorAll(".slider__image");
  var sliderArticle = document.querySelectorAll(".slider__article");
  var counter =0;
  

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


  var appTitle = document.querySelector(".application__title--left");
  var appArr = document.querySelectorAll(".application__list_arrow");
  var appTick = document.querySelector(".application__checkbox-input");
  var optionR = document.querySelectorAll(".application__panel_right--option");
  var optionL = document.querySelectorAll(".application__panel-left--option");
  var chairPrice = document.querySelector(".application__title--right");
  var sumShow = document.querySelector(".application__sum-place");
  var labelChoose = document.querySelectorAll(".application__list_label");
  var sum = 0;

      appArr[0].addEventListener("click", function(){
        var option =  this.nextElementSibling;
        option.classList.toggle("show");       
        var optChil = option.children;          
        for(var j =0; j<optChil.length;j++){
        optChil[j].addEventListener("click", function(){   
          option.classList.remove("show");            
          var text = "Chair " + this.innerText;
          appTitle.innerText = text;
          labelChoose[0].innerText = this.innerText;  
          chairPrice.innerText = this.dataset.cost;          
          chairPrice.dataset.cost = this.dataset.cost;
          sum = parseInt(chairPrice.dataset.cost);
          sumShow.innerText = sum;
        });           
      }
  });
      appArr[1].addEventListener("click", function(){
        var option =  this.nextElementSibling;
        option.classList.toggle("show");
        var optChil = option.children;    
        for(var j =0; j<optChil.length;j++){
        optChil[j].addEventListener("click", function(){   
          option.classList.remove("show");        
          var text = this.innerText;
        optionR[0].innerText = this.dataset.cost;
        optionL[0].innerText = "Color: "+text;  
          labelChoose[1].innerText = this.innerText;  
          sum += parseInt(this.dataset.cost);
          sumShow.innerText = sum;      
        });        
      }
  });
      appArr[2].addEventListener("click", function(){
        var option =  this.nextElementSibling;
        option.classList.toggle("show");
        var optChil = option.children;    
        for(var j =0; j<optChil.length;j++){
        optChil[j].addEventListener("click", function(){ 
          option.classList.remove("show");           
          var text = this.innerText;
          optionR[1].innerText = this.dataset.cost;
          optionL[1].innerText = "Material: " + text; 
          labelChoose[2].innerText = this.innerText;
          sum += parseInt(this.dataset.cost);
          sumShow.innerText = sum;
        });                        
      }
  });
 
  appTick.addEventListener('change', function(){
    if(appTick.checked == true){
    optionR[2].innerText = this.dataset.cost;
    optionL[2].innerText = "Transport ";  
    sum += parseInt(this.dataset.cost);
    } else{
      optionR[2].innerText = '';
      optionL[2].innerText = "";
      sum -= 200;      
    }  
    sumShow.innerText = sum;
  });
});