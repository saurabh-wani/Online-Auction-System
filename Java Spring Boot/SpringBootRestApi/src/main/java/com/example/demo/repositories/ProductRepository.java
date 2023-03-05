package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Product;

@Transactional
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	 @Modifying
	 @Query("update Product set product_image_1=:product_image_1 where P_Id=:P_Id")
	 public int upload1(int P_Id,byte [] product_image_1);
	 
	 @Modifying
	 @Query("update Product set product_image_2=:product_image_2 where P_Id=:P_Id")
	 public int upload2(int P_Id,byte [] product_image_2);
	 
	 @Modifying
	 @Query("update Product set product_image_3=:product_image_3 where P_Id=:P_Id")
	 public int upload3(int P_Id,byte [] product_image_3);
}
