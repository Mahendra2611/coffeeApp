// On clicking remove button the item should be removed from DOM as well as localstorage.


let bkt = JSON.parse(localStorage.getItem("coffee")) || [];

let total = bkt.reduce(function(sum,el,i){
    return sum+Number(el.price);
},0)

var pTotal = document.getElementById("total_amount");
pTotal.innerText = total

bkt.map(function(el,i){

    let bucket = document.querySelector("#bucket");
    
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;

    let title = document.createElement("h3");
    title.innerText = el.title;

    let p = document.createElement("p");
    p.innerText = el.price;

    let btn  = document.createElement("button");
    btn.innerText = "Remove";
    btn.setAttribute("id","remove_coffee")
    btn.addEventListener("click",function(){
      remove(el,i)
    })

    div.append(img,title,p,btn)

    bucket.append(div);

})


function remove(el,i){
    bkt.splice(i,1);

    localStorage.setItem("coffee",JSON.stringify(bkt));
    window.location.reload();
}

document.querySelector("#confirm_checkout").addEventListener("click",check);

function check(){

    window.location.href = "checkout.html";

}