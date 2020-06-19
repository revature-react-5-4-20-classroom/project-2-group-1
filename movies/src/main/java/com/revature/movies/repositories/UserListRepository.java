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
  
  @Query("select ul from UserList ul where ul.listOwner.userId = ?1")
  List<UserList> findByUserId(Integer userid);
}
