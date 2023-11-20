package com.example.PillSu.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.relational.core.sql.In;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.SimpleTimeZone;


// 결제 테이블 엔티티 입니다~!

@Entity(name = "payment")
@Getter
@Setter
@ToString
public class Payment {
    @Id
    @Column(name = "Payment_Order_Number")
    private String paymentOrderNumber;

    @ManyToOne
    @JoinColumn(name = "Member_Email")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "Product_ID")
    private Product product;

    @Column(name = "Payment_Shipping_Fee")
    private Integer paymentShippingFee; // 배송비

    @Column(name = "Payment_Confirm_Quantity")
    private Integer paymentConfirmQuantity;     //구매 확정 수량

    @Column(name = "Payment_Total_Payment_Amount")
    private Integer paymentTotalPaymentAmount;      // 결제 총액

    @Column(name = "Payment_Purchase_Date")
    private Date paymentPurchaseDate;       // 구매 일자

    @Column(name = "Payment_My_Address")
    private String paymentMyAddress;        // 내 주소

    @Column(name = "Payment_Method")
    private String paymentMethod;           // 결제 수단

    @Column(name = "Payment_Method_Additional_Info")
    private String paymentMethodAdditionalInfo;     // 결제 수단 추가 정보



    @OneToMany(mappedBy = "productID", cascade = CascadeType.ALL,
                          fetch = FetchType.LAZY)
    //mappedBy = "" : 연관 관계의 주인을 설정 해야한다.
    //속성의 값으로 product를 적은 이유는 product 테이블에 있는 productID에 의해
    //관리 된다는 의미. 연관 관계의 주인 필드인 product를 mappedby의 값으로 세팅함.

    // 부모 엔티티의 영속성 상태 변화를 자식 엔티티에 모두 전이하는 CascadeTypeAll
    // 옵션을 준다.
    private List<Product> productList = new ArrayList<>();
    //주문할 제품의 목록 가져오기.

}
