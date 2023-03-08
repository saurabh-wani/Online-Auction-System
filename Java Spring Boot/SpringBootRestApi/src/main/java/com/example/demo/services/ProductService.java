package com.example.demo.services;

import java.sql.Date;
import java.util.List;

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
	
	public List<Product> pendingProducts()
	{
		return prepo.pendingProducts();
	}
	
	public int approveProduct(int P_Id)
	{
		return prepo.approveProduct(P_Id);
	}
	
	public int denyProduct(int P_Id)
	{
		return prepo.denyProduct(P_Id);
	}
	
	public List<Product> approvedProducts(int seller_id)
	{
		return prepo.approvedProducts(seller_id);
	}
	
	public int startAuction(Date start_date,Date end_date,int P_Id)
	{
		return prepo.startAuction(start_date,end_date,P_Id);
	}
	
	public List<Product> current_date_products()
	{
		return prepo.current_date_products();
	}
	
	public List<Product> ongoingAuctionForSellers(int seller_id)
	{
		return prepo.ongoingAuctionForSellers(seller_id);
	}
	
	public List<Product> getCompletedAuctionProducts()
	{
		return prepo.getCompletedAuctionProducts();
	}

}
