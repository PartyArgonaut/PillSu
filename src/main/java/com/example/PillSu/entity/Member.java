package com.example.PillSu.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
//import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
//import org.hibernate.annotations.DynamicInsert;
//import org.springframework.data.jdbc.repository.query.Modifying;
//import org.springframework.data.jdbc.repository.query.Query;

import java.sql.Date;


@Entity //(name="member")
@NoArgsConstructor

@AllArgsConstructor
@ToString
@Table(name="member")

public class Member {

    @Id
    @Column(name="Member_Email")
    private String memberEmail;

    @Column(name="Member_Password")
    private String memberPassword;

    @Column(name="Member_Name")
    private String memberName;

    @Column(name="Member_Contact_Number")
    private String memberContactNumber;

    @Column(name="Member_Address_City")
    private String memberAddressCity;

    @Column(name="Member_Address_District")
    private String memberAddressDistrict;

    @Column(name="Member_Address_Town")
    private String memberAddressTown;

    @Column(name="Member_Address_Detail")
    private String memberAddressDetail;

    @Column(name="Member_Gender")
    private Integer memberGender;

    @Column(name="Member_Birth_date")
    private Date memberBirthDate;



}
