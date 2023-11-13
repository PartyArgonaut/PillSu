window.addEventListener('load', function () { // 뉴트리션 뒤에 숫자, data뒤에 숫자 수정
    Theanine3 = parseInt(localStorage.getItem('data3_Theanine'), 10);
    Iron3 = parseInt(localStorage.getItem('data3_Iron'), 10);
    Vitamin_B3 = parseInt(localStorage.getItem('data3_Vitamin_B'), 10);
    Vitamin_C3 = parseInt(localStorage.getItem('data3_Vitamin_C'), 10);
    Vitamin_D3 = parseInt(localStorage.getItem('data3_Vitamin_D'), 10);
    CoenzymeQ3 = parseInt(localStorage.getItem('data3_CoenzymeQ'), 10);
    Probiotics3 = parseInt(localStorage.getItem('data3_Probiotics'), 10);
    Omega_33 = parseInt(localStorage.getItem('data3_Omega_3'), 10);
    Octacosanol3 = parseInt(localStorage.getItem('data3_Octacosanol'), 10);
    MilkThistle3 = parseInt(localStorage.getItem('data3_MilkThistle'), 10);
    Lutein3 = parseInt(localStorage.getItem('data3_Lutein'), 10);
    Gamma_Lenolenic_Acid3 = parseInt(localStorage.getItem('data3_Gamma_Lenolenic_Acid', 10));
    Pantothenic_Acid3 = parseInt(localStorage.getItem('data3_Pantothenic_Acid'), 10);
    Biotin3 = parseInt(localStorage.getItem('data3_Biotin'), 10);
});

let Theanine3; // 뉴트리션숫자 수정
let Iron3;
let Vitamin_B3;
let Vitamin_C3;
let Vitamin_D3;
let CoenzymeQ3;
let Probiotics3;
let Omega_33;
let Octacosanol3;
let MilkThistle3;
let Lutein3;
let Gamma_Lenolenic_Acid3;
let Pantothenic_Acid3;
let Biotin3;

function memory() { // 기억력 항목 메소드
    Theanine3 += 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron3 += 1;
    Vitamin_B3 += 0;
    Vitamin_C3 += 0;
    Vitamin_D3 += 0;
    CoenzymeQ3 += 1;
    Probiotics3 += 0;
    Omega_33 += 1;
    Octacosanol3 += 1;
    MilkThistle3 += 0;
    Lutein3 += 0;
    Gamma_Lenolenic_Acid3 += 0;
    Pantothenic_Acid3 += 0;
    Biotin3 += 1;
}

function memoryCancel() { // 기억력 항목 메소드
    Theanine3 -= 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron3 -= 1;
    Vitamin_B3 += 0;
    Vitamin_C3 += 0;
    Vitamin_D3 += 0;
    CoenzymeQ3 -= 1;
    Probiotics3 += 0;
    Omega_33 -= 1;
    Octacosanol3 -= 1;
    MilkThistle3 += 0;
    Lutein3 += 0;
    Gamma_Lenolenic_Acid3 += 0;
    Pantothenic_Acid3 += 0;
    Biotin3 -= 1;
}

function headache() { // 기억력 항목 메소드
    Theanine3 += 2; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron3 += 0;
    Vitamin_B3 += 0;
    Vitamin_C3 += 0;
    Vitamin_D3 += 0;
    CoenzymeQ3 += 0;
    Probiotics3 += 0;
    Omega_33 += 0;
    Octacosanol3 += 2;
    MilkThistle3 += 0;
    Lutein3 += 0;
    Gamma_Lenolenic_Acid3 += 0;
    Pantothenic_Acid3 += 0;
    Biotin3 += 1;
}

function headacheCancel() { // 기억력 항목 메소드
    Theanine3 -= 2; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron3 += 0;
    Vitamin_B3 += 0;
    Vitamin_C3 += 0;
    Vitamin_D3 += 0;
    CoenzymeQ3 += 0;
    Probiotics3 += 0;
    Omega_33 += 0;
    Octacosanol3 -= 2;
    MilkThistle3 += 0;
    Lutein3 += 0;
    Gamma_Lenolenic_Acid3 += 0;
    Pantothenic_Acid3 += 0;
    Biotin3 -= 1;
}

function anxious() { // 기억력 항목 메소드
    Theanine3 += 4; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron3 += 0;
    Vitamin_B3 += 0;
    Vitamin_C3 += 1;
    Vitamin_D3 += 0;
    CoenzymeQ3 += 0;
    Probiotics3 += 0;
    Omega_33 += 1;
    Octacosanol3 += 1;
    MilkThistle3 += 0;
    Lutein3 += 0;
    Gamma_Lenolenic_Acid3 += 0;
    Pantothenic_Acid3 += 0;
    Biotin3 += 0;
}

function anxiousCancel() { // 기억력 항목 메소드
    Theanine3 -= 4; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron3 += 0;
    Vitamin_B3 += 0;
    Vitamin_C3 -= 1;
    Vitamin_D3 += 0;
    CoenzymeQ3 += 0;
    Probiotics3 += 0;
    Omega_33 -= 1;
    Octacosanol3 -= 1;
    MilkThistle3 += 0;
    Lutein3 += 0;
    Gamma_Lenolenic_Acid3 += 0;
    Pantothenic_Acid3 += 0;
    Biotin3 += 0;
}

