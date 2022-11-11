let indexValue = 1;
showImg(indexValue);

function btm_slide(i){
    showImg(indexValue = i);
}

function side_slide(i){
    showImg(indexValue += i);
}

function showImg(i){
    let j;
    const img = document.querySelectorAll('img');
    const slider = document.querySelectorAll('.btm-slide span');
    if(i > img.length){
        indexValue = 1
    }
    if(i < 1){
        indexValue = img.length
    }
    for(j = 0; j < img.length; j++){
        img[j].style.display = "none";
    }
    img[indexValue-1].style.display = "block";
    
} 