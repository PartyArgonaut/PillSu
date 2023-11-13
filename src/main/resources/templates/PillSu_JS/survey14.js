window.addEventListener('load', function () { // 뉴트리션 뒤에 숫자, data뒤에 숫자 수정
    Theanine13 = parseInt(localStorage.getItem('data13_Theanine'), 10);
    Iron13 = parseInt(localStorage.getItem('data13_Iron'), 10);
    Vitamin_B13 = parseInt(localStorage.getItem('data13_Vitamin_B'), 10);
    Vitamin_C13 = parseInt(localStorage.getItem('data13_Vitamin_C'), 10);
    Vitamin_D13 = parseInt(localStorage.getItem('data13_Vitamin_D'), 10);
    CoenzymeQ13 = parseInt(localStorage.getItem('data13_CoenzymeQ'), 10);
    Probiotics13 = parseInt(localStorage.getItem('data13_Probiotics'), 10);
    Omega_313 = parseInt(localStorage.getItem('data13_Omega_3'), 10);
    Octacosanol13 = parseInt(localStorage.getItem('data13_Octacosanol'), 10);
    MilkThistle13 = parseInt(localStorage.getItem('data13_MilkThistle'), 10);
    Lutein13 = parseInt(localStorage.getItem('data13_Lutein'), 10);
    Gamma_Lenolenic_Acid13 = parseInt(localStorage.getItem('data13_Gamma_Lenolenic_Acid', 10));
    Pantothenic_Acid13 = parseInt(localStorage.getItem('data13_Pantothenic_Acid'), 10);
    Biotin13 = parseInt(localStorage.getItem('data13_Biotin'), 10);
});

let Theanine13; // 뉴트리션숫자 수정
let Iron13;
let Vitamin_B13;
let Vitamin_C13;
let Vitamin_D13;
let CoenzymeQ13;
let Probiotics13;
let Omega_313;
let Octacosanol13;
let MilkThistle13;
let Lutein13;
let Gamma_Lenolenic_Acid13;
let Pantothenic_Acid13;
let Biotin13;

function noFish() { // 생선 항목 메소드
    Theanine13 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron13 += 0;
    Vitamin_B13 += 1;
    Vitamin_C13 += 0;
    Vitamin_D13 += 2;
    CoenzymeQ13 += 1;
    Probiotics13 += 0;
    Omega_313 += 2;
    Octacosanol13 += 0;
    MilkThistle13 += 1;
    Lutein13 += 1;
    Gamma_Lenolenic_Acid13 += 1;
    Pantothenic_Acid13 += 0;
    Biotin13 += 1;
}

function noFishCancel() { // 생선 항목 취소 메소드
    Theanine13 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron13 += 0;
    Vitamin_B13 -= 1;
    Vitamin_C13 += 0;
    Vitamin_D13 -= 2;
    CoenzymeQ13 -= 1;
    Probiotics13 += 0;
    Omega_313 -= 2;
    Octacosanol13 += 0;
    MilkThistle13 -= 1;
    Lutein13 -= 1;
    Gamma_Lenolenic_Acid13 -= 1;
    Pantothenic_Acid13 += 0;
    Biotin13 -= 1;
}

function noVegetable() { // 야채 항목 메소드
    Theanine13 += 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron13 += 0;
    Vitamin_B13 += 0;
    Vitamin_C13 += 2;
    Vitamin_D13 += 0;
    CoenzymeQ13 += 0;
    Probiotics13 += 3;
    Omega_313 += 0;
    Octacosanol13 += 0;
    MilkThistle13 += 1;
    Lutein13 += 0;
    Gamma_Lenolenic_Acid13 += 0;
    Pantothenic_Acid13 += 2;
    Biotin13 += 0;
}

function noVegetableCancel() { // 야채 항목 취소 메소드
    Theanine13 -= 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron13 += 0;
    Vitamin_B13 += 0;
    Vitamin_C13 -= 2;
    Vitamin_D13 += 0;
    CoenzymeQ13 += 0;
    Probiotics13 -= 3;
    Omega_313 += 0;
    Octacosanol13 += 0;
    MilkThistle13 -= 1;
    Lutein13 += 0;
    Gamma_Lenolenic_Acid13 += 0;
    Pantothenic_Acid13 -= 2;
    Biotin13 += 0;
}

function noFruit() { // 과일 항목 메소드
    Theanine13 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron13 += 0;
    Vitamin_B13 += 0;
    Vitamin_C13 += 1;
    Vitamin_D13 += 0;
    CoenzymeQ13 += 0;
    Probiotics13 += 2;
    Omega_313 += 0;
    Octacosanol13 += 0;
    MilkThistle13 += 1;
    Lutein13 += 1;
    Gamma_Lenolenic_Acid13 += 0;
    Pantothenic_Acid13 += 0;
    Biotin13 += 0;
}

