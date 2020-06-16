package com.revature.movies.controllers;
 
import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.GetMapping; 
import org.springframework.web.bind.annotation.RestController; 
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
} 