package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="bidding_table")
public class Bidding 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int bid_id;
	
	@ManyToOne
	@JoinColumn(name="P_Id", referencedColumnName="P_Id")
	Product P_Id;
	
	@Column
	float base_price;
	
	@ManyToOne
	@JoinColumn(name="bidder_id", referencedColumnName="user_id")
	User bidder_id;
	
	@Column
	Date start_date;
	
	@Column
	Date end_date;
	
	@Column
	float final_bid_price;
	
	@Column
	String bidding_status;
	

	public Bidding() {
		super();
	}

	public Bidding(Product p_Id, float base_price, User bidder_id, Date start_date, Date end_date,
			float final_bid_price, String bidding_status) {
		super();
		P_Id = p_Id;
		this.base_price = base_price;
		this.bidder_id = bidder_id;
		this.start_date = start_date;
		this.end_date = end_date;
		this.final_bid_price = final_bid_price;
		this.bidding_status = bidding_status;
	}

	public Bidding(Product p_Id, float base_price, Date start_date, Date end_date, String bidding_status) {
		super();
		P_Id = p_Id;
		this.base_price = base_price;
		this.start_date = start_date;
		this.end_date = end_date;
		this.bidding_status = bidding_status;
	}

	public int getBid_id() {
		return bid_id;
	}

	public void setBid_id(int bid_id) {
		this.bid_id = bid_id;
	}

	public Product getP_Id() {
		return P_Id;
	}

	public void setP_Id(Product p_Id) {
		P_Id = p_Id;
	}

	public float getBase_price() {
		return base_price;
	}

	public void setBase_price(float base_price) {
		this.base_price = base_price;
	}

	public User getBidder_id() {
		return bidder_id;
	}

	public void setBidder_id(User bidder_id) {
		this.bidder_id = bidder_id;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public float getFinal_bid_price() {
		return final_bid_price;
	}

	public void setFinal_bid_price(float final_bid_price) {
		this.final_bid_price = final_bid_price;
	}

	public String getBidding_status() {
		return bidding_status;
	}

	public void setBidding_status(String bidding_status) {
		this.bidding_status = bidding_status;
	}

	@Override
	public String toString() {
		return "Bidding [bid_id=" + bid_id + ", P_Id=" + P_Id + ", base_price=" + base_price + ", bidder_id="
				+ bidder_id + ", start_date=" + start_date + ", end_date=" + end_date + ", final_bid_price="
				+ final_bid_price + ", bidding_status=" + bidding_status + "]";
	}
	
	
}
