package com.revature.movies.models;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
//import javax.persistence.JoinColumn;
//import javax.persistence.JoinTable;
//import javax.persistence.ManyToMany;
//import javax.persistence.ManyToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Entity
@Table(name="userlist", schema="project2")
public class UserList {
  @Id
  @Column(name="userlistid")
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int userListId;
  @Column(name="listname")
  private String listName;
  @JoinColumn(name = "listowner")
  @ManyToOne(fetch = FetchType.EAGER)
  @JsonIgnoreProperties({"userLists", "password", "email"}) //"listowner", "ListOwner", "listOwner"
    private User listOwner;

  //@ManyToMany
  //@JoinTable(name = "listjoin", joinColumns= @JoinColumn(name = "movieid"),
   //inverseJoinColumns = @JoinColumn(name = "userlistid"))
  @ManyToMany(cascade=CascadeType.ALL)
  @JoinTable(name="listjoin",schema = "project2",joinColumns=@JoinColumn(name="userlistid"),inverseJoinColumns=@JoinColumn(name="movieid") )
//  @JsonIgnoreProperties({"movies"})
  private List<Movie> movies=new ArrayList<Movie>(150);

  public UserList() {
    super();
  }
  public int getUserListId() {
    return userListId;
  }
  public void setUserListId(int userListId) {
    this.userListId = userListId;
  }
  public User getListOwner() {
    return listOwner;
  }
  public void setListOwner(User listOwner) {
    this.listOwner = listOwner;
  }
  public String getListName() {
    return listName;
  }
  public void setListName(String listName) {
    this.listName = listName;
  }
  public List<Movie> getMovies() {
    return movies;
  }
  public void setMovies(List<Movie> movies) {
    this.movies = movies;
  }
  public UserList(int userListId, User listOwner, String listName) {
    super();
    this.userListId = userListId;
    this.listOwner = listOwner;
    this.listName = listName;
  }
  @Override
  public String toString() {
    return "UserList [userListId=" + userListId + ", listOwner=" + listOwner + ", listName=" + listName + "]";
  }
}