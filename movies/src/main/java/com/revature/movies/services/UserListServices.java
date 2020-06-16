package com.revature.movies.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
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
  
  
  
}
