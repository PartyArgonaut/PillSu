window.addEventListener('load', function () { // 뉴트리션 뒤에 숫자, data뒤에 숫자 수정
    Theanine11 = parseInt(localStorage.getItem('data11_Theanine'), 10);
    Iron11 = parseInt(localStorage.getItem('data11_Iron'), 10);
    Vitamin_B11 = parseInt(localStorage.getItem('data11_Vitamin_B'), 10);
    Vitamin_C11 = parseInt(localStorage.getItem('data11_Vitamin_C'), 10);
    Vitamin_D11 = parseInt(localStorage.getItem('data11_Vitamin_D'), 10);
    CoenzymeQ11 = parseInt(localStorage.getItem('data11_CoenzymeQ'), 10);
    Probiotics11 = parseInt(localStorage.getItem('data11_Probiotics'), 10);
    Omega_311 = parseInt(localStorage.getItem('data11_Omega_3'), 10);
    Octacosanol11 = parseInt(localStorage.getItem('data11_Octacosanol'), 10);
    MilkThistle11 = parseInt(localStorage.getItem('data11_MilkThistle'), 10);
    Lutein11 = parseInt(localStorage.getItem('data11_Lutein'), 10);
    Gamma_Lenolenic_Acid11 = parseInt(localStorage.getItem('data11_Gamma_Lenolenic_Acid', 10));
    Pantothenic_Acid11 = parseInt(localStorage.getItem('data11_Pantothenic_Acid'), 10);
    Biotin11 = parseInt(localStorage.getItem('data11_Biotin'), 10);
});

let Theanine11; // 뉴트리션숫자 수정
let Iron11;
let Vitamin_B11;
let Vitamin_C11;
let Vitamin_D11;
let CoenzymeQ11;
let Probiotics11;
let Omega_311;
let Octacosanol11;
let MilkThistle11;
let Lutein11;
let Gamma_Lenolenic_Acid11;
let Pantothenic_Acid11;
let Biotin11;

function exercise1() { // 운동 주 4회 이상 항목 메소드
    Theanine11 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron11 += 1;
    Vitamin_B11 += 2;
    Vitamin_C11 += 1;
    Vitamin_D11 += 0;
    CoenzymeQ11 += 0;
    Probiotics11 += 0;
    Omega_311 += 0;
    Octacosanol11 += 2;
    MilkThistle11 += 0;
    Lutein11 += 0;
    Gamma_Lenolenic_Acid11 += 0;
    Pantothenic_Acid11 += 1;
    Biotin11 += 0;
}

function exercise1Cancel() { // 운동 주 4회 이상 항목 취소 메소드
    Theanine11 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron11 -= 1;
    Vitamin_B11 -= 2;
    Vitamin_C11 -= 1;
    Vitamin_D11 += 0;
    CoenzymeQ11 += 0;
    Probiotics11 += 0;
    Omega_311 += 0;
    Octacosanol11 -= 2;
    MilkThistle11 += 0;
    Lutein11 += 0;
    Gamma_Lenolenic_Acid11 += 0;
    Pantothenic_Acid11 -= 1;
    Biotin11 += 0;
}

function exercise2() { // 운동 주 1~4회 항목 메소드
    Theanine11 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron11 += 0;
    Vitamin_B11 += 1;
    Vitamin_C11 += 0;
    Vitamin_D11 += 0;
    CoenzymeQ11 += 0;
    Probiotics11 += 0;
    Omega_311 += 1;
    Octacosanol11 += 1;
    MilkThistle11 += 0;
    Lutein11 += 0;
    Gamma_Lenolenic_Acid11 += 0;
    Pantothenic_Acid11 += 0;
    Biotin11 += 0;
}

function exercise2Cancel() { // 운동 주 1~4회 항목 취소 메소드
    Theanine11 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron11 += 0;
    Vitamin_B11 -= 1;
    Vitamin_C11 += 0;
    Vitamin_D11 += 0;
    CoenzymeQ11 += 0;
    Probiotics11 += 0;
    Omega_311 -= 1;
    Octacosanol11 -= 1;
    MilkThistle11 += 0;
    Lutein11 += 0;
    Gamma_Lenolenic_Acid11 += 0;
    Pantothenic_Acid11 += 0;
    Biotin11 += 0;
}

