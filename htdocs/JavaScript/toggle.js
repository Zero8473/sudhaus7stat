//to make it scalable you need to check the list of elements and check each element via index to see if it was clicked on
// -> for loop that checks from 1 to n (.length) if element of index = true and set it as toggleItem if it exists
//window.onload waits for all html element to be there before executing the js script
window.onload = function (){
    accordion();

};

const accordion = function (){
    const accordionHeads = document.getElementsByClassName('toggle-title'); //array of elements that contain the class toggle-title
    const accordionText = document.getElementsByClassName('show-description'); //array of elements that contain the class show-description
    //adds eventlistener to all the titles
    for (let i = 0; i < accordionHeads.length; i++){
        //EventListener will be triggered when user clicks on the respective elements
        accordionHeads[i].addEventListener('click', function(){
            console.log(accordionHeads)
            //remove the active symbol from all elements and add the standard symbol unless user clicks on active element
            for (let j = 0; j < accordionHeads.length; j++){
                //only executes if user clicks on an inactive element
                if(this.classList.contains('symbolPlus')){
                    accordionHeads[j].classList.remove('symbolMinus');
                    accordionHeads[j].classList.add('symbolPlus');
                }
            }
            //make the text of all inactive elements invisible
            for(let k = 0; k < accordionText.length; k++){
                accordionText[k].classList.remove('accordion-active');
            }
            /*console.log(this.classList);*/
            //console.log(this.classList[1]); returns symbolPlus or SymbolMinus


            //minimizes the active element if the user clicks on the active element or expands an inactive element if the user clicks on minimized elements
            if(this.classList[1]==='symbolMinus'){
                this.classList.remove('symbolMinus');
                this.classList.add('symbolPlus');
                this.nextElementSibling.classList.remove('accordion-active');
            }else{
                //add active symbol to the element the user clicked on and remove inactive symbol
                this.classList.add('symbolMinus');
                this.classList.remove('symbolPlus');

                //adds accordion class to sibling of active element to display text
                this.nextElementSibling.classList.add('accordion-active');
            }
           /* console.log(this.classList[1]);*/

        });
    }
};


/*function toggleItem1(){
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


}*/
