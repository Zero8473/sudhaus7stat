//to make it scalable you need to check the list of elements and check each element via index to see if it was clicked on
// -> for loop that checks from 1 to n (.length) if element of index = true and set it as toggleItem if it exists

function toggleItem1(){
    var toggleItem= document.getElementsByClassName('show-description')[0];//get first item of class and assign it to variable
    var toggleTitle= document.getElementsByClassName('toggle-title')[0];//get the title div of the element

    var height = toggleItem.style.height;//get item current height value

    //toggles item on click if it is invisible
    if(height !== 'auto'){
        toggleItem.style.height='auto';
        toggleItem.style.paddingRight='56px';
        toggleItem.style.paddingBottom='13px';
        toggleItem.style.transform='scaleY(1)';
        toggleTitle.classList.remove("symbolPlus");
        toggleTitle.classList.add("symbolMinus");
    //untoggles item on click if it's already visible
    }else if(height==='auto'){
        toggleItem.style.height='0';
        toggleItem.style.padding='0';

        toggleItem.style.transform='scaleY(0)';
        toggleItem.style.transformOrigin='bottom';
        toggleItem.style.transition = 'transform .25s ease';
        toggleTitle.classList.remove("symbolMinus");
        toggleTitle.classList.add("symbolPlus");
    }


}
function toggleItem2(){
    var toggleItem= document.getElementsByClassName('show-description')[1];//get second item of class and assign it to variable
    var toggleTitle= document.getElementsByClassName('toggle-title')[1];//get the title div of the second element with that class

    var height = toggleItem.style.height; //get item current height value

    if(height !== 'auto'){
        toggleItem.style.height='auto';
        toggleItem.style.paddingRight='56px';
        toggleItem.style.paddingBottom='13px';
        toggleItem.style.transform='scaleY(1)';
        toggleTitle.classList.remove("symbolPlus");
        toggleTitle.classList.add("symbolMinus");
    }else if(height==='auto'){
        toggleItem.style.height='0';
        toggleItem.style.padding='0';

        toggleItem.style.transform='scaleY(0)';
        toggleItem.style.transformOrigin='bottom';
        toggleItem.style.transition = 'transform .25s ease';
        toggleTitle.classList.remove("symbolMinus");
        toggleTitle.classList.add("symbolPlus");
    }
}
function toggleItem3(){
    var toggleItem= document.getElementsByClassName('show-description')[2];//get third item of class and assign it to variable
    var toggleTitle= document.getElementsByClassName('toggle-title')[2];//get the title div of the third element with that class

    var height = toggleItem.style.height; //get item current height value

    if(height !== 'auto'){
        toggleItem.style.height='auto';
        toggleItem.style.paddingRight='56px';
        toggleItem.style.paddingBottom='13px';
        toggleItem.style.transform='scaleY(1)';
        toggleTitle.classList.remove("symbolPlus");
        toggleTitle.classList.add("symbolMinus");
    }else if(height==='auto'){
        toggleItem.style.height='0';
        toggleItem.style.padding='0';

        toggleItem.style.transform='scaleY(0)';
        toggleItem.style.transformOrigin='bottom';
        toggleItem.style.transition = 'transform .25s ease';
        toggleTitle.classList.remove("symbolMinus");
        toggleTitle.classList.add("symbolPlus");
    }
}
function toggleItem4(){
    var toggleItem= document.getElementsByClassName('show-description')[3];//get fourth item of class and assign it to variable
    var toggleTitle= document.getElementsByClassName('toggle-title')[3];//get the title div of the second element with that class

    var height = toggleItem.style.height; //get item current height value

    if(height !== 'auto'){
        toggleItem.style.height='auto';
        toggleItem.style.paddingRight='56px';
        toggleItem.style.paddingBottom='13px';
        toggleItem.style.transform='scaleY(1)';
        toggleTitle.classList.remove("symbolPlus");
        toggleTitle.classList.add("symbolMinus");
    }else if(height==='auto'){
        toggleItem.style.height='0';
        toggleItem.style.padding='0';

        toggleItem.style.transform='scaleY(0)';
        toggleItem.style.transformOrigin='bottom';
        toggleItem.style.transition = 'transform .25s ease';
        toggleTitle.classList.remove("symbolMinus");
        toggleTitle.classList.add("symbolPlus");
    }
}
