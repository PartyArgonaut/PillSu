package com.example.PillSu.sevice;


import com.example.PillSu.entity.Member;
import com.example.PillSu.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class MemberService {
    @Autowired //DI (의존 주입)
    private MemberRepository memberRepository;
    public Member show(String memberEmail){
        return memberRepository.findById(memberEmail).orElse(null);

    }
}
