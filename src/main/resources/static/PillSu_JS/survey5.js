window.addEventListener('load', function () { // 뉴트리션 뒤에 숫자, data뒤에 숫자 수정
    Theanine4 = parseInt(localStorage.getItem('data4_Theanine'), 10);
    Iron4 = parseInt(localStorage.getItem('data4_Iron'), 10);
    Vitamin_B4 = parseInt(localStorage.getItem('data4_Vitamin_B'), 10);
    Vitamin_C4 = parseInt(localStorage.getItem('data4_Vitamin_C'), 10);
    Vitamin_D4 = parseInt(localStorage.getItem('data4_Vitamin_D'), 10);
    CoenzymeQ4 = parseInt(localStorage.getItem('data4_CoenzymeQ'), 10);
    Probiotics4 = parseInt(localStorage.getItem('data4_Probiotics'), 10);
    Omega_34 = parseInt(localStorage.getItem('data4_Omega_3'), 10);
    Octacosanol4 = parseInt(localStorage.getItem('data4_Octacosanol'), 10);
    MilkThistle4 = parseInt(localStorage.getItem('data4_MilkThistle'), 10);
    Lutein4 = parseInt(localStorage.getItem('data4_Lutein'), 10);
    Gamma_Lenolenic_Acid4 = parseInt(localStorage.getItem('data4_Gamma_Lenolenic_Acid', 10));
    Pantothenic_Acid4 = parseInt(localStorage.getItem('data4_Pantothenic_Acid'), 10);
    Biotin4 = parseInt(localStorage.getItem('data4_Biotin'), 10);
});

let Theanine4; // 뉴트리션숫자 수정
let Iron4;
let Vitamin_B4;
let Vitamin_C4;
let Vitamin_D4;
let CoenzymeQ4;
let Probiotics4;
let Omega_34;
let Octacosanol4;
let MilkThistle4;
let Lutein4;
let Gamma_Lenolenic_Acid4;
let Pantothenic_Acid4;
let Biotin4;

function torpor() { // 무기력 항목 메소드
    Theanine4 += 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron4 += 1;
    Vitamin_B4 += 2;
    Vitamin_C4 += 2;
    Vitamin_D4 += 0;
    CoenzymeQ4 += 0;
    Probiotics4 += 0;
    Omega_34 += 0;
    Octacosanol4 += 1;
    MilkThistle4 += 2;
    Lutein4 += 0;
    Gamma_Lenolenic_Acid4 += 0;
    Pantothenic_Acid4 += 3;
    Biotin4 += 2;
}

function torporCancel() { // 무기력 항목 취소 메소드
    Theanine4 -= 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron4 -= 1;
    Vitamin_B4 -= 2;
    Vitamin_C4 -= 2;
    Vitamin_D4 += 0;
    CoenzymeQ4 += 0;
    Probiotics4 += 0;
    Omega_34 += 0;
    Octacosanol4 -= 1;
    MilkThistle4 -= 2;
    Lutein4 += 0;
    Gamma_Lenolenic_Acid4 += 0;
    Pantothenic_Acid4 -= 3;
    Biotin4 -= 2;
}

function tiredness() { // 피로함 항목 메소드
    Theanine4 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron4 += 1;
    Vitamin_B4 += 2;
    Vitamin_C4 += 2;
    Vitamin_D4 += 2;
    CoenzymeQ4 += 0;
    Probiotics4 += 0;
    Omega_34 += 0;
    Octacosanol4 += 1;
    MilkThistle4 += 3;
    Lutein4 += 0;
    Gamma_Lenolenic_Acid4 += 1;
    Pantothenic_Acid4 += 2;
    Biotin4 += 2;
}

function tirednessCancel() { // 피로함 항목 취소 메소드
    Theanine4 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron4 -= 1;
    Vitamin_B4 -= 2;
    Vitamin_C4 -= 2;
    Vitamin_D4 -= 2;
    CoenzymeQ4 += 0;
    Probiotics4 += 0;
    Omega_34 += 0;
    Octacosanol4 -= 1;
    MilkThistle4 -= 3;
    Lutein4 += 0;
    Gamma_Lenolenic_Acid4 -= 1;
    Pantothenic_Acid4 -= 2;
    Biotin4 -= 2;
}

