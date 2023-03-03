package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.UserType;
import com.example.demo.repositories.UserTypeRepository;

@Service
public class UserTypeService {
	
	@Autowired
	UserTypeRepository utrepo;

	public UserType getUserType(int id)
	{
		return utrepo.findById(id).get();
	}
}
