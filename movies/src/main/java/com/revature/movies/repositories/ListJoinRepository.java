package com.revature.movies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.revature.movies.models.ListJoin;

@Repository
public interface ListJoinRepository extends JpaRepository  <ListJoin, Integer> {
  
  @Transactional
  @Modifying
  @Query(value="INSERT INTO project2.listjoin(userlistid, movieid) VALUES (:userListId, :movieId);", nativeQuery=true)
  int addMovieToList(int userListId, int movieId);
  
  @Transactional
  @Modifying
  @Query("delete ListJoin lj where lj.userListId=:userListId and lj.movieId=:movieId")
  int removeMovieFromList(int userListId, int movieId);

}
