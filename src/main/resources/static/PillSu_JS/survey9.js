window.addEventListener('load', function () { // 뉴트리션 뒤에 숫자, data뒤에 숫자 수정
    Theanine8 = parseInt(localStorage.getItem('data8_Theanine'), 10);
    Iron8 = parseInt(localStorage.getItem('data8_Iron'), 10);
    Vitamin_B8 = parseInt(localStorage.getItem('data8_Vitamin_B'), 10);
    Vitamin_C8 = parseInt(localStorage.getItem('data8_Vitamin_C'), 10);
    Vitamin_D8 = parseInt(localStorage.getItem('data8_Vitamin_D'), 10);
    CoenzymeQ8 = parseInt(localStorage.getItem('data8_CoenzymeQ'), 10);
    Probiotics8 = parseInt(localStorage.getItem('data8_Probiotics'), 10);
    Omega_38 = parseInt(localStorage.getItem('data8_Omega_3'), 10);
    Octacosanol8 = parseInt(localStorage.getItem('data8_Octacosanol'), 10);
    MilkThistle8 = parseInt(localStorage.getItem('data8_MilkThistle'), 10);
    Lutein8 = parseInt(localStorage.getItem('data8_Lutein'), 10);
    Gamma_Lenolenic_Acid8 = parseInt(localStorage.getItem('data8_Gamma_Lenolenic_Acid', 10));
    Pantothenic_Acid8 = parseInt(localStorage.getItem('data8_Pantothenic_Acid'), 10);
    Biotin8 = parseInt(localStorage.getItem('data8_Biotin'), 10);
});

let Theanine8; // 뉴트리션숫자 수정
let Iron8;
let Vitamin_B8;
let Vitamin_C8;
let Vitamin_D8;
let CoenzymeQ8;
let Probiotics8;
let Omega_38;
let Octacosanol8;
let MilkThistle8;
let Lutein8;
let Gamma_Lenolenic_Acid8;
let Pantothenic_Acid8;
let Biotin8;

function anemia() { // 빈혈 항목 메소드
    Theanine8 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron8 += 4;
    Vitamin_B8 += 0;
    Vitamin_C8 += 1;
    Vitamin_D8 += 0;
    CoenzymeQ8 += 0;
    Probiotics8 += 0;
    Omega_38 += 0;
    Octacosanol8 += 0;
    MilkThistle8 += 0;
    Lutein8 += 0;
    Gamma_Lenolenic_Acid8 += 1;
    Pantothenic_Acid8 += 0;
    Biotin8 += 1;
}

function anemiaCancel() { // 빈혈 항목 취소 메소드
    Theanine8 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron8 -= 4;
    Vitamin_B8 += 0;
    Vitamin_C8 -= 1;
    Vitamin_D8 += 0;
    CoenzymeQ8 += 0;
    Probiotics8 += 0;
    Omega_38 += 0;
    Octacosanol8 += 0;
    MilkThistle8 += 0;
    Lutein8 += 0;
    Gamma_Lenolenic_Acid8 -= 1;
    Pantothenic_Acid8 += 0;
    Biotin8 -= 1;
}

function diet() { // 다이어트 항목 메소드
    Theanine8 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron8 += 2;
    Vitamin_B8 += 1;
    Vitamin_C8 += 0;
    Vitamin_D8 += 0;
    CoenzymeQ8 += 0;
    Probiotics8 += 3;
    Omega_38 += 0;
    Octacosanol8 += 1;
    MilkThistle8 += 0;
    Lutein8 += 0;
    Gamma_Lenolenic_Acid8 += 0;
    Pantothenic_Acid8 += 1;
    Biotin8 += 0;
}

function dietCancel() { // 다이어트 항목 취소 메소드
    Theanine8 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron8 -= 2;
    Vitamin_B8 -= 1;
    Vitamin_C8 += 0;
    Vitamin_D8 += 0;
    CoenzymeQ8 += 0;
    Probiotics8 -= 3;
    Omega_38 += 0;
    Octacosanol8 -= 1;
    MilkThistle8 += 0;
    Lutein8 += 0;
    Gamma_Lenolenic_Acid8 += 0;
    Pantothenic_Acid8 -= 1;
    Biotin8 += 0;
}

function breathless() { // 숨참 항목 메소드
    Theanine8 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron8 += 2;
    Vitamin_B8 += 0;
    Vitamin_C8 += 0;
    Vitamin_D8 += 0;
    CoenzymeQ8 += 0;
    Probiotics8 += 0;
    Omega_38 += 1;
    Octacosanol8 += 1;
    MilkThistle8 += 0;
    Lutein8 += 0;
    Gamma_Lenolenic_Acid8 += 0;
    Pantothenic_Acid8 += 1;
    Biotin8 += 0;
}

function breathlessCancel() { // 숨참 항목 취소 메소드
    Theanine8 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron8 -= 2;
    Vitamin_B8 += 0;
    Vitamin_C8 += 0;
    Vitamin_D8 += 0;
    CoenzymeQ8 += 0;
    Probiotics8 += 0;
    Omega_38 -= 1;
    Octacosanol8 -= 1;
    MilkThistle8 += 0;
    Lutein8 += 0;
    Gamma_Lenolenic_Acid8 += 0;
    Pantothenic_Acid8 -= 1;
    Biotin8 += 0;
}

