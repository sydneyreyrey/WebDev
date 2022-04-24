


//create a DOM element for donate, delighted and not-delighted
don_btn = document.getElementById('donate');
del_btn = document.getElementById('delighted');
notDel_btn = document.getElementById('not-delighted');

//create an event handler that enables donate if delighted is clicked
del_btn.addEventListener('click', () => {
    don_btn.disabled = false;
});

//create an event handler that disables donate if not-delighted is clicked
notDel_btn.addEventListener('click', () => {
    don_btn.checked = false;
    don_btn.disabled = true;
});

