
function getValue() {
    let crdNum = document.getElementById("crd-num");
    let crdValue = crdNum.value;

    let chNme = document.getElementById("ch-name");
    let chValue = chNme.value;

    let mnth = document.getElementById("month");
    let mnthValue = mnth.value;

    let yr = document.getElementById("year");
    let yrValue = yr.value;

    let cvc1 = document.getElementById("cvc");
    let cvcValue = cvc1.value;

    let result = document.getElementById("result");
    result.innerText = crdValue;
    
    let result3 = document.getElementById("result3");
    result3.innerText = chValue;
    
    let result4 = document.getElementById("result4");
    result4.innerText = mnthValue;

    let result5 = document.getElementById("result5");
    result5.innerText = yrValue;

    let result6 = document.getElementById("result6");
    result6.innerText = cvcValue;

    if (crdValue.length > 16) {
        crdValue = crdValue.slice(0, 19);
        crdNum.value = crdValue;
    }

    if (mnthValue.length > 2) {
        mnthValue = mnthValue.slice(0, 2);
        mnth.value = mnthValue;
    }

    if (yrValue.length > 2) {
        yrValue = yrValue.slice(0, 2);
        yr.value = yrValue;
    }

    if (cvcValue.length > 3) {
        cvcValue = cvcValue.slice(0, 3);
        cvc1.value = cvcValue;
    }

    if (/^[1-9]$|^[0][1-9]$|^[1][0-2]$/.test(mnthValue)) {
        result4.innerText = mnthValue + "/";
    } else {
        result4.innerText = mnthValue; // Revert to the original value if not valid
    }

}
document.addEventListener("DOMContentLoaded", function () {
const emsg1 = document.getElementById("emsg1");
const emsg2 = document.getElementById("emsg2");
const emsg3 = document.getElementById("emsg3");
const emsg4 = document.getElementById("emsg4");
const crdhName = document.getElementById("ch-name");
const btn1 = document.getElementById("btn");
const crdNmbr = document.getElementById("crd-num");
const mnth = document.getElementById("month");
const yr = document.getElementById("year");
const cvc1 = document.getElementById("cvc");
const dskThku = document.getElementById("dsktp-thnkyu");
const cBtn = document.getElementById("cntnu-btn");
const pcnum = document.getElementById("pcn");



btn1.addEventListener("click", function () {
    if (crdhName.value.trim() === "") {
        emsg1.style.opacity = "1";
        crdhName.style.borderColor = "hsl(0, 100%, 66%)";
    } else {
        emsg1.style.opacity = "0";
        crdhName.style.borderColor = "hsl(270, 3%, 87%)";
    }
    if (!/^[0-9]+$/.test(crdNmbr)) {
        emsg2.style.opacity = "1";
        crdNmbr.style.borderColor = "hsl(0, 100%, 66%)";
    } else {
        emsg2.style.opacity = "0";
        crdNmbr.style.borderColor = "hsl(270, 3%, 87%)";
    }
    if (mnth.value.trim() === "") {
        emsg3.style.opacity = "1";
        mnth.style.borderColor = "hsl(0, 100%, 66%)";
        
    } else {
        emsg3.style.opacity = "0";
        mnth.style.borderColor = "hsl(270, 3%, 87%)";
    }
    if (yr.value.trim() === "") {
        yr.style.borderColor = "hsl(0, 100%, 66%)";
    } else {
        yr.style.borderColor = "hsl(270, 3%, 87%)";
    }

    if (cvc1.value.trim() === "") {
        emsg4.style.opacity = "1";
        cvc1.style.borderColor = "hsl(0, 100%, 66%)";
    } else {
        emsg4.style.opacity = "0";
        cvc1.style.borderColor = "hsl(270, 3%, 87%)";
        dskThku.style.opacity = "1";
        crdhName.style.opacity = "0";
        crdNmbr.style.opacity = "0";
        mnth.style.opacity = "0";
        yr.style.opacity = "0";
        cvc1.style.opacity = "0";
        btn1.style.opacity = "0";
        pcnum.style.opacity = "0";
    }
    cBtn.addEventListener("click", function() {
        dskThku.style.opacity = "0";
        crdhName.style.opacity = "1";
        crdNmbr.style.opacity = "1";
        mnth.style.opacity = "1";
        yr.style.opacity = "1";
        cvc1.style.opacity = "1";
        btn1.style.opacity = "1";
        pcnum.style.opacity = "1";
    });
});
});