function noFruitCancel() { // 과일 항목 취소 메소드
    Theanine13 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron13 += 0;
    Vitamin_B13 += 0;
    Vitamin_C13 -= 1;
    Vitamin_D13 += 0;
    CoenzymeQ13 += 0;
    Probiotics13 -= 2;
    Omega_313 += 0;
    Octacosanol13 += 0;
    MilkThistle13 -= 1;
    Lutein13 -= 1;
    Gamma_Lenolenic_Acid13 += 0;
    Pantothenic_Acid13 += 0;
    Biotin13 += 0;
}

function noMeat() { // 고기 항목 메소드
    Theanine13 += 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron13 += 1;
    Vitamin_B13 += 1;
    Vitamin_C13 += 0;
    Vitamin_D13 += 1;
    CoenzymeQ13 += 0;
    Probiotics13 += 0;
    Omega_313 += 0;
    Octacosanol13 += 1;
    MilkThistle13 += 1;
    Lutein13 += 0;
    Gamma_Lenolenic_Acid13 += 1;
    Pantothenic_Acid13 += 0;
    Biotin13 += 0;
}

function noMeatCancel() { // 고기 항목 취소 메소드
    Theanine13 -= 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron13 -= 1;
    Vitamin_B13 -= 1;
    Vitamin_C13 += 0;
    Vitamin_D13 -= 1;
    CoenzymeQ13 += 0;
    Probiotics13 += 0;
    Omega_313 += 0;
    Octacosanol13 -= 1;
    MilkThistle13 -= 1;
    Lutein13 += 0;
    Gamma_Lenolenic_Acid13 -= 1;
    Pantothenic_Acid13 += 0;
    Biotin13 += 0;
}

function frequentSweet() { // 단음식 항목 메소드
    Theanine13 += 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron13 += 1;
    Vitamin_B13 += 0;
    Vitamin_C13 += 0;
    Vitamin_D13 += 0;
    CoenzymeQ13 += 1;
    Probiotics13 += 1;
    Omega_313 += 0;
    Octacosanol13 += 1;
    MilkThistle13 += 0;
    Lutein13 += 3;
    Gamma_Lenolenic_Acid13 += 0;
    Pantothenic_Acid13 += 1;
    Biotin13 += 2;
}

function frequentSweetCancel() { // 단음식 항목 취소 메소드
    Theanine13 -= 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron13 -= 1;
    Vitamin_B13 += 0;
    Vitamin_C13 += 0;
    Vitamin_D13 += 0;
    CoenzymeQ13 -= 1;
    Probiotics13 -= 1;
    Omega_313 += 0;
    Octacosanol13 -= 1;
    MilkThistle13 += 0;
    Lutein13 -= 3;
    Gamma_Lenolenic_Acid13 += 0;
    Pantothenic_Acid13 -= 1;
    Biotin13 -= 2;
}

function notEat() { // 식사거름 항목 메소드
    Theanine13 += 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron13 += 1;
    Vitamin_B13 += 1;
    Vitamin_C13 += 0;
    Vitamin_D13 += 1;
    CoenzymeQ13 += 0;
    Probiotics13 += 0;
    Omega_313 += 0;
    Octacosanol13 += 1;
    MilkThistle13 += 0;
    Lutein13 += 0;
    Gamma_Lenolenic_Acid13 += 0;
    Pantothenic_Acid13 += 0;
    Biotin13 += 0;
}

function notEatCancel() { // 식사거름 항목 취소 메소드
    Theanine13 -= 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron13 -= 1;
    Vitamin_B13 -= 1;
    Vitamin_C13 += 0;
    Vitamin_D13 -= 1;
    CoenzymeQ13 += 0;
    Probiotics13 += 0;
    Omega_313 += 0;
    Octacosanol13 -= 1;
    MilkThistle13 += 0;
    Lutein13 += 0;
    Gamma_Lenolenic_Acid13 += 0;
    Pantothenic_Acid13 += 0;
    Biotin13 += 0;
}

function none() { // 해당무 항목 메소드
    Theanine13 -= 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron13 -= 1;
    Vitamin_B13 -= 1;
    Vitamin_C13 -= 1;
    Vitamin_D13 -= 1;
    CoenzymeQ13 -= 1;
    Probiotics13 -= 1;
    Omega_313 -= 1;
    Octacosanol13 -= 1;
    MilkThistle13 -= 1;
    Lutein13 -= 1;
    Gamma_Lenolenic_Acid13 -= 1;
    Pantothenic_Acid13 -= 1;
    Biotin13 -= 1;
}

