let parentDiv =document.querySelector('.container')

async function getdata(){
    let response = await fetch("./data/bird.json");
    let jsonData = await response.json()
    // console.log(json);
    const dataProces = jsonData[0];
    
    
    for (const arrydata of jsonData) {
       let cardDiv =document.createElement('div');
       let img = document.createElement('img')
       if(arrydata.isImg){
           img.src = arrydata.img
       }else{
         img.src ='./Image file/birds-Img/defult.jpg'
       }
       
       let pTag = document.createElement('p')
       
       pTag.innerHTML= `${arrydata.name} <span> ${arrydata.bnRomanize} </span> ${arrydata.bangla} `
       

       parentDiv.appendChild(cardDiv)
       cardDiv.appendChild(img)
       cardDiv.appendChild(pTag)
    }
}
getdata()