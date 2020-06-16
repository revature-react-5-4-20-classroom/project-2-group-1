package com.revature.movies.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.JoinTable;
//import javax.persistence.ManyToMany;
//import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="userlist", schema="project2")
public class UserList {
  @Id
  @Column(name="userlistid")
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int userListId;
 // @ManyToOne
  //@JoinColumn(name="userid")
  @Column(name="userid")
    private int userId;
  //@ManyToMany
  //@JoinTable(name = "listjoin", joinColumns= @JoinColumn(name = "movieid"),
   //inverseJoinColumns = @JoinColumn(name = "userlistid"))
  @Column(name="listname")
  private String listName;
  
  public UserList() {
    super();
  
  }

  public UserList(int userListId, int userId, String listName) {
    super();
    this.userListId = userListId;
    this.userId = userId;
    this.listName = listName;
  }

  @Override
  public String toString() {
    return "UserList [userListId=" + userListId + ", userId=" + userId + ", listName=" + listName
        + "]";
  }

  public int getUserListId() {
    return userListId;
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  public String getListName() {
    return listName;
  }

  public void setListName(String listName) {
    this.listName = listName;
  }
  
}
