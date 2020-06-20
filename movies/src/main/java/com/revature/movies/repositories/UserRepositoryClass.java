package com.revature.movies.repositories;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import org.springframework.stereotype.Repository;


@Repository 
public class UserRepositoryClass  {

	@PersistenceContext
	public EntityManager entityManager;

	@Transactional
	public void registerNewUser(String username, String password, String email) {
	    entityManager.createNativeQuery("INSERT INTO project2.users (userid, username, password, email) VALUES (DEFAULT, ?, ?, ?)")
	      .setParameter(1, username)
	      .setParameter(2, password)
	      .setParameter(3, email)
	      .executeUpdate();
	}
	
	
	
	
	
	public UserRepositoryClass() {
		super();
	}
}
