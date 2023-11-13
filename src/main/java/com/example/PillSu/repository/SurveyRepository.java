package com.example.PillSu.repository;

import com.example.PillSu.entity.Survey;
import com.example.PillSu.entity.Survey;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface SurveyRepository extends CrudRepository<Survey, Long> {

    @Override
    ArrayList<Survey> findAll();


}
