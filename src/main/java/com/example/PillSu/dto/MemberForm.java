package com.example.PillSu.dto;


//import com.example.PillSu_Project.entity.MemberEntity;




import com.example.PillSu.entity.Member;
import lombok.AllArgsConstructor;
import lombok.ToString;

import java.sql.Date;

@ToString
@AllArgsConstructor
public class MemberForm
{
    private String memberEmail;
    private String memberPassword;
    private String memberName;
    private String memberContactNumber;
    private String memberAddressCity;
    private String memberAddressDistrict;
    private  String memberAddressTown;
    private  String memberAddressDetail;
    private  Integer memberGender;
    private Date memberBirthDate;


    public Member toEntity()
    {
        return new Member(memberEmail,memberPassword,memberName,memberContactNumber,memberAddressCity,memberAddressDistrict,memberAddressTown,memberAddressDetail,memberGender,memberBirthDate);
    }
}
