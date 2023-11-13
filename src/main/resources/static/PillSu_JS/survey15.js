window.addEventListener('load', function () { // 뉴트리션 뒤에 숫자, data뒤에 숫자 수정
    Theanine14 = parseInt(localStorage.getItem('data14_Theanine'), 10);
    Iron14 = parseInt(localStorage.getItem('data14_Iron'), 10);
    Vitamin_B14 = parseInt(localStorage.getItem('data14_Vitamin_B'), 10);
    Vitamin_C14 = parseInt(localStorage.getItem('data14_Vitamin_C'), 10);
    Vitamin_D14 = parseInt(localStorage.getItem('data14_Vitamin_D'), 10);
    CoenzymeQ14 = parseInt(localStorage.getItem('data14_CoenzymeQ'), 10);
    Probiotics14 = parseInt(localStorage.getItem('data14_Probiotics'), 10);
    Omega_314 = parseInt(localStorage.getItem('data14_Omega_3'), 10);
    Octacosanol14 = parseInt(localStorage.getItem('data14_Octacosanol'), 10);
    MilkThistle14 = parseInt(localStorage.getItem('data14_MilkThistle'), 10);
    Lutein14 = parseInt(localStorage.getItem('data14_Lutein'), 10);
    Gamma_Lenolenic_Acid14 = parseInt(localStorage.getItem('data14_Gamma_Lenolenic_Acid', 10));
    Pantothenic_Acid14 = parseInt(localStorage.getItem('data14_Pantothenic_Acid'), 10);
    Biotin14 = parseInt(localStorage.getItem('data14_Biotin'), 10);
});

let Theanine14; // 뉴트리션숫자 수정
let Iron14;
let Vitamin_B14;
let Vitamin_C14;
let Vitamin_D14;
let CoenzymeQ14;
let Probiotics14;
let Omega_314;
let Octacosanol14;
let MilkThistle14;
let Lutein14;
let Gamma_Lenolenic_Acid14;
let Pantothenic_Acid14;
let Biotin14;

function work() { // 하드워킹 항목 메소드
    Theanine14 += 3; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron14 += 0;
    Vitamin_B14 += 1;
    Vitamin_C14 += 1;
    Vitamin_D14 += 1;
    CoenzymeQ14 += 0;
    Probiotics14 += 1;
    Omega_314 += 0;
    Octacosanol14 += 0;
    MilkThistle14 += 1;
    Lutein14 += 1;
    Gamma_Lenolenic_Acid14 += 0;
    Pantothenic_Acid14 += 1;
    Biotin14 += 1;
}

function workCancel() { // 하드워킹 항목 취소 메소드
    Theanine14 -= 3; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron14 += 0;
    Vitamin_B14 -= 1;
    Vitamin_C14 -= 1;
    Vitamin_D14 -= 1;
    CoenzymeQ14 += 0;
    Probiotics14 -= 1;
    Omega_314 += 0;
    Octacosanol14 += 0;
    MilkThistle14 -= 1;
    Lutein14 -= 1;
    Gamma_Lenolenic_Acid14 += 0;
    Pantothenic_Acid14 -= 1;
    Biotin14 -= 1;
}

function monitor() { // 모니터 항목 메소드
    Theanine14 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron14 += 0;
    Vitamin_B14 += 0;
    Vitamin_C14 += 0;
    Vitamin_D14 += 0;
    CoenzymeQ14 += 0;
    Probiotics14 += 0;
    Omega_314 += 1;
    Octacosanol14 += 0;
    MilkThistle14 += 0;
    Lutein14 += 3;
    Gamma_Lenolenic_Acid14 += 0;
    Pantothenic_Acid14 += 1;
    Biotin14 += 0;
}

function monitorCancel() { // 모니터 항목 취소 메소드
    Theanine14 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron14 += 0;
    Vitamin_B14 += 0;
    Vitamin_C14 += 0;
    Vitamin_D14 += 0;
    CoenzymeQ14 += 0;
    Probiotics14 += 0;
    Omega_314 -= 1;
    Octacosanol14 += 0;
    MilkThistle14 += 0;
    Lutein14 -= 3;
    Gamma_Lenolenic_Acid14 += 0;
    Pantothenic_Acid14 -= 1;
    Biotin14 += 0;
}

function concentration() { // 집중력 항목 메소드
    Theanine14 += 2; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron14 += 0;
    Vitamin_B14 += 0;
    Vitamin_C14 += 0;
    Vitamin_D14 += 0;
    CoenzymeQ14 += 0;
    Probiotics14 += 0;
    Omega_314 += 0;
    Octacosanol14 += 1;
    MilkThistle14 += 1;
    Lutein14 += 1;
    Gamma_Lenolenic_Acid14 += 0;
    Pantothenic_Acid14 += 0;
    Biotin14 += 1;
}

function concentrationCancel() { // 집중력 항목 취소 메소드
    Theanine14 -= 2; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron14 += 0;
    Vitamin_B14 += 0;
    Vitamin_C14 += 0;
    Vitamin_D14 += 0;
    CoenzymeQ14 += 0;
    Probiotics14 += 0;
    Omega_314 += 0;
    Octacosanol14 -= 1;
    MilkThistle14 -= 1;
    Lutein14 -= 1;
    Gamma_Lenolenic_Acid14 += 0;
    Pantothenic_Acid14 += 0;
    Biotin14 -= 1;
}

