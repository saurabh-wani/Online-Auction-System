package com.example.demo.entities;

public class Mybids {
	BiddingTransaction bt;
	float highest_bid_price;
	public Mybids() {
		super();
	}
	public Mybids(BiddingTransaction bt, float highest_bid_price) {
		super();
		this.bt = bt;
		this.highest_bid_price = highest_bid_price;
	}
	public BiddingTransaction getBt() {
		return bt;
	}
	public void setBt(BiddingTransaction bt) {
		this.bt = bt;
	}
	public float getHighest_bid_price() {
		return highest_bid_price;
	}
	public void setHighest_bid_price(float highest_bid_price) {
		this.highest_bid_price = highest_bid_price;
	}
	
	

}
