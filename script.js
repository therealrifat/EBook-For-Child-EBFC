let imgdisplay =document.getElementById('imgId')
let engData =document.getElementById('engName')
let rmzData =document.getElementById('rmName')
let bnData =document.getElementById('bnName')
async function getdata(){
    let response = await fetch("bird.json");
    let json = await response.json()
    // console.log(json);
    const dataProces = json[0];
    imgdisplay.src=dataProces.img
    engData.innerText= dataProces.name;
    rmzData.innerText= dataProces.bnRomanize;
    bnData.innerText= dataProces.bangla;
    console.log(dataProces.name);

    
}
getdata()