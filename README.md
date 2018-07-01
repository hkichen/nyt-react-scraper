# NYT Article Search

This MERN (MongoDB, Express, React, Node.js) app allowd users to search for New York Times articles by toopic and date range. Once a user submit's a search, articles populate below the search and can be saved to the section below the results (stored in the database). Users can also delete saved articles, which will also remove them from the database.

# Technologies
- React
- Express
- Boostrap framework
- Mongoose
- MongoDB
- Node.js

# Issues
Unfortunately, I am still trying to debug routing issues. I'm not sure where the error is yet. Current GET routes throw a 404 error.
- GET http://localhost:3000/api/saved 404 (Not Found)
And this error:
- Uncaught (in promise) Error: Request failed with status code 404
    at createError (createError.js:16)
    at settle (settle.js:18)
    at XMLHttpRequest.handleLoad

When installing dependecies, I receive this error/warning:
- info fsevents@1.2.4: The platform "win32" is incompatible with this module. info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation. [3/4] Linking dependencies...
- warning " > react-router-dom@4.3.1" has unmet peer dependency "react@>=15".
- warning " > react-router@4.3.1" has unmet peer dependency "react@>=15".

Which is the same warning that prevents me from deploying my app on Heroku...


