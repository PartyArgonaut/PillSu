window.addEventListener('load', function () {
    Theanine1 = parseInt(localStorage.getItem('data1_Theanine'), 10);
    Iron1 = parseInt(localStorage.getItem('data1_Iron'), 10);
    Vitamin_B1 = parseInt(localStorage.getItem('data1_Vitamin_B'), 10);
    Vitamin_C1 = parseInt(localStorage.getItem('data1_Vitamin_C'), 10);
    Vitamin_D1 = parseInt(localStorage.getItem('data1_Vitamin_D'), 10);
    CoenzymeQ1 = parseInt(localStorage.getItem('data1_CoenzymeQ'), 10);
    Probiotics1 = parseInt(localStorage.getItem('data1_Probiotics'), 10);
    Omega_31 = parseInt(localStorage.getItem('data1_Omega_3'), 10);
    Octacosanol1 = parseInt(localStorage.getItem('data1_Octacosanol'), 10);
    MilkThistle1 = parseInt(localStorage.getItem('data1_MilkThistle'), 10);
    Lutein1 = parseInt(localStorage.getItem('data1_Lutein'), 10);
    Gamma_Lenolenic_Acid1 = parseInt(localStorage.getItem('data1_Gamma_Lenolenic_Acid', 10));
    Pantothenic_Acid1 = parseInt(localStorage.getItem('data1_Pantothenic_Acid'), 10);
    Biotin1 = parseInt(localStorage.getItem('data1_Biotin'), 10);
}); // 이 페이지가 열렸을 때 이전 페이지에서 보내온 변수의 값이 필드변수를 업데이트 해야함.

let Theanine1;
let Iron1;
let Vitamin_B1;
let Vitamin_C1;
let Vitamin_D1;
let CoenzymeQ1;
let Probiotics1;
let Omega_31;
let Octacosanol1;
let MilkThistle1;
let Lutein1;
let Gamma_Lenolenic_Acid1;
let Pantothenic_Acid1;
let Biotin1;

function bellyache() { //복통
    Theanine1 += 1;
    Iron1 -= 1;
    Vitamin_B1 += 0;
    Vitamin_C1 -= 1;
    Vitamin_D1 -= 1;
    CoenzymeQ1 += 0;
    Probiotics1 += 3;
    Omega_31 -= 1;
    Octacosanol1 += 0;
    MilkThistle1 += 0;
    Lutein1 += 0;
    Gamma_Lenolenic_Acid1 += 0;
    Pantothenic_Acid1 += 0;
    Biotin1 += 0;
}

function bellyacheCancel() {
    Theanine1 -= 1;
    Iron1 += 1;
    Vitamin_B1 += 0;
    Vitamin_C1 += 1;
    Vitamin_D1 += 1;
    CoenzymeQ1 += 0;
    Probiotics1 -= 3;
    Omega_31 += 1;
    Octacosanol1 += 0;
    MilkThistle1 += 0;
    Lutein1 += 0;
    Gamma_Lenolenic_Acid1 += 0;
    Pantothenic_Acid1 += 0;
    Biotin1 += 0;
}

function constipation() { // 변비 항목 메소드
    Theanine1 += 1;
    Iron1 += 0;
    Vitamin_B1 += 0;
    Vitamin_C1 += 0;
    Vitamin_D1 += 0;
    CoenzymeQ1 += 0;
    Probiotics1 += 4;
    Omega_31 += 0;
    Octacosanol1 += 0;
    MilkThistle1 += 0;
    Lutein1 += 0;
    Gamma_Lenolenic_Acid1 += 0;
    Pantothenic_Acid1 += 0;
    Biotin1 += 0;
}

function constipationCancel() {
    Theanine1 -= 1;
    Iron1 += 0;
    Vitamin_B1 += 0;
    Vitamin_C1 += 0;
    Vitamin_D1 += 0;
    CoenzymeQ1 += 0;
    Probiotics1 -= 4;
    Omega_31 += 0;
    Octacosanol1 += 0;
    MilkThistle1 += 0;
    Lutein1 += 0;
    Gamma_Lenolenic_Acid1 += 0;
    Pantothenic_Acid1 += 0;
    Biotin1 += 0;
}

