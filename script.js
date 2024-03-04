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




































