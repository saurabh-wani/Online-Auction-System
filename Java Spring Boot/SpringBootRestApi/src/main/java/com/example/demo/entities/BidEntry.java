package com.example.demo.entities;

public class BidEntry {
	String P_Id; 
    int bidder_id;
    float bid_price;
	public BidEntry() {
		super();
	}
	public BidEntry(String p_Id, int bidder_id, float bid_price) {
		super();
		P_Id = p_Id;
		this.bidder_id = bidder_id;
		this.bid_price = bid_price;
	}
	public String getP_Id() {
		return P_Id;
	}
	public void setP_Id(String p_Id) {
		P_Id = p_Id;
	}
	public int getBidder_id() {
		return bidder_id;
	}
	public void setBidder_id(int bidder_id) {
		this.bidder_id = bidder_id;
	}
	public float getBid_price() {
		return bid_price;
	}
	public void setBid_price(float bid_price) {
		this.bid_price = bid_price;
	}
    
    
   
}
