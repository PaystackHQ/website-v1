function submit() {
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

function validateForm() {
    return new Promise(function(resolve, reject) {
        try {
            checkBlank('name');
            checkBlank('email');
            validateEmail();
            checkBlank('phone');
            checkBlank('message');
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function clearErrors() {
    var inputs = document.querySelectorAll('.contact-form__input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('contact-form__input--has-error');
    }
}

function showFieldError(fieldId) {
    clearErrors();
    if (fieldId) {
        document.getElementById(fieldId).classList.add('contact-form__input--has-error');
    }
}

function resetFields() {
    var inputs = document.querySelectorAll('.contact-form__input');
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
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        })
    }).then(function(response) {
        return response.json();
    })
}

function showSuccess() {
    document.getElementById('success-div').classList.add('contact-form-overlay--is-showing');
}

function showLoading() {
    document.getElementById('loading-div').classList.add('contact-form-overlay--is-showing');
}

function hideLoading() {
    document.getElementById('loading-div').classList.remove('contact-form-overlay--is-showing');
}
