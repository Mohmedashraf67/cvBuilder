let navoo = document.getElementById("navoo");
let navLinks = document.querySelectorAll(".nav-item .nav-link")
let arraynavLinks=   Array.from(navLinks)







// nav bar changing color 

let sectionOfset = $("#toaboutpage").offset().top;
let section= $("#toaboutpage").offset().top;
$(window).scroll(function(){
    let windowScroll= $(window).scrollTop();
    if(windowScroll >section){
        navoo.classList.remove("naV-BORDER-color");
        navoo.classList.add("naV-BORDER-color-black");
for(let i=0;i<arraynavLinks.length;i++){
    arraynavLinks[i].classList.add("navLink-color")
}
    }
    else{
        navoo.classList.add("naV-BORDER-color");
        navoo.classList.remove("naV-BORDER-color-black"); 
        for(let i=0;i<arraynavLinks.length;i++){
            arraynavLinks[i].classList.remove("navLink-color")
        }
    }
})





// form 

dropContainer.ondragover = dropContainer.ondragenter = function(evt) {
    evt.preventDefault();
  };
  
  dropContainer.ondrop = function(evt) {
    // pretty simple -- but not for IE :(
    fileInput.files = evt.dataTransfer.files;
  
    // If you want to use some of the dropped files
    const dT = new DataTransfer();
    dT.items.add(evt.dataTransfer.files[0]);
    dT.items.add(evt.dataTransfer.files[3]);
    fileInput.files = dT.files;
  
    evt.preventDefault();
  };





//   ready to write cv 

function bolbol(para){
    setTimeout(function(){
        if(para===0){
    window.alert(`hello ... 
when you finish filling this data click on the down button
 to gnerate your cv as pdf 
 thank you`)
}
    },2200)

     $(".timeToDisapear").toggle("d-non")
setTimeout(  function(){
    $("#resumBulider").toggle("d-non") 
},1400)

 
  
}











// generate pdf 
function genPDF() {
    // getting data from user 

    // let personImage=document.getElementById("personImage").value;
	let Name=document.getElementById("Name").value;
	let Contact=document.getElementById("Contact").value;	
    let Adress=document.getElementById("Adress").value;	
    let Acadimic=document.getElementById("Acadimic").value;
    let date=document.getElementById("date").value;
    let Objective=document.getElementById("Objective").value;
    let Experince=document.getElementById("Experince").value;
    let skills=document.getElementById("skills").value;
    let Facebook=document.getElementById("Facebook").value;
    let Linkedin=document.getElementById("Linkedin").value;
    let github=document.getElementById("github").value;

// making cv pdf 
	var doc = new jsPDF();
	console.log(doc);
    console.log(personImage);
    // doc.text(personImage,"JPG",90,90 );
    doc.text(10,10,"personal information");
	doc.text(25,20,"name: "+Name);
    doc.text(25,30,"contact:"+Contact);
    doc.text(25,40,"Adress: "+Adress);
    doc.text(25,50,"Acadimic qulification: "+Acadimic);
    doc.text(25,60,"graduation date: "+date);
    doc.text(25,70,"Objective: "+Objective);
    doc.text(25,80,"Experince: "+Experince);
    doc.text(10,90,"Skills");
    doc.text(25,100,skills);
    doc.text(10,110,"important links");
    doc.text(25,120,"Facebook: "+Facebook);
    doc.text(25,130,"Linkedin: "+Linkedin);
    doc.text(25,140,"github: "+github);
	// doc.addPage();
	// doc.text(20,20,'TEST Page 2!');
	doc.save('cv.pdf');
	
}