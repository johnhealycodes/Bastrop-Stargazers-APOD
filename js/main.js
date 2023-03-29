//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  // const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
  // const url =`https://api.nasa.gov/planetary/apod?api_key=U5AnC5eoutXEMbxAcZtCdLOyEwtnU4VSvyrF8V5q`
  const url =`https://api.nasa.gov/planetary/apod?api_key=U5AnC5eoutXEMbxAcZtCdLOyEwtnU4VSvyrF8V5q&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === "image"){
          document.querySelector('.nasa').src = data.hdurl
          document.querySelector('.video').src = ""          
        } else if (data.media_type === "video"){
          document.querySelector('.nasa').src = ""         
          document.querySelector('.video').src = data.url
        }

        document.querySelector('.title').innerText = data.title
        document.querySelector('.explanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

