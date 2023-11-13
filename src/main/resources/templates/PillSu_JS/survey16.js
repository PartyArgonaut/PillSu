window.addEventListener('load', function () { // 뉴트리션 뒤에 숫자, data뒤에 숫자 수정
    Theanine15 = parseInt(localStorage.getItem('data15_Theanine'), 10);
    Iron15 = parseInt(localStorage.getItem('data15_Iron'), 10);
    Vitamin_B15 = parseInt(localStorage.getItem('data15_Vitamin_B'), 10);
    Vitamin_C15 = parseInt(localStorage.getItem('data15_Vitamin_C'), 10);
    Vitamin_D15 = parseInt(localStorage.getItem('data15_Vitamin_D'), 10);
    CoenzymeQ15 = parseInt(localStorage.getItem('data15_CoenzymeQ'), 10);
    Probiotics15 = parseInt(localStorage.getItem('data15_Probiotics'), 10);
    Omega_315 = parseInt(localStorage.getItem('data15_Omega_3'), 10);
    Octacosanol15 = parseInt(localStorage.getItem('data15_Octacosanol'), 10);
    MilkThistle15 = parseInt(localStorage.getItem('data15_MilkThistle'), 10);
    Lutein15 = parseInt(localStorage.getItem('data15_Lutein'), 10);
    Gamma_Lenolenic_Acid15 = parseInt(localStorage.getItem('data15_Gamma_Lenolenic_Acid', 10));
    Pantothenic_Acid15 = parseInt(localStorage.getItem('data15_Pantothenic_Acid'), 10);
    Biotin15 = parseInt(localStorage.getItem('data15_Biotin'), 10);
});

let Theanine15; // 뉴트리션숫자 수정
let Iron15;
let Vitamin_B15;
let Vitamin_C15;
let Vitamin_D15;
let CoenzymeQ15;
let Probiotics15;
let Omega_315;
let Octacosanol15;
let MilkThistle15;
let Lutein15;
let Gamma_Lenolenic_Acid15;
let Pantothenic_Acid15;
let Biotin15;

function FHLD() { // 간질환 항목 메소드
    Theanine15 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron15 -= 1;
    Vitamin_B15 += 2;
    Vitamin_C15 += 1;
    Vitamin_D15 += 0;
    CoenzymeQ15 += 1;
    Probiotics15 += 0;
    Omega_315 += 0;
    Octacosanol15 += 0;
    MilkThistle15 += 3;
    Lutein15 += 0;
    Gamma_Lenolenic_Acid15 += 0;
    Pantothenic_Acid15 += 0;
    Biotin15 += 1;
}

function FHLDCancel() { // 간질환 항목 취소 메소드
    Theanine15 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron15 += 1;
    Vitamin_B15 -= 2;
    Vitamin_C15 -= 1;
    Vitamin_D15 += 0;
    CoenzymeQ15 -= 1;
    Probiotics15 += 0;
    Omega_315 += 0;
    Octacosanol15 += 0;
    MilkThistle15 -= 3;
    Lutein15 += 0;
    Gamma_Lenolenic_Acid15 += 0;
    Pantothenic_Acid15 += 0;
    Biotin15 -= 1;
}

function FHVD() { // 혈관질환 항목 메소드
    Theanine15 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron15 += 0;
    Vitamin_B15 += 0;
    Vitamin_C15 += 1;
    Vitamin_D15 += 1;
    CoenzymeQ15 += 1;
    Probiotics15 += 0;
    Omega_315 += 0;
    Octacosanol15 += 0;
    MilkThistle15 += 0;
    Lutein15 += 0;
    Gamma_Lenolenic_Acid15 += 0;
    Pantothenic_Acid15 += 0;
    Biotin15 += 1;
}

function FHVDCancel() { // 혈관질환 항목 취소 메소드
    Theanine15 += 0; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron15 += 0;
    Vitamin_B15 += 0;
    Vitamin_C15 -= 1;
    Vitamin_D15 -= 1;
    CoenzymeQ15 -= 1;
    Probiotics15 += 0;
    Omega_315 += 0;
    Octacosanol15 += 0;
    MilkThistle15 += 0;
    Lutein15 += 0;
    Gamma_Lenolenic_Acid15 += 0;
    Pantothenic_Acid15 += 0;
    Biotin15 -= 1;
}

function nonFamilyHistory() { // 가족력 항목 메소드
    Theanine15 -= 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron15 += 0;
    Vitamin_B15 += 0;
    Vitamin_C15 += 0;
    Vitamin_D15 += 0;
    CoenzymeQ15 += 0;
    Probiotics15 += 0;
    Omega_315 += 0;
    Octacosanol15 += 0;
    MilkThistle15 -= 1;
    Lutein15 += 0;
    Gamma_Lenolenic_Acid15 -= 1;
    Pantothenic_Acid15 += 0;
    Biotin15 += 0;
}

function nonFamilyHistoryCancel() { // 가족력 항목 취소 메소드
    Theanine15 += 1; // 영양소숫자 수정, 점수 수정, 부호 수정
    Iron15 += 0;
    Vitamin_B15 += 0;
    Vitamin_C15 += 0;
    Vitamin_D15 += 0;
    CoenzymeQ15 += 0;
    Probiotics15 += 0;
    Omega_315 += 0;
    Octacosanol15 += 0;
    MilkThistle15 += 1;
    Lutein15 += 0;
    Gamma_Lenolenic_Acid15 += 1;
    Pantothenic_Acid15 += 0;
    Biotin15 += 0;
}

