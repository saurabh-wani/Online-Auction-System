package com.example.demo.entities;

public class Auction {
	int P_Id;
	String start_date;
	String end_date;
	
	public Auction() {
		super();
	}



	public Auction(int p_Id, String start_date, String end_date) {
		super();
		this.P_Id = p_Id;
		this.start_date = start_date;
		this.end_date = end_date;
	}

	


	public int getP_Id() {
		return P_Id;
	}



	public void setP_Id(int p_Id) {
		P_Id = p_Id;
	}



	public String getStart_date() {
		return start_date;
	}

	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}

	public String getEnd_date() {
		return end_date;
	}

	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}
	
	
	
	

}
