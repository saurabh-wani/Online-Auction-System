package com.example.demo.controllers;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Bidding;
import com.example.demo.entities.ProductSold;
import com.example.demo.services.BiddingService;
import com.example.demo.services.CategoryService;
import com.example.demo.services.ProductService;
import com.example.demo.services.ProductSoldService;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductSoldController {

	@Autowired
	ProductService pserv;
	
	@Autowired
	ProductSoldService psserv;
	
	@Autowired
	CategoryService cserv;
	
	@Autowired
	UserService userv;
	
	@Autowired
	BiddingService bserv;
	
	@GetMapping("/makepayment/{bid_id}")
	public ProductSold makePayment(@PathVariable("bid_id") int bid_id)
	{
		Bidding b= bserv.findBidById(bid_id);
		
        long millis=System.currentTimeMillis();  
        java.sql.Date date=new java.sql.Date(millis);  
//        Bidding bid_id, Date sold_date, String payment_mode, String payment_transaction_id,
//		String delivery_status
        ProductSold p= new ProductSold(b,date,"Net Banking","AFGH78545224114","On the way");
        
         
        
        if(p!=null)
        {
        	
        	int num=bserv.changePaymentStatus(bid_id);
        }
        return psserv.save(p);
	}
}
