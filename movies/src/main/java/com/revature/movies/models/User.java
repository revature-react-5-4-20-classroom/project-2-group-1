package com.revature.movies.models;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="users", schema="project2")
public class User {
  @Id
  @Column(name="userid")
  @GeneratedValue(strategy=GenerationType.IDENTITY)
 public int userId;
  @Column(name="username")
  public String username;
  @Column(name="password")
  public String password;
  @Column(name="email")
  public String email;
  
  @OneToMany(mappedBy = "listOwner", cascade = CascadeType.MERGE)
  @JsonIgnoreProperties({"listOwner"}) //"user", "userlists"
  private List<UserList> userLists;
  
  public User () {
    super();
  }

  public User(int userId, String username, String password, String email,
      List<UserList> userLists) {
    super();
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.email = email;
    this.userLists = userLists;
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
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



  public List<UserList> getUserLists() {
    return userLists;
  }

  public void setUserLists(List<UserList> userLists) {
    this.userLists = userLists;
  }

  @Override
  public String toString() {
    return "User [userId=" + userId + ", username=" + username + ", password=" + password
        + ", email=" + email + ", userLists=" + userLists + "]";
  }
  
  
  
  
}
