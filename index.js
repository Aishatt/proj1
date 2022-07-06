function message1(){
    console.log('my name is aisha')
}
message1();
let fn = function (){
    console.log('meet mrs sunmola')
};
fn();
function showM(arg1,arg2){
    console.log(arg1)
    console.log(arg2)
}
showM('actual value','54')
showM('second arg');

function getCode(value){
    let keygen=function(){
        let key= 13;
        console.log('in keygen', key) ;
        return key;
    };
    let code= value = keygen();
}
console.log(getCode(22));
let seccode= getCode(12);
console.log(seccode);


//create van array of img
let images= ['cake-1.jpeg','cake-2.jpeg','cake-3.jpeg'];
//set counter
let i=0;
//access the dom
let canvas= document.getElementById('container');
canvas.style.backgroundImage= `url(./images/${images[0]})`;
console.log(canvas);

//select our button
let butn= document.querySelectorAll('.arrow');

butn.forEach(function(button){
button.addEventListener('click',function(e){  
    console.log('button clicked') 
    //condition
    if (e.target.id == 'left'){
        i--;
        if(i<0){
            i= images.length-1;
           
        }
        console.log('minus');
        canvas.style.backgroundImage= `url(./images/${images[i]})`;
    } else if(e.target.id == 'right'){
        i++;
        if(i>=images.length){
            //if its greater than 0, go back to first image
            i= 0;
        }
        console.log('plus');
        canvas.style.backgroundImage= `url(./images/${images[i]})`;
    }

    });
});