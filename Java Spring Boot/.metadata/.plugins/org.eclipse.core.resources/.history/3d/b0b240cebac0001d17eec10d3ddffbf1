package com.example.demo.repositories;

import java.sql.Date;
import java.util.List;

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
	 
//		@Query("select c from Contact c where fnanme like '%a%'")
//		public List<Contact> getAllWithA();
		
		@Query("select p from Product p where status='pending'")
		public List<Product> pendingProducts();
		
		@Modifying
		@Query("update Product p set p.status = 'approved' where P_Id = :P_Id")
		public int approveProduct(int P_Id);
		
		@Modifying
		@Query("update Product p set p.status = 'denied' where P_Id = :P_Id")
		public int denyProduct(int P_Id);
		
		//select * from product where status='approved' and seller_id=5;
		//@Query("select p from Product p where status='approved' and seller_id = :seller_id")
		@Query(value = "select * from product where status='approved' and seller_id=?1 and start_date is null and end_date is null", nativeQuery=true)
		public List<Product> approvedProducts(int seller_id);
		
		@Modifying
		@Query("update Product p set p.start_date=:start_date,p.end_date=:end_date where P_Id = :P_Id")
		public int startAuction(Date start_date,Date end_date,int P_Id);
		
		@Query(value = "select * from product where status='approved' and curdate() between start_date and end_date", nativeQuery=true)
		public List<Product> current_date_products();
		
		@Query(value = "select * from product where status='approved' and seller_id=:seller_id and curdate() between start_date and end_date", nativeQuery=true)
		public List<Product> ongoingAuctionForSellers(int seller_id);
		
		@Query(value = "select * from product where curdate() > end_date", nativeQuery=true)
		public List<Product> getCompletedAuctionProducts();
}
