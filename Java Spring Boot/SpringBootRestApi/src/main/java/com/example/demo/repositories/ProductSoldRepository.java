package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.ProductSold;
import com.example.demo.entities.User;


@Repository
public interface ProductSoldRepository extends JpaRepository<ProductSold, Integer> {
	
	@Query("select ps from ProductSold ps where ps.bid_id.bidder_id=:bidder_id and ps.bid_id.bidding_status='payment done'")
	public List<ProductSold> productsPurchased(User bidder_id);
	
	@Query("select ps from ProductSold ps where ps.bid_id.P_Id.seller_id =:seller_id and ps.bid_id.bidding_status='payment done'")
	public List<ProductSold> productsSoldSeller(User seller_id);
	
	@Query("select ps from ProductSold ps where datediff(curdate(),ps.sold_date)<=30 " )
	public List<ProductSold> productsSoldAdmin();
}
