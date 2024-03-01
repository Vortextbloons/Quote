const q = document.getElementById('Q')
async function quote(){
    const response = await fetch('https://api.kanye.rest')
    const data = await response.json()
    
    

    console.log(data.quote)
    q.innerText = data.quote
}
