
$(document).ready(() => {

    // load the count number if exists, otherwise init the value
    var countInBeds = loadCounterFromLocalStorage();

    // the span dom element which holds the number
    let numberInBedsSpanElement = $('.number-in-beds');
    numberInBedsSpanElement.text(countInBeds);

    // when click on add in beds
    $('#add-in-beds').click(() => {
        // multiply by 1 to make sure it is a number not a string
        countInBeds = (countInBeds * 1) + 1;
        // save the number on the browser
        localStorage.setItem('countInBeds', countInBeds);
    });

    $('#minus-in-beds').click(() => {
        countInBeds = (countInBeds * 1) - 1;
        localStorage.setItem('countInBeds', countInBeds);
    });


    // sync the value every 1 second
    setInterval(() => {
        if (numberInBedsSpanElement !== localStorage["countInBeds"]) {
            numberInBedsSpanElement.text(localStorage["countInBeds"]);
        }

        var textFromLocalStorage = localStorage.getItem('text-to-be-toggled');
        if (textFromLocalStorage == null) {
            $('#toggled-text-span').text('');
        } else {
            $('#toggled-text-span').text(textFromLocalStorage);
        }
    }, 100);

    function loadCounterFromLocalStorage() {

        var countInBedFromLocalStorage = localStorage.getItem('countInBeds');
        if (countInBedFromLocalStorage == null || countInBedFromLocalStorage == undefined) {
            // there is no counter on local storage
            // initialize it and give it a default value
            let countInBeds = 0;
            localStorage.setItem('countInBeds', countInBeds);
        }

        $('.number-in-beds').text(countInBedFromLocalStorage);

        return countInBedFromLocalStorage;
    }


    $('#reset-btn').click(() => {
        localStorage.setItem('countInBeds', 0);
        $('.number-in-beds').text(0);
        countInBeds = 0;
    });






    $('#toggle-btn').click(() => {
        var textFromLocalStorage = localStorage.getItem('text-to-be-toggled');
        if (textFromLocalStorage == null) {
            localStorage.setItem('text-to-be-toggled', 'something urgent ...');
        } else {
            localStorage.removeItem('text-to-be-toggled');
        }
    })


});