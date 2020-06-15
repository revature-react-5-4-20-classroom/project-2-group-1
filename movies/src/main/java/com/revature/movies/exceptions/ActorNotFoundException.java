
package com.revature.movies.exceptions; 
 
 
 
public class ActorNotFoundException extends RuntimeException { 
 
  /**
   * 
   */
  private static final long serialVersionUID = 1L; 
 
  public ActorNotFoundException() { 
 
    super(); 
 
     
 
} 
 
 
public ActorNotFoundException(String message, Throwable cause, boolean enableSuppression, 
 
boolean writableStackTrace) { 
 
super(message, cause, enableSuppression, writableStackTrace); 
 
// TODO Auto-generated constructor stub 
 
} 
 
 
 
public ActorNotFoundException(String message, Throwable cause) { 
 
super(message, cause); 
 
// TODO Auto-generated constructor stub 
 
} 
 
 
 
public ActorNotFoundException(String message) { 
 
super(message); 
 
// TODO Auto-generated constructor stub 
 
} 
 
 
 
public ActorNotFoundException(Throwable cause) { 
 
super(cause); 
 
// TODO Auto-generated constructor stub 
 
} 
} 