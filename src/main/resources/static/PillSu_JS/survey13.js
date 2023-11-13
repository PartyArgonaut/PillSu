window.addEventListener('load', function () { // 뉴트리션 뒤에 숫자, data뒤에 숫자 수정
    Theanine12 = parseInt(localStorage.getItem('data12_Theanine'), 10);
    Iron12 = parseInt(localStorage.getItem('data12_Iron'), 10);
    Vitamin_B12 = parseInt(localStorage.getItem('data12_Vitamin_B'), 10);
    Vitamin_C12 = parseInt(localStorage.getItem('data12_Vitamin_C'), 10);
    Vitamin_D12 = parseInt(localStorage.getItem('data12_Vitamin_D'), 10);
    CoenzymeQ12 = parseInt(localStorage.getItem('data12_CoenzymeQ'), 10);
    Probiotics12 = parseInt(localStorage.getItem('data12_Probiotics'), 10);
    Omega_312 = parseInt(localStorage.getItem('data12_Omega_3'), 10);
    Octacosanol12 = parseInt(localStorage.getItem('data12_Octacosanol'), 10);
    MilkThistle12 = parseInt(localStorage.getItem('data12_MilkThistle'), 10);
    Lutein12 = parseInt(localStorage.getItem('data12_Lutein'), 10);
    Gamma_Lenolenic_Acid12 = parseInt(localStorage.getItem('data12_Gamma_Lenolenic_Acid', 10));
    Pantothenic_Acid12 = parseInt(localStorage.getItem('data12_Pantothenic_Acid'), 10);
    Biotin12 = parseInt(localStorage.getItem('data12_Biotin'), 10);
});

let Theanine12; // 뉴트리션숫자 수정
let Iron12;
let Vitamin_B12;
let Vitamin_C12;
let Vitamin_D12;
let CoenzymeQ12;
let Probiotics12;
let Omega_312;
let Octacosanol12;
let MilkThistle12;
let Lutein12;
let Gamma_Lenolenic_Acid12;
let Pantothenic_Acid12;
let Biotin12;

function active1() { // 야외활동 일 4시간 이상 항목 메소드
    Theanine12 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron12 += 0;
    Vitamin_B12 += 1;
    Vitamin_C12 += 0;
    Vitamin_D12 -= 1;
    CoenzymeQ12 += 0;
    Probiotics12 += 0;
    Omega_312 += 0;
    Octacosanol12 += 0;
    MilkThistle12 += 0;
    Lutein12 += 2;
    Gamma_Lenolenic_Acid12 += 0;
    Pantothenic_Acid12 += 0;
    Biotin12 += 0;
}

function active1Cancel() { // 야외활동 일 4시간 이상 항목 취소 메소드
    Theanine12 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron12 += 0;
    Vitamin_B12 -= 1;
    Vitamin_C12 += 0;
    Vitamin_D12 += 1;
    CoenzymeQ12 += 0;
    Probiotics12 += 0;
    Omega_312 += 0;
    Octacosanol12 += 0;
    MilkThistle12 += 0;
    Lutein12 -= 2;
    Gamma_Lenolenic_Acid12 += 0;
    Pantothenic_Acid12 += 0;
    Biotin12 += 0;
}

function active2() { // 운동 1~4시간 항목 메소드
    Theanine12 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron12 += 0;
    Vitamin_B12 += 0;
    Vitamin_C12 += 0;
    Vitamin_D12 += 1;
    CoenzymeQ12 += 0;
    Probiotics12 += 0;
    Omega_312 += 0;
    Octacosanol12 += 0;
    MilkThistle12 += 0;
    Lutein12 += 1;
    Gamma_Lenolenic_Acid12 += 0;
    Pantothenic_Acid12 += 0;
    Biotin12 += 0;
}

function active2Cancel() { // 운동 1~4시간 항목 취소 메소드
    Theanine12 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron12 += 0;
    Vitamin_B12 += 0;
    Vitamin_C12 += 0;
    Vitamin_D12 -= 1;
    CoenzymeQ12 += 0;
    Probiotics12 += 0;
    Omega_312 += 0;
    Octacosanol12 += 0;
    MilkThistle12 += 0;
    Lutein12 -= 1;
    Gamma_Lenolenic_Acid12 += 0;
    Pantothenic_Acid12 += 0;
    Biotin12 += 0;
}

