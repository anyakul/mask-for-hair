var faqList = document.querySelector(".faq__list");
var faqItemActive = document.querySelector(".faq__item--active");
var itemQuestion = document.querySelector(".faq__item-question");

Array.from(document.querySelectorAll('.faq__item'), function(el){
  el.onclick = function(){
    if (el.classList.contains('faq__item')) {
      document.querySelector(".faq__item--active").className = "faq__item";
      this.classList.add("faq__item--active");
    }
  }
})
