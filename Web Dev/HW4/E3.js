


function validateForm(username) {
    if (username.length < 4) {
        return false;
    } else if (/[^a-z0-9_]/gi.test(username)) {
        return false;
    } else if (username.endsWith('_')) {
        return false;
    } else if (!/^[a-zA-Z]/.test(username)) {
        return false;
    } else if (/_{2,}/.test(username)) {
        return false;
    }

    return true;
}


console.log(validateForm('MikeStandish'))










