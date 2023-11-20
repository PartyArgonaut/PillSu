package com.example.PillSu.controller;

import com.example.PillSu.entity.Product;
import com.example.PillSu.repository.ProductRepository;
import com.example.PillSu.sevice.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller

public class StoreController {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProductService productService;

    @GetMapping(value = "/store")
    public String storeMain() {
        return "Product/store";
    }


}
