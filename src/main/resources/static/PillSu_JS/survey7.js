window.addEventListener('load', function () { // 뉴트리션 뒤에 숫자, data뒤에 숫자 수정
    Theanine6 = parseInt(localStorage.getItem('data6_Theanine'), 10);
    Iron6 = parseInt(localStorage.getItem('data6_Iron'), 10);
    Vitamin_B6 = parseInt(localStorage.getItem('data6_Vitamin_B'), 10);
    Vitamin_C6 = parseInt(localStorage.getItem('data6_Vitamin_C'), 10);
    Vitamin_D6 = parseInt(localStorage.getItem('data6_Vitamin_D'), 10);
    CoenzymeQ6 = parseInt(localStorage.getItem('data6_CoenzymeQ'), 10);
    Probiotics6 = parseInt(localStorage.getItem('data6_Probiotics'), 10);
    Omega_36 = parseInt(localStorage.getItem('data6_Omega_3'), 10);
    Octacosanol6 = parseInt(localStorage.getItem('data6_Octacosanol'), 10);
    MilkThistle6 = parseInt(localStorage.getItem('data6_MilkThistle'), 10);
    Lutein6 = parseInt(localStorage.getItem('data6_Lutein'), 10);
    Gamma_Lenolenic_Acid6 = parseInt(localStorage.getItem('data6_Gamma_Lenolenic_Acid', 10));
    Pantothenic_Acid6 = parseInt(localStorage.getItem('data6_Pantothenic_Acid'), 10);
    Biotin6 = parseInt(localStorage.getItem('data6_Biotin'), 10);
});

let Theanine6; // 뉴트리션숫자 수정
let Iron6;
let Vitamin_B6;
let Vitamin_C6;
let Vitamin_D6;
let CoenzymeQ6;
let Probiotics6;
let Omega_36;
let Octacosanol6;
let MilkThistle6;
let Lutein6;
let Gamma_Lenolenic_Acid6;
let Pantothenic_Acid6;
let Biotin6;

function stress() { // 스트레스 항목 메소드
    Theanine6 += 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron6 += 1;
    Vitamin_B6 += 1;
    Vitamin_C6 += 2;
    Vitamin_D6 += 0;
    CoenzymeQ6 += 1;
    Probiotics6 += 2;
    Omega_36 += 0;
    Octacosanol6 += 0;
    MilkThistle6 += 0;
    Lutein6 += 0;
    Gamma_Lenolenic_Acid6 += 2;
    Pantothenic_Acid6 += 0;
    Biotin6 += 0;
}

function stressCancel() { // 스트레스 항목 취소 메소드
    Theanine6 -= 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron6 -= 1;
    Vitamin_B6 -= 1;
    Vitamin_C6 -= 2;
    Vitamin_D6 += 0;
    CoenzymeQ6 -= 1;
    Probiotics6 -= 2;
    Omega_36 += 0;
    Octacosanol6 += 0;
    MilkThistle6 += 0;
    Lutein6 += 0;
    Gamma_Lenolenic_Acid6 -= 2;
    Pantothenic_Acid6 += 0;
    Biotin6 += 0;
}

function allergy() { // 알러지 항목 메소드
    Theanine6 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron6 += 0;
    Vitamin_B6 += 1;
    Vitamin_C6 += 0;
    Vitamin_D6 += 0;
    CoenzymeQ6 += 0;
    Probiotics6 += 1;
    Omega_36 += 0;
    Octacosanol6 += 0;
    MilkThistle6 += 0;
    Lutein6 += 0;
    Gamma_Lenolenic_Acid6 += 1;
    Pantothenic_Acid6 += 0;
    Biotin6 += 0;
}

function allergyCancel() { // 알러지 항목 취소 메소드
    Theanine6 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron6 += 0;
    Vitamin_B6 -= 1;
    Vitamin_C6 += 0;
    Vitamin_D6 += 0;
    CoenzymeQ6 += 0;
    Probiotics6 -= 1;
    Omega_36 += 0;
    Octacosanol6 += 0;
    MilkThistle6 += 0;
    Lutein6 += 0;
    Gamma_Lenolenic_Acid6 -= 1;
    Pantothenic_Acid6 += 0;
    Biotin6 += 0;
}

function infection() { // 감염 항목 메소드
    Theanine6 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron6 += 1;
    Vitamin_B6 += 1;
    Vitamin_C6 += 2;
    Vitamin_D6 += 1;
    CoenzymeQ6 += 2;
    Probiotics6 += 2;
    Omega_36 += 1;
    Octacosanol6 += 0;
    MilkThistle6 += 0;
    Lutein6 += 0;
    Gamma_Lenolenic_Acid6 += 2;
    Pantothenic_Acid6 += 0;
    Biotin6 += 0;
}

