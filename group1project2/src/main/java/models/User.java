package models;

public class User {
  private int userId;
  private String username;
  private String password;
  private String email;
  private int userCommentId;
  private int userListId;
  private int userRatingId;
  
  public User () {
    super();
  }
  
  
  
  
  
  public User(int userId, String username, String password, String email, int userCommentId,
      int userListId, int userRatingId) {
    super();
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.email = email;
    this.userCommentId = userCommentId;
    this.userListId = userListId;
    this.userRatingId = userRatingId;
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







  public int getUserCommentId() {
    return userCommentId;
  }







  public void setUserCommentId(int userCommentId) {
    this.userCommentId = userCommentId;
  }







  public int getUserListId() {
    return userListId;
  }







  public void setUserListId(int userListId) {
    this.userListId = userListId;
  }







  public int getUserRatingId() {
    return userRatingId;
  }







  public void setUserRatingId(int userRatingId) {
    this.userRatingId = userRatingId;
  }







  @Override
  public String toString() {
    return "User [userId=" + userId + ", username=" + username + ", password=" + password
        + ", email=" + email + ", userCommentId=" + userCommentId + ", userListId=" + userListId
        + ", userRatingId=" + userRatingId + "]";
  }
}

