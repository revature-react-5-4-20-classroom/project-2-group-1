package com.revature.movies.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.JoinTable;
//import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table (name="actors", schema="project2")
public class Actor {
  @Id
  @Column(name="actorid")
  @GeneratedValue(strategy=GenerationType.IDENTITY)
 private int actorId;
//  @ManyToMany
//  @JoinTable(name = "actorsjoin", joinColumns= @JoinColumn(name = "movieid"),
//      inverseJoinColumns = @JoinColumn(name = "actorid"))
  @Column(name="actorname")
 private String actorName;
  
  public Actor() {
    super();
    
  }
  public Actor(int actorId, String actorName) {
    super();
    this.actorId = actorId;
    this.actorName = actorName;
  }
  @Override
  public String toString() {
    return "Actor [actorId=" + actorId + ", actorName=" + actorName + "]";
  }
  public int getActorId() {
    return actorId;
  }
 
  public String getActorName() {
    return actorName;
  }
  public void setActorName(String actorName) {
    this.actorName = actorName;
  }
}
