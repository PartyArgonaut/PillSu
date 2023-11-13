window.addEventListener('load', function () { // 뉴트리션 뒤에 숫자, data뒤에 숫자 수정
    Theanine9 = parseInt(localStorage.getItem('data9_Theanine'), 10);
    Iron9 = parseInt(localStorage.getItem('data9_Iron'), 10);
    Vitamin_B9 = parseInt(localStorage.getItem('data9_Vitamin_B'), 10);
    Vitamin_C9 = parseInt(localStorage.getItem('data9_Vitamin_C'), 10);
    Vitamin_D9 = parseInt(localStorage.getItem('data9_Vitamin_D'), 10);
    CoenzymeQ9 = parseInt(localStorage.getItem('data9_CoenzymeQ'), 10);
    Probiotics9 = parseInt(localStorage.getItem('data9_Probiotics'), 10);
    Omega_39 = parseInt(localStorage.getItem('data9_Omega_3'), 10);
    Octacosanol9 = parseInt(localStorage.getItem('data9_Octacosanol'), 10);
    MilkThistle9 = parseInt(localStorage.getItem('data9_MilkThistle'), 10);
    Lutein9 = parseInt(localStorage.getItem('data9_Lutein'), 10);
    Gamma_Lenolenic_Acid9 = parseInt(localStorage.getItem('data9_Gamma_Lenolenic_Acid', 10));
    Pantothenic_Acid9 = parseInt(localStorage.getItem('data9_Pantothenic_Acid'), 10);
    Biotin9 = parseInt(localStorage.getItem('data9_Biotin'), 10);
});

let Theanine9; // 뉴트리션숫자 수정
let Iron9;
let Vitamin_B9;
let Vitamin_C9;
let Vitamin_D9;
let CoenzymeQ9;
let Probiotics9;
let Omega_39;
let Octacosanol9;
let MilkThistle9;
let Lutein9;
let Gamma_Lenolenic_Acid9;
let Pantothenic_Acid9;
let Biotin9;

function stiff() { // 뻐근 항목 메소드
    Theanine9 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron9 += 0;
    Vitamin_B9 += 1;
    Vitamin_C9 += 0;
    Vitamin_D9 += 0;
    CoenzymeQ9 += 0;
    Probiotics9 += 0;
    Omega_39 += 1;
    Octacosanol9 += 0;
    MilkThistle9 += 0;
    Lutein9 += 0;
    Gamma_Lenolenic_Acid9 += 1;
    Pantothenic_Acid9 += 1;
    Biotin9 += 3;
}

function stiffCancel() { // 뻐근 항목 취소 메소드
    Theanine9 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron9 += 0;
    Vitamin_B9 -= 1;
    Vitamin_C9 += 0;
    Vitamin_D9 += 0;
    CoenzymeQ9 += 0;
    Probiotics9 += 0;
    Omega_39 -= 1;
    Octacosanol9 += 0;
    MilkThistle9 += 0;
    Lutein9 += 0;
    Gamma_Lenolenic_Acid9 -= 1;
    Pantothenic_Acid9 -= 1;
    Biotin9 -= 3;
}

function exhaustion() { // 급피곤 항목 메소드
    Theanine9 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron9 += 2;
    Vitamin_B9 += 3;
    Vitamin_C9 += 1;
    Vitamin_D9 += 1;
    CoenzymeQ9 += 0;
    Probiotics9 += 0;
    Omega_39 += 0;
    Octacosanol9 += 2;
    MilkThistle9 += 1;
    Lutein9 += 0;
    Gamma_Lenolenic_Acid9 += 0;
    Pantothenic_Acid9 += 2;
    Biotin9 += 1;
}

function exhaustionCancel() { // 급피곤 항목 취소 메소드
    Theanine9 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron9 -= 2;
    Vitamin_B9 -= 3;
    Vitamin_C9 -= 1;
    Vitamin_D9 -= 1;
    CoenzymeQ9 += 0;
    Probiotics9 += 0;
    Omega_39 += 0;
    Octacosanol9 -= 2;
    MilkThistle9 -= 1;
    Lutein9 += 0;
    Gamma_Lenolenic_Acid9 += 0;
    Pantothenic_Acid9 -= 2;
    Biotin9 -= 1;
}

function debilitation() { // 신체능력저하 항목 메소드
    Theanine9 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron9 += 2;
    Vitamin_B9 += 2;
    Vitamin_C9 += 1;
    Vitamin_D9 += 1;
    CoenzymeQ9 += 0;
    Probiotics9 += 0;
    Omega_39 += 1;
    Octacosanol9 += 3;
    MilkThistle9 += 0;
    Lutein9 += 0;
    Gamma_Lenolenic_Acid9 += 0;
    Pantothenic_Acid9 += 1;
    Biotin9 += 1;
}

