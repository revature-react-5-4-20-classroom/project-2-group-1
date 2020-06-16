package com.revature.movies.exceptions;

public class GenreNotFoundException extends RuntimeException { 
 
  /**
   * 
   */
  private static final long serialVersionUID = 1L;
 
  public GenreNotFoundException() { 
 
    super(); 
 
     
 
} 
 
 
    public GenreNotFoundException(String message, Throwable cause, boolean enableSuppression, 
 
            boolean writableStackTrace) { 
 
        super(message, cause, enableSuppression, writableStackTrace); 
 
        // TODO Auto-generated constructor stub 
 
    } 
 
 
 
    public GenreNotFoundException(String message, Throwable cause) { 
 
        super(message, cause); 
 
        // TODO Auto-generated constructor stub 
 
    } 
 
 
 
    public GenreNotFoundException(String message) { 
 
        super(message); 
 
        // TODO Auto-generated constructor stub 
 
    } 
 
 
 
    public GenreNotFoundException(Throwable cause) { 
 
        super(cause); 
 
        // TODO Auto-generated constructor stub 
 
    } 
} 