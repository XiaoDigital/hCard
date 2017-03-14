/* preview input text
*/   
    var givenname = document.getElementById('givenname');
    var surname = document.getElementById('surname');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var housename = document.getElementById('housename');
    var street = document.getElementById('street');
    var suburb = document.getElementById('suburb');
    var state = document.getElementById('state');
    var postcode = document.getElementById('postcode');
    var country = document.getElementById('country');


    givenname.onkeyup = function() {
        document.getElementById('hcard-givenname').innerHTML = givenname.value;
    }

    surname.onkeyup = function() {
        document.getElementById('hcard-surname').innerHTML = surname.value;
    }

    email.onkeyup = function() {
        document.getElementById('hcard-email').innerHTML = email.value;
    }

    phone.onkeyup = function() {
        document.getElementById('hcard-phone').innerHTML = phone.value;
    }

    housename.onkeyup = function() {
        document.getElementById('hcard-housename').innerHTML = housename.value;
    }

    street.onkeyup = function() {
        document.getElementById('hcard-street').innerHTML = street.value;
    }

    suburb.onkeyup = function() {
        document.getElementById('hcard-suburb').innerHTML = suburb.value + ",";
    }

    state.onkeyup = function() {
        document.getElementById('hcard-state').innerHTML = state.value;
    }

    postcode.onkeyup = function() {
        document.getElementById('hcard-postcode').innerHTML = postcode.value;
    }

    country.onkeyup = function() {
        document.getElementById('hcard-country').innerHTML = country.value;
    }

/* preview upload avatar
*/   
    var loadFile = function(event) {
        var output = document.getElementById('hcard-photo');
        output.src = URL.createObjectURL(event.target.files[0]);
        document.getElementById('hcard-photo').style.width = "auto";
        document.getElementById('hcard-photo').style.background = "#fff";
    }