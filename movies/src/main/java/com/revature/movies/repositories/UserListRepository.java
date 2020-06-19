package com.revature.movies.repositories;


import com.revature.movies.models.UserList;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
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
}