function gloomy() { // 기억력 항목 메소드
    Theanine3 += 3; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron3 += 0;
    Vitamin_B3 += 0;
    Vitamin_C3 += 1;
    Vitamin_D3 += 1;
    CoenzymeQ3 += 0;
    Probiotics3 += 0;
    Omega_33 += 2;
    Octacosanol3 += 0;
    MilkThistle3 += 0;
    Lutein3 += 0;
    Gamma_Lenolenic_Acid3 += 0;
    Pantothenic_Acid3 += 1;
    Biotin3 += 0;
}

function gloomyCancel() { // 기억력 항목 메소드
    Theanine3 -= 3; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron3 += 0;
    Vitamin_B3 += 0;
    Vitamin_C3 -= 1;
    Vitamin_D3 -= 1;
    CoenzymeQ3 += 0;
    Probiotics3 += 0;
    Omega_33 -= 2;
    Octacosanol3 += 0;
    MilkThistle3 += 0;
    Lutein3 += 0;
    Gamma_Lenolenic_Acid3 += 0;
    Pantothenic_Acid3 -= 1;
    Biotin3 += 0;
}

function brainInterest() { // 기억력 항목 메소드
    Theanine3 += 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron3 += 0;
    Vitamin_B3 += 0;
    Vitamin_C3 += 0;
    Vitamin_D3 += 0;
    CoenzymeQ3 += 0;
    Probiotics3 += 0;
    Omega_33 += 0;
    Octacosanol3 += 1;
    MilkThistle3 += 0;
    Lutein3 += 0;
    Gamma_Lenolenic_Acid3 += 0;
    Pantothenic_Acid3 += 0;
    Biotin3 += 0;
}

function brainInterestCancel() { // 기억력 항목 메소드
    Theanine3 -= 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron3 += 0;
    Vitamin_B3 += 0;
    Vitamin_C3 += 0;
    Vitamin_D3 += 0;
    CoenzymeQ3 += 0;
    Probiotics3 += 0;
    Omega_33 += 0;
    Octacosanol3 -= 1;
    MilkThistle3 += 0;
    Lutein3 += 0;
    Gamma_Lenolenic_Acid3 += 0;
    Pantothenic_Acid3 += 0;
    Biotin3 += 0;
}

const srv4_checkbox1 = document.getElementById('checkbox_memory'); //srv숫자 check숫자 수정 = id값 수정
const srv4_checkbox2 = document.getElementById('checkbox_headache');
const srv4_checkbox3 = document.getElementById('checkbox_anxious');
const srv4_checkbox4 = document.getElementById('checkbox_gloomy');
const srv4_checkbox5 = document.getElementById('checkbox_brainInterest');

const srv4_question3_before = document.getElementById('question4_before'); //srv숫자 question숫자 수정 = id값 수정
const srv4_question3_next = document.getElementById('question4_next');

srv4_checkbox1.addEventListener('change', function () { //srv숫자 check숫자 수정, 메소드명 수정
    if (srv4_checkbox1.checked) {
        memory(); 
    } else {
        memoryCancel();
    }
});

srv4_checkbox2.addEventListener('change', function () {
    if (srv4_checkbox2.checked) {
        headache();
    } else {
        headacheCancel();
    }
});

srv4_checkbox3.addEventListener('change', function () {
    if (srv4_checkbox3.checked) {
        anxious();
    } else {
        anxiousCancel();
    }
});

srv4_checkbox4.addEventListener('change', function () {
    if (srv4_checkbox4.checked) {
        gloomy();
    } else {
        gloomyCancel();
    }
});

srv4_checkbox5.addEventListener('change', function () {
    if (srv4_checkbox5.checked) {
        brainInterest();
    } else {
        brainInterestCancel();
    }
})

srv4_question3_before.addEventListener('click', function () { // srv숫자 question숫자 수정
    window.location.href = '/survey3'; // 주소 수정
});

srv4_question3_next.addEventListener('click', function () {
    localStorage.setItem('data4_Theanine', Theanine3); //data숫자, 영양소명 숫자 수정
    localStorage.setItem('data4_Iron', Iron3);
    localStorage.setItem('data4_Vitamin_B', Vitamin_B3);
    localStorage.setItem('data4_Vitamin_C', Vitamin_C3);
    localStorage.setItem('data4_Vitamin_D', Vitamin_D3);
    localStorage.setItem('data4_CoenzymeQ', CoenzymeQ3);
    localStorage.setItem('data4_Probiotics', Probiotics3);
    localStorage.setItem('data4_Omega_3', Omega_33);
    localStorage.setItem('data4_Octacosanol', Octacosanol3);
    localStorage.setItem('data4_MilkThistle', MilkThistle3);
    localStorage.setItem('data4_Lutein', Lutein3);
    localStorage.setItem('data4_Gamma_Lenolenic_Acid', Gamma_Lenolenic_Acid3);
    localStorage.setItem('data4_Pantothenic_Acid', Pantothenic_Acid3);
    localStorage.setItem('data4_Biotin', Biotin3);

    window.location.href = '/survey5'; // 주소 수정
});

var score_check_btn = document.getElementById('score_check_btn')
score_check_btn.onclick = function () { // 뉴트리션 숫자 수정
    console.log(Theanine3);
    console.log(Iron3);
    console.log(Vitamin_B3);
    console.log(Vitamin_C3);
    console.log(Vitamin_D3);
    console.log(CoenzymeQ3);
    console.log(Probiotics3);
    console.log(Omega_33);
    console.log(Octacosanol3);
    console.log(MilkThistle3);
    console.log(Lutein3);
    console.log(Gamma_Lenolenic_Acid3);
    console.log(Pantothenic_Acid3);
    console.log(Biotin3);
}
// 작업완료