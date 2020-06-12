package repositories;



import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface MovieRepository extends JpaRepository  <models.Movie, Integer> {
  @Query("select m from models.Movie m order by m m.title")
 List<models.Movie> findAllSorted();
}