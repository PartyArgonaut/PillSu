window.addEventListener('load', function () { // 뉴트리션 뒤에 숫자, data뒤에 숫자 수정
    Theanine2 = parseInt(localStorage.getItem('data2_Theanine'), 10);
    Iron2 = parseInt(localStorage.getItem('data2_Iron'), 10);
    Vitamin_B2 = parseInt(localStorage.getItem('data2_Vitamin_B'), 10);
    Vitamin_C2 = parseInt(localStorage.getItem('data2_Vitamin_C'), 10);
    Vitamin_D2 = parseInt(localStorage.getItem('data2_Vitamin_D'), 10);
    CoenzymeQ2 = parseInt(localStorage.getItem('data2_CoenzymeQ'), 10);
    Probiotics2 = parseInt(localStorage.getItem('data2_Probiotics'), 10);
    Omega_32 = parseInt(localStorage.getItem('data2_Omega_3'), 10);
    Octacosanol2 = parseInt(localStorage.getItem('data2_Octacosanol'), 10);
    MilkThistle2 = parseInt(localStorage.getItem('data2_MilkThistle'), 10);
    Lutein2 = parseInt(localStorage.getItem('data2_Lutein'), 10);
    Gamma_Lenolenic_Acid2 = parseInt(localStorage.getItem('data2_Gamma_Lenolenic_Acid', 10));
    Pantothenic_Acid2 = parseInt(localStorage.getItem('data2_Pantothenic_Acid'), 10);
    Biotin2 = parseInt(localStorage.getItem('data2_Biotin'), 10);
});

let Theanine2; // 뉴트리션숫자 수정
let Iron2;
let Vitamin_B2;
let Vitamin_C2;
let Vitamin_D2;
let CoenzymeQ2;
let Probiotics2;
let Omega_32;
let Octacosanol2;
let MilkThistle2;
let Lutein2;
let Gamma_Lenolenic_Acid2;
let Pantothenic_Acid2;
let Biotin2;

function dryEye() { // 눈건조 항목 메소드
    Theanine2 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron2 += 0;
    Vitamin_B2 += 0;
    Vitamin_C2 += 1;
    Vitamin_D2 += 0;
    CoenzymeQ2 += 0;
    Probiotics2 += 0;
    Omega_32 += 2;
    Octacosanol2 += 0;
    MilkThistle2 += 0;
    Lutein2 += 3;
    Gamma_Lenolenic_Acid2 += 0;
    Pantothenic_Acid2 += 0;
    Biotin2 += 1;
}

function dryEyeCancel() { // 눈건조 항목 취소 메소드
    Theanine2 += 0;
    Iron2 += 0;
    Vitamin_B2 += 0;
    Vitamin_C2 -= 1;
    Vitamin_D2 += 0;
    CoenzymeQ2 += 0;
    Probiotics2 += 0;
    Omega_32 -= 2;
    Octacosanol2 += 0;
    MilkThistle2 += 0;
    Lutein2 -= 3;
    Gamma_Lenolenic_Acid2 += 0;
    Pantothenic_Acid2 += 0;
    Biotin2 -= 1;
}

function eyeTwiching() { // 눈떨림 항목 메소드
    Theanine2 += 0;
    Iron2 += 0;
    Vitamin_B2 += 1;
    Vitamin_C2 += 0;
    Vitamin_D2 += 0;
    CoenzymeQ2 += 0;
    Probiotics2 += 0;
    Omega_32 += 0;
    Octacosanol2 += 0;
    MilkThistle2 += 0;
    Lutein2 += 1;
    Gamma_Lenolenic_Acid2 += 0;
    Pantothenic_Acid2 += 0;
    Biotin2 += 0;
}

function eyeTwichingCancel() { // 눈떨림 항목 취소 메소드
    Theanine2 += 0;
    Iron2 += 0;
    Vitamin_B2 -= 1;
    Vitamin_C2 += 0;
    Vitamin_D2 += 0;
    CoenzymeQ2 += 0;
    Probiotics2 += 0;
    Omega_32 += 0;
    Octacosanol2 += 0;
    MilkThistle2 += 0;
    Lutein2 -= 1;
    Gamma_Lenolenic_Acid2 += 0;
    Pantothenic_Acid2 += 0;
    Biotin2 += 0;
}

function blurry() { // 핸드폰, 모니터 항목 메소드
    Theanine2 += 0;
    Iron2 += 0;
    Vitamin_B2 += 0;
    Vitamin_C2 += 1;
    Vitamin_D2 += 1;
    CoenzymeQ2 += 1;
    Probiotics2 += 0;
    Omega_32 += 2;
    Octacosanol2 += 0;
    MilkThistle2 += 1;
    Lutein2 += 5;
    Gamma_Lenolenic_Acid2 += 0;
    Pantothenic_Acid2 += 0;
    Biotin2 += 0;
}

function blurryCancel() { // 핸드폰, 모니터 항목 취소 메소드
    Theanine2 += 0;
    Iron2 += 0;
    Vitamin_B2 += 0;
    Vitamin_C2 -= 1;
    Vitamin_D2 -= 1;
    CoenzymeQ2 -= 1;
    Probiotics2 += 0;
    Omega_32 -= 2;
    Octacosanol2 += 0;
    MilkThistle2 -= 1;
    Lutein2 -= 5;
    Gamma_Lenolenic_Acid2 += 0;
    Pantothenic_Acid2 += 0;
    Biotin2 += 0;
}

