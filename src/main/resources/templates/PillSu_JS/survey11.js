window.addEventListener('load', function () { // 뉴트리션 뒤에 숫자, data뒤에 숫자 수정
    Theanine10 = parseInt(localStorage.getItem('data10_Theanine'), 10);
    Iron10 = parseInt(localStorage.getItem('data10_Iron'), 10);
    Vitamin_B10 = parseInt(localStorage.getItem('data10_Vitamin_B'), 10);
    Vitamin_C10 = parseInt(localStorage.getItem('data10_Vitamin_C'), 10);
    Vitamin_D10 = parseInt(localStorage.getItem('data10_Vitamin_D'), 10);
    CoenzymeQ10 = parseInt(localStorage.getItem('data10_CoenzymeQ'), 10);
    Probiotics10 = parseInt(localStorage.getItem('data10_Probiotics'), 10);
    Omega_310 = parseInt(localStorage.getItem('data10_Omega_3'), 10);
    Octacosanol10 = parseInt(localStorage.getItem('data10_Octacosanol'), 10);
    MilkThistle10 = parseInt(localStorage.getItem('data10_MilkThistle'), 10);
    Lutein10 = parseInt(localStorage.getItem('data10_Lutein'), 10);
    Gamma_Lenolenic_Acid10 = parseInt(localStorage.getItem('data10_Gamma_Lenolenic_Acid', 10));
    Pantothenic_Acid10 = parseInt(localStorage.getItem('data10_Pantothenic_Acid'), 10);
    Biotin10 = parseInt(localStorage.getItem('data10_Biotin'), 10);
});

let Theanine10; // 뉴트리션숫자 수정
let Iron10;
let Vitamin_B10;
let Vitamin_C10;
let Vitamin_D10;
let CoenzymeQ10;
let Probiotics10;
let Omega_310;
let Octacosanol10;
let MilkThistle10;
let Lutein10;
let Gamma_Lenolenic_Acid10;
let Pantothenic_Acid10;
let Biotin10;

function highBlood() { // 고혈압 항목 메소드
    Theanine10 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron10 += 0;
    Vitamin_B10 += 0;
    Vitamin_C10 += 0;
    Vitamin_D10 += 0;
    CoenzymeQ10 += 4;
    Probiotics10 += 0;
    Omega_310 += 3;
    Octacosanol10 += 0;
    MilkThistle10 += 0;
    Lutein10 += 0;
    Gamma_Lenolenic_Acid10 += 2;
    Pantothenic_Acid10 += 0;
    Biotin10 += 0;
}

function highBloodCancel() { // 고혈압 항목 취소 메소드
    Theanine10 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron10 += 0;
    Vitamin_B10 += 0;
    Vitamin_C10 += 0;
    Vitamin_D10 += 0;
    CoenzymeQ10 -= 4;
    Probiotics10 += 0;
    Omega_310 -= 3;
    Octacosanol10 += 0;
    MilkThistle10 += 0;
    Lutein10 += 0;
    Gamma_Lenolenic_Acid10 -= 2;
    Pantothenic_Acid10 += 0;
    Biotin10 += 0;
}

function lowBlood() { // 저혈압 항목 메소드
    Theanine10 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron10 += 1;
    Vitamin_B10 += 0;
    Vitamin_C10 += 0;
    Vitamin_D10 += 0;
    CoenzymeQ10 += 0;
    Probiotics10 += 0;
    Omega_310 += 1;
    Octacosanol10 += 0;
    MilkThistle10 += 0;
    Lutein10 += 0;
    Gamma_Lenolenic_Acid10 += 1;
    Pantothenic_Acid10 += 0;
    Biotin10 += 0;
}

function lowBloodCancel() { // 저혈압 항목 취소 메소드
    Theanine10 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron10 -= 1;
    Vitamin_B10 += 0;
    Vitamin_C10 += 0;
    Vitamin_D10 += 0;
    CoenzymeQ10 += 0;
    Probiotics10 += 0;
    Omega_310 -= 1;
    Octacosanol10 += 0;
    MilkThistle10 += 0;
    Lutein10 += 0;
    Gamma_Lenolenic_Acid10 -= 1;
    Pantothenic_Acid10 += 0;
    Biotin10 += 0;
}

function heatSweaty() { // 더위체질 항목 메소드
    Theanine10 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron10 += 0;
    Vitamin_B10 += 0;
    Vitamin_C10 += 0;
    Vitamin_D10 += 0;
    CoenzymeQ10 += 3;
    Probiotics10 += 0;
    Omega_310 += 2;
    Octacosanol10 += 0;
    MilkThistle10 += 0;
    Lutein10 += 0;
    Gamma_Lenolenic_Acid10 += 0;
    Pantothenic_Acid10 += 0;
    Biotin10 += 1;
}

