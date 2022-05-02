



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
            res_obj = JSON.parse(this.response);
            console.log(res_obj);
            document.getElementById("Suggested Activity").innerHTML = res_obj.activity;
            like.addEventListener("click", Like);
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


    let info = ['activity', 'type', 'participants', 'price', 'accessibility'];
    let tbl = document.createElement('table');
    tbl.setAttribute('id', 'tbl');
    let tblHead = document.createElement('th');
    tbl.appendChild(tblHead);
    let tblstat = false;
    info.forEach(element => {
        let cell = document.createElement('td');
        cell.setAttribute('id', 'cell');
        console.log(element);
        cell.textContent = element;
        tblHead.appendChild(cell);
    });

    

    function Like() {

        if (!tblstat) {
            let tbl_loc = document.getElementById('like_table');
            tbl_loc.appendChild(tbl);
            tblstat = true;
        }

        let row = document.createElement('tr');
        info.forEach(element => {
            let cell = document.createElement('td');
            cell.setAttribute('id', 'cell');
            cell.textContent = res_obj[element];
            row.appendChild(cell);
        
        
        });
        tbl.appendChild(row);
        buttonclickhandler();
    }
    

}





sug_act()

