package com.revature.project2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@SpringBootApplication
public class Group1project2Application {

	public static void main(String[] args) {
		SpringApplication.run(Group1project2Application.class, args);
	}
	
	/**

	   * CORS Filter Bean. Just put this in projects to disable CORS

	   * 

	   * @return

	   */

	  @Bean

	  public WebMvcConfigurer corsConfigurer() {

	    // We're defining the class we're using inline here as a shortcut.

	    // You could create a separate file

	    return new WebMvcConfigurer() {

	      @Override

	      public void addCorsMappings(CorsRegistry registry) {

	        registry.addMapping("/**").allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE",

	            "OPTIONS");

	      }

	    };

	  }



	  /**

	   * Swagger "Docket" bean for all the Controllers in our project. API Documentation

	   * 

	   * Makes API documentation available at /swagger-ui.html

	   * 

	   * @return

	   */

	  @Bean

	  public Docket movieApi() {

	    return new Docket(DocumentationType.SWAGGER_2).select()

	        .apis(RequestHandlerSelectors.basePackage("com.revature.project2.controllers")).build();



	  }



}
