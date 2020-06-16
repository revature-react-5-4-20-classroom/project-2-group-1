package com.revature.movies.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revature.movies.models.User;
import com.revature.movies.repositories.UserRepository;



@Service
public class UserServices implements UserServicesInterface {
  
  @Autowired
  UserRepository userRepository;
  
  @Override
  public List<User> getAll() {
   return userRepository.findAllSorted();
  }
  
}