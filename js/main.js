//*****NAV DESIGN*****//

starters.addEventListener("mouseover", function(){
  starters.style.backgroundColor="#CACAC8"},true);
  
  starters.addEventListener("mouseleave", function(){
  starters.style.backgroundColor="#F5F3F3";}, true);
  
  entres.addEventListener("mouseover",function(){
    entres.style.backgroundColor="#CACAC8"
  }, true);
  
  entres.addEventListener("mouseleave", function(){
    entres.style.backgroundColor="#F5F3F3"
  }, true);
  
  salads.addEventListener("mouseover", function(){
    salads.style.backgroundColor="#CACAC8"
  }, true);
  
  salads.addEventListener("mouseleave", function(){
    salads.style.backgroundColor="#F5F3F3"
  }, true);
  
  deserts.addEventListener("mouseover", function(){
   deserts.style.backgroundColor="#CACAC8"
  }, true);
  
  deserts.addEventListener("mouseleave", function(){
   deserts.style.backgroundColor="#F5F3F3"
  }, true);
  
  drinks.addEventListener("mouseover", function(){
    drinks.style.backgroundColor="#CACAC8"
  }, true);
  
  drinks.addEventListener("mouseleave", function(){
    drinks.style.backgroundColor="#F5F3F3"
  }, true);
  
  //NAV
  
  starters.addEventListener("click", function(){
    startersSection.scrollIntoView(true);
  });
  
  entres.addEventListener("click", function(){
    entresSection.scrollIntoView(true);
  });
  
  //
  
  scrollToTop.addEventListener("click", function(){
    menuCategories.scrollIntoView(true);
  });