const srv16_checkbox1 = document.getElementById('checkbox_FHLD'); //srv숫자 check숫자 수정 = id값 수정
const srv16_checkbox2 = document.getElementById('checkbox_FHVD');
const srv16_checkbox3 = document.getElementById('checkbox_nonFamilyHistory');

const srv16_question15_before = document.getElementById('question16_before'); //srv숫자 question숫자 수정 = id값 수정
const srv16_question15_complete = document.getElementById('question16_complete');

srv16_checkbox1.addEventListener('change', function () { //srv숫자 check숫자 수정, 메소드명 수정
    if (srv16_checkbox1.checked) {
        FHLD(); 
    } else {
        FHLDCancel();
    }
});

srv16_checkbox2.addEventListener('change', function () {
    if (srv16_checkbox2.checked) {
        FHVD();
    } else {
        FHVDCancel();
    }
});

srv16_checkbox3.addEventListener('change', function () {
    if (srv16_checkbox3.checked) {
        nonFamilyHistory();
    } else {
        nonFamilyHistoryCancel();
    }
});



srv16_question15_before.addEventListener('click', function () { // srv숫자 question숫자 수정
    window.location.href = '/survey15'; // 주소 수정
});

srv16_question15_complete.addEventListener('click', function () { //이 메소드에 URL요청하는 
    localStorage.setItem('data16_Theanine', Theanine15); //data숫자, 영양소명 숫자 수정
    localStorage.setItem('data16_Iron', Iron15);
    localStorage.setItem('data16_Vitamin_B', Vitamin_B15);
    localStorage.setItem('data16_Vitamin_C', Vitamin_C15);
    localStorage.setItem('data16_Vitamin_D', Vitamin_D15);
    localStorage.setItem('data16_CoenzymeQ', CoenzymeQ15);
    localStorage.setItem('data16_Probiotics', Probiotics15);
    localStorage.setItem('data16_Omega_3', Omega_315);
    localStorage.setItem('data16_Octacosanol', Octacosanol15);
    localStorage.setItem('data16_MilkThistle', MilkThistle15);
    localStorage.setItem('data16_Lutein', Lutein15);
    localStorage.setItem('data16_Gamma_Lenolenic_Acid', Gamma_Lenolenic_Acid15);
    localStorage.setItem('data16_Pantothenic_Acid', Pantothenic_Acid15);
    localStorage.setItem('data16_Biotin', Biotin15);
    //여기까지 누적된 데이터가 localStorage에 쌓임.

    // 누적된 최종 데이터인 data16의 값을 가져와서 DTO에 넣는 요청.
    // 1. localStorage에 있는 데이터를 가져온다.

    var resultZero = localStorage.getItem('data16_Theanine');
    var resultOne = localStorage.getItem('data16_Iron');
    var resultTwo = localStorage.getItem('data16_Vitamin_B');
    var resultThree = localStorage.getItem('data16_Vitamin_C');
    var resultFour = localStorage.getItem('data16_Vitamin_D');
    var resultFive = localStorage.getItem('data16_CoenzymeQ');
    var resultSix = localStorage.getItem('data16_Probiotics');
    var resultSeven = localStorage.getItem('data16_Omega_3');
    var resultEight = localStorage.getItem('data16_Octacosanol');
    var resultNine = localStorage.getItem('data16_MilkThistle');
    var resultTen = localStorage.getItem('data16_Lutein');
    var resultEleven = localStorage.getItem('data16_Gamma_Lenolenic_Acid');
    var resultTwelve = localStorage.getItem('data16_Pantothenic_Acid');
    var resultThirteen = localStorage.getItem('data16_Biotin');

    var dto = {
        theanine:resultZero,
        iron:resultOne,
        vitaminB:resultTwo,
        vitaminC:resultThree,
        vitaminD:resultFour,
        coenzymeQ:resultFive,
        probiotics:resultSix,
        omega3:resultSeven,
        octacosanol:resultEight,
        milkThistle:resultNine,
        lutein:resultTen,
        gammaLenolenicAcid:resultEleven,
        pantothenicAcid:resultTwelve,
        biotin:resultThirteen
    }

    $.ajax({
      url: '/surveyForm',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(dto),
      success: function(response) {
        window.location.href = '/surveyComplete'
        localStorage.clear();
      },
      error: function(error) {
        console.log("데이터 제출 실패")
      }
    });
});

var score_check_btn = document.getElementById('score_check_btn')
score_check_btn.onclick = function () { // 뉴트리션 숫자 수정
    console.log(Theanine15);
    console.log(Iron15);
    console.log(Vitamin_B15);
    console.log(Vitamin_C15);
    console.log(Vitamin_D15);
    console.log(CoenzymeQ15);
    console.log(Probiotics15);
    console.log(Omega_315);
    console.log(Octacosanol15);
    console.log(MilkThistle15);
    console.log(Lutein15);
    console.log(Gamma_Lenolenic_Acid15);
    console.log(Pantothenic_Acid15);
    console.log(Biotin15);
}