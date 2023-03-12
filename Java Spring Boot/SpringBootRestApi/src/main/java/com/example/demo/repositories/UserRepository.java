package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.User;

@Transactional
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	//@Query("select * from User where user_id=1")
	 @Query(value = "select * from user_table where username= ?1 and password = ?2", nativeQuery=true)
	public Optional<User> getUser(String username,String password);
	 
	 @Query("select u from User u where user_id=:user_id")
	public Optional<User> getById(int user_id);
	 
	 @Modifying
	 @Query("update User set pan_card_image=:pan_card_image where user_id=:user_id")
	 public int uploadPan(int user_id,byte [] pan_card_image);
	 
	 @Query("select u from User u where account_status='pending'")
	 public List<User> pendingUsers();
	 
		@Modifying
		@Query("update User u set u.account_status = 'approved' where user_id = :user_id")
		public int approveUser(int user_id);
		
		@Modifying
		@Query("update User u set u.account_status = 'denied' where user_id = :user_id")
		public int denyUser(int user_id);
		
		@Query(value= "select * from user_table where username=?1 and answer=?2 and q_id=?3", nativeQuery=true )
		// @Query("select u from User u where q_id=?1 and usernaame=?2 and answer=?3")
		 public Optional<User> checkUser(String username,String answerint,int q_id);
		 
		 @Modifying
		 @Query("update User set password=:password where username=:username")	
			 public int saveP(String username,String password);
	 
}
