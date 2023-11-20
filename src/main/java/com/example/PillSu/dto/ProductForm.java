package com.example.PillSu.dto;


//import com.example.PillSu_Project.entity.MemberEntity;


import com.example.PillSu.entity.Product;


import com.querydsl.core.annotations.QueryProjection;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;


@NoArgsConstructor //기본생성자 없다고 자꾸 오류떠서 애노테이션 달음
@Getter
@Setter
@ToString
public class ProductForm {

    //    @NotBlank(message = "상품번호를 등록해주세요")
    private String productID;

    //    @NotBlank(message = "상품명을 등록해주세요")
    private String productName;

    //    @NotBlank(message = "상품가격을 등록해주세요")
    private Integer productPrice;

    //    @NotBlank(message = "상세 내용을 입력해주세요")
    private String productDescription;

    private String productImage1;
    private String productImage2;
    private String productImage3;
    private Integer productCategory1;
    private Integer productCategory2;
    private Integer productCategory3;
    private Integer productCategory4;



    // 여기서부터는 책 보면서 추가한 것들.

    // 상품 저장 후 수정할 때 상품 이미지 정보를 저장하는 리스트.
    private List<Product> productImgList = new ArrayList<>();

    /*상품 이미지 아이디를 저장하는 리스트. 상품 등록시에는 아직 상품의 이미지를
    저장하지 않았기때문에 아무 값도 들어가 있지않고 수정 시 이미지 아이디를
    담아둘 용도로 사용한다.
     */
    private List<Long> productImgIds = new ArrayList<>();



    @QueryProjection
    public ProductForm(String productID, String productName,
                       Integer productPrice, String productDescription,
                       String productImage1, String productImage2,
                       String productImage3, Integer productCategory1,
                       Integer productCategory2, Integer productCategory3,
                       Integer productCategory4)
    {
        this.productID = productID;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
        this.productImage1 = productImage1;
        this.productImage2 = productImage2;
        this.productImage3 = productImage3;
        this.productCategory1 = productCategory1;
        this.productCategory2 = productCategory2;
        this.productCategory3 = productCategory3;
        this.productCategory4 = productCategory4;
    }

    public void setProductID(String productID) {
        this.productID = productID;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public void setProductPrice(Integer productPrice) {
        this.productPrice = productPrice;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public void setProductImage1(String productImage1) {
        this.productImage1 = productImage1;
    }

    public void setProductImage2(String productImage2) {
        this.productImage2 = productImage2;
    }

    public void setProductImage3(String productImage3) {
        this.productImage3 = productImage3;
    }

    public void setProductCategory1(Integer productCategory1) {
        this.productCategory1 = productCategory1;
    }

    public void setProductCategory2(Integer productCategory2) {
        this.productCategory2 = productCategory2;
    }

    public void setProductCategory3(Integer productCategory3) {
        this.productCategory3 = productCategory3;
    }

    public void setProductCategory4(Integer productCategory4) {
        this.productCategory4 = productCategory4;
    }


    public Product toEntity() {
        return new Product(productID, productName, productPrice, productDescription, productImage1, productImage2, productImage3, productCategory1, productCategory2, productCategory3, productCategory4);
    }


}
