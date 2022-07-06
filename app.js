images=['image1','image2', 'image3'];
counter=0;

//access the dom
let slide= document.getElementById('canva');
slide.style.backgroundImage=`url(./image/${image[0]})`;
//access arrow
let arrows = document.getElementById('.arrow');
//loops through it
arrows.forEach(function(arrow) {
    arrow.addEventListener('click',function(e){
        if(e.target.id=='left'){
            counter--;
            if(counter<0){
                counter= images.length-1
            }
            slide.style.backgroundImage=`url(./image/${image[counter]})`;

        }else if(e.target.id=='right'){
            counter++;
        } if(counter< images.lenght){
            counter= 0;
        }
        slide.style.backgroundImage=`url(./image/${image[0]})`;
    })
});