function noneCancel() { // 해당무 항목 취소 메소드
    Theanine13 += 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron13 += 1;
    Vitamin_B13 += 1;
    Vitamin_C13 += 1;
    Vitamin_D13 += 1;
    CoenzymeQ13 += 1;
    Probiotics13 += 1;
    Omega_313 += 1;
    Octacosanol13 += 1;
    MilkThistle13 += 1;
    Lutein13 += 1;
    Gamma_Lenolenic_Acid13 += 1;
    Pantothenic_Acid13 += 1;
    Biotin13 += 1;
}

const srv14_checkbox1 = document.getElementById('checkbox_noFish'); //srv숫자 check숫자 수정 = id값 수정
const srv14_checkbox2 = document.getElementById('checkbox_noVegetable');
const srv14_checkbox3 = document.getElementById('checkbox_noFruit');
const srv14_checkbox4 = document.getElementById('checkbox_noMeat');
const srv14_checkbox5 = document.getElementById('checkbox_frequentSweet');
const srv14_checkbox6 = document.getElementById('checkbox_notEat');
const srv14_checkbox7 = document.getElementById('checkbox_none');

const srv14_question13_before = document.getElementById('question14_before'); //srv숫자 question숫자 수정 = id값 수정
const srv14_question13_next = document.getElementById('question14_next');

srv14_checkbox1.addEventListener('change', function () { //srv숫자 check숫자 수정, 메소드명 수정
    if (srv14_checkbox1.checked) {
        noFish(); 
    } else {
        noFishCancel();
    }
});

srv14_checkbox2.addEventListener('change', function () {
    if (srv14_checkbox2.checked) {
        noVegetable();
    } else {
        noVegetableCancel();
    }
});

srv14_checkbox3.addEventListener('change', function () {
    if (srv14_checkbox3.checked) {
        noFruit();
    } else {
        noFruitCancel();
    }
});

srv14_checkbox4.addEventListener('change', function () {
    if (srv14_checkbox4.checked) {
        noMeat();
    } else {
        noMeatCancel();
    }
});

srv14_checkbox5.addEventListener('change', function () {
    if (srv14_checkbox5.checked) {
        frequentSweet();
    } else {
        frequentSweetCancel();
    }
})

srv14_checkbox6.addEventListener('change', function () {
    if (srv14_checkbox6.checked) {
        notEat();
    } else {
        notEatCancel();
    }
})

srv14_checkbox7.addEventListener('change', function () {
    if (srv14_checkbox7.checked) {
        none();
    } else {
        noneCancel();
    }
})

srv14_question13_before.addEventListener('click', function () { // srv숫자 question숫자 수정
    window.location.href = '/survey13'; // 주소 수정
});

srv14_question13_next.addEventListener('click', function () {
    localStorage.setItem('data14_Theanine', Theanine13); //data숫자, 영양소명 숫자 수정
    localStorage.setItem('data14_Iron', Iron13);
    localStorage.setItem('data14_Vitamin_B', Vitamin_B13);
    localStorage.setItem('data14_Vitamin_C', Vitamin_C13);
    localStorage.setItem('data14_Vitamin_D', Vitamin_D13);
    localStorage.setItem('data14_CoenzymeQ', CoenzymeQ13);
    localStorage.setItem('data14_Probiotics', Probiotics13);
    localStorage.setItem('data14_Omega_3', Omega_313);
    localStorage.setItem('data14_Octacosanol', Octacosanol13);
    localStorage.setItem('data14_MilkThistle', MilkThistle13);
    localStorage.setItem('data14_Lutein', Lutein13);
    localStorage.setItem('data14_Gamma_Lenolenic_Acid', Gamma_Lenolenic_Acid13);
    localStorage.setItem('data14_Pantothenic_Acid', Pantothenic_Acid13);
    localStorage.setItem('data14_Biotin', Biotin13);

    window.location.href = '/survey15'; // 주소 수정
});

var score_check_btn = document.getElementById('score_check_btn')
score_check_btn.onclick = function () { // 뉴트리션 숫자 수정
    console.log(Theanine13);
    console.log(Iron13);
    console.log(Vitamin_B13);
    console.log(Vitamin_C13);
    console.log(Vitamin_D13);
    console.log(CoenzymeQ13);
    console.log(Probiotics13);
    console.log(Omega_313);
    console.log(Octacosanol13);
    console.log(MilkThistle13);
    console.log(Lutein13);
    console.log(Gamma_Lenolenic_Acid13);
    console.log(Pantothenic_Acid13);
    console.log(Biotin13);
}

// 작업완료
