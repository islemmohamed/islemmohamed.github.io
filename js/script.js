
window.addEventListener("load",()=>{
   document.querySelector(".main").classList.remove("hidden");
   document.querySelector(".home-section").classList.add("active");
   /*-------------- Page Loader --------------*/
   document.querySelector(".page-loader").classList.add("fadeOut");
   setTimeout(()=>{
      document.querySelector(".page-loader").style.display="none";
   },600)
})
/* ------------------------- About Tabs ------------------ */
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection=document.querySelector(".about-section");
tabsContainer.addEventListener("click",(e)=>{
   if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target=e.target.getAttribute("data-target");
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active")
   }
})

/*------------------------ dark mode ---------------------------*/
const trigger = document.querySelector('.trigger');
const body = document.getElementsByTagName("BODY")[0];
const toggleMode = () => {
    body.classList.toggle('dark');
  };
  
  // Event Listeners
  trigger.addEventListener('click', toggleMode);

/*------------------------ menu ----------------------------*/
document.addEventListener('DOMContentLoaded', function() {
   const wrapper = document.querySelector('.box-menu .wrapper');
   const menu = document.querySelector('.box-menu');
   const hamburger = document.querySelector('.hamburger');
   const links = document.querySelectorAll('a');
 
   wrapper.addEventListener('click', function() {
     menu.classList.toggle('full-menu');
     hamburger.classList.toggle('active');
   });
 
   links.forEach(function(link) {
     link.addEventListener('click', function() {
       links.forEach(function(otherLink) {
         otherLink.classList.remove('active');
       });
       link.classList.add('active');
     });
     link.addEventListener("mouseover", function() {
     
      link.classList.add('tooltip');
    });
    link.addEventListener("mouseout", function() {
      
        link.classList.remove('tooltip');
    
    });
   });
 });
 /*----------------------- Navigation --------------------------------------------*/
 
function hideSection(){
   document.querySelector("section.active").classList.toggle("fade-out")
}

 document.addEventListener("click",(e)=>{
   e.stopPropagation()
   if(e.target.classList.contains("link-item")){
     
      hideSection();
      document.body.classList.add("hide-scrolling");

      setTimeout(()=>{
         document.querySelector("section.active").classList.remove("active","fade-out");
         document.querySelector(e.target.hash).classList.add("active");
         window.scrollTo(0,0);
         document.body.classList.remove("hide-scrolling")
      },500)
   }
   else if(e.target.parentElement.classList.contains("link-item")){
     
      hideSection();
      document.body.classList.add("hide-scrolling");

      setTimeout(()=>{
         document.querySelector("section.active").classList.remove("active","fade-out");
         document.querySelector(e.target.parentElement.hash).classList.add("active");
         window.scrollTo(0,0);
         document.body.classList.remove("hide-scrolling")
      },500)
   }
 })
/*------------------------ Portfolio Item Details Popup ---------------------------*/
document.addEventListener('click',(e)=>{
   if(e.target.classList.contains("view-project-btn")){
      togglePortfolioPopup();
      document.querySelector(".portfolio-popup").scrollTo(0,0)
      portfolioItemDetails(e.target.parentElement);
   }
})
function togglePortfolioPopup(){
   document.querySelector(".portfolio-popup").classList.toggle("open");
   document.body.classList.toggle("hide-scrolling");
   document.querySelector(".main").classList.toggle("fade-out")
}
document.querySelector(".pp-close").addEventListener("click",togglePortfolioPopup);

//hide popup when clicking outside of it
document.addEventListener("click",(e)=>{
   if(e.target.classList.contains("pp-inner")){
      togglePortfolioPopup()
   }
})
function portfolioItemDetails(portfolioItem){
document.querySelector(".pp-thumbnail img").src=
portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

document.querySelector(".pp-header h3").innerHTML=
portfolioItem.querySelector(".portfolio-item-title").innerHTML;

document.querySelector(".pp-body").innerHTML =
portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}