const display = document.getElementById('pTag');
const cpbtn = document.getElementById('cpBtn');
let latter = `"গ"`
let words = `"গলা, গরু, গাছ, গোলাপ"`
let sentence =`"খেজুর খেলে বাড়ে বল"` 


//console.log(typeof  array[0])



// console.log(name)

const name = dataProses(latter, words, sentence)


function dataProses(latter, words, sentence) {
  let pro = `{"latter":${latter},
  "word":${words}, 
  "sentence":${sentence}
},`
  return pro
}

display.innerText =name

cpbtn.addEventListener('click', async function() {
  try{
    await navigator.clipboard.writeText(name)
  } catch (error) {
    console.log('error')
  }
})