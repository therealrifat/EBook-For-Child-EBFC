let dataJsonList =["./data/bird.json","./data/animals.json",] 
const headLine = document.getElementById('title')


let parentDiv =document.querySelector('.container')

async function getdata(){
    let response = await fetch(dataJsonList[1]);
    let jsonData = await response.json()
    // console.log(json);
    
    headLine.innerHTML = `${jsonData[0].titel} <span> ${jsonData[0].bnRomanize} </span> ${jsonData[0].bangla} `
    for (let i = 1; i < jsonData.length; i++) {
       let cardDiv =document.createElement('div');
       let img = document.createElement('img')
       if(jsonData[i].isImg){
           img.src = jsonData[i].img
       }else{
         img.src ='./Image-file/birds-Img/defult.jpg'
       }
       
       let pTag = document.createElement('p')
       
       pTag.innerHTML= `${jsonData[i].name} <span> ${jsonData[i].bnRomanize} </span> ${jsonData[i].bangla} `
       

       parentDiv.appendChild(cardDiv)
       cardDiv.appendChild(img)
       cardDiv.appendChild(pTag)
    }
}
getdata()