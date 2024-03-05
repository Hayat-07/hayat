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

const interface= document.getElementById("interface");
const swing= document.getElementById("swing");

const introPlay=()=>{
    const ambient= document.getElementById("ambient");
    // ambient.currentTime = 0;
    ambient.load();
    ambient.play();
    console.log("IntroPlay()  function ambient called ")
};


const clickPlay=()=>{
    interface.currentTime = 0;
    interface.play();
};
const rotatePlay=()=>{
    swing.currentTime = 0;
    swing.play();
    
};


window.onload=function(){
    introPlay();
};
































