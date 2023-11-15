package com.example.PillSu.Tester;

import com.example.PillSu.repository.MemberRepository;
import com.example.PillSu.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class CartTest {
    @Autowired
    MemberRepository memberRepository;
    @Autowired
    ProductRepository productRepository;


}
