
const joke = async() =>{
  try {
    const res =await fetch('https://icanhazdadjoke.com/slack')
    const data =await res.json()
    const joke = document.getElementById("joke")
    joke.innerHTML = data.attachments[0].text
  } catch (error) {
    console.log("error 404")
  }
}

window.addEventListener("load", joke)