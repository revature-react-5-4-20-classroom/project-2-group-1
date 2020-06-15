package com.revature.movies.exceptions; 
 
 
 
public class DirectorNotFoundException extends RuntimeException { 
 
  /**
   * 
   */
  private static final long serialVersionUID = 1L; 
 
  public DirectorNotFoundException() { 
 
    super(); 
 
     
 
} 
 
 
    public DirectorNotFoundException(String message, Throwable cause, boolean enableSuppression, 
 
            boolean writableStackTrace) { 
 
        super(message, cause, enableSuppression, writableStackTrace); 
 
        // TODO Auto-generated constructor stub 
 
    } 
 
 
 
    public DirectorNotFoundException(String message, Throwable cause) { 
 
        super(message, cause); 
 
        // TODO Auto-generated constructor stub 
 
    } 
 
 
 
    public DirectorNotFoundException(String message) { 
 
        super(message); 
 
        // TODO Auto-generated constructor stub 
 
    } 
 
 
 
    public DirectorNotFoundException(Throwable cause) { 
 
        super(cause); 
 
        // TODO Auto-generated constructor stub 
 
    } 
} 