package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Product;
import com.example.demo.entities.User;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
	@Autowired
	UserService userv;

	@GetMapping("/pendingusersforapproval")
	public List<User> pendingProducts()
	{
		return userv.pendingUsers();
	}
	
	@PutMapping("/approveuser/{user_id}")
	public int approveProduct(@PathVariable("user_id") int user_id)
	{
		return userv.approveUser(user_id);
	}
	
	@PutMapping("/denyuser/{user_id}")
	public int denyProduct(@PathVariable("user_id") int user_id)
	{
		return userv.denyUser(user_id);
	}
}
