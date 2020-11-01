let url = "https://davids-restaurant.herokuapp.com/menu_items.json";

let data = null;
let buyItemList = [];

$("document").ready(function(){
    $.get(url,function(jsonObj,success){
        data = jsonObj.menu_items;

        for (const item in data) {
                let temp = data[item].name.toLowerCase();
                let opt=document.createElement("option");
                opt.textContent=temp;
                opt.value=item;
                document.querySelector('#check').appendChild(opt);
    
            }
    });


    let updateCard = document.querySelector("#btn");
    updateCard.addEventListener('click',show);


    function show() {
        
        document.querySelector('#tab').innerHTML="";
        let item=document.querySelector('#check').value;
        let list=data[item];
        for (value in list) {
            let tr=document.createElement("tr");
            let thsr=document.createElement("th");
            thsr.textContent=value;
            tr.appendChild(thsr);
            let tdsr=document.createElement("td");
            tdsr.textContent=list[value];
            tr.appendChild(tdsr);
            document.querySelector('#tab').appendChild(tr);
        }
    }
    
    
});
