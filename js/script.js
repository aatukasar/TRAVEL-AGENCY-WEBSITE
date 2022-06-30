{/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script> */}




  // $(window).scroll(function(){
  //   $('nav').toggleClass('scrolled',$(this).scrollTop()>10);
  // });
  let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});




// TESTIMONIAL

var btn = document.getElementsByClassName("btn");
var slide =document.getElementById("slide");

btn[0].onclick = function(){
    slide.style.transform = "translateX(0px)"; 
    for(i=0;i<4;i++){
        btn[i].classList.remove("current");
    }
    this.classList.add("current");
}
btn[1].onclick = function(){
    slide.style.transform = "translateX(-800px)"; 
    for(i=0;i<4;i++){
        btn[i].classList.remove("current");
    }
    this.classList.add("current");
}
btn[2].onclick = function(){
    slide.style.transform = "translateX(-1600px)"; 
    for(i=0;i<4;i++){
        btn[i].classList.remove("current");
    }
    this.classList.add("current");
}
btn[3].onclick = function(){
    slide.style.transform = "translateX(-2400px)"; 
    for(i=0;i<4;i++){
        btn[i].classList.remove("current");
    }
    this.classList.add("current");
}



// PACAKAGES


