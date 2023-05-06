document.querySelector("#categories").addEventListener("submit", function(e) {
    e.preventDefault()

    let categorySelected = document.querySelector(".categoriesSelector[name=categoriesSelector]").value
    
    console.log(categorySelected)
    if (categorySelected === "random") {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(thenCallback)
            .then(finalCallback)
            .catch(catchCallback)
    } else {
        fetch(`https://api.chucknorris.io/jokes/random?category=${categorySelected}`)
            .then(thenCallback)
            .then(finalCallback)
            .catch(catchCallback)
    }
}) 


function thenCallback(response){
    if(response.status === 200){
        return response.json()
    }
}

function finalCallback(data) {
    document.querySelector(".jokeBok").innerHTML = data.value

    document.querySelector(".urlBox").innerHTML =  data.url  
}

function catchCallback(error) {
    document.querySelector(".jokeBox").innerHTML = error
}