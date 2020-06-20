package com.revature.movies.controllers; 
import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import com.revature.movies.exceptions.ActorNotFoundException;
import com.revature.movies.exceptions.UserListNotFoundException;
import com.revature.movies.models.Movie;
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
  
  @GetMapping("/userlists/{id}")
  public UserList findByListId(@PathVariable Integer id) {
    try {
      return userListServices.findByListId(id);
    } catch (UserListNotFoundException e) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Couldn't find listh with id " + id + ".", e);
    }
  }
  
  @GetMapping("/userlists/users/{id}")
  public List<UserList> findByUserId(@PathVariable Integer id) {
    try {
      return userListServices.findByUserId(id);
    } catch (UserListNotFoundException e) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User with id " + id + " doesn't appear to have any lists.", e);
    }
  }
  
} 