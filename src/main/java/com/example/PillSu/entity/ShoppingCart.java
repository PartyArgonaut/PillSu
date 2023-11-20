package com.example.PillSu.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


// 장바구니 엔티티입니다~
@Entity
@Table(name = "shoppingcart")
@Getter
@Setter
@ToString
public class ShoppingCart {

    @Id
    @Column(name = "Shopping_Cart_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long shoppingCartID;        // 쇼핑카트 아이디. 번호는 자동 증가한다, 하지만 PK가 없어서 임시방편으로
    // ID 어노테이션을 쓰기 위해 입력해두었음.

    @Column(name = "Shopping_Cart_Expected_Quantity")
    private Integer shoppingCartExpectedQuantity;   //구매 예정 수량

    @Column(name = "Shopping_Cart_Total_Price")
    private Integer shoppingCartTotalPrice;     // 쇼핑카트 총 가격

    @OneToOne(fetch = FetchType.LAZY)       // 일대일 관계로 맵핑
    @JoinColumn(name = "Member_Email")    // Member_Email 컬럼으로 Member Table Join.
    private Member member;
    //fetch = 특정 엔티티를 조회할때 연관 관계에 있는 엔티티를 언제 불러올까에 대한 옵션
    //Lazy와 Eager가 있다. Lazy는 지연로딩, Eager는 즉시 로딩.

    @ManyToOne      // 다대일 관계로 맵핑
    @JoinColumn(name = "Product_ID") // Product_ID 컬럼으로 Table Product Table Join
    private Product product;

    private int count; // 같은 상품을 몇 개 담을지 저장한다.
}
