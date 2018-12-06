let Pokemons = document.getElementById("container")
var img = document.querySelector("img")


fetch('https://pokeapi.co/api/v2/pokemon/charmander/')
    .then(function(response){
        // console.log(response.json())
        return response.json()
    })
    .then(function(myJson){
        // console.log(myJson.sprites)
        img.src = myJson.sprites.front_default
    })

////////name
fetch('https://pokeapi.co/api/v2/pokemon/101/')
    .then(function(response){
        return response.json()
    })
    .then(function(myJson){
        console.log(myJson.name)
    
    })


////////////type
fetch('https://pokeapi.co/api/v2/pokemon/101/')
    .then(function(response){
        // console.log(response.json())
        return response.json()
    })
    .then(function(myJson){
         console.log(myJson.types[0].type.name)       
    })
    
////////abilities///7
fetch('https://pokeapi.co/api/v2/pokemon/101/')
    .then(function(response){
        return response.json()
    })
    .then(function(myJson){
        console.log(myJson)
    
    })


///////one ability
fetch("https://pokeapi.co/api/v2/ability/static/")
    .then(function(response){
        return response.json()
    })
    .then(function(myJson){
        console.log(myJson)
    
    })



  


   