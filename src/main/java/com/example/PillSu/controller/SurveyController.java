package com.example.PillSu.controller;

import com.example.PillSu.dto.surveyForm;
import com.example.PillSu.entity.SurveyResult;
import com.example.PillSu.repository.SurveyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@RequiredArgsConstructor
@Slf4j
public class SurveyController {
    @Autowired
    private SurveyRepository surveyRepository;



    @GetMapping("/survey1")
    public String survey1() {

        return "PillSu_HTML/survey_category1.html";
    }

    @GetMapping("/survey2")
    public String survey2() {

        return "PillSu_HTML/survey_category2.html";
    }

    @GetMapping("/survey3")
    public String survey3() {

        return "PillSu_HTML/survey_category3.html";
    }

    @GetMapping("/survey4")
    public String survey4() {

        return "PillSu_HTML/survey_category4.html";
    }

    @GetMapping("/survey5")
    public String survey5() {

        return "PillSu_HTML/survey_category5.html";
    }

    @GetMapping("/survey6")
    public String survey6() {

        return "PillSu_HTML/survey_category6.html";
    }

    @GetMapping("/survey7")
    public String survey7() {

        return "PillSu_HTML/survey_category7.html";
    }

    @GetMapping("/survey8")
    public String survey8() {

        return "PillSu_HTML/survey_category8.html";
    }

    @GetMapping("/survey9")
    public String survey9() {

        return "PillSu_HTML/survey_category9.html";
    }

    @GetMapping("/survey10")
    public String survey10() {

        return "PillSu_HTML/survey_category10.html";
    }

    @GetMapping("/survey11")
    public String survey11() {

        return "PillSu_HTML/survey_category11.html";
    }

    @GetMapping("/survey12")
    public String survey12() {

        return "PillSu_HTML/survey_category12.html";
    }

    @GetMapping("/survey13")
    public String survey13() {

        return "PillSu_HTML/survey_category13.html";
    }

    @GetMapping("/survey14")
    public String survey14() {

        return "PillSu_HTML/survey_category14.html";
    }

    @GetMapping("/survey15")
    public String survey15() {

        return "PillSu_HTML/survey_category15.html";
    }

    @GetMapping("/survey16")
    public String survey16() {

        return "PillSu_HTML/survey_category16.html";
    } // 여기에서 model로 form데이터 받아서

    @PostMapping("/surveyForm")
    public ResponseEntity<String> createSurvey(@RequestBody surveyForm surveyform){
        System.out.println(surveyform.toString());
        SurveyResult survey = surveyform.toEntity();
        System.out.println(survey.toString());
        SurveyResult surveysaved = surveyRepository.save(survey);
        return ResponseEntity.ok("Data received successfully");
    }



    @GetMapping("/surveyComplete")
    public String surveyComplete() {

        return "PillSu_HTML/surveyComplete.html";
    } // 여기는 나중에 DB에서 데이터 받아와서 데이터에 맞게 화면이 바뀌게 구성을 해야함.


}

