window.addEventListener('load', function () { // 뉴트리션 뒤에 숫자, data뒤에 숫자 수정
    Theanine5 = parseInt(localStorage.getItem('data5_Theanine'), 10);
    Iron5 = parseInt(localStorage.getItem('data5_Iron'), 10);
    Vitamin_B5 = parseInt(localStorage.getItem('data5_Vitamin_B'), 10);
    Vitamin_C5 = parseInt(localStorage.getItem('data5_Vitamin_C'), 10);
    Vitamin_D5 = parseInt(localStorage.getItem('data5_Vitamin_D'), 10);
    CoenzymeQ5 = parseInt(localStorage.getItem('data5_CoenzymeQ'), 10);
    Probiotics5 = parseInt(localStorage.getItem('data5_Probiotics'), 10);
    Omega_35 = parseInt(localStorage.getItem('data5_Omega_3'), 10);
    Octacosanol5 = parseInt(localStorage.getItem('data5_Octacosanol'), 10);
    MilkThistle5 = parseInt(localStorage.getItem('data5_MilkThistle'), 10);
    Lutein5 = parseInt(localStorage.getItem('data5_Lutein'), 10);
    Gamma_Lenolenic_Acid5 = parseInt(localStorage.getItem('data5_Gamma_Lenolenic_Acid', 10));
    Pantothenic_Acid5 = parseInt(localStorage.getItem('data5_Pantothenic_Acid'), 10);
    Biotin5 = parseInt(localStorage.getItem('data5_Biotin'), 10);
});

let Theanine5; // 뉴트리션숫자 수정
let Iron5;
let Vitamin_B5;
let Vitamin_C5;
let Vitamin_D5;
let CoenzymeQ5;
let Probiotics5;
let Omega_35;
let Octacosanol5;
let MilkThistle5;
let Lutein5;
let Gamma_Lenolenic_Acid5;
let Pantothenic_Acid5;
let Biotin5;

function jointPain() { // 관절통 항목 메소드
    Theanine5 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron5 += 0;
    Vitamin_B5 += 0;
    Vitamin_C5 += 0;
    Vitamin_D5 += 2;
    CoenzymeQ5 += 0;
    Probiotics5 += 0;
    Omega_35 += 0;
    Octacosanol5 += 0;
    MilkThistle5 += 0;
    Lutein5 += 0;
    Gamma_Lenolenic_Acid5 += 0;
    Pantothenic_Acid5 += 0;
    Biotin5 += 0;
}

function jointPainCancel() { // 관절통 항목 취소 메소드
    Theanine5 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron5 += 0;
    Vitamin_B5 += 0;
    Vitamin_C5 += 0;
    Vitamin_D5 -= 2;
    CoenzymeQ5 += 0;
    Probiotics5 += 0;
    Omega_35 += 0;
    Octacosanol5 += 0;
    MilkThistle5 += 0;
    Lutein5 += 0;
    Gamma_Lenolenic_Acid5 += 0;
    Pantothenic_Acid5 += 0;
    Biotin5 += 0;
}

function fracture() { // 골절경험 항목 메소드
    Theanine5 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron5 += 0;
    Vitamin_B5 += 0;
    Vitamin_C5 += 0;
    Vitamin_D5 += 3;
    CoenzymeQ5 += 0;
    Probiotics5 += 0;
    Omega_35 += 0;
    Octacosanol5 += 0;
    MilkThistle5 += 0;
    Lutein5 += 0;
    Gamma_Lenolenic_Acid5 += 0;
    Pantothenic_Acid5 += 0;
    Biotin5 += 0;
}

function fractureCancel() { // 골절경험 항목 취소 메소드
    Theanine2 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron2 += 0;
    Vitamin_B2 += 0;
    Vitamin_C2 += 0;
    Vitamin_D2 -= 3;
    CoenzymeQ2 += 0;
    Probiotics2 += 0;
    Omega_32 += 0;
    Octacosanol2 += 0;
    MilkThistle2 += 0;
    Lutein2 += 0;
    Gamma_Lenolenic_Acid2 += 0;
    Pantothenic_Acid2 += 0;
    Biotin2 += 0;
}

function boneWeak() { // 약골 항목 메소드
    Theanine5 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron5 += 0;
    Vitamin_B5 += 0;
    Vitamin_C5 += 0;
    Vitamin_D5 += 2;
    CoenzymeQ5 += 0;
    Probiotics5 += 0;
    Omega_35 += 0;
    Octacosanol5 += 0;
    MilkThistle5 += 0;
    Lutein5 += 0;
    Gamma_Lenolenic_Acid5 += 0;
    Pantothenic_Acid5 += 0;
    Biotin5 += 0;
}

function boneWeakCancel() { // 약골 항목 취소 메소드
    Theanine2 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron2 += 0;
    Vitamin_B2 += 0;
    Vitamin_C2 += 0;
    Vitamin_D2 -= 2;
    CoenzymeQ2 += 0;
    Probiotics2 += 0;
    Omega_32 += 0;
    Octacosanol2 += 0;
    MilkThistle2 += 0;
    Lutein2 += 0;
    Gamma_Lenolenic_Acid2 += 0;
    Pantothenic_Acid2 += 0;
    Biotin2 += 0;
}

