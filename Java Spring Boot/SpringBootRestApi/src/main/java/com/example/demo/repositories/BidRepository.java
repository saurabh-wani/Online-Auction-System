package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Bidding;
import com.example.demo.entities.User;

@Repository
public interface BidRepository extends JpaRepository<Bidding, Integer> {

	@Query("select b from Bidding b where bidder_id=:bidder_id")
	public List<Bidding> findAllBidsWon(User bidder_id);
}
