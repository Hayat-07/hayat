const leftMainDiv= document.querySelector(".container");

const  setLeftMainDiv=(x)=>{
   
    fetch(`./pages/left-${x}.html`)
    .then(res=>{
        if(res.ok){
            // console.log("res.next() has been called",res);
            return res.text();
        }
    })
    .then(myHtml=>{
        leftMainDiv.innerHTML=myHtml;
        // console.log("INNERHTML has been called", myHtml);
    })
    .catch(err=>console.log(err));
   
};































