package com.revature.movies.services;
import java.util.List;
import com.revature.movies.models.Actor;



public interface ActorServicesInterface {

 public List<Actor> getAll();
 
 Actor getById(Integer id);
 Actor create(Actor actor);
 Actor update(Actor actor);
 Actor createOrUpdate(Actor actor);
 void delete(Integer id);
 
}
