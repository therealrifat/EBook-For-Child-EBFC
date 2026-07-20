let parentDiv =document.querySelector('.container')

async function getdata(){
    let response = await fetch("bird.json");
    let jsonData = await response.json()
    // console.log(json);
    const dataProces = jsonData[0];
    
    
    for (const arrydata of jsonData) {
       let cardDiv =document.createElement('div');
       let img = document.createElement('img')
       if(arrydata.isImg){
           img.src ='./Image file/birds-Img/magpie.jpg'
       }else{
         img.src ='./Image file/birds-Img/defult.jpg'
       }
       img.width ="200"
       let pTag = document.createElement('p')
       pTag.innerText= `${arrydata.name} ${arrydata.bnRomanize} ${arrydata.bangla} `
       

       parentDiv.appendChild(cardDiv)
       cardDiv.appendChild(img)
       cardDiv.appendChild(pTag)
    }
}
getdata()