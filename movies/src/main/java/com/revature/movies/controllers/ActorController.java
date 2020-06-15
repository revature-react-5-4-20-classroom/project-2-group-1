package com.revature.movies.controllers; 
import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import com.revature.movies.exceptions.ActorNotFoundException;
import com.revature.movies.models.Actor;
import com.revature.movies.services.ActorServices; 
 
 
@RestController 
public class ActorController { 
   
  @Autowired 
  ActorServices actorServices; 
   
  @GetMapping("/actors") 
  public List<Actor> getAllActors()  { 
     return actorServices.getAll(); 
} 
  
  // I Don't believe we will need this functionality, but it was proof of concept for testing purposes.
  @GetMapping("/actors/{id}")
  public Actor getActorById(@PathVariable Integer id) {
    try {
      return actorServices.getById(id);
    } catch (ActorNotFoundException e) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Actor not found", e);
    }
  }
  
  // I Don't believe we will need this functionality, but it was proof of concept for testing purposes.
  @PostMapping(path = "/actors", consumes = MediaType.APPLICATION_JSON_VALUE)
  public Actor addNewActor(@RequestBody Actor actor) {
    return actorServices.create(actor);
  }

  // I Don't believe we will need this functionality, but it was proof of concept for testing purposes.
  @PutMapping("/actors/{id}")
  public Actor createOrUpdateCatWithId(@RequestBody Actor actor, @PathVariable Integer id) {
    return actorServices.createOrUpdate(actor);
  }

  // I Don't believe we will need this functionality, but it was proof of concept for testing purposes.
  @PatchMapping("/actors/{id}")
  public Actor updateActorWithId(@RequestBody Actor actor, @PathVariable Integer id) {
    return actorServices.update(actor);
  }
  
  // I Don't believe we will need this functionality, but it was proof of concept for testing purposes.
  @ResponseStatus(code = HttpStatus.NO_CONTENT)
  @DeleteMapping("/actors/{id}")
  public void deleteActor(@PathVariable Integer id) {
    actorServices.delete(id);
  }
  
  
} 
 