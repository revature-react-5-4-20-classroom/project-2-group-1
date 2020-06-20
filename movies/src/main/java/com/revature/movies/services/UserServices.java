package com.revature.movies.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revature.movies.models.User;
import com.revature.movies.repositories.UserRepositoryClass;
import com.revature.movies.repositories.UserRepositoryInterface;



@Service
public class UserServices implements UserServicesInterface {
  
  @Autowired
  UserRepositoryInterface userRepositoryInterface;
  @Autowired
  UserRepositoryClass userRepositoryClass;
  
  @Override
  public User checkCredentials(String username, String password) {
   
   List <User> list = userRepositoryInterface.checkUsernamePassword(username, password);
   return list.get(0);
 }
  @Override
  public void registerNewUser (User newUser)  {
	 
	  System.out.println(newUser.getUsername() + "+ " + newUser.getPassword() + " + " + newUser.getEmail());
	  
	  userRepositoryClass.registerNewUser(newUser.getUsername(), newUser.getPassword(), newUser.getEmail());
	  
  }
  
  @Override
  public List<User> getAll() {
   return userRepositoryInterface.findAllSorted();
  }
  
}


