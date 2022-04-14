let indexSlide = 0;
slideShow(indexSlide);

function slideShow(){
    let i;
    let slideImg = document.getElementsByClassName("slide-img");
    let dot = document.getElementsByClassName("dot")
    for(let i = 0; i < slideImg.length; i++){
        slideImg[i].style.display = "none";
    }
    indexSlide++;
    if(indexSlide > slideImg.length){
        indexSlide = 1
    }
    for(let i = 0; i < dot.length; i++){
        
        dot[i].className = dot[i].className.replace(" active","" );
    }
    slideImg[indexSlide - 1].style.display ="block";
    dot[indexSlide - 1].className += " active";
    setTimeout(slideShow, 3000);
}




let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  
  let slides = document.getElementsByClassName("slide-img");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
      slideIndex = 1
    }    
  if (n < 1) {
      slideIndex = slides.length
    }
  for ( let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for ( let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



let modal = document.getElementById("modal")
let images = document.getElementsByClassName("img")
let modalImg = document.getElementById("imgShow")

for(let i = 0; i < images.length; i++){
  let img = images[i];
    
  img.onclick = function  () {
  
  modal.style.display = "block";
  modalImg.src = images[i].src;
}
}

let close = document.getElementsByClassName("close")[0];
close.onclick = function (){
  modal.style.display = "none";
}





// filterSection('all')
// function filterSection(a){
//   let x = document.getElementsByClassName("column");
//   if (a == "all") {
//     a = "";
//   }
//   for(let i = 0 ; i < x.length; i++){
//     removeClass(x[i],"show");
//     if (x[i].className.indexOf(a) > -1){
//       addClass(x[i],"show");
//     }
//   }
// }

// function addClass(e,n){
//   let arr1 = e.className.split(" ");
//   let arr2 = n.split(" ");
//   for(let i = 0;i < arr2.length; i++){
//     if(arr1.indexOf(arr2[i]) == -1){
//       e.className += " " + arr2[i]

//     }
//   }
// }

// function removeClass(e,n){
//   let arr1 = e.className.split(" ");
//   let arr2 = n.split(" ");
//   for ( let i = 0;i < arr2.length; i++){
//     while (arr1.indexOf(arr2[i]) > -1){
//     arr1.splice(arr1.indexOf(arr2[1]),1)
//     }
//   }
//   e.className = arr1.join(" ");
// }


// let btnAction = document.getElementById("myBtn")
// let btnz = btnAction.getElementsByClassName("btna")
// for (let i = 0; i < btnz.length;i++){
//   btnz[i].onclick= function () {
//     let current = document.getElementsByClassName("btna active1");
//     current[0] = current[0].className.replace("active1", " ");
//     btnz.className += "active1";
//   }
// }