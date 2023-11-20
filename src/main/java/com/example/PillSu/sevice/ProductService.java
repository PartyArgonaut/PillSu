package com.example.PillSu.sevice;


import com.example.PillSu.entity.Product;
import com.example.PillSu.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//서비스임을 명시하는 애노테이션
@Service
public class ProductService
{

    //상품레포지토리 의존주입
    @Autowired
    private ProductRepository productRepository;

    //ID로 상품 검색하는 메소드
    public Product show(String productID){
        return productRepository.findById(productID).orElse(null);
    }



}
