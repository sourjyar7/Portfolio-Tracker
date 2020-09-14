### API Design
    
    I have considered the following principles while designing this api :-
     
      i) The entire design has three main layers - Controller Layer (Receives and handles all requests and responses)
                                                 - Service Layer (Contains all the business logic)
                                                 - Data Access Layer (Handles database and cache memory calls)
                                                 
     ii) I have used this 3 layered architecture to ensure that the business logic is strictly separate from the rest of the code
         inside the Service layer.
         
    iii) The Controller layer receives and routes all the requests and responses and interacts with the outside world. It has no 
         access to the database however.
         
     iv) The Data Access layer has access to the database and the cache and all database calls are done here. It is actually composed 
         of the cache and the database.
      
      v) The layers communicate with each other using manual dependency injections.   
         
      This design therefore guarantees the following :-
        
            - Highly modular code
            - Layers are loosely coupled and thus can be unit tested or changed independently.
            - All functional modules in a particular layer are pure and only have a single responsibilty which again provides better 
              testability.
            - So if ever we wanted to change the technology stack (like the database used), we wont have to redesign the api
            - Multi user support can be easily added without making huge changes        
   ### Technology Stack used 
   
    I have used node.js as the web framework and mongodb atlas as my database. I have also used the mongoose ORM to handle 
    and interact with mongoDB . Additionally I have used Redis Cloud as an in memory caching database for my server to improve response
    times.
    
   ### Implementation Optimisations
    
          - I have used redis to cache recent responses and ensured cache consistency by flushing whenever user makes changes to 
            portfolio.
          - Created index on db for faster querying time
          
    
    
                           
