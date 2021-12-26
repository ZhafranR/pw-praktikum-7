   // Add City Based On Province
   function addList(){
    var output = document.getElementsByClassName("dropdown3")[0]
    while (output.firstChild) {
        output.removeChild(output.lastChild);
    }

    var provinsi = document.getElementsByClassName("dropdown__filter-selected")[0].innerText;
    var kota = document.getElementById("kota-menu");
    var popup = document.getElementsByClassName("dropdown2__filter-selected")[0];
    popup.innerText = "Kota...";

    while (kota.firstChild) {
        kota.removeChild(kota.lastChild);
    }

    var kotaAceh = ["Meulaboh", "Blangpidie", "Brawe", "Lampu'uk", "Ulelhe"];
    var kotaKalTim = ["Samarinda", "Balikpapan", "Tenggarong", "Sangata", "Bontang"];
    var kotaJaBar = ["Bandung", "Bekasi", "Bogor", "Depok", "Sukabumi"];
    var kotaJaTeng = ["Batang", "Banjarnegara", "Purworkerto", "Boyolali", "Jepara"];

    if(provinsi=='ACEH'){
        for(var i=0; i<kotaAceh.length; i++){
            var x = document.createElement("LI");
            x.className += "dropdown2__select-option";

            var t = document.createTextNode(kotaAceh[i]);
            x.appendChild(t);
            document.getElementById("kota-menu").appendChild(x);
        }
    } else if(provinsi=='KALIMANTAN UTARA'){
        for(var i=0; i<kotaKalTim.length; i++){
            var x = document.createElement("LI");
            x.className += "dropdown2__select-option";

            var t = document.createTextNode(kotaKalTim[i]);
            x.appendChild(t);
            document.getElementById("kota-menu").appendChild(x);
        }
    } else if(provinsi=='JAWA BARAT'){
        for(var i=0; i<kotaJaBar.length; i++){
            var x = document.createElement("LI");
            x.className += "dropdown2__select-option";

            var t = document.createTextNode(kotaJaBar[i]);
            x.appendChild(t);
            document.getElementById("kota-menu").appendChild(x);
        }
    } else if(provinsi=='JAWA TENGAH'){
        for(var i=0; i<kotaJaTeng.length; i++){
            var x = document.createElement("LI");
            x.className += "dropdown2__select-option";

            var t = document.createTextNode(kotaJaTeng[i]);
            x.appendChild(t);
            document.getElementById("kota-menu").appendChild(x);
        }
    }

    // Change option selected
    const label2 = document.querySelector('.dropdown2__filter-selected');
    const options2 = Array.from(document.querySelectorAll('.dropdown2__select-option'));

    options2.forEach((option) => {
        option.addEventListener('click', () => {
            label2.textContent = option.textContent;
        })
    })

    // Close dropdown onclick outside
    document.addEventListener('click', (e) => {
        const toggle2 = document.querySelector('.dropdown2__switch');
        const element2 = e.target;

        if (element2 == toggle2) return;

        const isDropdownChild2 = element2.closest('.dropdown2__filter');
        
        if (!isDropdownChild2) {
            toggle2.checked = false;
        }
    })
}

// Change option selected
const label = document.querySelector('.dropdown__filter-selected');
const options = Array.from(document.querySelectorAll('.dropdown__select-option'));

options.forEach((option) => {
    option.addEventListener('click', () => {
        label.textContent = option.textContent;
    })
})

// Close dropdown onclick outside
document.addEventListener('click', (e) => {
    const toggle = document.querySelector('.dropdown__switch');
    const element = e.target;

    if (element == toggle) return;

    const isDropdownChild = element.closest('.dropdown__filter');		
    
    if (!isDropdownChild) {
        toggle.checked = false;
    }
})


function addText(){
    var output = document.getElementsByClassName("dropdown3")[0]
    while (output.firstChild) {
        output.removeChild(output.lastChild);
    }

    var provinsi = document.getElementsByClassName("dropdown__filter-selected")[0].innerText;
    var kota = document.getElementsByClassName("dropdown2__filter-selected")[0].innerText;
    var string = `Pada Provinsi ${provinsi} Terdapat Kota ${kota}`;
    var h1 = document.createElement('H1');
    var text = document.createTextNode(string);

    // console.log(provinsi);
    // console.log(kota);
    // console.log(string);
    // console.log(h1);
    // console.log(text);

    h1.appendChild(text);
    document.getElementsByClassName('dropdown3')[0].appendChild(h1);
}
