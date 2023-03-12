package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.PassBasedEnc;
import com.example.demo.entities.Question;
import com.example.demo.entities.SaltValue;
import com.example.demo.entities.User;
import com.example.demo.entities.UserReg;
import com.example.demo.entities.UserType;
import com.example.demo.services.QuestionService;
import com.example.demo.services.UserService;
import com.example.demo.services.UserTypeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RegisterController {

	@Autowired
	UserTypeService utserv;
	
	@Autowired
	QuestionService qserv;
	
	@Autowired
	UserService userv;
	
	@Autowired
	SaltValue saltValue;;
	
	@PostMapping("/regseller")
	public User regSeller(@RequestBody UserReg seller)
	{
		UserType user_type_id=utserv.getUserType(seller.getUser_type_id());
		//System.out.println(SaltValue.getSalt());
		
		System.out.println(seller.getUser_type_id() + " " +seller.getQ_id()+ " " + seller.getPassword() + seller.getState());
		Question q_id = qserv.getQuestion(seller.getQ_id());
		
		String sencrypted=PassBasedEnc.generateSecurePassword(seller.getPassword(),saltValue.getSalt());
		
		
		User u=new User(user_type_id,seller.getFname(),seller.getLname(),seller.getEmail(),seller.getMobile(),seller.getState(),
				seller.getCity(),seller.getPincode(),seller.getAddress(),seller.getGender(),seller.getPan_card_number(),
				seller.getAccount_status(),q_id,seller.getAnswer(),seller.getUsername(),sencrypted);
//				UserType user_type_id, String fname, String lname, String email, String mobile, String state,
//				String city, String pincode, String address, String gender, String pan_card_number, String account_status,
//				Question q_id, String answer, String username, String password
		return userv.saveUser(u);
	}
	
	@PostMapping("/regbidder")
	public User regBidder(@RequestBody UserReg bidder)
	{
		UserType user_type_id=utserv.getUserType(bidder.getUser_type_id());
		System.out.println(bidder.getUser_type_id() + " " +bidder.getQ_id()+ " " + bidder.getPassword() + bidder.getState());
		Question q_id = qserv.getQuestion(bidder.getQ_id());
		
		String bencrypted=PassBasedEnc.generateSecurePassword(bidder.getPassword(),saltValue.getSalt());

		
		User u=new User(user_type_id,bidder.getFname(),bidder.getLname(),bidder.getEmail(),bidder.getMobile(),bidder.getState(),
				bidder.getCity(),bidder.getPincode(),bidder.getAddress(),bidder.getGender(),bidder.getPan_card_number(),
				bidder.getAccount_status(),q_id,bidder.getAnswer(),bidder.getUsername(),bencrypted);
//				UserType user_type_id, String fname, String lname, String email, String mobile, String state,
//				String city, String pincode, String address, String gender, String pan_card_number, String account_status,
//				Question q_id, String answer, String username, String password
		return userv.saveUser(u);
	}
	
	//@CrossOrigin
	//@PostMapping(value="/uploadpancardimage/{user_id}",consumes="multipart/form-data")
	@PostMapping("/uploadpancardimage/{user_id}")
	 //@PostMapping("/uploadpancardimage/{user_id}")
	public boolean uploadPanImage(@PathVariable("user_id") int user_id,@RequestBody MultipartFile file)
	{
		boolean flag = true;
		try {
			flag = userv.upload(user_id,file.getBytes());
		}
		catch(Exception e)
		{
			flag=false;
		}
		return flag;
	}
}
