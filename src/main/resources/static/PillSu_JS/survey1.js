let Theanine = 0;
let Iron = 0;
let Vitamin_B = 0;
let Vitamin_C = 0;
let Vitamin_D = 0;
let CoenzymeQ = 0;
let Probiotics = 0;
let Omega_3 = 0;
let Octacosanol = 0;
let MilkThistle = 0;
let Lutein = 0;
let Gamma_Lenolenic_Acid = 0;
let Pantothenic_Acid = 0;
let Biotin = 0;

function wound() { // 상처 항목 메소드
    Theanine += 0;
    Iron += 1;
    Vitamin_B += 1;
    Vitamin_C += 1;
    Vitamin_D += 0;
    CoenzymeQ += 1;
    Probiotics += 0;
    Omega_3 += 1;
    Octacosanol += 0;
    MilkThistle += 0;
    Lutein += 0;
    Gamma_Lenolenic_Acid += 2;
    Pantothenic_Acid += 0;
    Biotin += 1;
}

function woundCancel() {
    Theanine += 0;
    Iron -= 1;
    Vitamin_B -= 1;
    Vitamin_C -= 1;
    Vitamin_D += 0;
    CoenzymeQ -= 1;
    Probiotics += 0;
    Omega_3 -= 1;
    Octacosanol += 0;
    MilkThistle += 0;
    Lutein += 0;
    Gamma_Lenolenic_Acid -= 2;
    Pantothenic_Acid += 0;
    Biotin -= 1;
}

function asleep() { // 저림 항목 메소드
    Theanine += 0;
    Iron += 1;
    Vitamin_B += 0;
    Vitamin_C += 0;
    Vitamin_D += 0;
    CoenzymeQ += 2;
    Probiotics += 0;
    Omega_3 += 3;
    Octacosanol += 0;
    MilkThistle += 0;
    Lutein += 0;
    Gamma_Lenolenic_Acid += 3;
    Pantothenic_Acid += 0;
    Biotin += 0;
}

function asleepCancel() { // 저림 항목 메소드
    Theanine += 0;
    Iron -= 1;
    Vitamin_B += 0;
    Vitamin_C += 0;
    Vitamin_D += 0;
    CoenzymeQ -= 2;
    Probiotics += 0;
    Omega_3 -= 3;
    Octacosanol += 0;
    MilkThistle += 0;
    Lutein += 0;
    Gamma_Lenolenic_Acid -= 3;
    Pantothenic_Acid += 0;
    Biotin += 0;
}

function bleed() { // 출혈 항목 메소드
    Theanine += 0;
    Iron += 1;
    Vitamin_B += 0;
    Vitamin_C += 1;
    Vitamin_D += 0;
    CoenzymeQ += 1;
    Probiotics += 0;
    Omega_3 += 0;
    Octacosanol += 0;
    MilkThistle += 0;
    Lutein += 0;
    Gamma_Lenolenic_Acid += 1;
    Pantothenic_Acid += 0;
    Biotin += 0;
}

function bleedCancel() { // 출혈 항목 메소드
    Theanine += 0;
    Iron -= 1;
    Vitamin_B += 0;
    Vitamin_C -= 1;
    Vitamin_D += 0;
    CoenzymeQ -= 1;
    Probiotics += 0;
    Omega_3 += 0;
    Octacosanol += 0;
    MilkThistle += 0;
    Lutein += 0;
    Gamma_Lenolenic_Acid -= 1;
    Pantothenic_Acid += 0;
    Biotin += 0;
}

function pale() { // 창백해짐 항목 메소드
    Theanine += 1;
    Iron += 3;
    Vitamin_B += 0;
    Vitamin_C += 0;
    Vitamin_D += 2;
    CoenzymeQ += 1;
    Probiotics += 0;
    Omega_3 += 0;
    Octacosanol += 0;
    MilkThistle += 0;
    Lutein += 0;
    Gamma_Lenolenic_Acid += 1;
    Pantothenic_Acid += 0;
    Biotin += 0;
}

function paleCancel() { // 창백해짐 항목 메소드
    Theanine -= 1;
    Iron -= 3;
    Vitamin_B += 0;
    Vitamin_C += 0;
    Vitamin_D -= 2;
    CoenzymeQ -= 1;
    Probiotics += 0;
    Omega_3 += 0;
    Octacosanol += 0;
    MilkThistle += 0;
    Lutein += 0;
    Gamma_Lenolenic_Acid -= 1;
    Pantothenic_Acid += 0;
    Biotin += 0;
}

function veinInterest() { // 관심 항목 메소드
    Theanine += 0;
    Iron += 1;
    Vitamin_B += 1;
    Vitamin_C += 1;
    Vitamin_D += 1;
    CoenzymeQ += 1;
    Probiotics += 0;
    Omega_3 += 1;
    Octacosanol += 0;
    MilkThistle += 0;
    Lutein += 0;
    Gamma_Lenolenic_Acid += 1;
    Pantothenic_Acid += 0;
    Biotin += 0;
}

