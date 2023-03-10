package com.example.demo.entities;

public class ProductSoldSeller {
	ProductSold productSold;
	Feedback feedback;
	public ProductSoldSeller(ProductSold productSold, Feedback feedback) {
		super();
		this.productSold = productSold;
		this.feedback = feedback;
	}
	public ProductSoldSeller() {
		super();
	}
	public ProductSold getProductSold() {
		return productSold;
	}
	public void setProductSold(ProductSold productSold) {
		this.productSold = productSold;
	}
	public Feedback getFeedback() {
		return feedback;
	}
	public void setFeedback(Feedback feedback) {
		this.feedback = feedback;
	}
	
	
}
