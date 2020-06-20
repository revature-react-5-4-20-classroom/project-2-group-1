package com.revature.movies.services;
import java.util.List;
import com.revature.movies.models.Movie;
import com.revature.movies.models.UserList;



public interface UserListServicesInterface {

 public List<UserList> getAll();
 
 public List<UserList> findByUserId(Integer id);
 
 public UserList findByListId(Integer id);
 
}
