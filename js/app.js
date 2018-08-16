document.addEventListener("DOMContentLoaded", function() {
  var prevBtn = document.querySelector(".slider__button--prev");
  var nextBtn = document.querySelector(".slider__button--next");
  var sliderList = document.querySelector(".slider__gallery");








  var appTitle = document.querySelector(".application__title--left");
  var appArr = document.querySelectorAll(".application__list_arrow");
  var appList = document.querySelector(".application__list-panel");
  var optionR = document.querySelectorAll(".application__panel_right--option");
  var optionL = document.querySelectorAll(".application__panel-left--option");
  var chairPrice = document.querySelector(".application__title--right");
 
      appArr[0].addEventListener("click", function(){
        var option =  this.nextElementSibling;
        option.classList.toggle("show");
        var optChil = option.children;    
        for(var j =0; j<optChil.length;j++){
        optChil[j].addEventListener("click", function(){          
          var text = "Chair " + this.innerText;
          appTitle.innerText = text;
          chairPrice.innerText = this.dataset.cost;
        });        
      }
  });
      appArr[1].addEventListener("click", function(){
        var option =  this.nextElementSibling;
        option.classList.toggle("show");
        var optChil = option.children;    
        for(var j =0; j<optChil.length;j++){
        optChil[j].addEventListener("click", function(){          
          var text = this.innerText;
        optionR[0].innerText = this.dataset.cost;
        optionL[0].innerText = "Color: "+text;        
        });        
      }
  });
      appArr[2].addEventListener("click", function(){
        var option =  this.nextElementSibling;
        option.classList.toggle("show");
        var optChil = option.children;    
        for(var j =0; j<optChil.length;j++){
        optChil[j].addEventListener("click", function(){          
          var text = this.innerText;
          optionR[1].innerText = this.dataset.cost;
          optionL[1].innerText = "Material: " + text;        
        });        
      }
  });
  


});