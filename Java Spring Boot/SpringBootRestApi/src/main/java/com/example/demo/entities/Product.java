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
@Table(name="product")
public class Product 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int P_Id;
	
	@Column
	String product_name;
	
	@ManyToOne
	@JoinColumn(name="category_id")
	Category category_id;
	
	@Column
	String description;
	
	@Column
	byte [] product_image_1;
	
	@Column
	byte [] product_image_2;
	
	@Column
	byte [] product_image_3;
	
	@Column
	float base_price;
	
    @ManyToOne
    //@JoinColumn(name="user_id")
    @JoinColumn(name="seller_id", referencedColumnName="user_id")
	User seller_id;
	
	@Column
	Date start_date;
	
	@Column
	Date end_date;
	
	@Column
	String status;

	public Product() {
		super();
	}

	public Product(String product_name, Category category_id, String description, byte[] product_image_1,
			byte[] product_image_2, byte[] product_image_3, float base_price, User seller_id, Date start_date,
			Date end_date, String status) {
		super();
		this.product_name = product_name;
		this.category_id = category_id;
		this.description = description;
		this.product_image_1 = product_image_1;
		this.product_image_2 = product_image_2;
		this.product_image_3 = product_image_3;
		this.base_price = base_price;
		this.seller_id = seller_id;
		this.start_date = start_date;
		this.end_date = end_date;
		this.status = status;
	}

	public Product(String product_name, Category category_id, String description, float base_price, User seller_id,
			Date start_date, Date end_date, String status) {
		super();
		this.product_name = product_name;
		this.category_id = category_id;
		this.description = description;
		this.base_price = base_price;
		this.seller_id = seller_id;
		this.start_date = start_date;
		this.end_date = end_date;
		this.status = status;
	}

	public Product(String product_name, Category category_id, String description, float base_price, User seller_id,
			String status) {
		super();
		this.product_name = product_name;
		this.category_id = category_id;
		this.description = description;
		this.base_price = base_price;
		this.seller_id = seller_id;
		this.status = status;
	}

	public int getP_Id() {
		return P_Id;
	}

	public void setP_Id(int p_Id) {
		P_Id = p_Id;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public Category getCategory_id() {
		return category_id;
	}

	public void setCategory_id(Category category_id) {
		this.category_id = category_id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public byte[] getProduct_image_1() {
		return product_image_1;
	}

	public void setProduct_image_1(byte[] product_image_1) {
		this.product_image_1 = product_image_1;
	}

	public byte[] getProduct_image_2() {
		return product_image_2;
	}

	public void setProduct_image_2(byte[] product_image_2) {
		this.product_image_2 = product_image_2;
	}

	public byte[] getProduct_image_3() {
		return product_image_3;
	}

	public void setProduct_image_3(byte[] product_image_3) {
		this.product_image_3 = product_image_3;
	}

	public float getBase_price() {
		return base_price;
	}

	public void setBase_price(float base_price) {
		this.base_price = base_price;
	}

	public User getSeller_id() {
		return seller_id;
	}

	public void setSeller_id(User seller_id) {
		this.seller_id = seller_id;
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
	
}
