const pokemonTemplate = document.querySelector('#pokemonTemplate').innerHTML

const submit = document.querySelector('#submit')

function required() {
    if (myPoke.value == "" || yourPoke.value == "") {
        alert('É necessário ao menos um pokémon envolvido na troca');
    }
}

document.querySelector('#form-one').addEventListener('submit', (e) => {
    e.preventDefault()

    const location = document.querySelector('#pokemon-one').value.toLowerCase()

    fetch('https://pokeapi.co/api/v2/pokemon/' + encodeURI(location)).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                alert(data.error)
            } else {
                if (myPokemons.length === 6) {
                    return alert('Quantidade Máxima de Pokémons Alcançada')
                }
                addMyPokemon(data.name)
                const html = Mustache.render(pokemonTemplate, {
                    pokemonName: data.name.toUpperCase(),
                    pokemonXP: data.base_experience,
                    pokemonSprite: data.sprites.front_default,
                    pokeNumber: myPokemons.length.toString() 
                })
                myXP += data.base_experience
                document.querySelector('#myPoke').value = myPokemons.toString()
                document.querySelector('#player-one').textContent = 'Experiência Total: ' + myXP

                document.querySelector('#base-one').insertAdjacentHTML('beforeend', html)
            }
        })
    })
})

document.querySelector('#form-two').addEventListener('submit', (e) => {
    e.preventDefault()

    const location = document.querySelector('#pokemon-two').value.toLowerCase()

    fetch('https://pokeapi.co/api/v2/pokemon/' + encodeURI(location)).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                alert(data.error)
            } else {
                if (yourPokemons.length === 6) {
                    return alert('Quantidade Máxima de Pokémons Alcançada')
                } 
                addYourPokemon(data.name)
                const html = Mustache.render(pokemonTemplate, {
                    pokemonName: data.name.toUpperCase(),
                    pokemonXP: data.base_experience,
                    pokemonSprite: data.sprites.front_default,
                    pokeNumber: yourPokemons.length.toString() 
                })
                yourXP += data.base_experience
                document.querySelector('#yourPoke').value = yourPokemons.toString()
                document.querySelector('#player-two').textContent = 'Experiência Total: ' + yourXP

                document.querySelector('#base-two').insertAdjacentHTML('beforeend', html)
            }
        })
    })
})