export const getApis = async() =>{
    let response = await fetch(`https://pokeapi.co/api/v2/ability/?limit=20&offset=20`);
    let usuarios = await response.json();
    return usuarios;
}