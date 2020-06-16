package com.revature.movies.repositories;



import com.revature.movies.models.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository  <User, Integer> {
  @Query("select u from User u order by u.username")
 List<User> findAllSorted();
}
