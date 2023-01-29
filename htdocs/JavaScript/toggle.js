//window.onload waits for all html element to be there before executing the js script
window.onload = function (){
    accordion();
    toolboxinfo();
};

const toolboxinfo = function(){
    const iconbox= document.getElementsByClassName('expand');//array that holds the elements to click on to open and close the toolbar info
    for (let i=0; i < iconbox.length; i++){
        iconbox[i].addEventListener('click', function(){
            console.log(iconbox);
            console.log(iconbox[0]);
            console.log(this);
            //check if clicked element is active
            //if toolbar info is expanded
            if(this.classList.contains('to-left') || this.parentElement.classList.contains('to-left2')){
                //minimize elements on click
                for(let j=0; j < iconbox.length; j++){
                    if(iconbox[j].classList.contains('left-column')){
                        iconbox[j].classList.remove('to-left');
                    }else if(iconbox[j].parentElement.classList.contains('toolbar-info')){
                        iconbox[j].parentElement.classList.remove('to-left2');
                    }
                }
            //if toolbar info is not expanded
            }else if(!(this.classList.contains('to-left') && this.parentElement.classList.contains('to-left2'))){
                //expand elements on click
                for(let k=0; k < iconbox.length; k++){
                    if(iconbox[k].classList.contains('left-column')){
                        iconbox[k].classList.add('to-left');
                    }else if(iconbox[k].parentElement.classList.contains('toolbar-info')){
                        iconbox[k].parentElement.classList.add('to-left2');
                    }
                }
            }




        });
    }
}

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

        });
    }
};
