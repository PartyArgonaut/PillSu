window.addEventListener('load', function () { // 뉴트리션 뒤에 숫자, data뒤에 숫자 수정
    Theanine7 = parseInt(localStorage.getItem('data7_Theanine'), 10);
    Iron7 = parseInt(localStorage.getItem('data7_Iron'), 10);
    Vitamin_B7 = parseInt(localStorage.getItem('data7_Vitamin_B'), 10);
    Vitamin_C7 = parseInt(localStorage.getItem('data7_Vitamin_C'), 10);
    Vitamin_D7 = parseInt(localStorage.getItem('data7_Vitamin_D'), 10);
    CoenzymeQ7 = parseInt(localStorage.getItem('data7_CoenzymeQ'), 10);
    Probiotics7 = parseInt(localStorage.getItem('data7_Probiotics'), 10);
    Omega_37 = parseInt(localStorage.getItem('data7_Omega_3'), 10);
    Octacosanol7 = parseInt(localStorage.getItem('data7_Octacosanol'), 10);
    MilkThistle7 = parseInt(localStorage.getItem('data7_MilkThistle'), 10);
    Lutein7 = parseInt(localStorage.getItem('data7_Lutein'), 10);
    Gamma_Lenolenic_Acid7 = parseInt(localStorage.getItem('data7_Gamma_Lenolenic_Acid', 10));
    Pantothenic_Acid7 = parseInt(localStorage.getItem('data7_Pantothenic_Acid'), 10);
    Biotin7 = parseInt(localStorage.getItem('data7_Biotin'), 10);
});

let Theanine7; // 뉴트리션숫자 수정
let Iron7;
let Vitamin_B7;
let Vitamin_C7;
let Vitamin_D7;
let CoenzymeQ7;
let Probiotics7;
let Omega_37;
let Octacosanol7;
let MilkThistle7;
let Lutein7;
let Gamma_Lenolenic_Acid7;
let Pantothenic_Acid7;
let Biotin7;

function tired() { // 피곤함 항목 메소드
    Theanine7 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron7 += 1;
    Vitamin_B7 += 1;
    Vitamin_C7 += 1;
    Vitamin_D7 += 0;
    CoenzymeQ7 += 1;
    Probiotics7 += 0;
    Omega_37 += 0;
    Octacosanol7 += 1;
    MilkThistle7 += 4;
    Lutein7 += 0;
    Gamma_Lenolenic_Acid7 += 0;
    Pantothenic_Acid7 += 1;
    Biotin7 += 1;
}

function tiredCancel() { // 피곤함 항목 취소 메소드
    Theanine7 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron7 -= 1;
    Vitamin_B7 -= 1;
    Vitamin_C7 -= 1;
    Vitamin_D7 += 0;
    CoenzymeQ7 -= 1;
    Probiotics7 += 0;
    Omega_37 += 0;
    Octacosanol7 -= 1;
    MilkThistle7 -= 4;
    Lutein7 += 0;
    Gamma_Lenolenic_Acid7 += 0;
    Pantothenic_Acid7 -= 1;
    Biotin7 -= 1;
}

function distrait() { // 멍때림 항목 메소드
    Theanine7 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron7 += 0;
    Vitamin_B7 += 0;
    Vitamin_C7 += 0;
    Vitamin_D7 += 0;
    CoenzymeQ7 += 0;
    Probiotics7 += 0;
    Omega_37 += 1;
    Octacosanol7 += 0;
    MilkThistle7 += 1;
    Lutein7 += 0;
    Gamma_Lenolenic_Acid7 += 0;
    Pantothenic_Acid7 += 1;
    Biotin7 += 1;
}

function distraitCancel() { // 멍때림 항목 취소 메소드
    Theanine7 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron7 += 0;
    Vitamin_B7 += 0;
    Vitamin_C7 += 0;
    Vitamin_D7 += 0;
    CoenzymeQ7 += 0;
    Probiotics7 += 0;
    Omega_37 -= 1;
    Octacosanol7 += 0;
    MilkThistle7 -= 1;
    Lutein7 += 0;
    Gamma_Lenolenic_Acid7 += 0;
    Pantothenic_Acid7 -= 1;
    Biotin7 -= 1;
}

function swell() { // 붓기 항목 메소드
    Theanine7 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron7 += 0;
    Vitamin_B7 += 0;
    Vitamin_C7 += 0;
    Vitamin_D7 += 0;
    CoenzymeQ7 += 0;
    Probiotics7 += 0;
    Omega_37 += 1;
    Octacosanol7 += 0;
    MilkThistle7 += 3;
    Lutein7 += 0;
    Gamma_Lenolenic_Acid7 += 0;
    Pantothenic_Acid7 += 0;
    Biotin7 += 0;
}

function swellCancel() { // 붓기 항목 취소 메소드
    Theanine7 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron7 += 0;
    Vitamin_B7 += 0;
    Vitamin_C7 += 0;
    Vitamin_D7 += 0;
    CoenzymeQ7 += 0;
    Probiotics7 += 0;
    Omega_37 -= 1;
    Octacosanol7 += 0;
    MilkThistle7 -= 3;
    Lutein7 += 0;
    Gamma_Lenolenic_Acid7 += 0;
    Pantothenic_Acid7 += 0;
    Biotin7 += 0;
}

