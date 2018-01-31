'use strict';
/*
 *  JavaScript SCRIPT: APP.JS
 *
 * Description: Used to Control the Application
 *
 * Parameters : none
 *
 * Date				Developer			Action
 * ---------------------------------------------------------------------
 * Feb 10, 2014		Steve Young			Initial Version
 *  
 */


//                          Initialize Section
//===================================================================\\ 
var loggingLevel;
function setLoggingValue() {
    loggingLevel = 5;
    // Display an info toast with no title
    toastr.info('Set Logging Level to 5')
};

setLoggingValue();
//Message level tha the initialization is finished
//displayToast('Initialization Finished', 4);

