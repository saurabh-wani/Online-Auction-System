package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.LoginCheck;
import com.example.demo.entities.User;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {
	@Autowired
	UserService userv;
	
	@PostMapping("/checklogin")
	public User checkLogin(@RequestBody LoginCheck lcheck)
	{
		return userv.getUser(lcheck.getUsername(), lcheck.getPassword());
	}
	
	@GetMapping("/getAll")
	public List<User> getAll()
	{
		return userv.getAll();
	}

}