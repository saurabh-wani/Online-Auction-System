package com.example.demo.controllers;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BidEntry;
import com.example.demo.entities.BiddingTransaction;
import com.example.demo.services.BiddingService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BidController {

	@Autowired
	BiddingService bserv;
	
	@PostMapping("/bid/{P_Id}")
	public BiddingTransaction bid(@PathParam("P_Id") Integer P_Id,@RequestBody BidEntry bidEntry)
	{
		System.out.println(bidEntry.getP_Id()+ " "+ bidEntry.getBidder_id() + " "+ bidEntry.getBid_price());
		return bserv.bid(Integer.parseInt(bidEntry.getP_Id()),bidEntry.getBidder_id(),bidEntry.getBid_price());
	}
}
