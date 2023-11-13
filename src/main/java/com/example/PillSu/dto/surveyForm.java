package com.example.pillsuproject.DTO;


import com.example.pillsuproject.Entity.Survey;
import lombok.ToString;

@ToString
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
    private String milkThistle;
    private String lutein;
    private String gammaLenolenicAcid;
    private String pantothenicAcid;
    private String biotin;

    public surveyForm(String theanine, String iron, String vitaminB, String vitaminC,
                      String vitaminD, String coenzymeQ, String probiotics, String omega3,
                      String octacosanol, String milkThistle, String lutein,
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
        this.milkThistle = milkThistle;
        this.lutein = lutein;
        this.gammaLenolenicAcid = gammaLenolenicAcid;
        this.pantothenicAcid = pantothenicAcid;
        this.biotin = biotin;

    }

    public Survey toEntity() {
        return new Survey(null, null, theanine, iron, vitaminB, vitaminC, vitaminD, coenzymeQ, probiotics,
                omega3, octacosanol, milkThistle, lutein, gammaLenolenicAcid, pantothenicAcid, biotin);
    }

}
