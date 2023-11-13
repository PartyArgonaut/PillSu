package com.example.PillSu.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString

public class Product {
    @Id
    @Column
    private String product_ID;
    @Column
    private String product_Name;
    @Column
    private Integer product_Price;
    @Column
    private String product_Description;
    @Column
    private String product_Image1;
    @Column
    private String product_Image2;
    @Column
    private String product_Image3;


    public Product(String product_ID, String product_Name, Integer product_Price, String product_Description, String product_Image1, String product_Image2, String product_Image3) {
        this.product_ID = product_ID;
        this.product_Name = product_Name;
        this.product_Price = product_Price;
        this.product_Description = product_Description;
        this.product_Image1 = product_Image1;
        this.product_Image2 = product_Image2;
        this.product_Image3 = product_Image3;

    }


}
