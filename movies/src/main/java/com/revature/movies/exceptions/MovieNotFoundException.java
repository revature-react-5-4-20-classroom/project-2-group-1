package com.revature.movies.exceptions; 
 
 
 
public class MovieNotFoundException extends RuntimeException { 
 
  /**
   * 
   */
  private static final long serialVersionUID = 1L;
 
public MovieNotFoundException() { 
 
super(); 
 
 
 
} 
 
 
 
public MovieNotFoundException(String message, Throwable cause, boolean enableSuppression, 
 
boolean writableStackTrace) { 
 
super(message, cause, enableSuppression, writableStackTrace); 
 
 
 
} 
 
 
 
public MovieNotFoundException(String message, Throwable cause) { 
 
super(message, cause); 
 
 
 
} 
 
 
 
public MovieNotFoundException(String message) { 
 
super(message); 
 
// TODO Auto-generated constructor stub 
 
} 
 
 
 
public MovieNotFoundException(Throwable cause) { 
 
super(cause); 
 
// TODO Auto-generated constructor stub 
 
} 
} 