const container= document.querySelector(".container");

const  setRightMainDiv=(x)=>{
   
   
        fetch(`./pages/left-${x}.html`)
        .then(res=>{
            if(res.ok){
                // console.log("res.next() has been called",res);
                return res.text();
            }
        })
        .then(myHtml=>{
            container.innerHTML=myHtml;
            // console.log("INNERHTML has been called", myHtml);
        })
        .catch(err=>console.log(err));
  
   
};
const ambient= document.getElementById("ambient");
const interface= document.getElementById("interface");
const swing= document.getElementById("swing");
const introPlay=()=>{
    
    interface.pause();
    swing.pause();
    ambient.play();
    console.log(ambient);
};
const clickPlay=()=>{
 
    ambient.pause();
    swing.pause();
    interface.pause();
    interface.play();
    
    console.log(interface);
};
const rotatePlay=()=>{
   
    ambient.pause();
    interface.pause();
    swing.pause();
    swing.play();
    console.log(swing);
};



































