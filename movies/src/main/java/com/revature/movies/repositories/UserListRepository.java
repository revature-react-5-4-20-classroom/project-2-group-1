package com.revature.movies.repositories;

import com.revature.movies.models.UserList;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserListRepository extends JpaRepository  <UserList, Integer> {
  

  
  @Query("select ul from UserList ul order by ul.listName")
 List<UserList> findAllSorted();
  
  // Currently these two routes do the basically the same thing because a user can only have one list. 
  // There is potential that the userlistid and userid could be different, so I'm going to leave this in.
  // In order to have many lists we would have to create another many to many relationship
  @Query("select ul from UserList ul where ul.listOwner.userId = ?1")
  List<UserList> findByUserId(Integer userid);
  
  @Query("select ul from UserList ul where ul.userListId = ?1")
  UserList findByListId(Integer listId);
  
  @Transactional
  @Modifying
  @Query(value="UPDATE project2.userlist SET listname=:userListName WHERE userlistid=:userListId", nativeQuery=true)
  int patchListName(String userListName, int userListId);
  
//@PersistenceContext
//public EntityManager entityManager;
//  @Transactional
//  public int addUserList(String listName, int userId) {
//      entityManager.createNativeQuery("INSERT INTO project2.userlist(listowner, listname) VALUES (?, ?);")
//        .setParameter(1, userId)
//        .setParameter(2, listName)
//        .executeUpdate();
//  }
  
//  @Transactional
//  @Modifying
//  @Query(value="INSERT INTO project2.userlist(listowner, listname) VALUES (:userId, :listName);", nativeQuery=true)
//  int addUserList(String listName, int userId);
  
  @Transactional
  @Modifying
  @Query("delete UserList ul where ul.userListId=:userListId")
  int deleteUserList(int userListId);
  
  
  
}