function sensitive() { // 예민함 항목 메소드
    Theanine4 += 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron4 += 0;
    Vitamin_B4 += 0;
    Vitamin_C4 += 1;
    Vitamin_D4 += 3;
    CoenzymeQ4 += 0;
    Probiotics4 += 0;
    Omega_34 += 1;
    Octacosanol4 += 0;
    MilkThistle4 += 0;
    Lutein4 += 0;
    Gamma_Lenolenic_Acid4 += 0;
    Pantothenic_Acid4 += 0;
    Biotin4 += 0;
}

function sensitiveCancel() { // 예민함 항목 취소 메소드
    Theanine4 -= 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron4 += 0;
    Vitamin_B4 += 0;
    Vitamin_C4 -= 1;
    Vitamin_D4 -= 3;
    CoenzymeQ4 += 0;
    Probiotics4 += 0;
    Omega_34 -= 1;
    Octacosanol4 += 0;
    MilkThistle4 += 0;
    Lutein4 += 0;
    Gamma_Lenolenic_Acid4 += 0;
    Pantothenic_Acid4 += 0;
    Biotin4 += 0;
}

function goodSleep() { // 꿀잠 항목 메소드
    Theanine4 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron4 -= 1;
    Vitamin_B4 -= 1;
    Vitamin_C4 -= 1;
    Vitamin_D4 += 0;
    CoenzymeQ4 += 0;
    Probiotics4 += 0;
    Omega_34 += 0;
    Octacosanol4 += 0;
    MilkThistle4 += 0;
    Lutein4 += 0;
    Gamma_Lenolenic_Acid4 += 0;
    Pantothenic_Acid4 += 0;
    Biotin4 -= 1;
}

function goodSleepCancel() { // 꿀잠 항목 취소 메소드
    Theanine4 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron4 += 1;
    Vitamin_B4 += 1;
    Vitamin_C4 += 1;
    Vitamin_D4 += 0;
    CoenzymeQ4 += 0;
    Probiotics4 += 0;
    Omega_34 += 0;
    Octacosanol4 += 0;
    MilkThistle4 += 0;
    Lutein4 += 0;
    Gamma_Lenolenic_Acid4 += 0;
    Pantothenic_Acid4 += 0;
    Biotin4 += 1;
}

function urinate() { // 야뇨증 항목 메소드
    Theanine4 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron4 += 0;
    Vitamin_B4 += 0;
    Vitamin_C4 += 0;
    Vitamin_D4 += 1;
    CoenzymeQ4 += 0;
    Probiotics4 += 0;
    Omega_34 += 0;
    Octacosanol4 += 0;
    MilkThistle4 += 0;
    Lutein4 += 0;
    Gamma_Lenolenic_Acid4 += 0;
    Pantothenic_Acid4 += 0;
    Biotin4 += 0;
}

function urinateCancel() { // 야뇨증 항목 취소 메소드
    Theanine4 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron4 += 0;
    Vitamin_B4 += 0;
    Vitamin_C4 += 0;
    Vitamin_D4 -= 1;
    CoenzymeQ4 += 0;
    Probiotics4 += 0;
    Omega_34 += 0;
    Octacosanol4 += 0;
    MilkThistle4 += 0;
    Lutein4 += 0;
    Gamma_Lenolenic_Acid4 += 0;
    Pantothenic_Acid4 += 0;
    Biotin4 += 0;
}

function fatigueInterest() { // 관심 항목 메소드
    Theanine4 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron4 += 1;
    Vitamin_B4 += 1;
    Vitamin_C4 += 1;
    Vitamin_D4 += 1;
    CoenzymeQ4 += 0;
    Probiotics4 += 0;
    Omega_34 += 0;
    Octacosanol4 += 1;
    MilkThistle4 += 1;
    Lutein4 += 0;
    Gamma_Lenolenic_Acid4 += 0;
    Pantothenic_Acid4 += 1;
    Biotin4 += 1;
}

