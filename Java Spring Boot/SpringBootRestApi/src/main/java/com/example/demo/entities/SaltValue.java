package com.example.demo.entities;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class SaltValue
{
	@Value("${spring.saltvalue}")
	public String salt;

	public String getSalt() {
		return salt;
	}

	public void setSalt(String salt) {
		this.salt = salt;
	}
	

}
