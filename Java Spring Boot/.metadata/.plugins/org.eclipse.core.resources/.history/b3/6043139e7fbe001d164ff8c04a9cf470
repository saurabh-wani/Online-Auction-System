package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.ProductSold;
import com.example.demo.repositories.ProductSoldRepository;

@Service
public class ProductSoldService {

	@Autowired
	ProductSoldRepository psrepo;
	
	public ProductSold save(ProductSold ps)
	{
		return psrepo.save(ps);
	}
}
