package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Question;
import com.example.demo.repositories.QuestionRepository;

@Service
public class QuestionService {
	@Autowired
	QuestionRepository qrepo;
	
	public Question getQuestion(String id)
	{
		int new_id=Integer.parseInt(id);
		return qrepo.findById(new_id).get();
	}
}
