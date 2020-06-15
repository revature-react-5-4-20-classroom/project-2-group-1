package com.revature.movies.controllers; 
import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.GetMapping; 
import org.springframework.web.bind.annotation.RestController;
import com.revature.movies.models.Actor;
import com.revature.movies.services.ActorServices; 
 
 
@RestController 
public class ActorController { 
   
  @Autowired 
  ActorServices actorServices; 
   
  @GetMapping("/actors") 
  public List<Actor> getAllActors()  { 
    System.out.println("Getting actors");
     return actorServices.getAll(); 
} 
} 
 