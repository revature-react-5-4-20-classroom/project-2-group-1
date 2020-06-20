package com.revature.movies.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.revature.movies.models.RequestModel;
import com.revature.movies.services.ListJoinService;

@RestController
public class ListJoinController {

  @Autowired
  ListJoinService listJoinService;
  
  
  @PostMapping(path = "/userlists/{userListId}", consumes = MediaType.APPLICATION_JSON_VALUE)
  public int addMovieToList(@RequestBody RequestModel movieId, @PathVariable int userListId) {
    System.out.println(movieId.getMovieId());
    System.out.println(movieId);
    return listJoinService.addMovieToList(movieId.getMovieId(), userListId);
  }


  @DeleteMapping(path = "/userlists/{userListId}", consumes = MediaType.APPLICATION_JSON_VALUE)
  public int removeMovieFromList(@RequestBody RequestModel movieId, @PathVariable int userListId) {
    return listJoinService.removeMovieFromList(movieId.getMovieId(), userListId);
  }
  
}
