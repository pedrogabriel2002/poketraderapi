var myXP = 0
var yourXP = 0

const myPokemons = []
const yourPokemons = []

const addMyPokemon = (pokemonName) => {
    myPokemons.push(pokemonName)
    return myPokemons
}

const addYourPokemon = (pokemonName) => {
    yourPokemons.push(pokemonName)
    return yourPokemons
}

const deleteMyPokemon = () => {
    myPokemons.splice(0, myPokemons.length)
    yourPokemons.splice(0, yourPokemons.length)
}

const deleteyourPokemon = () => {
    myPokemons.splice(0, myPokemons.length)
    yourPokemons.splice(0, yourPokemons.length)
}

function toCompareXP() {
    let compare = myXP - yourXP
    if (Math.sign(compare) == -1) {
        compare = compare * -1;
        if (compare > 80){
            return alert('Troca Injusta')
        } else {
            return alert('Troca Justa')
        }
    } else if (compare > 80) {
        return alert('Troca Injusta')
    } else {
        return alert('Troca Justa')
    }
}