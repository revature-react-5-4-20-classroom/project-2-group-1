package com.revature.movies.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revature.movies.exceptions.ActorNotFoundException;
import com.revature.movies.models.Actor;
import com.revature.movies.repositories.ActorRepository;




@Service
public class ActorServices implements ActorServicesInterface {
  
  @Autowired
  ActorRepository actorRepository;
  
  @Override
  public List<Actor> getAll() {
   return actorRepository.findAllSorted();
  }

  @Override
  public Actor getById(Integer id) {
    //findById returns on Optional, lets resolve that optional here in the service layer
    Optional<Actor> actor = actorRepository.findById(id);
    if(actor.isPresent()) {
        return actor.get();
    } else {
        throw new ActorNotFoundException();
    }
  }

  @Override
  public Actor create(Actor actor) {
    // Implement later
    return null;
//    actor.setActorId(0);
  }

  @Override
  public Actor update(Actor actor) {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public Actor createOrUpdate(Actor actor) {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public void delete(Integer id) {
    // TODO Auto-generated method stub
    
  }
  
  
}