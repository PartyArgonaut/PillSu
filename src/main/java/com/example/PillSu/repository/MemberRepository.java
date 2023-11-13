package com.example.PillSu.repository;

import com.example.PillSu.entity.Member;
//import com.example.PillSu_Project.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, String>
{

}
