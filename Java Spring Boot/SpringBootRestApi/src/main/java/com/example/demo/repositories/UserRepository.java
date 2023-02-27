package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	//@Query("select * from User where user_id=1")
	 @Query(value = "select * from user_table where username= ?1 and password = ?2", nativeQuery=true)
	public Optional<User> getUser(String username,String password);
}