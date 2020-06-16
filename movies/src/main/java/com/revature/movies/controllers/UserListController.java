package com.revature.movies.controllers; 
import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.GetMapping; 
import org.springframework.web.bind.annotation.RestController; 
import com.revature.movies.models.UserList; 
import com.revature.movies.services.UserListServices; 
 
 
@RestController 
public class UserListController { 
   
  @Autowired 
  UserListServices userListServices; 
   
  @GetMapping("/userlists") 
  public List<UserList> getAllUserLists( )  { 
 //   const id = +req.params.id; 
     return userListServices.getAll(); 
     
} 
   
  
   
} 