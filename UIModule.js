var UIModule=(function(){

    //Classes used to select HTML elements
    var DOMElements={
        //indicators - test control 
        timeLeft, //HTML element displaying time left
        //test results
        wpm,wpmChange,cpm,cpmChange,accuracy,accuracyChange,
        //user input
        textInput,nameInput,
        //test words
        content,activeWord,
        //modal
        modal
    };

    return{
        //get DOM elements
        getDOMElements:function(){},
        //Indicators - Test Control
        updateTimeLeft:function(){},
        //results
        updateResults:function(){},
        fillModal:function(){},
        showModal:function(){},
        //user input
        inputFocus:function(){},
        isNameEmpty:function(){},
        flagNameInput:function(){},
        spacePressed:function(){},
        enterPressed:function(){},
        emptyInput:function(){},
        getTypeWord:function(){},
        //test words
        filContent:function(){},
        formatWord:function(wordObject, wordHTML){},
        setActiveWord:function(index){},
        deactivateCurrentWord:function(){},
        scroll:function(){}
    }
})();