function exercise3() { // 운동 안함 항목 메소드
    Theanine11 += 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron11 += 0;
    Vitamin_B11 += 0;
    Vitamin_C11 += 0;
    Vitamin_D11 += 1;
    CoenzymeQ11 += 1;
    Probiotics11 += 1;
    Omega_311 += 1;
    Octacosanol11 += 0;
    MilkThistle11 += 0;
    Lutein11 += 0;
    Gamma_Lenolenic_Acid11 += 0;
    Pantothenic_Acid11 += 0;
    Biotin11 += 1;
}

function exercise3Cancel() { // 운동 안함 항목 취소 메소드
    Theanine11 -= 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron11 += 0;
    Vitamin_B11 += 0;
    Vitamin_C11 += 0;
    Vitamin_D11 -= 1;
    CoenzymeQ11 -= 1;
    Probiotics11 -= 1;
    Omega_311 -= 1;
    Octacosanol11 += 0;
    MilkThistle11 += 0;
    Lutein11 += 0;
    Gamma_Lenolenic_Acid11 += 0;
    Pantothenic_Acid11 += 0;
    Biotin11 -= 1;
}

const srv12_checkbox1 = document.getElementById('checkbox_exercise1'); //srv숫자 check숫자 수정 = id값 수정
const srv12_checkbox2 = document.getElementById('checkbox_exercise2');
const srv12_checkbox3 = document.getElementById('checkbox_exercise3');


const srv12_question11_before = document.getElementById('question12_before'); //srv숫자 question숫자 수정 = id값 수정
const srv12_question11_next = document.getElementById('question12_next');

srv12_checkbox1.addEventListener('change', function () { //srv숫자 check숫자 수정, 메소드명 수정
    if (srv12_checkbox1.checked) {
        exercise1(); 
    } else {
        exercise1Cancel();
    }
});

srv12_checkbox2.addEventListener('change', function () {
    if (srv12_checkbox2.checked) {
        exercise2();
    } else {
        exercise2Cancel();
    }
});

srv12_checkbox3.addEventListener('change', function () {
    if (srv12_checkbox3.checked) {
        exercise3();
    } else {
        exercise3Cancel();
    }
});

srv12_question11_before.addEventListener('click', function () { // srv숫자 question숫자 수정
    window.location.href = '/survey11'; // 주소 수정
});

srv12_question11_next.addEventListener('click', function () {
    localStorage.setItem('data12_Theanine', Theanine11); //data숫자, 영양소명 숫자 수정
    localStorage.setItem('data12_Iron', Iron11);
    localStorage.setItem('data12_Vitamin_B', Vitamin_B11);
    localStorage.setItem('data12_Vitamin_C', Vitamin_C11);
    localStorage.setItem('data12_Vitamin_D', Vitamin_D11);
    localStorage.setItem('data12_CoenzymeQ', CoenzymeQ11);
    localStorage.setItem('data12_Probiotics', Probiotics11);
    localStorage.setItem('data12_Omega_3', Omega_311);
    localStorage.setItem('data12_Octacosanol', Octacosanol11);
    localStorage.setItem('data12_MilkThistle', MilkThistle11);
    localStorage.setItem('data12_Lutein', Lutein11);
    localStorage.setItem('data12_Gamma_Lenolenic_Acid', Gamma_Lenolenic_Acid11);
    localStorage.setItem('data12_Pantothenic_Acid', Pantothenic_Acid11);
    localStorage.setItem('data12_Biotin', Biotin11);

    window.location.href = '/survey13'; // 주소 수정
});

var score_check_btn = document.getElementById('score_check_btn')
score_check_btn.onclick = function () { // 뉴트리션 숫자 수정
    console.log(Theanine11);
    console.log(Iron11);
    console.log(Vitamin_B11);
    console.log(Vitamin_C11);
    console.log(Vitamin_D11);
    console.log(CoenzymeQ11);
    console.log(Probiotics11);
    console.log(Omega_311);
    console.log(Octacosanol11);
    console.log(MilkThistle11);
    console.log(Lutein11);
    console.log(Gamma_Lenolenic_Acid11);
    console.log(Pantothenic_Acid11);
    console.log(Biotin11);
}

// 작업완료