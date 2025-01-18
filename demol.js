const contactLink = document.querySelector('.mainnavbar a[href="contact.html"]');

// Add a mouseover event listener
contactLink.addEventListener('mouseover', function() {
  contactLink.style.color = 'brown';          // Change text color to brown
  contactLink.textContent = 'MY contact number:+640274624658';     // Change the text content
});

contactLink.addEventListener('mouseout', function() {
  contactLink.style.color = '';               // Reset color
  contactLink.textContent = 'Contact';        // Reset to original text
});




// let age;
//  document.getElementById("mysubmit").onclick = function(){
//     age = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `you are  ${age} years old`;

// }
// const PI= 3.14159;
// let radius ;
// let circum ;
// document.getElementById("mysubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circum = 2*PI*radius;
//     document.getElementById("myh3").textContent=`the circumference is ${circum}`;