function stomatitis() { // 구내염 항목 메소드
    Theanine14 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron14 += 0;
    Vitamin_B14 += 0;
    Vitamin_C14 += 1;
    Vitamin_D14 += 0;
    CoenzymeQ14 += 0;
    Probiotics14 += 0;
    Omega_314 += 0;
    Octacosanol14 += 0;
    MilkThistle14 += 0;
    Lutein14 += 0;
    Gamma_Lenolenic_Acid14 += 1;
    Pantothenic_Acid14 += 0;
    Biotin14 += 0;
}

function stomatitisCancel() { // 구내염 항목 취소 메소드
    Theanine14 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron14 += 0;
    Vitamin_B14 += 0;
    Vitamin_C14 -= 1;
    Vitamin_D14 += 0;
    CoenzymeQ14 += 0;
    Probiotics14 += 0;
    Omega_314 += 0;
    Octacosanol14 += 0;
    MilkThistle14 += 0;
    Lutein14 += 0;
    Gamma_Lenolenic_Acid14 -= 1;
    Pantothenic_Acid14 += 0;
    Biotin14 += 0;
}

function patternInterest() { // 관심 항목 메소드
    Theanine14 -= 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron14 -= 1;
    Vitamin_B14 -= 1;
    Vitamin_C14 -= 1;
    Vitamin_D14 -= 1;
    CoenzymeQ14 -= 1;
    Probiotics14 -= 1;
    Omega_314 -= 1;
    Octacosanol14 -= 1;
    MilkThistle14 -= 1;
    Lutein14 -= 1;
    Gamma_Lenolenic_Acid14 -= 1;
    Pantothenic_Acid14 -= 1;
    Biotin14 -= 1;
}

function patternInterestCancel() { // 관심 항목 취소 메소드
    Theanine14 += 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron14 += 1;
    Vitamin_B14 += 1;
    Vitamin_C14 += 1;
    Vitamin_D14 += 1;
    CoenzymeQ14 += 1;
    Probiotics14 += 1;
    Omega_314 += 1;
    Octacosanol14 += 1;
    MilkThistle14 += 1;
    Lutein14 += 1;
    Gamma_Lenolenic_Acid14 += 1;
    Pantothenic_Acid14 += 1;
    Biotin14 += 1;
}

const srv15_checkbox1 = document.getElementById('checkbox_work'); //srv숫자 check숫자 수정 = id값 수정
const srv15_checkbox2 = document.getElementById('checkbox_monitor');
const srv15_checkbox3 = document.getElementById('checkbox_concentration');
const srv15_checkbox4 = document.getElementById('checkbox_stomatitis');
const srv15_checkbox5 = document.getElementById('checkbox_patternInterest');

const srv15_question14_before = document.getElementById('question15_before'); //srv숫자 question숫자 수정 = id값 수정
const srv15_question14_next = document.getElementById('question15_next');

srv15_checkbox1.addEventListener('change', function () { //srv숫자 check숫자 수정, 메소드명 수정
    if (srv15_checkbox1.checked) {
        work(); 
    } else {
        workCancel();
    }
});

srv15_checkbox2.addEventListener('change', function () {
    if (srv15_checkbox2.checked) {
        monitor();
    } else {
        monitorCancel();
    }
});

srv15_checkbox3.addEventListener('change', function () {
    if (srv15_checkbox3.checked) {
        concentration();
    } else {
        concentrationCancel();
    }
});

srv15_checkbox4.addEventListener('change', function () {
    if (srv15_checkbox4.checked) {
        stomatitis();
    } else {
        stomatitisCancel();
    }
});

srv15_checkbox5.addEventListener('change', function () {
    if (srv15_checkbox5.checked) {
        patternInterest();
    } else {
        patternInterestCancel();
    }
});

srv15_question14_before.addEventListener('click', function () { // srv숫자 question숫자 수정
    window.location.href = '/survey14'; // 주소 수정
});

srv15_question14_next.addEventListener('click', function () {
    localStorage.setItem('data15_Theanine', Theanine14); //data숫자, 영양소명 숫자 수정
    localStorage.setItem('data15_Iron', Iron14);
    localStorage.setItem('data15_Vitamin_B', Vitamin_B14);
    localStorage.setItem('data15_Vitamin_C', Vitamin_C14);
    localStorage.setItem('data15_Vitamin_D', Vitamin_D14);
    localStorage.setItem('data15_CoenzymeQ', CoenzymeQ14);
    localStorage.setItem('data15_Probiotics', Probiotics14);
    localStorage.setItem('data15_Omega_3', Omega_314);
    localStorage.setItem('data15_Octacosanol', Octacosanol14);
    localStorage.setItem('data15_MilkThistle', MilkThistle14);
    localStorage.setItem('data15_Lutein', Lutein14);
    localStorage.setItem('data15_Gamma_Lenolenic_Acid', Gamma_Lenolenic_Acid14);
    localStorage.setItem('data15_Pantothenic_Acid', Pantothenic_Acid14);
    localStorage.setItem('data15_Biotin', Biotin14);

    window.location.href = '/survey16'; // 주소 수정
});

var score_check_btn = document.getElementById('score_check_btn')
score_check_btn.onclick = function () { // 뉴트리션 숫자 수정
    console.log(Theanine14);
    console.log(Iron14);
    console.log(Vitamin_B14);
    console.log(Vitamin_C14);
    console.log(Vitamin_D14);
    console.log(CoenzymeQ14);
    console.log(Probiotics14);
    console.log(Omega_314);
    console.log(Octacosanol14);
    console.log(MilkThistle14);
    console.log(Lutein14);
    console.log(Gamma_Lenolenic_Acid14);
    console.log(Pantothenic_Acid14);
    console.log(Biotin14);
}

// 작업완료