function menses() { // 월경량 항목 메소드
    Theanine8 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron8 += 4;
    Vitamin_B8 += 0;
    Vitamin_C8 += 0;
    Vitamin_D8 += 0;
    CoenzymeQ8 += 0;
    Probiotics8 += 0;
    Omega_38 += 0;
    Octacosanol8 += 0;
    MilkThistle8 += 0;
    Lutein8 += 0;
    Gamma_Lenolenic_Acid8 += 0;
    Pantothenic_Acid8 += 0;
    Biotin8 += 0;
}

function mensesCancel() { // 월경량 항목 취소 메소드
    Theanine8 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron8 -= 4;
    Vitamin_B8 += 0;
    Vitamin_C8 += 0;
    Vitamin_D8 += 0;
    CoenzymeQ8 += 0;
    Probiotics8 += 0;
    Omega_38 += 0;
    Octacosanol8 += 0;
    MilkThistle8 += 0;
    Lutein8 += 0;
    Gamma_Lenolenic_Acid8 += 0;
    Pantothenic_Acid8 += 0;
    Biotin8 += 0;
}

function womanInterest() { // 관심 항목 메소드
    Theanine8 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron8 += 1;
    Vitamin_B8 += 0;
    Vitamin_C8 += 0;
    Vitamin_D8 += 0;
    CoenzymeQ8 += 0;
    Probiotics8 += 0;
    Omega_38 += 0;
    Octacosanol8 += 0;
    MilkThistle8 += 0;
    Lutein8 += 0;
    Gamma_Lenolenic_Acid8 += 0;
    Pantothenic_Acid8 += 0;
    Biotin8 += 0;
}

function womanInterestCancel() { // 관심 항목 취소 메소드
    Theanine8 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron8 -= 1;
    Vitamin_B8 += 0;
    Vitamin_C8 += 0;
    Vitamin_D8 += 0;
    CoenzymeQ8 += 0;
    Probiotics8 += 0;
    Omega_38 += 0;
    Octacosanol8 += 0;
    MilkThistle8 += 0;
    Lutein8 += 0;
    Gamma_Lenolenic_Acid8 += 0;
    Pantothenic_Acid8 += 0;
    Biotin8 += 0;
}

const srv9_checkbox1 = document.getElementById('checkbox_anemia'); //srv숫자 check숫자 수정 = id값 수정
const srv9_checkbox2 = document.getElementById('checkbox_diet');
const srv9_checkbox3 = document.getElementById('checkbox_breathless');
const srv9_checkbox4 = document.getElementById('checkbox_menses');
const srv9_checkbox5 = document.getElementById('checkbox_womanInterest');

const srv9_question8_before = document.getElementById('question9_before'); //srv숫자 question숫자 수정 = id값 수정
const srv9_question8_next = document.getElementById('question9_next');

srv9_checkbox1.addEventListener('change', function () { //srv숫자 check숫자 수정, 메소드명 수정
    if (srv9_checkbox1.checked) {
        anemia(); 
    } else {
        anemiaCancel();
    }
});

srv9_checkbox2.addEventListener('change', function () {
    if (srv9_checkbox2.checked) {
        diet();
    } else {
        dietCancel();
    }
});

srv9_checkbox3.addEventListener('change', function () {
    if (srv9_checkbox3.checked) {
        breathless();
    } else {
        breathlessCancel();
    }
});

srv9_checkbox4.addEventListener('change', function () {
    if (srv9_checkbox4.checked) {
        menses();
    } else {
        mensesCancel();
    }
});

srv9_checkbox5.addEventListener('change', function () {
    if (srv9_checkbox5.checked) {
        womanInterest();
    } else {
        womanInterestCancel();
    }
})

srv9_question8_before.addEventListener('click', function () { // srv숫자 question숫자 수정
    window.location.href = '/survey8'; // 주소 수정
});

srv9_question8_next.addEventListener('click', function () {
    localStorage.setItem('data9_Theanine', Theanine8); //data숫자, 영양소명 숫자 수정
    localStorage.setItem('data9_Iron', Iron8);
    localStorage.setItem('data9_Vitamin_B', Vitamin_B8);
    localStorage.setItem('data9_Vitamin_C', Vitamin_C8);
    localStorage.setItem('data9_Vitamin_D', Vitamin_D8);
    localStorage.setItem('data9_CoenzymeQ', CoenzymeQ8);
    localStorage.setItem('data9_Probiotics', Probiotics8);
    localStorage.setItem('data9_Omega_3', Omega_38);
    localStorage.setItem('data9_Octacosanol', Octacosanol8);
    localStorage.setItem('data9_MilkThistle', MilkThistle8);
    localStorage.setItem('data9_Lutein', Lutein8);
    localStorage.setItem('data9_Gamma_Lenolenic_Acid', Gamma_Lenolenic_Acid8);
    localStorage.setItem('data9_Pantothenic_Acid', Pantothenic_Acid8);
    localStorage.setItem('data9_Biotin', Biotin8);

    window.location.href = '/survey10'; // 주소 수정
});

var score_check_btn = document.getElementById('score_check_btn')
score_check_btn.onclick = function () { // 뉴트리션 숫자 수정
    console.log(Theanine8);
    console.log(Iron8);
    console.log(Vitamin_B8);
    console.log(Vitamin_C8);
    console.log(Vitamin_D8);
    console.log(CoenzymeQ8);
    console.log(Probiotics8);
    console.log(Omega_38);
    console.log(Octacosanol8);
    console.log(MilkThistle8);
    console.log(Lutein8);
    console.log(Gamma_Lenolenic_Acid8);
    console.log(Pantothenic_Acid8);
    console.log(Biotin8);
}