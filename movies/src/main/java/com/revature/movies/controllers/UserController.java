package com.revature.movies.controllers;
 
import java.util.List;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
 
  @PostMapping("users/register")
  public void Register(@RequestBody User newUser) {
	
		  userServices.registerNewUser(newUser);
	  
}
  
 
  @PostMapping("/users/login")
  public User attemptLogin(@RequestBody Credentials creds, HttpSession session) {
	  
	  	return userServices.checkCredentials(creds.getUsername(), creds.getPassword());
    	
    }
    
  }
  

	 
	  


