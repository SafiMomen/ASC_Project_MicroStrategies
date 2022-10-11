let SuicidesTag = document.getElementById("suicides_happening");
let Suicides_ = 0;

let Box_One_Info = document.getElementById("BoxOneInfo");
let Box_Two_Info = document.getElementById("BoxTwoInfo");
let Box_Three_Info = document.getElementById("BoxThreeInfo");

let Input_One = document.getElementById("InputOne");
let Input_Two = document.getElementById("InputTwo");
let Input_Three = document.getElementById("InputThree");

SuicidesTag.innerHTML = Suicides_.toString();

const add = () => {
    Suicides_ = Suicides_ + 1;
    SuicidesTag.innerHTML = Suicides_.toString();
}

setInterval(add, 40000);

let BoxOneMainValue = 1;
// (24 hOURS * 60 min * 60 sec) / 40 sec per death = 2160 deaths
Box_One_Info.innerHTML = (BoxOneMainValue * 2160); 

Input_One.addEventListener("change", (e) => {
    let value = e.target.value;
    value = parseInt(value);

    if (value != null || value != undefined) {
        value = Math.max(value, 1);
        e.target.value = value;

        BoxOneMainValue = value;
        Box_One_Info.innerHTML = (BoxOneMainValue * 2160);
    }
})




let BoxTwoMainValue = 1;
// (24 hOURS * 60 min * 60 sec) / 40 sec per death = 2160 deaths
Box_Two_Info.innerHTML = (BoxTwoMainValue * 47511); 

Input_Two.addEventListener("change", (e) => {
    let value = e.target.value;
    value = parseInt(value);

    if (value != null || value != undefined) {
        value = Math.max(value, 1);
        e.target.value = value;

        BoxTwoMainValue = value;
        Box_Two_Info.innerHTML = (BoxTwoMainValue * 47511);
    }
})


const clamp = (num, min, max) => Math.min(Math.max(num, min), max);


let YearSince = 2020;
let BoxThreeMainValue = 2021 - YearSince;
// (24 hOURS * 60 min * 60 sec) / 40 sec per death = 2160 deaths
Box_Three_Info.innerHTML = (BoxThreeMainValue * 2160 * 365); 

Input_Three.maxlength = 4;
Input_Three.addEventListener("change", (e) => {
    let value = e.target.value;
    value = parseInt(value);

    if (value != null || value != undefined) {
        value = clamp(value, 1990, 2020);
        YearSince = value;

        e.target.value = YearSince;
        BoxThreeMainValue = 2021 - YearSince;
        Box_Three_Info.innerHTML = (BoxThreeMainValue * 2160 * 365);
    }
})



