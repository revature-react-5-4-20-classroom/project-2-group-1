package com.revature.movies.services;
import java.util.List;
import com.revature.movies.models.UserList;



public interface UserListServicesInterface {

 public List<UserList> getAll();
 
 public List<UserList> findByUserId(Integer id);
 
 public UserList findByListId(Integer id);
 
 public int patchListName(String userListName, Integer userListId);
 
 public UserList addUserList(UserList userList, Integer userId);
 
 public int deleteUserList(Integer userListId);
 
}
