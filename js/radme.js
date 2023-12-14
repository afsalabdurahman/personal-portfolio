
function fun(){
    let read= document.getElementById("ida").innerText=="Read more";
    var a="Our web design services blend creativity and functionality, ensuring your online presence stands out. From sleek aesthetics to intuitive interfaces, we create websites that captivate and engage. Elevate your brand with our expert touch – where design meets innovation for a distinctive online experience.";
    console.log("working");
    if(read){
        document.getElementById("ida").innerHTML=document.getElementById("ida").value="";
        document.getElementById("webdesign").innerHTML=document.getElementById("webdesign").value=a;
        // document.getElementById("ida").innerHTML=document.getElementById("ida").value="Read ";
    }};
    function fun1(){
        let read= document.getElementById("ida").innerText=="";
        if(read||!read){
            
            document.getElementById("ida").innerHTML=document.getElementById("ida").value="";
            document.getElementById("content").style.display="";
        }else{
            console.log("not found");
            
        }
    }
 function fun3() {
    let read= document.getElementById("dia3").innerText=="Read more";
    document.getElementById("dia3").innerHTML=document.getElementById("dia3").value="";
    document.getElementById("webdev").style.display="";

 }

    
    function scrap(){
        console.log("scrap");
       let a=document.getElementsByClassName("scrapClass")
       a[1].style.display="none";
       a[0].style.display="none";
       
       
        document.getElementById("scarpYoutube").style.display="";
        
        
    }
    function netflix(){

        let a=document.getElementsByClassName("netflix")
        console.log(a)
       a[1].style.display="none";
       a[0].style.display="none";
       
       
        document.getElementById("netflixYoutube").style.display="";
    }
function bank(){
    let a=document.getElementsByClassName("bank")
    console.log(a)
   a[1].style.display="none";
   a[0].style.display="none";
   
   
    document.getElementById("bankYoutube").style.display="";
}
function medical(){
    let a=document.getElementsByClassName("medical")
    console.log(a)
   a[1].style.display="none";
   a[0].style.display="none";
   
   
    document.getElementById("medicalYoutube").style.display="";
}
    // document.getElementById("ida").innerText=="Read more";
    //  document.getElementById("content").style.visibility="hidden"
    

