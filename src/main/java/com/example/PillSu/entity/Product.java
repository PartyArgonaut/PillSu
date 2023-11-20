package com.example.PillSu.entity;

import com.querydsl.core.annotations.QueryProjection;
import jakarta.persistence.*;
import lombok.*;


// 상품 엔티티 입니다~!

@NoArgsConstructor // 기본생성자 없다고 자꾸 오류떠서 애노테이션 달음
@Getter
@Setter
@Entity
@ToString
@Table(name = "product")
public class Product {
    @Id
    @Column(name = "Product_ID")
    private String productID;

    @Column(name = "Product_Name")
    private String productName;

    @Column(name = "Product_Price")
    private Integer productPrice;

    @Column(name = "Product_Description")
    private String productDescription;

    @Column(name = "Product_Image1")
    private String productImage1;

    @Column(name = "Product_Image2")
    private String productImage2;

    @Column(name = "Product_Image3")
    private String productImage3;

    @Column(name = "Product_Category1")
    private Integer productCategory1;

    @Column(name = "Product_Category2")
    private Integer productCategory2;

    @Column(name = "Product_Category3")
    private Integer productCategory3;

    @Column(name = "Product_Category4")
    private Integer productCategory4;


    @ManyToOne
    @JoinColumn(name = "Payment_Order_Number")
    private Payment payment;


@QueryProjection
    public Product(String productID, String productName, Integer productPrice, String productDescription, String productImage1, String productImage2, String productImage3, Integer productCategory1, Integer productCategory2, Integer productCategory3, Integer productCategory4) {
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

//이미지 업로드 시 필요한 생성자.
    public void updateItemImg(String productImage1, String productImage2, String productImage3) {
        this.productImage1=productImage1;
        this.productImage2=productImage2;
        this.productImage3=productImage3;
    }
}
