package com.revature.movies.controllers;
 
import java.util.List;
//import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.movies.dtos.Credentials;
import com.revature.movies.models.User; 
import com.revature.movies.services.UserServices; 
 
 
@RestController 
public class UserController { 
   
  @Autowired 
  UserServices userServices; 
  
   
  @GetMapping("/users") 
  public List<User> getAllUsers()  { 
     return userServices.getAll(); 
} 
 
 // @PostMapping("/users/register")
  //public Optional<User> login (User user) {
	//  return userServices.getRegistered(user);
 
  //}
  
  // To store values on a session similar to express session, just add HttpSession as a parameter to
  // your Controller method
  // Then use methods on the session to set/get attributes
  @PostMapping("/users/login")
  public Boolean attemptLogin(@RequestBody Credentials creds, HttpSession session) {
	  System.out.println(creds.getUsername() + ' ' + creds.getPassword());
	  
    Boolean isLoggedIn = userServices.checkCredentials(creds.getUsername(), creds.getPassword());
    session.setAttribute("isLoggedIn", isLoggedIn);
    return isLoggedIn;
  }
  
}  
	 
	  


