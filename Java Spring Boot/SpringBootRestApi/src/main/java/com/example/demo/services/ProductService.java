package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entities.Product;
import com.example.demo.entities.Question;
import com.example.demo.entities.User;
import com.example.demo.entities.UserReg;
import com.example.demo.entities.UserType;
import com.example.demo.repositories.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository prepo;
	
	public Product saveProduct(Product p)
	{
		return prepo.save(p);
	}
	
	public boolean upload1(int P_Id,byte [] product_image_1)
	{
		if(prepo.upload1(P_Id,product_image_1)==1)
			return true;
		else
			return false;
	}
	
	public boolean upload2(int P_Id,byte [] product_image_1)
	{
		if(prepo.upload2(P_Id,product_image_1)==1)
			return true;
		else
			return false;
	}
	
	public boolean upload3(int P_Id,byte [] product_image_1)
	{
		if(prepo.upload3(P_Id,product_image_1)==1)
			return true;
		else
			return false;
	}

}
