package com.example.PillSu.dto;


//import com.example.PillSu_Project.entity.MemberEntity;



import java.sql.Date;

public class CategoryForm
{
    private Long category_ID;
    private Integer product_Category1;
    private Integer product_Category2;
    private Integer product_Category3;
    private Integer product_Category4;
    private String product_ID;

    public CategoryForm(Long category_ID, Integer product_Category1, Integer product_Category2, Integer product_Category3, Integer product_Category4, String product_ID) {
        this.category_ID = category_ID;
        this.product_Category1 = product_Category1;
        this.product_Category2 = product_Category2;
        this.product_Category3 = product_Category3;
        this.product_Category4 = product_Category4;
        this.product_ID = product_ID;
    }


}
