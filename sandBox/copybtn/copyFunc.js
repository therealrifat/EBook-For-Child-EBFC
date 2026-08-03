const btn =document.getElementById('btn')
let data = 'Hello World'

console.log(btn)

btn.addEventListener('click', async function() {
  try{
   await navigator.clipboard.writeText(data)
  }catch(error){
    console.log('dont copy')
  }
})