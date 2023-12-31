package com.example.PillSu.dto;



import com.example.PillSu.entity.SurveyResult;


public class surveyForm {
    private String theanine;
    private String iron;
    private String vitaminB;
    private String vitaminC;
    private String vitaminD;
    private String coenzymeQ;
    private String probiotics;
    private String omega3;
    private String octacosanol;
    private String milkthistle;
    private String lutein;
    private String gammaLenolenicAcid;
    private String pantothenicAcid;
    private String biotin;

    public surveyForm(String theanine, String iron, String vitaminB, String vitaminC,
                      String vitaminD, String coenzymeQ, String probiotics, String omega3,
                      String octacosanol, String milkthistle, String lutein,
                      String gammaLenolenicAcid, String pantothenicAcid, String biotin) {
        this.theanine = theanine;
        this.iron = iron;
        this.vitaminB = vitaminB;
        this.vitaminC = vitaminC;
        this.vitaminD = vitaminD;
        this.coenzymeQ = coenzymeQ;
        this.probiotics = probiotics;
        this.omega3 = omega3;
        this.octacosanol = octacosanol;
        this.milkthistle = milkthistle;
        this.lutein = lutein;
        this.gammaLenolenicAcid = gammaLenolenicAcid;
        this.pantothenicAcid = pantothenicAcid;
        this.biotin = biotin;
    }

    @Override
    public String toString() {
        return "surveyForm{" +
                "theanine='" + theanine + '\'' +
                ", iron='" + iron + '\'' +
                ", vitaminB='" + vitaminB + '\'' +
                ", vitaminC='" + vitaminC + '\'' +
                ", vitaminD='" + vitaminD + '\'' +
                ", coenzymeQ='" + coenzymeQ + '\'' +
                ", probiotics='" + probiotics + '\'' +
                ", omega3='" + omega3 + '\'' +
                ", octacosanol='" + octacosanol + '\'' +
                ", milkthistle='" + milkthistle + '\'' +
                ", lutein='" + lutein + '\'' +
                ", gammaLenolenicAcid='" + gammaLenolenicAcid + '\'' +
                ", pantothenicAcid='" + pantothenicAcid + '\'' +
                ", biotin='" + biotin + '\'' +
                '}';
    }

    public SurveyResult toEntity() {
        return new SurveyResult(null, null, theanine, iron, vitaminB, vitaminC, vitaminD, coenzymeQ, probiotics,
                omega3, octacosanol, milkthistle, lutein, gammaLenolenicAcid, pantothenicAcid, biotin);
    }

}
