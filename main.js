var a = 1;
var b = 10;
var c = 1;
var d = 1;
var points = 0;
var addup1cost = 10;
var addup1owned = 0;
var addup2cost = 100;
var addup2owned = 0;
var addmulti = 1;
var addadd = 0;
var addup3owned = 0;
var addup3cost = 10000;
var addexpo = 1;

var conup1cost = 10000;
var conup1owned = 0;
var conup2cost = 100000;
var conup2owned = 0;
var conmulti = 1;
var conadd = 0;
var conup3owned = 0;
var conup3cost = 1000000;
var conexpo = 1;

var varup1cost = 1000;
var varup1owned = 0;
var varup2cost = 10000;
var varup2owned = 0;
var varmulti = 1;
var varadd = 0;
var varup3owned = 0;
var varup3cost = 100000;
var varexpo = 1;

var expup1cost = 5000;
var expup1owned = 0;
var expup2cost = 50000;
var expup2owned = 0;
var expmult2 = 1;
var expmult1 = 1;
var expup3owned = 0;
var expup3cost = 500000;
var expexpo = 1;

var funcval;
var ptmult = 1;

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

function playtestmode() {
    ptmult = ptmult*10
}

function menutoggle1() {
    var x = document.getElementById("menutoggle1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function menutoggle2() {
    var x = document.getElementById("menutoggle2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function menutoggle3() {
    var x = document.getElementById("menutoggle3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function menutoggle4() {
    var x = document.getElementById("menutoggle4");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function menutoggle5() {
    var x = document.getElementById("menutoggle5");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function additionupgrade1() {
    if(points >= addup1cost){
        points -= addup1cost
        addup1owned += 1
        addup1cost = addup1cost + (addup1owned+(5**(1.1)));
        addadd += 1
    }
  }
  function additionupgrade2() {
    if(points >= addup2cost){
        points -= addup2cost
        addup2owned += 1
        addup2cost = addup2cost + (addup2owned+(100**(1.1)));
        addmulti += 1
    }
  }
  function additionupgrade3() {
    if(points >= addup3cost){
        points -= addup3cost
        addup3owned += 1
        addup3cost = addup3cost + (addup3owned+(10000**(1.1)));
        addexpo += 0.3
    }
  }
  function constantupgrade1() {
    if(points >= conup1cost){
        points -= conup1cost
        conup1owned += 1
        conup1cost = conup1cost + (conup1owned+(5000^(1.1)));
        conadd += 1
    }
  }
  function constantupgrade2() {
    if(points >= conup2cost){
        points -= conup2cost
        conup2owned += 1
        conup2cost = conup2cost + (conup2owned+(50000**(1.1)));
        conmulti += 1
    }
  }
  function constantupgrade3() {
    if(points >= conup3cost){
        points -= conup3cost
        conup3owned += 1
        conup3cost = conup3cost + (conup3owned+(500000**(1.1)));
        conexpo += 0.3
    }
  }
  function varupgrade1() {
    if(points >= varup1cost){
        points -= varup1cost
        varup1owned += 1
        varup1cost = varup1cost + (varup1owned+(500^(1.1)));
        varadd += 100
    }
  }
  function varupgrade2() {
    if(points >= varup2cost){
        points -= varup2cost
        varup2owned += 1
        varup2cost = varup2cost + (varup2owned+(5000**(1.1)));
        varmulti += 10
    }
  }
  function varupgrade3() {
    if(points >= varup3cost){
        points -= varup3cost
        varup3owned += 1
        varup3cost = varup3cost + (varup3owned+(50000**(1.1)));
        varexpo += 1
    }
  }
  function expupgrade1() {
    if(points >= expup1cost){
        points -= expup1cost
        expup1owned += 1
        expup1cost = expup1cost + (expup1owned+(2500^(1.1)));
        expmult1 = expmult1*0.9
    }
  }
  function expupgrade2() {
    if(points >= expup2cost){
        points -= expup2cost
        expup2owned += 1
        expup2cost = expup2cost + (expup2owned+(5000**(1.1)));
        expmult2 = expmult2*0.9
    }
  }
  function expupgrade3() {
    if(points >= expup3cost){
        points -= expup3cost
        expup3owned += 1
        expup3cost = expup3cost + (expup3owned+(50000**(1.1)));
        expexpo = expexpo*0.9
    }
  }

  setInterval(function() {
    // var costroundsetup = [addup1cost, addup2cost, addup3cost, conup1cost, conup2cost, conup3cost]
    // var costrounddisplay = [add1, add2, add3, con1, con2, con3]
    // for(i = 0; i < costroundsetup.length; i++) {
    //     costrounddisplay[i] = Math.round(costroundsetup[i]);
    // }
    var tempadd1 = Math.round(addup1cost);
    var tempadd2 = Math.round(addup2cost);
    var tempadd3 = Math.round(addup3cost);
    var tempcon1 = Math.round(conup1cost);
    var tempcon2 = Math.round(conup2cost);
    var tempcon3 = Math.round(conup3cost);
    var tempvar1 = Math.round(varup1cost);
    var tempvar2 = Math.round(varup2cost);
    var tempvar3 = Math.round(varup3cost);
    var tempexp1 = Math.round(expup1cost);
    var tempexp2 = Math.round(expup2cost);
    var tempexp3 = Math.round(expup3cost);
    var tempd = ((d+addadd)*addmulti)**addexpo;
    var tempa = ((a+conadd)*conmulti)**conexpo;
    var tempc = ((c+varadd)*varmulti)**varexpo;
    var tempb = ((b*expmult1)*expmult2)**expexpo;
    var tempddisplay = Math.round(tempd);
    var tempadisplay = Math.round(tempa);
    var tempcdisplay = Math.round(tempc);
    var tempbdisplay = Math.round(tempb);
    funcval = ptmult*((tempa*getBaseLog(tempb, tempc))+tempd);
    displayfuncval = Math.round(funcval);
    points += (funcval/10);
    pointsdisplay = Math.round(points);
    document.getElementById("functionvalue").innerHTML = "Value of your function: " + displayfuncval + " = " + tempadisplay + "*log" + tempbdisplay + "(" + tempcdisplay + ")" + "+" + tempddisplay;
    document.getElementById("pps").innerHTML = "Production/s = " + displayfuncval;
    document.getElementById("points").innerHTML = "Points = " + pointsdisplay;
    document.getElementById("addup1").innerHTML = "Increases d by 1 - Purchase for " + tempadd1 + " Points.";
    document.getElementById("addup2").innerHTML = "Adds 1 to d's multiplier - Purchase for " + tempadd2 + " Points.";
    document.getElementById("addup3").innerHTML = "Adds 0.3 to d's exponent - Purchase for " + tempadd3 + " Points.";
    document.getElementById("conup1").innerHTML = "Increases a by 1 - Purchase for " + tempcon1 + " Points.";
    document.getElementById("conup2").innerHTML = "Adds 1 to a's multiplier - Purchase for " + tempcon2 + " Points.";
    document.getElementById("conup3").innerHTML = "Adds 0.3 to a's exponent - Purchase for " + tempcon3 + " Points.";
    document.getElementById("varup1").innerHTML = "Increases c by 100 - Purchase for " + tempvar1 + " Points.";
    document.getElementById("varup2").innerHTML = "Adds 10 to c's multiplier - Purchase for " + tempvar2 + " Points.";
    document.getElementById("varup3").innerHTML = "Adds 1 to c's exponent - Purchase for " + tempvar3 + " Points.";
    document.getElementById("expup1").innerHTML = "Multiplies b by 0.9 - Purchase for " + tempexp1 + " Points.";
    document.getElementById("expup2").innerHTML = "Multiplies b's multiplier by 0.9 - Purchase for " + tempexp2 + " Points.";
    document.getElementById("expup3").innerHTML = "Multiplies b's exponent by 0.9 - Purchase for " + tempexp3 + " Points.";
  }, 100);