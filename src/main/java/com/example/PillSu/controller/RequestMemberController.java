package com.example.PillSu.controller;


import com.example.PillSu.entity.Member;
import com.example.PillSu.repository.MemberRepository;
import com.example.PillSu.sevice.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller

public class RequestMemberController {

    @Autowired
    MemberRepository memberRepository;
    @Autowired
    MemberService memberService;

//    @GetMapping("/mypage/userinfo")
//    public String showMember(Model model) {
//        Iterable<Member> memberList = memberRepository.findAll(); // DB에서 멤버 테이블에 있는 모든 데이터 가져오기.
//
//
//        model.addAttribute("memberList", memberList); // Member 묶음을 모델에 등록 (Entity -> Model)
//
//        //뷰에 모델 뿌리기.
//        return "Joins/myInfo";
//    }

//    @GetMapping("/mypage/userinfo/{memberEmail}")
//    public Member show(@PathVariable String memberEmail) {
//        return memberService.show(memberEmail);
//    }


    @GetMapping("/mypage/userinfo/{memberEmail}")
    public String show(@PathVariable String memberEmail, Model model)
    {

        Member member = memberRepository.findById(memberEmail).orElse(null);
        System.out.println(member);


        model.addAttribute("membertest",member);

        return "Joins/myInfo";
    }


}
