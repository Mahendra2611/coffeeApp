// Add the coffee to local storage with key "coffee"
document.querySelector("#go_to_bucket").addEventListener("click",bucket);

function bucket(){
    window.location.href = "bucket.html";
}
let url = `https://masai-mock-api.herokuapp.com/coffee/menu`

let arr = JSON.parse(localStorage.getItem("coffee")) || [];


async function getItem(){
    try{
        let res =  await fetch(url);
    
        let data = await res.json();

        let x = data.menu.data;
    
        console.log(x);

        append(x);
    }
    catch(err){
        console.log(err);
    }
}


function append(x){
    x.map(function(el,i){

        let container = document.querySelector("#menu");
        
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image;

        let title = document.createElement("h3");
        title.innerText = el.title;

        let p = document.createElement("p");
        p.innerText = el.price;

        let btn = document.createElement("button");
        btn.innerText = "Add to Bucket"
        btn.setAttribute("id","add_to_bucket");
        btn.addEventListener("click",function(){
            add(el);
        })

        div.append(img,title,p,btn);

        container.append(div);

})
}

function add(el){
    


   

  arr.push(el);
  console.log(arr);
  var count = arr.length;
console.log(count);
var counter = document.querySelector("#coffee_count");
counter.innerText = count;

localStorage.setItem("coffee",JSON.stringify(arr));


}





