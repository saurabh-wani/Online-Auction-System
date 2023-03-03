package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="user_table")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int user_id;
	
	@ManyToOne
	@JoinColumn(name="user_type_id")
	UserType user_type_id;
	
	@Column
	String fname;
	
	@Column
	String lname;
	
	@Column
	String email;
	
	@Column
	String mobile;
	
	@Column
	String state;
	
	@Column
	String city;
	
	@Column
	String pincode;
	
	@Column
	String address;
	
	@Column
	String gender;
	
	@Column
	String pan_card_number;
	
	@Lob
	@Column(name = "pan_card_image", columnDefinition = "LONGBLOB")
	private byte[] pan_card_image;
	
	
	@Column
	String account_status;
	
	@ManyToOne
	@JoinColumn(name="q_id")
	Question q_id;
	
	@Column
	String answer;
	
	@Column
	String username;
	
	@Column
	String password;
	
	


	public User() {
		super();
	}

	


	public User(UserType user_type_id, String fname, String lname, String email, String mobile, String state,
			String city, String pincode, String address, String gender, String pan_card_number, String account_status,
			Question q_id, String answer, String username, String password) {
		super();
		this.user_type_id = user_type_id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.mobile = mobile;
		this.state = state;
		this.city = city;
		this.pincode = pincode;
		this.address = address;
		this.gender = gender;
		this.pan_card_number = pan_card_number;
		this.account_status = account_status;
		this.q_id = q_id;
		this.answer = answer;
		this.username = username;
		this.password = password;
	}




	public User(UserType user_type_id, String fname, String lname, String email, String mobile, String state,
			String city, String pincode, String address, String gender, String pan_card_number, Question q_id,
			String answer, String username, String password) {
		super();
		this.user_type_id = user_type_id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.mobile = mobile;
		this.state = state;
		this.city = city;
		this.pincode = pincode;
		this.address = address;
		this.gender = gender;
		this.pan_card_number = pan_card_number;
		this.q_id = q_id;
		this.answer = answer;
		this.username = username;
		this.password = password;
	}




	public User(UserType user_type_id, String fname, String lname, String email, String mobile, String state,
			String city, String pincode, String address, String gender, String pan_card_number, byte[] pan_card_image,
			Question q_id, String answer, String username, String password) {
		super();
		this.user_type_id = user_type_id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.mobile = mobile;
		this.state = state;
		this.city = city;
		this.pincode = pincode;
		this.address = address;
		this.gender = gender;
		this.pan_card_number = pan_card_number;
		this.pan_card_image = pan_card_image;
		this.q_id = q_id;
		this.answer = answer;
		this.username = username;
		this.password = password;
	}




	public User(UserType user_type_id, String fname, String lname, String email, String mobile, String state,
			String city, String pincode, String address, String gender, String pan_card_number, byte[] pan_card_image,
			String account_status, Question q_id, String answer, String username, String password) {
		super();
		this.user_type_id = user_type_id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.mobile = mobile;
		this.state = state;
		this.city = city;
		this.pincode = pincode;
		this.address = address;
		this.gender = gender;
		this.pan_card_number = pan_card_number;
		this.pan_card_image = pan_card_image;
		this.account_status = account_status;
		this.q_id = q_id;
		this.answer = answer;
		this.username = username;
		this.password = password;
	}




	public int getUser_id() {
		return user_id;
	}




	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}




	public UserType getUser_type_id() {
		return user_type_id;
	}




	public void setUser_type_id(UserType user_type_id) {
		this.user_type_id = user_type_id;
	}




	public String getFname() {
		return fname;
	}




	public void setFname(String fname) {
		this.fname = fname;
	}




	public String getLname() {
		return lname;
	}




	public void setLname(String lname) {
		this.lname = lname;
	}




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public String getMobile() {
		return mobile;
	}




	public void setMobile(String mobile) {
		this.mobile = mobile;
	}




	public String getState() {
		return state;
	}




	public void setState(String state) {
		this.state = state;
	}




	public String getCity() {
		return city;
	}




	public void setCity(String city) {
		this.city = city;
	}




	public String getPincode() {
		return pincode;
	}




	public void setPincode(String pincode) {
		this.pincode = pincode;
	}




	public String getAddress() {
		return address;
	}




	public void setAddress(String address) {
		this.address = address;
	}




	public String getGender() {
		return gender;
	}




	public void setGender(String gender) {
		this.gender = gender;
	}




	public String getPan_card_number() {
		return pan_card_number;
	}




	public void setPan_card_number(String pan_card_number) {
		this.pan_card_number = pan_card_number;
	}




	public byte[] getPan_card_image() {
		return pan_card_image;
	}




	public void setPan_card_image(byte[] pan_card_image) {
		this.pan_card_image = pan_card_image;
	}




	public String getAccount_status() {
		return account_status;
	}




	public void setAccount_status(String account_status) {
		this.account_status = account_status;
	}




	public Question getQ_id() {
		return q_id;
	}




	public void setQ_id(Question q_id) {
		this.q_id = q_id;
	}




	public String getAnswer() {
		return answer;
	}




	public void setAnswer(String answer) {
		this.answer = answer;
	}




	public String getUsername() {
		return username;
	}




	public void setUsername(String username) {
		this.username = username;
	}




	public String getPassword() {
		return password;
	}




	public void setPassword(String password) {
		this.password = password;
	}

	







	








	
	
	

}
