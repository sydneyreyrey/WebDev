


//create a DOM element for donate, delighted and not-delighted
let don_btn = document.getElementById('donate');
let del_btn = document.getElementById('delighted');
let notDel_btn = document.getElementById('not-delighted');
let reas_btn = document.getElementById('reason');

//create an event handler that enables donate if delighted is clicked
del_btn.addEventListener('click', () => {
    don_btn.disabled = false;
});

//create an event handler that disables donate if not-delighted is clicked
notDel_btn.addEventListener('click', () => {
    don_btn.checked = false;
    //don_btn.disabled = true;
});



function validateInput() {
    if (don_btn.checked == true && notDel_btn.checked == true) {
        rule_1 = true;
    } else {
        rule_1 = false;
    }
    
    if (notDel_btn.checked == true && reas_btn.value == 0) {
        rule_2 = true;
    } else {
        rule_2 = false;
    }
    
    if (rule_1 == true && rule_2 == true) {
        alert('BOTH RULES BORKEN');
        return false;
    } else if (rule_1 == true && rule_2 == false) {
        alert('RULE 1 BROKEN');
        return false;
    } else if (rule_1 == false && rule_2 == true) {
        alert('RULE 2 BROKEN');
        return false;
    }
    return true;
    
}

