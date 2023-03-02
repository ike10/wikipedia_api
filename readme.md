# Wikipedia Api

## Input and output schema for your API:

### Input schema:

The input schema for the API will be a simple JSON object containing the name of the person as a string. For example:
json
`` 
{
  "name": "Yoshua Bengio"
} 
``
If the person being provided is not on English wikipedia, the API will return an error message indicating that the person could not be found.

### Output schema:
The output schema for the API will be a simple JSON object containing the short description of the person as a string. For example:

json
`
{
  "shortDescription": "Canadian computer scientist"
}
`

If the short description is missing in the content, the API will return an error message indicating that the short description could not be found.

## Functioning code in a public github repo:

* Clone the repository
* Install dependencies using *npm install*
* Start the server using *npm start*
* Send a GET request to http://localhost:3000/api/short-description?name=Yoshua%20Bengio to get the short description for Yoshua Bengio.
* To run automated tests use the command *npm test*

## Keeping the API service highly available and reliable:
To keep the API service highly available and reliable, we can take the following steps:

* Implement caching mechanisms to reduce the number of requests to the Wikipedia API and improve the response time of the API.
* Use load balancers and auto-scaling mechanisms to distribute the load across multiple instances of the API server and ensure that the service can handle increased traffic.
* Monitor the service using tools like Prometheus and Grafana to track performance metrics and identify potential issues before they become critical.
* Implement automated testing and continuous integration/continuous deployment (CI/CD) processes to ensure that changes to the codebase are thoroughly tested and deployed in a safe and efficient manner.
* Have a disaster recovery plan in place in case of service disruptions or failures, including regular backups, redundancy measures, and a clear plan of action for restoring service as quickly as possible.

## Development
If you want to make changes to the code, you can edit the files in the src directory. Once you've made your changes, simply re-run the npm start command to see the changes take effect.

## Acknowledgments
1. Express.js
2. Node.js
3. nodemon

That's it! You should now have the API up and running on your local machine. Feel free to customize it to your needs and have fun building!