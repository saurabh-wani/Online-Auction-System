package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="question_table")
public class Question 
{
	@Id
	int q_id;
	
	@Column
	String question;

	public Question() {
		super();
	}

	public Question(String question) {
		super();
		this.question = question;
	}

	public int getQid() {
		return q_id;
	}

	public void setQid(int q_id) {
		this.q_id = q_id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}
	
	
}
