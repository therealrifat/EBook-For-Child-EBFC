let dataJsonList =["./data/bird.json","./data/animals.json",] 
// console.log(dataListArray)

let parentDiv =document.querySelector('.container')

async function getdata(){
    let response = await fetch(dataJsonList[1]);
    let jsonData = await response.json()
    // console.log(json);
    
    
    
    for (const arrydata of jsonData) {
        console.log(arrydata)
       let cardDiv =document.createElement('div');
       let img = document.createElement('img')
       if(arrydata.isImg){
           img.src = arrydata.img
       }else{
         img.src ='./Image-file/birds-Img/defult.jpg'
       }
       
       let pTag = document.createElement('p')
       
       pTag.innerHTML= `${arrydata.name} <span> ${arrydata.bnRomanize} </span> ${arrydata.bangla} `
       

       parentDiv.appendChild(cardDiv)
       cardDiv.appendChild(img)
       cardDiv.appendChild(pTag)
    }
}
getdata()