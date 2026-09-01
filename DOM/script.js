var a = document.querySelector("h2")
var like = document.querySelector("#like")
var dislike = document.querySelector("#dislike")
var Cat = document.querySelector("#card")
var love = document.querySelector("i")
var cur = document.querySelector(".cursor")
like.addEventListener("click",function(){
    a.innerHTML = "Greate Choice"
    
    love.style.transform = 'translate(-50%, -50%) scale(1)'
    love.style.opacity = '0.9'
    a.style.color = "green"
    setTimeout(function(){
        love.style.opacity = '0'
    }, 1000)
    setTimeout(function(){
        love.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 2000)
    
    console.log(a)
})
dislike.addEventListener("click",function(){
    a.innerHTML = "L Taste Honestly"
    a.style.color = "purple"
    console.log(a)
})

Cat.addEventListener("dblclick", function(){
    love.style.transform = 'translate(-50%, -50%) scale(1)'
    love.style.opacity = '0.9'

    setTimeout(function(){
        love.style.opacity = '0'
    }, 1000)
    setTimeout(function(){
        love.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 2000)
})

document.addEventListener("mousemove", function(details){
    cur.style.left = details.x + "px"
    cur.style.top = details.y + "px"
})
document.addEventListener ("mouseenter", function(details){
    cur.style.opacity = 1
})
document.addEventListener ("mouseleave", function(details){
    cur.style.opacity = 0
})