## Features of the API
  - Register/Login/Logout
  - CRUD operation
  - Error handling


## Project Set Up

- Clone this repository
- Open the repository in Vs code or any text editor


- In the root folder, create .env File and add the following

    -  MONGO_URI='your mongodb String Connection'
    -  JWT_SECRET='Use online generators/ for testing put random combination'
    -  JWT_LIFETIME=30d


- Run the following commands in terminal
    -  npm install (to install dependencies,make sure nodejs is already installed)
    -  npm start   (to start the server)


## Testing - POSTMAN

1. Register User

   Method : POST
   URL :http://localhost:5000/api/v1/auth/register

   => In the body -> raw -> Json
   {
      "name":     "Put name",
      "email":    "Put email",
      "password": "put password"
   }



2. Login User

   Method : POST
   URL :http://localhost:5000/api/v1/auth/login

   => In the body -> raw -> Json
   {
        "email":    "Put email",
        "password": "put password"
   }


3. Logout user
  
  Method: POST
  URL: http://localhost:5000/api/v1/auth/logout

  => In header put the Authorization token (when user is registered)



4. Create/Add Book
  
  Method: POST
  URL : http://localhost:5000/api/v1/books

  => In header put the Authorization token
  => In the body -> raw -> Json

  {
      "title" :  "put title",
      "author": "put author",
     "genre"  :  "enter",
     "publication_year": enter year
  }


5. Retrieve/Get single book
  
  Method: GET
  URL : http://localhost:5000/api/v1/books/"Put Id here"  

   => In header put the Authorization token


6. Retrieve/Get all books
  
  Method: GET
  URL : http://localhost:5000/api/v1/books 

   => In header put the Authorization token


7. Update Book
  
  Method: PUT
  URL : http://localhost:5000/api/v1/books/"put ID here"

   => In header put the Authorization token


8. Delete Book
  
  Method: DELETE
  URL : http://localhost:5000/api/v1/books/"put ID here"

   => In header put the Authorization token