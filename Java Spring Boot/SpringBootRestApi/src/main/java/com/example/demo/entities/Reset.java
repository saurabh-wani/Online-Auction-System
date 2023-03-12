package com.example.demo.entities;

public class Reset {
	
	String username,password,repassword;

	public Reset() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Reset(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

//	public Reset(String username, String password, String repassword) {
//		super();
//		this.username = username;
//		this.password = password;
//		this.repassword = repassword;
//	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRepassword() {
		return repassword;
	}

	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public void setRepassword(String repassword) {
		this.repassword = repassword;
	}

	@Override
	public String toString() {
		return "Reset [password=" + password + ", repassword=" + repassword + "]";
	}

}
