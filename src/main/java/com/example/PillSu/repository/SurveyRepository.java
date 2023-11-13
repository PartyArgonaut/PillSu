package com.example.pillsuproject.Repository;

import com.example.pillsuproject.Entity.Survey;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;


public interface SurveyRepository extends CrudRepository<Survey, Long> {

    @Override
    ArrayList<Survey> findAll();


}
