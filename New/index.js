 var average=0;
 var sum=0
 var count=0;

function InputHanlder(){
        count++;
    let Input= document.getElementById("Input");
        sum+=Input.value
        average=sum/count
    let demo=document.getElementById("demo");
    demo.innerText=average
    Input.value=""

}
let p1=document.getElementById("p1")
let p2=document.getElementById('p2')
if(p1.className==Add_button){
    str=`<p class="menu" id="p2"> i am menu</p>`
}