function diarrhea() { // 묽은 변
    Theanine1 += 1;
    Iron1 -= 2;
    Vitamin_B1 += 0;
    Vitamin_C1 += 0;
    Vitamin_D1 += 0;
    CoenzymeQ1 += 0;
    Probiotics1 += 5;
    Omega_31 -= 1;
    Octacosanol1 += 0;
    MilkThistle1 += 0;
    Lutein1 += 0;
    Gamma_Lenolenic_Acid1 += 1;
    Pantothenic_Acid1 += 0;
    Biotin1 += 0;
}

function diarrheaCancel() { // 
    Theanine1 -= 1;
    Iron1 += 2;
    Vitamin_B1 += 0;
    Vitamin_C1 += 0;
    Vitamin_D1 += 0;
    CoenzymeQ1 += 0;
    Probiotics1 -= 5;
    Omega_31 += 1;
    Octacosanol1 += 0;
    MilkThistle1 += 0;
    Lutein1 += 0;
    Gamma_Lenolenic_Acid1 -= 1;
    Pantothenic_Acid1 += 0;
    Biotin1 += 0;
}

function alcoholTrash() { // 알쓰
    Theanine1 += 0;
    Iron1 += 0;
    Vitamin_B1 += 0;
    Vitamin_C1 += 1;
    Vitamin_D1 += 0;
    CoenzymeQ1 += 0;
    Probiotics1 += 3;
    Omega_31 += 0;
    Octacosanol1 += 0;
    MilkThistle1 += 0;
    Lutein1 += 0;
    Gamma_Lenolenic_Acid1 += 0;
    Pantothenic_Acid1 += 1;
    Biotin1 += 1;
}

function alcoholTrashCancel() { // 
    Theanine1 += 0;
    Iron1 += 0;
    Vitamin_B1 += 0;
    Vitamin_C1 -= 1;
    Vitamin_D1 += 0;
    CoenzymeQ1 += 0;
    Probiotics1 -= 3;
    Omega_31 += 0;
    Octacosanol1 += 0;
    MilkThistle1 += 0;
    Lutein1 += 0;
    Gamma_Lenolenic_Acid1 += 0;
    Pantothenic_Acid1 -= 1;
    Biotin1 -= 1;
}

function residualUrine() { //잔뇨
    Theanine1 += 0;
    Iron1 += 0;
    Vitamin_B1 += 1;
    Vitamin_C1 += 0;
    Vitamin_D1 += 0;
    CoenzymeQ1 += 0;
    Probiotics1 += 0;
    Omega_31 += 0;
    Octacosanol1 += 0;
    MilkThistle1 += 0;
    Lutein1 += 0;
    Gamma_Lenolenic_Acid1 += 0;
    Pantothenic_Acid1 += 0;
    Biotin1 += 0;
}

function residualUrineCancel() {
    Theanine1 += 0;
    Iron1 += 0;
    Vitamin_B1 -= 1;
    Vitamin_C1 += 0;
    Vitamin_D1 += 0;
    CoenzymeQ1 += 0;
    Probiotics1 += 0;
    Omega_31 += 0;
    Octacosanol1 += 0;
    MilkThistle1 += 0;
    Lutein1 += 0;
    Gamma_Lenolenic_Acid1 += 0;
    Pantothenic_Acid1 += 0;
    Biotin1 += 0;
}

function disgestionInterest() { // 관심
    Theanine1 += 0;
    Iron1 += 0;
    Vitamin_B1 += 0;
    Vitamin_C1 += 0;
    Vitamin_D1 += 0;
    CoenzymeQ1 += 0;
    Probiotics1 += 1;
    Omega_31 += 0;
    Octacosanol1 += 0;
    MilkThistle1 += 0;
    Lutein1 += 0;
    Gamma_Lenolenic_Acid1 += 0;
    Pantothenic_Acid1 += 0;
    Biotin1 += 0;
}

