function calculer() {
    var nb1 = document.getElementById("A").value;
    var nb2 = document.getElementById("B").value;
    res.innerHTML = parseInt(nb1) + parseInt(nb2);
}

function multiple() {
    var nb3 = document.getElementById("C").value;
    var nb4 = document.getElementById("D").value;
    res1.innerHTML = parseInt(nb3) * parseInt(nb4);
}

function npp() {
    var nom = document.getElementById("nombre").value;
    if (!isNaN(nom)){
        document.getElementById("nbrp").innerHTML = "- " + nom + " est un nombre";
        if (nom%2 == 0){
            document.getElementById("pairp").innerHTML = "- " + nom + " est un nombre pair";
        } else {
            document.getElementById("pairp").innerHTML = "- " + nom + " est un nombre impair";
        }
        var compt = true;
        for (var i=2; i <= nom/2; i++){
            var valide;
            valide = nom%i;
            if ( valide == 0) {
                compt = false;
            }
            else {
                compt = true;
            }
        }
        if (compt == true) {
            document.getElementById("premp").innerHTML = "- " + nom + " est un nombre premier";
        } else {
            document.getElementById("premp").innerHTML = "- " + nom + " n'est pas un nombre premier";
        }
    } else {
        document.getElementById("nbrp").innerHTML = "- " + nom + " n'est pas un nombre";
    }
}

function un() {
    var x = document.getElementById("entree").value
    entree.textContent = entree.textContent + "1";
}

function deux() {
    var y = document.getElementById("entree").value;
    entree.textContent = entree.textContent + "2";
}

function plus() {
    var p = document.getElementById("entree").value;
    entree.textContent = entree.textContent + "+";
}