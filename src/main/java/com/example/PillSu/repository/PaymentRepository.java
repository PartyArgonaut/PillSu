package com.example.PillSu.repository;

import com.example.PillSu.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, String>
{

}
