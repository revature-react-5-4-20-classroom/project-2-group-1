package com.revature.movies.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users", schema="project2")
public class User {
  @Id
  @Column(name="userid")
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int userId;
  @Column(name="username")
  private String username;
  @Column(name="pword")
  private String password;
  @Column(name="email")
  private String email;
  
  
  public User () {
    super();
  }
  
  
  
  
  
  public User(int userId, String username, String password, String email) {
    super();
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.email = email;
    }







  public int getUserId() {
    return userId;
  }


  public String getUsername() {
    return username;
  }







  public void setUsername(String username) {
    this.username = username;
  }







  public String getPassword() {
    return password;
  }







  public void setPassword(String password) {
    this.password = password;
  }







  public String getEmail() {
    return email;
  }







  public void setEmail(String email) {
    this.email = email;
  }







  

  @Override
  public String toString() {
    return "User [userId=" + userId + ", username=" + username + ", password=" + password
        + ", email=" + email + "]";
  }
}
