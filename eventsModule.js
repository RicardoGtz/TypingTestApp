var eventsModule=(function(dModule,uModule,cModule,wModule){

    var addEventListeners=function(){
    
        //Character type event listener
        
        //Click on download button event listener

        //Click on restart button event listener
    };

    return{
        //init function, initializes the test before start
        init:function(duration,textNumber){
            //Fill the list of test words: data moduel
            var words=wModule.getWords(textNumber);
            dModule.fillListOfTestWords(textNumber,words);
            //fill the list of test words: UI Module

            //set the total time

            //update time left: UIModule

            //move to a new word: data Module

            //set active Word:UI Module

            //format the active word: UI Module

            //focus on text input: UI Module

            //add event listeners
            addEventListeners();
        }
    };

})(dataModule,UIModule,certificateModule,wordsModule);