function fatigueInterestCancel() { // 관심 항목 취소 메소드
    Theanine4 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron4 -= 1;
    Vitamin_B4 -= 1;
    Vitamin_C4 -= 1;
    Vitamin_D4 -= 1;
    CoenzymeQ4 += 0;
    Probiotics4 += 0;
    Omega_34 += 0;
    Octacosanol4 -= 1;
    MilkThistle4 -= 1;
    Lutein4 += 0;
    Gamma_Lenolenic_Acid4 += 0;
    Pantothenic_Acid4 -= 1;
    Biotin4 -= 1;
}

const srv5_checkbox1 = document.getElementById('checkbox_torpor'); //srv숫자 check숫자 수정 = id값 수정
const srv5_checkbox2 = document.getElementById('checkbox_tiredness');
const srv5_checkbox3 = document.getElementById('checkbox_sensitive');
const srv5_checkbox4 = document.getElementById('checkbox_goodSleep');
const srv5_checkbox5 = document.getElementById('checkbox_urinate');
const srv5_checkbox6 = document.getElementById('checkbox_fatigueInterest');

const srv5_question4_before = document.getElementById('question5_before'); //srv숫자 question숫자 수정 = id값 수정
const srv5_question4_next = document.getElementById('question5_next');

srv5_checkbox1.addEventListener('change', function () { //srv숫자 check숫자 수정, 메소드명 수정
    if (srv5_checkbox1.checked) {
        torpor(); 
    } else {
        torporCancel();
    }
});

srv5_checkbox2.addEventListener('change', function () {
    if (srv5_checkbox2.checked) {
        tiredness();
    } else {
        tirednessCancel();
    }
});

srv5_checkbox3.addEventListener('change', function () {
    if (srv5_checkbox3.checked) {
        sensitive();
    } else {
        sensitiveCancel();
    }
});

srv5_checkbox4.addEventListener('change', function () {
    if (srv5_checkbox4.checked) {
        goodSleep();
    } else {
        goodSleepCancel();
    }
});

srv5_checkbox5.addEventListener('change', function () {
    if (srv5_checkbox5.checked) {
        urinate();
    } else {
        urinateCancel();
    }
})

srv5_checkbox6.addEventListener('change', function () {
    if (srv5_checkbox6.checked) {
        fatigueInterest();
    } else {
        fatigueInterestCancel();
    }
})

srv5_question4_before.addEventListener('click', function () { // srv숫자 question숫자 수정
    window.location.href = '/survey4'; // 주소 수정
});

srv5_question4_next.addEventListener('click', function () {
    localStorage.setItem('data5_Theanine', Theanine4); //data숫자, 영양소명 숫자 수정
    localStorage.setItem('data5_Iron', Iron4);
    localStorage.setItem('data5_Vitamin_B', Vitamin_B4);
    localStorage.setItem('data5_Vitamin_C', Vitamin_C4);
    localStorage.setItem('data5_Vitamin_D', Vitamin_D4);
    localStorage.setItem('data5_CoenzymeQ', CoenzymeQ4);
    localStorage.setItem('data5_Probiotics', Probiotics4);
    localStorage.setItem('data5_Omega_3', Omega_34);
    localStorage.setItem('data5_Octacosanol', Octacosanol4);
    localStorage.setItem('data5_MilkThistle', MilkThistle4);
    localStorage.setItem('data5_Lutein', Lutein4);
    localStorage.setItem('data5_Gamma_Lenolenic_Acid', Gamma_Lenolenic_Acid4);
    localStorage.setItem('data5_Pantothenic_Acid', Pantothenic_Acid4);
    localStorage.setItem('data5_Biotin', Biotin4);

    window.location.href = '/survey6'; // 주소 수정
});

var score_check_btn = document.getElementById('score_check_btn')
score_check_btn.onclick = function () { // 뉴트리션 숫자 수정
    console.log(Theanine4);
    console.log(Iron4);
    console.log(Vitamin_B4);
    console.log(Vitamin_C4);
    console.log(Vitamin_D4);
    console.log(CoenzymeQ4);
    console.log(Probiotics4);
    console.log(Omega_34);
    console.log(Octacosanol4);
    console.log(MilkThistle4);
    console.log(Lutein4);
    console.log(Gamma_Lenolenic_Acid4);
    console.log(Pantothenic_Acid4);
    console.log(Biotin4);
}
//작업 완료
