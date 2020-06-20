package com.revature.movies.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.revature.movies.services.ListJoinService;

@RestController
public class ListJoinController {

  @Autowired
  ListJoinService listJoinService;
  
  @PostMapping("/userlists/{userListId}")
  public int addMovieToList(@RequestBody Integer movieId, @PathVariable int userListId) {
    return listJoinService.addMovieToList(movieId, userListId);
  }


  @DeleteMapping("/userlists/{userListId}")
  public int removeMovieFromList(@RequestBody Integer movieId, @PathVariable int userListId) {
    return listJoinService.removeMovieFromList(movieId, userListId);
  }
  
}