function infectionCancel() { // 감염 항목 취소 메소드
    Theanine6 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron6 -= 1;
    Vitamin_B6 -= 1;
    Vitamin_C6 -= 2;
    Vitamin_D6 -= 1;
    CoenzymeQ6 -= 2;
    Probiotics6 -= 2;
    Omega_36 -= 1;
    Octacosanol6 += 0;
    MilkThistle6 += 0;
    Lutein6 += 0;
    Gamma_Lenolenic_Acid6 -= 2;
    Pantothenic_Acid6 += 0;
    Biotin6 += 0;
}

function immunityInterest() { // 관심 항목 메소드
    Theanine6 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron6 += 1;
    Vitamin_B6 += 1;
    Vitamin_C6 += 1;
    Vitamin_D6 += 0;
    CoenzymeQ6 += 1;
    Probiotics6 += 0;
    Omega_36 += 0;
    Octacosanol6 += 0;
    MilkThistle6 += 0;
    Lutein6 += 0;
    Gamma_Lenolenic_Acid6 += 1;
    Pantothenic_Acid6 += 0;
    Biotin6 += 0;
}

function immunityInterestCancel() { // 관심 항목 취소 메소드
    Theanine6 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron6 -= 1;
    Vitamin_B6 -= 1;
    Vitamin_C6 -= 1;
    Vitamin_D6 += 0;
    CoenzymeQ6 -= 1;
    Probiotics6 += 0;
    Omega_36 += 0;
    Octacosanol6 += 0;
    MilkThistle6 += 0;
    Lutein6 += 0;
    Gamma_Lenolenic_Acid6 -= 1;
    Pantothenic_Acid6 += 0;
    Biotin6 += 0;
}

const srv7_checkbox1 = document.getElementById('checkbox_stress'); //srv숫자 check숫자 수정 = id값 수정
const srv7_checkbox2 = document.getElementById('checkbox_allergy');
const srv7_checkbox3 = document.getElementById('checkbox_infection');
const srv7_checkbox4 = document.getElementById('checkbox_immunityInterest');

const srv7_question6_before = document.getElementById('question7_before'); //srv숫자 question숫자 수정 = id값 수정
const srv7_question6_next = document.getElementById('question7_next');

srv7_checkbox1.addEventListener('change', function () { //srv숫자 check숫자 수정, 메소드명 수정
    if (srv7_checkbox1.checked) {
        stress(); 
    } else {
        stressCancel();
    }
});

srv7_checkbox2.addEventListener('change', function () {
    if (srv7_checkbox2.checked) {
        allergy();
    } else {
        allergyCancel();
    }
});

srv7_checkbox3.addEventListener('change', function () {
    if (srv7_checkbox3.checked) {
        infection();
    } else {
        infectionCancel();
    }
});

srv7_checkbox4.addEventListener('change', function () {
    if (srv7_checkbox4.checked) {
        immunityInterest();
    } else {
        immunityInterestCancel();
    }
});

srv7_question6_before.addEventListener('click', function () { // srv숫자 question숫자 수정
    window.location.href = '/survey6'; // 주소 수정
});

srv7_question6_next.addEventListener('click', function () {
    localStorage.setItem('data7_Theanine', Theanine6); //data숫자, 영양소명 숫자 수정
    localStorage.setItem('data7_Iron', Iron6);
    localStorage.setItem('data7_Vitamin_B', Vitamin_B6);
    localStorage.setItem('data7_Vitamin_C', Vitamin_C6);
    localStorage.setItem('data7_Vitamin_D', Vitamin_D6);
    localStorage.setItem('data7_CoenzymeQ', CoenzymeQ6);
    localStorage.setItem('data7_Probiotics', Probiotics6);
    localStorage.setItem('data7_Omega_3', Omega_36);
    localStorage.setItem('data7_Octacosanol', Octacosanol6);
    localStorage.setItem('data7_MilkThistle', MilkThistle6);
    localStorage.setItem('data7_Lutein', Lutein6);
    localStorage.setItem('data7_Gamma_Lenolenic_Acid', Gamma_Lenolenic_Acid6);
    localStorage.setItem('data7_Pantothenic_Acid', Pantothenic_Acid6);
    localStorage.setItem('data7_Biotin', Biotin6);

    window.location.href = '/survey8'; // 주소 수정
});

var score_check_btn = document.getElementById('score_check_btn')
score_check_btn.onclick = function () { // 뉴트리션 숫자 수정
    console.log(Theanine6);
    console.log(Iron6);
    console.log(Vitamin_B6);
    console.log(Vitamin_C6);
    console.log(Vitamin_D6);
    console.log(CoenzymeQ6);
    console.log(Probiotics6);
    console.log(Omega_36);
    console.log(Octacosanol6);
    console.log(MilkThistle6);
    console.log(Lutein6);
    console.log(Gamma_Lenolenic_Acid6);
    console.log(Pantothenic_Acid6);
    console.log(Biotin6);
}
// 작업완료
