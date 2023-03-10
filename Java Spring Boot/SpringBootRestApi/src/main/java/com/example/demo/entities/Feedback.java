package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="feedback_table")
public class Feedback {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int Feedback_Id;
	
	@ManyToOne
	@JoinColumn(name="P_Id",referencedColumnName="P_Id")
	Product P_Id;
	
	@ManyToOne
	@JoinColumn(name="seller_id",referencedColumnName="user_id")
	User seller_id;
	
	@ManyToOne
	@JoinColumn(name="bidder_id",referencedColumnName="user_id")
	User bidder_id; 
	
	@Column
	int seller_rating;
	
	@Column
	int product_rating;
	
	@Column
	String feedback_description;

	public Feedback() {
		super();
	}

	public Feedback(Product p_Id, User seller_id, User bidder_id, int seller_rating, int product_rating,
			String feedback_description) {
		super();
		P_Id = p_Id;
		this.seller_id = seller_id;
		this.bidder_id = bidder_id;
		this.seller_rating = seller_rating;
		this.product_rating = product_rating;
		this.feedback_description = feedback_description;
	}

	public Feedback(Product p_Id, User seller_id, User bidder_id) {
		super();
		P_Id = p_Id;
		this.seller_id = seller_id;
		this.bidder_id = bidder_id;
	}

	public int getFeedback_Id() {
		return Feedback_Id;
	}

	public void setFeedback_Id(int feedback_Id) {
		Feedback_Id = feedback_Id;
	}

	public Product getP_Id() {
		return P_Id;
	}

	public void setP_Id(Product p_Id) {
		P_Id = p_Id;
	}

	public User getSeller_id() {
		return seller_id;
	}

	public void setSeller_id(User seller_id) {
		this.seller_id = seller_id;
	}

	public User getBidder_id() {
		return bidder_id;
	}

	public void setBidder_id(User bidder_id) {
		this.bidder_id = bidder_id;
	}

	public int getSeller_rating() {
		return seller_rating;
	}

	public void setSeller_rating(int seller_rating) {
		this.seller_rating = seller_rating;
	}

	public int getProduct_rating() {
		return product_rating;
	}

	public void setProduct_rating(int product_rating) {
		this.product_rating = product_rating;
	}

	public String getFeedback_description() {
		return feedback_description;
	}

	public void setFeedback_description(String feedback_description) {
		this.feedback_description = feedback_description;
	}

	
	
}
