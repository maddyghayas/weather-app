
# weather-app            
weather-app provides an endpoint to get weather data for given location.      
weather-app calls external apis to get weather details.
Response should be:       
    `Current Temperature, 
    Feels Like Temperature, and
    Place(for which the query has been done)`                                                        
There can be more than 1 place with the same name. In that case, multiple results with their respective data will be returned.  

#Getting Started
Import the project in the editor as node.js project

### Prerequisites
1. npm is installed

### Installing Dependencies
Run `npm install` to install all the dependencies.

### Other configuration
In file `src/weather-app/config.json`, recordLimit states how many record the application will return

### Environment Variables
1.
    a. Signup to https://mapbox.com/                       
    b. Goto Account and create a personal token for accessing geo API 
    c. Save the token in the environment with name **GEO_ACCESS_TOKEN**
2.
    a. Sign up to site https://weatherstack.com/.   
    b. Goto current weather API under documentation       
    c. Copy the access_key from the URL          
    d. Paste copied access_key in environment variable with the name as **FORECAST_ACCESS_KEY**

    

### Start the service
 npm run start

### Run Application
API: http://localhost:7070/weather?search=Amsterdam
The service can be accessed by any of the below mentioned ways.  
1. curl http://localhost:7070/weather?search=Amsterdam      
2. GET request from postman
3. Hit the API on the browser.                    
This will return current temperature, feels like and place of matching location of the given input      


### Output
{       
"code": 200,
"data": [{   
    "currentTemperature": 24,   
    "feelsLike": 27,  
    "place": "Amsterdam, North Holland, Netherlands"       
    }]        
}

### Run unit test cases
npm run test
