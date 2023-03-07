package com.example.demo.entities;

public class ProductWithBid {

	Product P_Id;
	BiddingTransaction bidding_transaction_id;
	public ProductWithBid(Product P_Id, BiddingTransaction bidding_transaction_id) {
		super();
		this.P_Id = P_Id;
		this.bidding_transaction_id = bidding_transaction_id;
	}
	
	public ProductWithBid() {
		super();
	}

	public Product getP_Id() {
		return P_Id;
	}

	public void setP_Id(Product p_Id) {
		P_Id = p_Id;
	}

	public BiddingTransaction getBidding_transaction_id() {
		return bidding_transaction_id;
	}

	public void setBidding_transaction_id(BiddingTransaction bidding_transaction_id) {
		this.bidding_transaction_id = bidding_transaction_id;
	}
	
	
	
	
	
	
}
