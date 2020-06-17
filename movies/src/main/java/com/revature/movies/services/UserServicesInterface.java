package com.revature.movies.services;
import java.util.List;
//import java.util.Optional;

import com.revature.movies.models.User;



public interface UserServicesInterface {

 public List<User> getAll();
 
 //public Optional<User> getRegistered(User user);
 public Boolean checkCredentials(String username, String password);
}
