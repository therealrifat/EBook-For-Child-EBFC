async function getdata(){
    let response = await fetch("bird.json");
    let json = await response.json()
    console.log(json);
    
}
getdata()