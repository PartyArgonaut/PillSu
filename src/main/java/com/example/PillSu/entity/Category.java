package com.example.PillSu.entity;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;


@Entity //(name="category")
@NoArgsConstructor
public class Category
    {

        @Id
        @GeneratedValue
        private Long category_ID;
        @Column
        private Integer product_Category1;
        @Column
        private Integer product_Category2;
        @Column
        private Integer product_Category3;
        @Column
        private Integer product_Category4;



//        public Category(Long category_ID, Integer product_Category1, Integer product_Category2, Integer product_Category3, Integer product_Category4, List<com.example.PillSu_Project.entity.Product> product) {
//            this.category_ID = category_ID;
//            this.product_Category1 = product_Category1;
//            this.product_Category2 = product_Category2;
//            this.product_Category3 = product_Category3;
//            this.product_Category4 = product_Category4;
//            this.product = product;
//        }
    }