function lossAppetite() { // 식욕저하 항목 메소드
    Theanine7 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron7 += 0;
    Vitamin_B7 += 0;
    Vitamin_C7 += 0;
    Vitamin_D7 += 0;
    CoenzymeQ7 += 0;
    Probiotics7 += 1;
    Omega_37 += 0;
    Octacosanol7 += 0;
    MilkThistle7 += 2;
    Lutein7 += 0;
    Gamma_Lenolenic_Acid7 += 0;
    Pantothenic_Acid7 += 0;
    Biotin7 += 0;
}

function lossAppetiteCancel() { // 식욕저하 항목 취소 메소드
    Theanine7 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron7 += 0;
    Vitamin_B7 += 0;
    Vitamin_C7 += 0;
    Vitamin_D7 += 0;
    CoenzymeQ7 += 0;
    Probiotics7 -= 1;
    Omega_37 += 0;
    Octacosanol7 += 0;
    MilkThistle7 -= 2;
    Lutein7 += 0;
    Gamma_Lenolenic_Acid7 += 0;
    Pantothenic_Acid7 += 0;
    Biotin7 += 0;
}

function liverInterest() { // 관심 항목 메소드
    Theanine7 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron7 += 0;
    Vitamin_B7 += 0;
    Vitamin_C7 += 0;
    Vitamin_D7 += 0;
    CoenzymeQ7 += 0;
    Probiotics7 += 0;
    Omega_37 += 0;
    Octacosanol7 += 0;
    MilkThistle7 += 1;
    Lutein7 += 0;
    Gamma_Lenolenic_Acid7 += 0;
    Pantothenic_Acid7 += 0;
    Biotin7 += 0;
}

function liverInterestCancel() { // 관심 항목 취소 메소드
    Theanine7 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron7 += 0;
    Vitamin_B7 += 0;
    Vitamin_C7 += 0;
    Vitamin_D7 += 0;
    CoenzymeQ7 += 0;
    Probiotics7 += 0;
    Omega_37 += 0;
    Octacosanol7 += 0;
    MilkThistle7 -= 1;
    Lutein7 += 0;
    Gamma_Lenolenic_Acid7 += 0;
    Pantothenic_Acid7 += 0;
    Biotin7 += 0;
}

const srv8_checkbox1 = document.getElementById('checkbox_tired'); //srv숫자 check숫자 수정 = id값 수정
const srv8_checkbox2 = document.getElementById('checkbox_distrait');
const srv8_checkbox3 = document.getElementById('checkbox_swell');
const srv8_checkbox4 = document.getElementById('checkbox_lossAppetite');
const srv8_checkbox5 = document.getElementById('checkbox_liverInterest');

const srv8_question7_before = document.getElementById('question8_before'); //srv숫자 question숫자 수정 = id값 수정
const srv8_question7_next = document.getElementById('question8_next');

srv8_checkbox1.addEventListener('change', function () { //srv숫자 check숫자 수정, 메소드명 수정
    if (srv8_checkbox1.checked) {
        tired(); 
    } else {
        tiredCancel();
    }
});

srv8_checkbox2.addEventListener('change', function () {
    if (srv8_checkbox2.checked) {
        distrait();
    } else {
        distraitCancel();
    }
});

srv8_checkbox3.addEventListener('change', function () {
    if (srv8_checkbox3.checked) {
        swell();
    } else {
        swellCancel();
    }
});

srv8_checkbox4.addEventListener('change', function () {
    if (srv8_checkbox4.checked) {
        lossAppetite();
    } else {
        lossAppetiteCancel();
    }
});

srv8_checkbox5.addEventListener('change', function () {
    if (srv8_checkbox5.checked) {
        liverInterest();
    } else {
        liverInterestCancel();
    }
})

srv8_question7_before.addEventListener('click', function () { // srv숫자 question숫자 수정
    window.location.href = '/survey7'; // 주소 수정
});

srv8_question7_next.addEventListener('click', function () {
    localStorage.setItem('data8_Theanine', Theanine7); //data숫자, 영양소명 숫자 수정
    localStorage.setItem('data8_Iron', Iron7);
    localStorage.setItem('data8_Vitamin_B', Vitamin_B7);
    localStorage.setItem('data8_Vitamin_C', Vitamin_C7);
    localStorage.setItem('data8_Vitamin_D', Vitamin_D7);
    localStorage.setItem('data8_CoenzymeQ', CoenzymeQ7);
    localStorage.setItem('data8_Probiotics', Probiotics7);
    localStorage.setItem('data8_Omega_3', Omega_37);
    localStorage.setItem('data8_Octacosanol', Octacosanol7);
    localStorage.setItem('data8_MilkThistle', MilkThistle7);
    localStorage.setItem('data8_Lutein', Lutein7);
    localStorage.setItem('data8_Gamma_Lenolenic_Acid', Gamma_Lenolenic_Acid7);
    localStorage.setItem('data8_Pantothenic_Acid', Pantothenic_Acid7);
    localStorage.setItem('data8_Biotin', Biotin7);

    window.location.href = '/survey9'; // 주소 수정
});

var score_check_btn = document.getElementById('score_check_btn')
score_check_btn.onclick = function () { // 뉴트리션 숫자 수정
    console.log(Theanine7);
    console.log(Iron7);
    console.log(Vitamin_B7);
    console.log(Vitamin_C7);
    console.log(Vitamin_D7);
    console.log(CoenzymeQ7);
    console.log(Probiotics7);
    console.log(Omega_37);
    console.log(Octacosanol7);
    console.log(MilkThistle7);
    console.log(Lutein7);
    console.log(Gamma_Lenolenic_Acid7);
    console.log(Pantothenic_Acid7);
    console.log(Biotin7);
}
// 작업완료
