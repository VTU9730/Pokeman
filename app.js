const colors={
    grass:"rgb(137, 235, 46)",
    fire:"rgb(233, 121, 56)",
    normal:"rgb(127, 109, 231)",
    bug:"rgb(195, 238, 78)",
    water:"rgb(104, 206, 224)"
}
function randomCharacter(){
    // skill.classList.remove(data.types[0].type.name)
    // color.classList.remove(data.types[0].type.name)
    let character=Math.floor(Math.random()*20)+1
    fetch(`https://pokeapi.co/api/v2/pokemon/${character}`)
        .then((response)=>response.json())
        .then(data=>{generateCard(data)})
        .catch(err=>console.log("err: ",err))
}
var name=document.getElementById("name")
var color=document.getElementById("color")
var skill=document.getElementById("skill")
var speed=document.getElementById("speed")
var defence=document.getElementById("defence")
var attack=document.getElementById("attack")
var img=document.getElementById("img")
function generateCard(data){
    if(color.classList[0]==undefined){
        skill.classList.add(color.innerText)
        color.classList.add(color.innerText)
    }
    if(color.classList[0]!=data.types[0].type.name){
        skill.classList.remove(skill.classList[0])
        color.classList.remove(color.classList[0])
        skill.classList.add(color.innerText)
        color.classList.add(color.innerText)
    }
    name.textContent=data.name
    color.textContent=data.types[0].type.name
    skill.textContent=data.types[1].type.name
    speed.textContent=data.stats[1].base_stat
    defence .textContent=data.stats[2].base_stat
    attack.textContent=data.stats[5].base_stat
    img.setAttribute("src",data.sprites.other.dream_world.front_default)
    
    
    

}
