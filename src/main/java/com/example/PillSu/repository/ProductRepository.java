package com.example.PillSu.repository;

import com.example.PillSu.entity.Product;
//import com.example.PillSu_Project.entity.Member;
//import com.example.PillSu_Project.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, String>
{

}
