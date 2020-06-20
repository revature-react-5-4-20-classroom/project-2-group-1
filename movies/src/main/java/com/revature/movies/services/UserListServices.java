package com.revature.movies.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import com.revature.movies.models.Movie;
import com.revature.movies.models.User;
import com.revature.movies.models.UserList;
import com.revature.movies.repositories.UserListRepository;



@Service

public class UserListServices implements UserListServicesInterface {
  
  @Autowired
  UserListRepository userListRepository;
  
  @Override
  public List<UserList> getAll() {
   return userListRepository.findAllSorted();
  }

  @Override
  public List<UserList> findByUserId(Integer id) {
    return userListRepository.findByUserId(id);
  }

  @Override
  public UserList findByListId(Integer id) {
    return userListRepository.findByListId(id);
  }

  @Override
  public int patchListName(String userListName, Integer userListId) {
    return userListRepository.patchListName(userListName, userListId);
  }
// Working on this.
  @Override
  public UserList addUserList(UserList userList, Integer userId) {
    userList.setUserListId(0);
    System.out.println(userList.getUserListId());
    return userListRepository.save(userList);
  }

  @Override
  public int deleteUserList(Integer userListId) {
    return userListRepository.deleteUserList(userListId);
  }
  
}
