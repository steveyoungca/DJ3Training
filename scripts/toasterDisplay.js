
'use strict';


/*
 *  JavaScript SCRIPT: toastrDisplay.js
 *
 * Description: Logging Display
 *
 * Parameters : none
 *
 * Date				Developer			Action
 * ---------------------------------------------------------------------
 * Feb 10, 2014		Steve Young			Initial Version
 *  
 */



function displayToast(toastMessage, messageLevel) {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "positionClass": "toast-top-right",
        "onclick": null,
        "showDuration": "3000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    //toastr.warning('HiThere');

    //toastr.success(toastMessage);
    //toastr.error('Imanerror');
    // toastr.clear();

    switch (loggingLevel) {
        case 1:
            toastr.success(toastMessage);
            toastr.success('This is From Case 1');
            break;
        case 2:
            toastr.success(toastMessage);
            toastr.success('This is From Case 2');
            break;
        case 3:
            toastr.success(toastMessage);
            toastr.success('This is From Case 3');
            break;
        case 4:
            toastr.success(toastMessage);
            toastr.success('This is From Case 4');
            break;
        case 5:  //Production
            toastr.success(toastMessage);
            toastr.success('This is From Case 5');
            break;
        default:
            //toastr.clear();
    }
};