function active3() { // 운동 안함 항목 메소드
    Theanine12 += 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron12 += 1;
    Vitamin_B12 += 0;
    Vitamin_C12 += 0;
    Vitamin_D12 += 3;
    CoenzymeQ12 += 1;
    Probiotics12 += 0;
    Omega_312 += 1;
    Octacosanol12 += 0;
    MilkThistle12 += 0;
    Lutein12 += 0;
    Gamma_Lenolenic_Acid12 += 0;
    Pantothenic_Acid12 += 0;
    Biotin12 += 1;
}

function active3Cancel() { // 운동 안함 항목 취소 메소드
    Theanine12 -= 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron12 -= 1;
    Vitamin_B12 += 0;
    Vitamin_C12 += 0;
    Vitamin_D12 -= 3;
    CoenzymeQ12 -= 1;
    Probiotics12 += 0;
    Omega_312 -= 1;
    Octacosanol12 += 0;
    MilkThistle12 += 0;
    Lutein12 += 0;
    Gamma_Lenolenic_Acid12 += 0;
    Pantothenic_Acid12 += 0;
    Biotin12 -= 1;
}

const srv13_checkbox1 = document.getElementById('checkbox_active1'); //srv숫자 check숫자 수정 = id값 수정
const srv13_checkbox2 = document.getElementById('checkbox_active2');
const srv13_checkbox3 = document.getElementById('checkbox_active3');


const srv13_question12_before = document.getElementById('question13_before'); //srv숫자 question숫자 수정 = id값 수정
const srv13_question12_next = document.getElementById('question13_next');

srv13_checkbox1.addEventListener('change', function () { //srv숫자 check숫자 수정, 메소드명 수정
    if (srv13_checkbox1.checked) {
        active1();
    } else {
        active1Cancel();
    }
});

srv13_checkbox2.addEventListener('change', function () {
    if (srv13_checkbox2.checked) {
        active2();
    } else {
        active2Cancel();
    }
});

srv13_checkbox3.addEventListener('change', function () {
    if (srv13_checkbox3.checked) {
        active3();
    } else {
        active3Cancel();
    }
});

srv13_question12_before.addEventListener('click', function () { // srv숫자 question숫자 수정
    window.location.href = '/survey12'; // 주소 수정
});

srv13_question12_next.addEventListener('click', function () {
    localStorage.setItem('data13_Theanine', Theanine12); //data숫자, 영양소명 숫자 수정
    localStorage.setItem('data13_Iron', Iron12);
    localStorage.setItem('data13_Vitamin_B', Vitamin_B12);
    localStorage.setItem('data13_Vitamin_C', Vitamin_C12);
    localStorage.setItem('data13_Vitamin_D', Vitamin_D12);
    localStorage.setItem('data13_CoenzymeQ', CoenzymeQ12);
    localStorage.setItem('data13_Probiotics', Probiotics12);
    localStorage.setItem('data13_Omega_3', Omega_312);
    localStorage.setItem('data13_Octacosanol', Octacosanol12);
    localStorage.setItem('data13_MilkThistle', MilkThistle12);
    localStorage.setItem('data13_Lutein', Lutein12);
    localStorage.setItem('data13_Gamma_Lenolenic_Acid', Gamma_Lenolenic_Acid12);
    localStorage.setItem('data13_Pantothenic_Acid', Pantothenic_Acid12);
    localStorage.setItem('data13_Biotin', Biotin12);

    window.location.href = '/survey14'; // 주소 수정
});

var score_check_btn = document.getElementById('score_check_btn')
score_check_btn.onclick = function () { // 뉴트리션 숫자 수정
    console.log(Theanine12);
    console.log(Iron12);
    console.log(Vitamin_B12);
    console.log(Vitamin_C12);
    console.log(Vitamin_D12);
    console.log(CoenzymeQ12);
    console.log(Probiotics12);
    console.log(Omega_312);
    console.log(Octacosanol12);
    console.log(MilkThistle12);
    console.log(Lutein12);
    console.log(Gamma_Lenolenic_Acid12);
    console.log(Pantothenic_Acid12);
    console.log(Biotin12);
}

// 작업완료