function nyctalopia() { // 야맹증 항목 메소드
    Theanine2 += 0;
    Iron2 += 0;
    Vitamin_B2 += 0;
    Vitamin_C2 += 0;
    Vitamin_D2 += 0;
    CoenzymeQ2 += 0;
    Probiotics2 += 0;
    Omega_32 += 2;
    Octacosanol2 += 0;
    MilkThistle2 += 0;
    Lutein2 += 3;
    Gamma_Lenolenic_Acid2 += 0;
    Pantothenic_Acid2 += 0;
    Biotin2 += 1;
}

function nyctalopiaCancel() { // 야맹증 항목 취소 메소드
    Theanine2 += 0;
    Iron2 += 0;
    Vitamin_B2 += 0;
    Vitamin_C2 += 0;
    Vitamin_D2 += 0;
    CoenzymeQ2 += 0;
    Probiotics2 += 0;
    Omega_32 -= 2;
    Octacosanol2 += 0;
    MilkThistle2 += 0;
    Lutein2 -= 3;
    Gamma_Lenolenic_Acid2 += 0;
    Pantothenic_Acid2 += 0;
    Biotin2 -= 1;
}

function visionInterest() { // 관심 항목 메소드
    Theanine2 += 0;
    Iron2 += 0;
    Vitamin_B2 += 0;
    Vitamin_C2 += 0;
    Vitamin_D2 += 0;
    CoenzymeQ2 += 0;
    Probiotics2 += 0;
    Omega_32 += 1;
    Octacosanol2 += 0;
    MilkThistle2 += 0;
    Lutein2 += 1;
    Gamma_Lenolenic_Acid2 += 0;
    Pantothenic_Acid2 += 0;
    Biotin2 += 0;
}

function visionInterestCancel() { // 관심 항목 취소 메소드
    Theanine2 += 0;
    Iron2 += 0;
    Vitamin_B2 += 0;
    Vitamin_C2 += 0;
    Vitamin_D2 += 0;
    CoenzymeQ2 += 0;
    Probiotics2 += 0;
    Omega_32 -= 1;
    Octacosanol2 += 0;
    MilkThistle2 += 0;
    Lutein2 -= 1;
    Gamma_Lenolenic_Acid2 += 0;
    Pantothenic_Acid2 += 0;
    Biotin2 += 0;
}

const srv3_checkbox1 = document.getElementById('checkbox_dryEye'); //srv숫자 check숫자 수정 = id값 수정
const srv3_checkbox2 = document.getElementById('checkbox_eyeTwiching');
const srv3_checkbox3 = document.getElementById('checkbox_blurry');
const srv3_checkbox4 = document.getElementById('checkbox_nyctalopia');
const srv3_checkbox5 = document.getElementById('checkbox_visionInterest');

const srv3_question2_before = document.getElementById('question3_before'); //srv숫자 question숫자 수정 = id값 수정
const srv3_question2_next = document.getElementById('question3_next');

srv3_checkbox1.addEventListener('change', function () { //srv숫자 check숫자 수정, 메소드명 수정
    if (srv3_checkbox1.checked) {
        dryEye(); 
    } else {
        dryEyeCancel();
    }
});

srv3_checkbox2.addEventListener('change', function () {
    if (srv3_checkbox2.checked) {
        eyeTwiching();
    } else {
        eyeTwichingCancel();
    }
});

srv3_checkbox3.addEventListener('change', function () {
    if (srv3_checkbox3.checked) {
        blurry();
    } else {
        blurryCancel();
    }
});

srv3_checkbox4.addEventListener('change', function () {
    if (srv3_checkbox4.checked) {
        nyctalopia();
    } else {
        nyctalopiaCancel();
    }
});

srv3_checkbox5.addEventListener('change', function () {
    if (srv3_checkbox5.checked) {
        visionInterest();
    } else {
        visionInterestCancel();
    }
})

srv3_question2_before.addEventListener('click', function () { // srv숫자 question숫자 수정
    window.location.href = '/survey2'; // 주소 수정
});

srv3_question2_next.addEventListener('click', function () {
    localStorage.setItem('data3_Theanine', Theanine2); //data숫자, 영양소명 숫자 수정
    localStorage.setItem('data3_Iron', Iron2);
    localStorage.setItem('data3_Vitamin_B', Vitamin_B2);
    localStorage.setItem('data3_Vitamin_C', Vitamin_C2);
    localStorage.setItem('data3_Vitamin_D', Vitamin_D2);
    localStorage.setItem('data3_CoenzymeQ', CoenzymeQ2);
    localStorage.setItem('data3_Probiotics', Probiotics2);
    localStorage.setItem('data3_Omega_3', Omega_32);
    localStorage.setItem('data3_Octacosanol', Octacosanol2);
    localStorage.setItem('data3_MilkThistle', MilkThistle2);
    localStorage.setItem('data3_Lutein', Lutein2);
    localStorage.setItem('data3_Gamma_Lenolenic_Acid', Gamma_Lenolenic_Acid2);
    localStorage.setItem('data3_Pantothenic_Acid', Pantothenic_Acid2);
    localStorage.setItem('data3_Biotin', Biotin2);

    window.location.href = '/survey4'; // 주소 수정
});

var score_check_btn = document.getElementById('score_check_btn')
score_check_btn.onclick = function () { // 뉴트리션 숫자 수정
    console.log(Theanine2);
    console.log(Iron2);
    console.log(Vitamin_B2);
    console.log(Vitamin_C2);
    console.log(Vitamin_D2);
    console.log(CoenzymeQ2);
    console.log(Probiotics2);
    console.log(Omega_32);
    console.log(Octacosanol2);
    console.log(MilkThistle2);
    console.log(Lutein2);
    console.log(Gamma_Lenolenic_Acid2);
    console.log(Pantothenic_Acid2);
    console.log(Biotin2);
}
// 작업완료