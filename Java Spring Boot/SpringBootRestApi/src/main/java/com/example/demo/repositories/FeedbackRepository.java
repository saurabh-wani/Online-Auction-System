package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Feedback;
import com.example.demo.entities.Product;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {

	@Query("select f from Feedback f where P_Id=:P_Id")
	public Feedback findByPid(Product P_Id);
}
