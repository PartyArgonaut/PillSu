//package com.example.PillSu.entity;
//
//import jakarta.persistence.*;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//import lombok.ToString;
//import org.hibernate.annotations.DynamicInsert;
//import org.springframework.data.relational.core.sql.In;
//
//import java.sql.Date;
//
//
//@Entity //(name="member")
//@Getter @Setter
//@ToString
//
//public class ShoppingCart {
//    @Id
//    @Column
//    private Long cartId;
//
//    @OneToOne
//    @JoinColumn (name = "member_Email")
//    private Member member;
//
//    @OneToOne
//    @JoinColumn (name = "product_ID")
//    private Product product;
//
//
//    @Column
//    private Integer shoppingCartExpectedQuantity;
//    @Column
//    private Integer shoppingCartProductPrice;
//
//
//    public ShoppingCart(Long cartId, Member member, Product product, Integer shoppingCartExpectedQuantity, Integer shoppingCartProductPrice) {
//        this.cartId = cartId;
//        this.member = member;
//        this.product = product;
//        this.shoppingCartExpectedQuantity = shoppingCartExpectedQuantity;
//        this.shoppingCartProductPrice = shoppingCartProductPrice;
//    }
//}
