// https://dog.ceo/api/breed/Affenpinscher/images
const input = document.querySelector('.form-control')
const btn = document.querySelector('.btn-info')
const container = document.querySelector('.container')


function searchDogs() {
    fetch(`https://dog.ceo/api/breed/${input.value}/images`)
        .then(data => data.json())
        .then(res => {
            console.log(res)
            res.message.slice(0 , 10 ).map(el => {
                container.innerHTML += `<div>
          <img width="280px"    src="${el}" alt="">
       </div>`
            })
        })
}

btn.addEventListener('click' , () =>{
    searchDogs()
})

input.addEventListener('keydown' , (e) =>{
    if (e.key === 'Enter') searchDogs()
})




































