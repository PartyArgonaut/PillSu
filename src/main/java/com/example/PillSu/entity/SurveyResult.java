package com.example.PillSu.entity;

import jakarta.persistence.*;


@Entity

public class SurveyResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Survey_Id")
    private Long surveyId;


    @Column(name = "Member_Email")
    private String memberEmail;
    @Column(name = "Theanine")
    private String theanine;
    @Column(name = "Iron")
    private String iron;
    @Column(name = "Vitamin_B")
    private String vitaminB;
    @Column(name = "Vitamin_C")
    private String vitaminC;
    @Column(name = "Vitamin_D")
    private String vitaminD;
    @Column(name = "Coenzyme_Q")
    private String coenzymeQ;
    @Column(name = "Probiotics")
    private String probiotics;
    @Column(name = "Omega_3")
    private String omega3;
    @Column(name = "Octacosanol")
    private String octacosanol;
    @Column(name = "MilkThistle")
    private String milk_thistle;
    @Column(name = "Lutein")
    private String lutein;
    @Column(name = "Gamma_Linolenic_Acid")
    private String gammaLenolenicAcid;
    @Column(name = "Pantothenic_Acid")
    private String pantothenicAcid;
    @Column(name = "Biotin")
    private String biotin;


    public SurveyResult(Long surveyId, String memberEmail, String theanine, String iron,
                        String vitaminB, String vitaminC, String vitaminD, String coenzymeQ,
                        String probiotics, String omega3, String octacosanol, String milkthistle,
                        String lutein, String gammaLenolenicAcid, String pantothenicAcid, String biotin) {
        this.surveyId = surveyId;
        this.memberEmail = memberEmail;
        this.theanine = theanine;
        this.iron = iron;
        this.vitaminB = vitaminB;
        this.vitaminC = vitaminC;
        this.vitaminD = vitaminD;
        this.coenzymeQ = coenzymeQ;
        this.probiotics = probiotics;
        this.omega3 = omega3;
        this.octacosanol = octacosanol;
        this.milk_thistle = milkthistle;
        this.lutein = lutein;
        this.gammaLenolenicAcid = gammaLenolenicAcid;
        this.pantothenicAcid = pantothenicAcid;
        this.biotin = biotin;
    }

    public SurveyResult() {
    }

    @Override
    public String toString() {
        return "surveyresult{" +
                "surveyId=" + surveyId +
                ", memberEmail='" + memberEmail + '\'' +
                ", theanine='" + theanine + '\'' +
                ", iron='" + iron + '\'' +
                ", vitaminB='" + vitaminB + '\'' +
                ", vitaminC='" + vitaminC + '\'' +
                ", vitaminD='" + vitaminD + '\'' +
                ", coenzymeQ='" + coenzymeQ + '\'' +
                ", probiotics='" + probiotics + '\'' +
                ", omega3='" + omega3 + '\'' +
                ", octacosanol='" + octacosanol + '\'' +
                ", milkthistle='" + milk_thistle + '\'' +
                ", lutein='" + lutein + '\'' +
                ", gammaLenolenicAcid='" + gammaLenolenicAcid + '\'' +
                ", pantothenicAcid='" + pantothenicAcid + '\'' +
                ", biotin='" + biotin + '\'' +
                '}';
    }
}