function veinInterestCancel() { // 관심 항목 메소드
    Theanine += 0;
    Iron -= 1;
    Vitamin_B -= 1;
    Vitamin_C -= 1;
    Vitamin_D -= 1;
    CoenzymeQ -= 1;
    Probiotics += 0;
    Omega_3 -= 1;
    Octacosanol += 0;
    MilkThistle += 0;
    Lutein += 0;
    Gamma_Lenolenic_Acid -= 1;
    Pantothenic_Acid += 0;
    Biotin += 0;
}

const srv1_checkbox1 = document.getElementById('checkbox_wound');
const srv1_checkbox2 = document.getElementById('checkbox_asleep');
const srv1_checkbox3 = document.getElementById('checkbox_bleed');
const srv1_checkbox4 = document.getElementById('checkbox_pale');
const srv1_checkbox5 = document.getElementById('checkbox_veinInterest');
// let srv1_question1_before = document.getElementById('question1_before');
const srv1_question1_next = document.getElementById('question1_nextLevel');

// 체크박스 상태 변경 감지 이벤트 핸들러
srv1_checkbox1.addEventListener('change', function () {
    if (srv1_checkbox1.checked) {
        wound();
    } else {
        woundCancel();
    }
});

srv1_checkbox2.addEventListener('change', function () {
    if (srv1_checkbox2.checked) {
        asleep();
    } else {
        asleepCancel();
    }
});

srv1_checkbox3.addEventListener('change', function () {
    if (srv1_checkbox3.checked) {
        bleed();
    } else {
        bleedCancel();
    }
});

srv1_checkbox4.addEventListener('change', function () {
    if (srv1_checkbox4.checked) {
        pale();
    } else {
        paleCancel();
    }
});

srv1_checkbox5.addEventListener('change', function () {
    if (srv1_checkbox5.checked) {
        veinInterest();
    } else {
        veinInterestCancel();
    }
});

// document.querySelector('form').addEventListener('submit', function (event) {
//     event.preventDefault(); // 폼 제출을 막음
//     let input1 = document.getElementById('input1').value; // input1의 요소를 가져오고 input1의 값을 input1에 저장. 
//     let input2 = document.getElementById('input2').value;
//     localStorage.setItem('data1', input1); // localStorage에 date1이라는 키로 input1이라는 값을 저장
//     localStorage.setItem('data2', input2);
//     window.location.href = '2번.html'; // 다음 페이지로 이동
// });

srv1_question1_next.addEventListener('click', function () {
    // addEventListener('submit', function (event){
    // event.preventDefault();
    localStorage.setItem('data1_Theanine', Theanine);
    localStorage.setItem('data1_Iron', Iron);
    localStorage.setItem('data1_Vitamin_B', Vitamin_B);
    localStorage.setItem('data1_Vitamin_C', Vitamin_C);
    localStorage.setItem('data1_Vitamin_D', Vitamin_D);
    localStorage.setItem('data1_CoenzymeQ', CoenzymeQ);
    localStorage.setItem('data1_Probiotics', Probiotics);
    localStorage.setItem('data1_Omega_3', Omega_3);
    localStorage.setItem('data1_Octacosanol', Octacosanol);
    localStorage.setItem('data1_MilkThistle', MilkThistle);
    localStorage.setItem('data1_Lutein', Lutein);
    localStorage.setItem('data1_Gamma_Lenolenic_Acid', Gamma_Lenolenic_Acid);
    localStorage.setItem('data1_Pantothenic_Acid', Pantothenic_Acid);
    localStorage.setItem('data1_Biotin', Biotin);

    window.location.href = '/survey2'

});

var score_Check_Btn = document.getElementById('score_check_btn') // 누적 점수를 확인하는 버튼
score_Check_Btn.onclick = function () {
    console.log(Theanine);
    console.log(Iron);
    console.log(Vitamin_B);
    console.log(Vitamin_C);
    console.log(Vitamin_D);
    console.log(CoenzymeQ);
    console.log(Probiotics);
    console.log(Omega_3);
    console.log(Octacosanol);
    console.log(MilkThistle);
    console.log(Lutein);
    console.log(Gamma_Lenolenic_Acid);
    console.log(Pantothenic_Acid);
    console.log(Biotin);

}

// localStorage로 10페이지, 나머지 페이지는 sessionStorage로 만들어서 브라우저가 종료되도 후반부부터
// 설문을 계속 할 수 있게 만든다. 설문 완료 버튼을 누르면 DTO형태로 누적된 결과값이 컨트롤러를 타고
// localStorage는 removeItem으로 지워주는 메소드를 추가한다. 또는 clear메소드 사용.

// 작업완료