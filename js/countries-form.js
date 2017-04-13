function send() {
    validateForm()
        .then(showLoading)
        .then(sendForm)
        .then(handleResponse)
        .then(function() {
            resetFields();
            hideLoading();
            showSuccess();
        })
        .catch(function(error) {
            hideLoading();
            showFieldError(error.fieldId);
            console.error(error.message);
        })
}

document.getElementById('notification-form').addEventListener('submit', function(event){
    event.preventDefault();
})

function validateForm() {
    return new Promise(function(resolve, reject) {
        try {
            checkBlank('email');
            checkBlank('country');
            validateEmail();
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function clearErrors() {
    var inputs = document.querySelectorAll('.notification-form__input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('notification-form__input--has-error');
    }
}

function showFieldError(fieldId) {
    clearErrors();
    if (fieldId) {
        document.getElementById(fieldId).classList.add('notification-form__input--has-error');
    }
}

function resetFields() {
    var inputs = document.querySelectorAll('.notification-form__input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

function ValidationError(fieldId, msg) {
    this.fieldId = fieldId;
    this.message = msg;
}

function checkBlank(id) {
    if (document.getElementById(id).value.trim().length < 2)
        throw new ValidationError(id, id + ' cannot be blank');
}

function validateEmail() {
    var email = document.getElementById('email').value;

    if (!isValidEmail(email)) {
        throw new ValidationError('email', 'Invalid email format');
    }
}

function isValidEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function handleResponse(response) {
    if (response.success) {
        return Promise.resolve();
    } else {
        return Promise.reject(new Error('There was a problem submitting the form (please check your connection)'));
    }
}

function sendForm() {
    return fetch('https://formspree.io/kachi@paystack.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            country: document.getElementById('country').value,
            email: document.getElementById('email').value
        })
    }).then(function(response) {
        return response.json();
    })
}

function showSuccess() {
    document.getElementById('success-overlay').classList.add('notification-form-overlay--is-showing');
}

function showLoading() {
    document.getElementById('loading-overlay').classList.add('notification-form-overlay--is-showing');
}

function hideLoading() {
    document.getElementById('loading-overlay').classList.remove('notification-form-overlay--is-showing');
}
