let clickAction = () =>{
    let a=parseInt(document.getElementById('a').value);
    let b=parseInt(document.getElementById('b').value)
    let n=parseInt(document.getElementById('n').value)
    let sum=findsum(a,b,n);
    alert(sum);
}

let findsum = (num1,num2,range) => {
    let sum=0;
    for(let i=1;i<=range;i++){
        if(i%num1===0|| i%num2===0){
            //sum=sum+i
            sum+=i;
        }

    }
    return sum;
}