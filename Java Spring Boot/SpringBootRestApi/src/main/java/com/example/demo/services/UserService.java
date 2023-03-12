package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository urepo;
	
	public List<User> getAll()
	{
		return urepo.findAll();
	}
	
	public User getUser(String username, String password)
	{
	User u;
	Optional<User> ol=urepo.getUser(username, password);
	try {
		u = ol.get();
	}
	catch(Exception e)
	{
		u=null;
	}
	return u;
	}
	
	public User getById(int user_id)
	{
		return urepo.getById(user_id).get();
	}
	
	public User saveUser(User u)
	{
		return urepo.save(u);
	}
	
	public boolean upload(int user_id,byte [] pan_card_image)
	{
		if(urepo.uploadPan(user_id,pan_card_image)==1)
			return true;
		else
			return false;
	}
	
	public List<User> pendingUsers()
	{
		return urepo.pendingUsers();
	}
	
	public int approveUser(int user_id)
	{
		return urepo.approveUser(user_id);
	}
	
	public int denyUser(int user_id)
	{
		return urepo.denyUser(user_id);
	}
	
	public User check(String username,String answer,int q_id)
	{
		//return urepo.checkUser(u.getQ_id().getQid(),u.getUsername(),u.getAnswer()).get();
		return urepo.checkUser(username,answer,q_id).get();
		
	}
	public boolean savePass(String username ,String password)
	{
		//return urepo.saveP(username,password);
		if(urepo.saveP(username,password)==1)
			return true;
		else
			return false; 
	}
}
