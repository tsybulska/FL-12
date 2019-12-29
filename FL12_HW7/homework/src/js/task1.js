let email = prompt('Enter email:'),
    userEmail = 'user@gmail.com',
    adminEmail = 'admin@gmail.com',
    userPass = 'UserPass',
    adminPass = 'AdminPass',
    five = 5, six = 6,
    pass, oldPass, newPass, validNewPass;

//Check email
if (!email) {
    alert('Canceled');
} else if (email.length < five) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (!(email === userEmail || email === adminEmail)) {
    alert('I don\'t know you');
} else {
    //Check password
    pass = prompt('Enter password:');
    if (!pass) {
        alert('Canceled');
    } else if (!(email === userEmail && pass === userPass ||
        email === adminEmail && pass === adminPass)) {
        alert('Wrong password');
    } else {
        //Change password
        if (!confirm('Do you want to change your password?')) {
            alert('You have failed the change');
        } else {
            //Check OLD password
            oldPass = prompt('Enter OLD password:');
            if (!oldPass) {
                alert('Canceled');
            } else if (oldPass !== pass) {
                alert('Wrong password');
            } else {
                //Check NEW password
                newPass = prompt('Enter NEW password:');
                if (!newPass) {
                    alert('Canceled');
                } else if (newPass.length < six) {
                    alert('It\'s too short password. Sorry');
                } else {
                    //Valid NEW Password
                    validNewPass = prompt('Enter NEW password again:');
                    if (validNewPass !== newPass) {
                        alert('You wrote the wrong password');
                    } else {
                        alert('You have successfully changed your password');
                    }
                }
            }
        }
    }
}