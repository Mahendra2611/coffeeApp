let arr = [
"Your order is accepted", 
 "Your order is being Prepared",
 "Your order is being packed"  ,
"Your order is out for delivery" ,
"Order delivered",
]


let id;

function alertt(){
    let j = 0;
    id=setInterval(function(){
        let i=0;
        if(j>=5){
            stop();
        }
        else{
            alert(arr[j])
            j++;
        }

        i++;
    },3000)
}