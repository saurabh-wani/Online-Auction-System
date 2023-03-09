package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="product_sold")
public class ProductSold 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int sold_pid;
	
	@ManyToOne
	@JoinColumn(name="bid_id",referencedColumnName="bid_id")
	Bidding bid_id;
	
	@Column
	Date sold_date;
	
	@Column
	String payment_mode;
	
	@Column
	String payment_transaction_id;
	
	@Column
	String delivery_status;

	public ProductSold() {
		super();
	}

	public ProductSold(Bidding bid_id, Date sold_date) {
		super();
		this.bid_id = bid_id;
		this.sold_date = sold_date;
	}

	public ProductSold(Bidding bid_id, Date sold_date, String payment_mode, String payment_transaction_id,
			String delivery_status) {
		super();
		this.bid_id = bid_id;
		this.sold_date = sold_date;
		this.payment_mode = payment_mode;
		this.payment_transaction_id = payment_transaction_id;
		this.delivery_status = delivery_status;
	}

	public int getSold_pid() {
		return sold_pid;
	}

	public void setSold_pid(int sold_pid) {
		this.sold_pid = sold_pid;
	}

	public Bidding getBid_id() {
		return bid_id;
	}

	public void setBid_id(Bidding bid_id) {
		this.bid_id = bid_id;
	}

	public Date getSold_date() {
		return sold_date;
	}

	public void setSold_date(Date sold_date) {
		this.sold_date = sold_date;
	}

	public String getPayment_mode() {
		return payment_mode;
	}

	public void setPayment_mode(String payment_mode) {
		this.payment_mode = payment_mode;
	}

	public String getPayment_transaction_id() {
		return payment_transaction_id;
	}

	public void setPayment_transaction_id(String payment_transaction_id) {
		this.payment_transaction_id = payment_transaction_id;
	}

	public String getDelivery_status() {
		return delivery_status;
	}

	public void setDelivery_status(String delivery_status) {
		this.delivery_status = delivery_status;
	}
	
	
}