function debilitationCancel() { // 신체능력저하 항목 취소 메소드
    Theanine9 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron9 -= 2;
    Vitamin_B9 -= 2;
    Vitamin_C9 -= 1;
    Vitamin_D9 -= 1;
    CoenzymeQ9 += 0;
    Probiotics9 += 0;
    Omega_39 -= 1;
    Octacosanol9 -= 3;
    MilkThistle9 += 0;
    Lutein9 += 0;
    Gamma_Lenolenic_Acid9 += 0;
    Pantothenic_Acid9 -= 1;
    Biotin9 -= 1;
}

function energyInterest() { // 관심 항목 메소드
    Theanine9 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron9 += 1;
    Vitamin_B9 += 1;
    Vitamin_C9 += 0;
    Vitamin_D9 += 1;
    CoenzymeQ9 += 0;
    Probiotics9 += 0;
    Omega_39 += 0;
    Octacosanol9 += 1;
    MilkThistle9 += 0;
    Lutein9 += 0;
    Gamma_Lenolenic_Acid9 += 0;
    Pantothenic_Acid9 += 1;
    Biotin9 += 1;
}

function energyInterestCancel() { // 관심 항목 취소 메소드
    Theanine9 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron9 -= 1;
    Vitamin_B9 -= 1;
    Vitamin_C9 += 0;
    Vitamin_D9 -= 1;
    CoenzymeQ9 += 0;
    Probiotics9 += 0;
    Omega_39 += 0;
    Octacosanol9 -= 1;
    MilkThistle9 += 0;
    Lutein9 += 0;
    Gamma_Lenolenic_Acid9 += 0;
    Pantothenic_Acid9 -= 1;
    Biotin9 -= 1;
}

const srv10_checkbox1 = document.getElementById('checkbox_stiff'); //srv숫자 check숫자 수정 = id값 수정
const srv10_checkbox2 = document.getElementById('checkbox_exhaustion');
const srv10_checkbox3 = document.getElementById('checkbox_debilitation');
const srv10_checkbox4 = document.getElementById('checkbox_energyInterest');

const srv10_question9_before = document.getElementById('question10_before'); //srv숫자 question숫자 수정 = id값 수정
const srv10_question9_next = document.getElementById('question10_next');

srv10_checkbox1.addEventListener('change', function () { //srv숫자 check숫자 수정, 메소드명 수정
    if (srv10_checkbox1.checked) {
        stiff(); 
    } else {
        stiffCancel();
    }
});

srv10_checkbox2.addEventListener('change', function () {
    if (srv10_checkbox2.checked) {
        exhaustion();
    } else {
        exhaustionCancel();
    }
});

srv10_checkbox3.addEventListener('change', function () {
    if (srv10_checkbox3.checked) {
        debilitation();
    } else {
        debilitationCancel();
    }
});

srv10_checkbox4.addEventListener('change', function () {
    if (srv10_checkbox4.checked) {
        energyInterest();
    } else {
        energyInterestCancel();
    }
});

srv10_question9_before.addEventListener('click', function () { // srv숫자 question숫자 수정
    window.location.href = '/survey9'; // 주소 수정
});

srv10_question9_next.addEventListener('click', function () {
    localStorage.setItem('data10_Theanine', Theanine9); //data숫자, 영양소명 숫자 수정
    localStorage.setItem('data10_Iron', Iron9);
    localStorage.setItem('data10_Vitamin_B', Vitamin_B9);
    localStorage.setItem('data10_Vitamin_C', Vitamin_C9);
    localStorage.setItem('data10_Vitamin_D', Vitamin_D9);
    localStorage.setItem('data10_CoenzymeQ', CoenzymeQ9);
    localStorage.setItem('data10_Probiotics', Probiotics9);
    localStorage.setItem('data10_Omega_3', Omega_39);
    localStorage.setItem('data10_Octacosanol', Octacosanol9);
    localStorage.setItem('data10_MilkThistle', MilkThistle9);
    localStorage.setItem('data10_Lutein', Lutein9);
    localStorage.setItem('data10_Gamma_Lenolenic_Acid', Gamma_Lenolenic_Acid9);
    localStorage.setItem('data10_Pantothenic_Acid', Pantothenic_Acid9);
    localStorage.setItem('data10_Biotin', Biotin9);

    window.location.href = '/survey11'; // 주소 수정
});

var score_check_btn = document.getElementById('score_check_btn')
score_check_btn.onclick = function () { // 뉴트리션 숫자 수정
    console.log(Theanine9);
    console.log(Iron9);
    console.log(Vitamin_B9);
    console.log(Vitamin_C9);
    console.log(Vitamin_D9);
    console.log(CoenzymeQ9);
    console.log(Probiotics9);
    console.log(Omega_39);
    console.log(Octacosanol9);
    console.log(MilkThistle9);
    console.log(Lutein9);
    console.log(Gamma_Lenolenic_Acid9);
    console.log(Pantothenic_Acid9);
    console.log(Biotin9);
}

// 작업완료