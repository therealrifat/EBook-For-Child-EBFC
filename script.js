let imgdisplay =document.getElementById('imgId')
let engData =document.getElementById('engName')
let rmzData =document.getElementById('rmName')
let bnData =document.getElementById('bnName')
let div = document.querySelector('.main-div')
async function getdata(){
    let response = await fetch("bird.json");
    let jsonData = await response.json()
    // console.log(json);
    const dataProces = jsonData[0];
    imgdisplay.src=dataProces.img
    engData.innerText= dataProces.name;
    rmzData.innerText= dataProces.bnRomanize;
    bnData.innerText= dataProces.bangla;
    
    for (const arrydata of jsonData) {
        console.log(arrydata.name);
        let pTag = document.createElement('p')
        pTag.innerText+= arrydata.name
        
        
        
        
        div.appendChild(pTag)
    }
}
getdata()