



function sug_act() {
    let fetchBtn = document.getElementById("fetchBtn");

    fetchBtn.addEventListener("click", buttonclickhandler);
    let ld = false;

    let res_obj = null;
  
    function buttonclickhandler() {
  
        // Instantiate an new XHR Object
        const req = new XMLHttpRequest();

        let liDiv = document.createElement('div');
        let like = document.createElement('button');
        like.setAttribute('id', 'lbt');
        like.textContent = 'Like';

        let diDiv = document.createElement('div');
        let dislike = document.createElement('button');
        dislike.setAttribute('id', 'dlbt');
        dislike.textContent = 'Dislike';
        
        req.onload = function() {
            res_obj = JSON.parse(this.responseText);
            console.log(res_obj)
            document.getElementById("Suggested Activity").innerHTML = res_obj.activity
        };

        req.open("GET", "https://www.boredapi.com/api/activity", true);
        req.send()

        if (!ld) {
            console.log(like);
            let flx = document.getElementById('LDL');
            liDiv.appendChild(like);
            flx.appendChild(liDiv);
            diDiv.appendChild(dislike);
            flx.appendChild(diDiv);
            ld = true;
        }
    
  
    }

    function Like() {
        let tbl = document.createElement('table');
        let tblBody = document.createElement('tbody');
        tbl.appendChild(tblBody);
        let tblstat = false;

        if (!tblstat) {
            let lktbl = document.getElementById('like_table');
            lktbl.appendChild(tbl);
        }

        let tbl_stuff = ['activity', 'type', 'participants', 'price', 'accesibility'];
        console.log('here');
        console.log(res_obj);
        let row = doucument.createElement('tr');
        for (i = 0; i < 5; i++) {
            let cell = document.createElement('td');
            cell.textContent = null;

            //row.appendChild()
        }
    }

}





sug_act()

