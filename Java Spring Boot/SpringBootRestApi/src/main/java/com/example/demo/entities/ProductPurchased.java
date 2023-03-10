package com.example.demo.entities;

public class ProductPurchased {
	ProductSold ps;
	Feedback feedback;
	public ProductPurchased(ProductSold ps, Feedback f) {
		super();
		this.ps = ps;
		this.feedback = f;
	}
	public ProductPurchased() {
		super();
	}
	public ProductSold getPs() {
		return ps;
	}
	public void setPs(ProductSold ps) {
		this.ps = ps;
	}
	public Feedback getFeedback() {
		return feedback;
	}
	public void setFeedback(Feedback f) {
		this.feedback = f;
	}
	
	
}
