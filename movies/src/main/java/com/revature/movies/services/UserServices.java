package com.revature.movies.services;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revature.movies.models.User;
import com.revature.movies.repositories.UserRepository;



@Service
public class UserServices implements UserServicesInterface {
  
  @Autowired
  UserRepository userRepository;
  
//User Service
 public Boolean checkCredentials(String username, String password) {
   // we just check if this username and password exist in the db
   return userRepository.checkUsernamePassword(username, password).size() > 0;
 }
  
  @Override
  public List<User> getAll() {
   return userRepository.findAllSorted();
  }
  
  
  
  //@Override
  //public Optional<User> getRegistered(User user) {
	//  
	 // return userRepository.saveOrUpdate(user);
 // }
}


