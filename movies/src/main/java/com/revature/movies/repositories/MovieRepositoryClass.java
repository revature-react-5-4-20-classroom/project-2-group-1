package com.revature.movies.repositories;

import java.util.List;
import javax.persistence.Query;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import org.springframework.stereotype.Repository;
import com.revature.movies.models.Actor;
import com.revature.movies.models.Genre;
import com.revature.movies.models.Director;

@Repository
public class MovieRepositoryClass {

	@PersistenceContext
	public EntityManager entityManager;
	
	/*@Transactional
	public void addNewActors(List<Actor> actor)  {
		System.out.println(actor.toString());
		
		for (Actor a : actor) {
			
			  int result = entityManager.createNativeQuery("INSERT INTO project2.actors (actorid, actorname) VALUES (DEFAULT, ?)")
			      .setParameter(1, a.getActorName())
			      .executeUpdate();
			   System.out.println(result);
		}
			
	}
	
	@Transactional
	public void addNewGenres(List<Genre> genre)  {
		System.out.println(genre.toString());
		
		for (Genre g : genre) {
			
			  int result = entityManager.createNativeQuery("INSERT INTO project2.genres (genreid, genrename) VALUES (DEFAULT, ?)")
			      .setParameter(1, g.getGenreName())
			      .executeUpdate();
			   System.out.println(result);
		}
			
	}*/
	
	@Transactional
	public void addNewDirector(Director director)  {
		System.out.println(director.toString());
		
		
			  int result = entityManager.createNativeQuery("INSERT INTO project2.directors (directorid, directorname) VALUES (DEFAULT, ?)")
			      .setParameter(1, director.getDirectorName())
			      .executeUpdate();
			   System.out.println(result);
		}
			
	
	
	//@Transactional
	/*public void addNewMovie(int movieId, String imdbId, String title, String rated, String released, String runtime, Director director, List<Actor> actors, List<Genre> genres, String plot, String poster, int imdbRating, double metascore, String trailer) {
		entityManager.merge(actors);
		entityManager.merge(genres);
		entityManager.merge(director);
	    entityManager.createNativeQuery("INSERT INTO project2.movies (DEFAULT, imdbId, title, rated, released, runtime, director, actors, genres, plot, poster, imdbRating, metascore, trailer) VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")
	      .setParameter(1, imdbId)
	      .setParameter(2, title)
	      .setParameter(3, rated)
	      .setParameter(4, released)
	      .setParameter(5, runtime)
	      .setParameter(6, director)
	      .setParameter(7, actors)
	      .setParameter(8, genres)
	      .setParameter(9, plot)
	      .setParameter(10, poster)
	      .setParameter(11, imdbRating)
	      .setParameter(12, metascore)
	      .setParameter(13, trailer)
	      .executeUpdate();
	}*/
		public MovieRepositoryClass() {
			super();
		}
		
}