function heatSweatyCancel() { // 더위체질 항목 취소 메소드
    Theanine10 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron10 += 0;
    Vitamin_B10 += 0;
    Vitamin_C10 += 0;
    Vitamin_D10 += 0;
    CoenzymeQ10 -= 3;
    Probiotics10 += 0;
    Omega_310 -= 2;
    Octacosanol10 += 0;
    MilkThistle10 += 0;
    Lutein10 += 0;
    Gamma_Lenolenic_Acid10 += 0;
    Pantothenic_Acid10 += 0;
    Biotin10 -= 1;
}

function anticoagulant() { // 항응고제 항목 메소드
    Theanine10 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron10 += 0;
    Vitamin_B10 += 0;
    Vitamin_C10 += 0;
    Vitamin_D10 += 0;
    CoenzymeQ10 -= 1;
    Probiotics10 += 0;
    Omega_310 -= 1;
    Octacosanol10 += 0;
    MilkThistle10 += 0;
    Lutein10 += 0;
    Gamma_Lenolenic_Acid10 -= 1;
    Pantothenic_Acid10 += 0;
    Biotin10 += 0;
}

function anticoagulantCancel() { // 항응고제 항목 취소 메소드
    Theanine10 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron10 += 0;
    Vitamin_B10 += 0;
    Vitamin_C10 += 0;
    Vitamin_D10 += 0;
    CoenzymeQ10 += 1;
    Probiotics10 += 0;
    Omega_310 += 1;
    Octacosanol10 += 0;
    MilkThistle10 += 0;
    Lutein10 += 0;
    Gamma_Lenolenic_Acid10 += 1;
    Pantothenic_Acid10 += 0;
    Biotin10 += 0;
}

const srv11_checkbox1 = document.getElementById('checkbox_highblood'); //srv숫자 check숫자 수정 = id값 수정
const srv11_checkbox2 = document.getElementById('checkbox_lowBlood');
const srv11_checkbox3 = document.getElementById('checkbox_heatSweaty');
const srv11_checkbox4 = document.getElementById('checkbox_anticoagulant');

const srv11_question10_before = document.getElementById('question11_before'); //srv숫자 question숫자 수정 = id값 수정
const srv11_question10_next = document.getElementById('question11_next');

srv11_checkbox1.addEventListener('change', function () { //srv숫자 check숫자 수정, 메소드명 수정
    if (srv11_checkbox1.checked) {
        highBlood(); 
    } else {
        highBloodCancel();
    }
});

srv11_checkbox2.addEventListener('change', function () {
    if (srv11_checkbox2.checked) {
        lowBlood();
    } else {
        lowBloodCancel();
    }
});

srv11_checkbox3.addEventListener('change', function () {
    if (srv11_checkbox3.checked) {
        heatSweaty();
    } else {
        heatSweatyCancel();
    }
});

srv11_checkbox4.addEventListener('change', function () {
    if (srv11_checkbox4.checked) {
        anticoagulant();
    } else {
        anticoagulantCancel();
    }
});

srv11_question10_before.addEventListener('click', function () { // srv숫자 question숫자 수정
    window.location.href = '/survey10'; // 주소 수정
});

srv11_question10_next.addEventListener('click', function () {
    localStorage.setItem('data11_Theanine', Theanine10); //data숫자, 영양소명 숫자 수정
    localStorage.setItem('data11_Iron', Iron10);
    localStorage.setItem('data11_Vitamin_B', Vitamin_B10);
    localStorage.setItem('data11_Vitamin_C', Vitamin_C10);
    localStorage.setItem('data11_Vitamin_D', Vitamin_D10);
    localStorage.setItem('data11_CoenzymeQ', CoenzymeQ10);
    localStorage.setItem('data11_Probiotics', Probiotics10);
    localStorage.setItem('data11_Omega_3', Omega_310);
    localStorage.setItem('data11_Octacosanol', Octacosanol10);
    localStorage.setItem('data11_MilkThistle', MilkThistle10);
    localStorage.setItem('data11_Lutein', Lutein10);
    localStorage.setItem('data11_Gamma_Lenolenic_Acid', Gamma_Lenolenic_Acid10);
    localStorage.setItem('data11_Pantothenic_Acid', Pantothenic_Acid10);
    localStorage.setItem('data11_Biotin', Biotin10);

    window.location.href = '/survey12'; // 주소 수정
});

var score_check_btn = document.getElementById('score_check_btn')
score_check_btn.onclick = function () { // 뉴트리션 숫자 수정
    console.log(Theanine10);
    console.log(Iron10);
    console.log(Vitamin_B10);
    console.log(Vitamin_C10);
    console.log(Vitamin_D10);
    console.log(CoenzymeQ10);
    console.log(Probiotics10);
    console.log(Omega_310);
    console.log(Octacosanol10);
    console.log(MilkThistle10);
    console.log(Lutein10);
    console.log(Gamma_Lenolenic_Acid10);
    console.log(Pantothenic_Acid10);
    console.log(Biotin10);
}

// 작업완료
