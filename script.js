function letrehoz() {
    //Lépések, amit követhet:
    //Az üres DIV megkeresése. Ebbe tesszük majd a listát
    let DIV_generalt_lista = document.getElementById("DIV_generalt_lista");
    //Az <ol> elem (node) létrehozása
    let ol_elem = document.createElement("ol");
    //Behelyezés a DIV-be
    DIV_generalt_lista.append(ol_elem);
    //Jöhetnek az <li> elemek
    //Hány elem van? Olvassuk ki!
    let elemek_szam = document.getElementById("elemek_szam").value;
    //Egy listaelem létrehozása, utána az <ol> gyermekeként felvétel
    for (let index = 0; index < elemek_szam; index++) {
        ol_elem.append(document.createElement("li"));
    }
}

function szinez() {
    //nth-child() - hoz szükséges értékek beszerzése
    let nth_first = document.getElementById("nth_first").value;
    let nth_n = document.getElementById("nth_n").value;
    let szinek_listaja = document.getElementById("szinek_listaja").value;
    //Lekérjük azokn az <li> elemeknek a kollekcióját, amelyekre igaz a szelektor

    let ossz_li_elem = document.getElementsByTagName("li");
    //Végigmegyünk minden elemen és a listában megadott színűre állítjuk a backgroundColor-t
    for (let index = 0; index < ossz_li_elem.length; index++) {
        if (nth_first - 1 == index) {
            ossz_li_elem[index].style.backgroundColor = szinek_listaja;
        }
    }
}

function szelektorParamterValtozas(kuldo, mi_valtozott) {
    document.getElementById(mi_valtozott).innerHTML = kuldo.value;
}

function szinekTorles() {
    let osszes_li_elem = document.getElementsByTagName("li");
    for (let index = 0; index < osszes_li_elem.length; index++) {
        osszes_li_elem[index].style.backgroundColor = "";
    }
}