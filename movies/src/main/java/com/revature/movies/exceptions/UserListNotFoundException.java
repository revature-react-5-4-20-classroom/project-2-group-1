package com.revature.movies.exceptions; 
  
  
  
  public class UserListNotFoundException extends RuntimeException { 
   
    /**
     * 
     */
    private static final long serialVersionUID = 1L;
      
   
      public UserListNotFoundException() { 
   
          super(); 
   
           
   
      } 
   
   
   
      public UserListNotFoundException(String message, Throwable cause, boolean enableSuppression, 
   
              boolean writableStackTrace) { 
   
          super(message, cause, enableSuppression, writableStackTrace); 
   
       
   
      } 
   
   
   
      public UserListNotFoundException(String message, Throwable cause) { 
   
          super(message, cause); 
   
           
   
      } 
   
   
   
      public UserListNotFoundException(String message) { 
   
          super(message); 
   
          // TODO Auto-generated constructor stub 
   
      } 
   
   
   
      public UserListNotFoundException(Throwable cause) { 
   
          super(cause); 
   
          // TODO Auto-generated constructor stub 
   
      } 
  } 