function steroid() { // 스테로이드경험 항목 메소드
    Theanine5 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron5 += 0;
    Vitamin_B5 += 0;
    Vitamin_C5 += 1;
    Vitamin_D5 += 2;
    CoenzymeQ5 += 0;
    Probiotics5 += 0;
    Omega_35 += 0;
    Octacosanol5 += 0;
    MilkThistle5 += 0;
    Lutein5 += 0;
    Gamma_Lenolenic_Acid5 += 0;
    Pantothenic_Acid5 += 0;
    Biotin5 += 0;
}

function steroidCancel() { // 스테로이드 항목 취소 메소드
    Theanine2 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron2 += 0;
    Vitamin_B2 += 0;
    Vitamin_C2 -= 1;
    Vitamin_D2 -= 2;
    CoenzymeQ2 += 0;
    Probiotics2 += 0;
    Omega_32 += 0;
    Octacosanol2 += 0;
    MilkThistle2 += 0;
    Lutein2 += 0;
    Gamma_Lenolenic_Acid2 += 0;
    Pantothenic_Acid2 += 0;
    Biotin2 += 0;
}

function jointInterest() { // 관심 항목 메소드
    Theanine5 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron5 += 0;
    Vitamin_B5 += 0;
    Vitamin_C5 += 0;
    Vitamin_D5 += 1;
    CoenzymeQ5 += 0;
    Probiotics5 += 0;
    Omega_35 += 0;
    Octacosanol5 += 0;
    MilkThistle5 += 0;
    Lutein5 += 0;
    Gamma_Lenolenic_Acid5 += 0;
    Pantothenic_Acid5 += 0;
    Biotin5 += 0;
}

function jointInterestCancel() { // 관심 항목 취소 메소드
    Theanine2 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron2 += 0;
    Vitamin_B2 += 0;
    Vitamin_C2 += 0;
    Vitamin_D2 -= 1;
    CoenzymeQ2 += 0;
    Probiotics2 += 0;
    Omega_32 += 0;
    Octacosanol2 += 0;
    MilkThistle2 += 0;
    Lutein2 += 0;
    Gamma_Lenolenic_Acid2 += 0;
    Pantothenic_Acid2 += 0;
    Biotin2 += 0;
}

const srv6_checkbox1 = document.getElementById('checkbox_jointPain'); //srv숫자 check숫자 수정 = id값 수정
const srv6_checkbox2 = document.getElementById('checkbox_fracture');
const srv6_checkbox3 = document.getElementById('checkbox_boneWeak');
const srv6_checkbox4 = document.getElementById('checkbox_steroid');
const srv6_checkbox5 = document.getElementById('checkbox_jointInterest');

const srv6_question5_before = document.getElementById('question6_before'); //srv숫자 question숫자 수정 = id값 수정
const srv6_question5_next = document.getElementById('question6_next');

srv6_checkbox1.addEventListener('change', function () { //srv숫자 check숫자 수정, 메소드명 수정
    if (srv6_checkbox1.checked) {
        jointPain(); 
    } else {
        jointPainCancel();
    }
});

srv6_checkbox2.addEventListener('change', function () {
    if (srv6_checkbox2.checked) {
        fracture();
    } else {
        fractureCancel();
    }
});

srv6_checkbox3.addEventListener('change', function () {
    if (srv6_checkbox3.checked) {
        boneWeak();
    } else {
        boneWeakCancel();
    }
});

srv6_checkbox4.addEventListener('change', function () {
    if (srv6_checkbox4.checked) {
        steroid();
    } else {
        steroidCancel();
    }
});

srv6_checkbox5.addEventListener('change', function () {
    if (srv6_checkbox5.checked) {
        jointInterest();
    } else {
        jointInterestCancel();
    }
})

srv6_question5_before.addEventListener('click', function () { // srv숫자 question숫자 수정
    window.location.href = '/survey5'; // 주소 수정
});

srv6_question5_next.addEventListener('click', function () {
    localStorage.setItem('data6_Theanine', Theanine5); //data숫자, 영양소명 숫자 수정
    localStorage.setItem('data6_Iron', Iron5);
    localStorage.setItem('data6_Vitamin_B', Vitamin_B5);
    localStorage.setItem('data6_Vitamin_C', Vitamin_C5);
    localStorage.setItem('data6_Vitamin_D', Vitamin_D5);
    localStorage.setItem('data6_CoenzymeQ', CoenzymeQ5);
    localStorage.setItem('data6_Probiotics', Probiotics5);
    localStorage.setItem('data6_Omega_3', Omega_35);
    localStorage.setItem('data6_Octacosanol', Octacosanol5);
    localStorage.setItem('data6_MilkThistle', MilkThistle5);
    localStorage.setItem('data6_Lutein', Lutein5);
    localStorage.setItem('data6_Gamma_Lenolenic_Acid', Gamma_Lenolenic_Acid5);
    localStorage.setItem('data6_Pantothenic_Acid', Pantothenic_Acid5);
    localStorage.setItem('data6_Biotin', Biotin5);

    window.location.href = '/survey7'; // 주소 수정
});

var score_check_btn = document.getElementById('score_check_btn')
score_check_btn.onclick = function () { // 뉴트리션 숫자 수정
    console.log(Theanine5);
    console.log(Iron5);
    console.log(Vitamin_B5);
    console.log(Vitamin_C5);
    console.log(Vitamin_D5);
    console.log(CoenzymeQ5);
    console.log(Probiotics5);
    console.log(Omega_35);
    console.log(Octacosanol5);
    console.log(MilkThistle5);
    console.log(Lutein5);
    console.log(Gamma_Lenolenic_Acid5);
    console.log(Pantothenic_Acid5);
    console.log(Biotin5);
}
// 작업완료
