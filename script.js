// document.getElementById("burgerbtn").addEventListener("click" , function click(){
//     console.log("button has been clicked")
// })
let navbar = document.getElementById("nav")
let button = document.getElementById("burgerbtn")
// document.getElementById("burgerbtn").addEventListener("click" , function click(){
//     navbar.innerHTML =  "<ul> <li>Google</li><li>facebook</li><li>linkedIn</li></ul>"
//     console.log("button pressed")
// })

laterHTML = "<ul> <li>google</li><li>facebook</li><li>linkedIn</li></ul>"
// var timesClicked = 0 
// document.getElementById("burgerbtn").click(function(){
//     timesClicked +=1
//     if(timesClicked = 3){
//         console.log("button pressed")
//         navbar.innerHTML = "<ul> <li>google</li><li>facebook</li><li>linkedIn</li></ul>"
//     }
//     else{
//         navbar.innerHTML = "" 
//     }
// })

document.getElementById("burgerbtn").addEventListener("click", function click() {
    if(navbar.innerHTML = "<p>hemlo</p>"){
        navbar.innerHTML = "<ul><li>google</li><li>facebook</li><li>linkedIn</li></ul>"
        button.style.position = "fixed";
        button.style.top = "20px" ;
        button.style.right = "120px";
        console.log(navbar.innerHTML)
        break
    

    }
    else {
        navbar.innerHTML = ""
        console.log("2nd time pressed")
        console.log(navbar.innerHTML)
    }
    
})
// document.getElementById("burgerbtn").addEventListener("mousedown", function click() {
//        navbar.innerHTML = " "
// })

// document.getElementById("burgerbtn").addEventListener("mouseout", function click() {
//     navbar.innerHTML = ""

// })