function disgestionInterestCancel() { // 
    Theanine1 += 0;
    Iron1 += 0;
    Vitamin_B1 += 0;
    Vitamin_C1 += 0;
    Vitamin_D1 += 0;
    CoenzymeQ1 += 0;
    Probiotics1 -= 1;
    Omega_31 += 0;
    Octacosanol1 += 0;
    MilkThistle1 += 0;
    Lutein1 += 0;
    Gamma_Lenolenic_Acid1 += 0;
    Pantothenic_Acid1 += 0;
    Biotin1 += 0;
}

const srv2_checkbox1 = document.getElementById('checkbox_bellyache');
const srv2_checkbox2 = document.getElementById('checkbox_constipation');
const srv2_checkbox3 = document.getElementById('checkbox_diarrhea');
const srv2_checkbox4 = document.getElementById('checkbox_alcoholTrash');
const srv2_checkbox5 = document.getElementById('checkbox_residualUrine');
const srv2_checkbox6 = document.getElementById('checkbox_disgestionInterest');

const srv2_question2_before = document.getElementById('question2_before');
const srv2_question2_next = document.getElementById('question2_next');

srv2_checkbox1.addEventListener('change', function () {
    if (srv2_checkbox1.checked) {
        bellyache();
    } else {
        bellyacheCancel();
    }
});

srv2_checkbox2.addEventListener('change', function () {
    if (srv2_checkbox2.checked) {
        constipation();
    } else {
        constipationCancel();
    }
});

srv2_checkbox3.addEventListener('change', function () {
    if (srv2_checkbox3.checked) {
        diarrhea();
    } else {
        diarrheaCancel();
    }
});

srv2_checkbox4.addEventListener('change', function () {
    if (srv2_checkbox4.checked) {
        alcoholTrash();
    } else {
        alcoholTrashCancel();
    }
});

srv2_checkbox5.addEventListener('change', function () {
    if (srv2_checkbox5.checked) {
        residualUrine();
    } else {
        residualUrineCancel();
    }
})

srv2_checkbox6.addEventListener('change', function () {
    if (srv2_checkbox6.checked) {
        disgestionInterest();
    } else {
        disgestionInterestCancel();
    }
});

srv2_question2_before.addEventListener('click', function () {
    window.location.href = '/survey1';
});

srv2_question2_next.addEventListener('click', function () {
    localStorage.setItem('data2_Theanine', Theanine1);
    localStorage.setItem('data2_Iron', Iron1);
    localStorage.setItem('data2_Vitamin_B', Vitamin_B1);
    localStorage.setItem('data2_Vitamin_C', Vitamin_C1);
    localStorage.setItem('data2_Vitamin_D', Vitamin_D1);
    localStorage.setItem('data2_CoenzymeQ', CoenzymeQ1);
    localStorage.setItem('data2_Probiotics', Probiotics1);
    localStorage.setItem('data2_Omega_3', Omega_31);
    localStorage.setItem('data2_Octacosanol', Octacosanol1);
    localStorage.setItem('data2_MilkThistle', MilkThistle1);
    localStorage.setItem('data2_Lutein', Lutein1);
    localStorage.setItem('data2_Gamma_Lenolenic_Acid', Gamma_Lenolenic_Acid1);
    localStorage.setItem('data2_Pantothenic_Acid', Pantothenic_Acid1);
    localStorage.setItem('data2_Biotin', Biotin1);

    window.location.href = '/survey3'
});

var score_check_btn = document.getElementById('score_check_btn')
score_check_btn.onclick = function () {
    console.log(Theanine1);
    console.log(Iron1);
    console.log(Vitamin_B1);
    console.log(Vitamin_C1);
    console.log(Vitamin_D1);
    console.log(CoenzymeQ1);
    console.log(Probiotics1);
    console.log(Omega_31);
    console.log(Octacosanol1);
    console.log(MilkThistle1);
    console.log(Lutein1);
    console.log(Gamma_Lenolenic_Acid1);
    console.log(Pantothenic_Acid1);
    console.log(Biotin1);
}
// 작업완료