# MyStore

This is a simple implemenation of a front end and back end for a store project.  The website itself is very simple and only serves to demonstrate CI/CD principles and AWS hosting.

The front-end is publically accessible at http://udagrambucket1234.s3-website-us-east-1.amazonaws.com

The API is publically accessible at http://http://simpleapi-env.eba-qzap3tpk.us-east-1.elasticbeanstalk.com/ . The API index returns only 'success'.  The only API endpoint is /products which returns a list of product names, prices, descriptions, and picture URLs.


## Overall infrastructure

The overall infrastructure relies on the following:
-Amazon S3 bucket setup for static website hosting
-Amazon Elastic Beanstalk to host the API
-Amazon RDS to run the database
-CircleCI to run the pipeline
-Github to host the project

An architecture diagram is stored in the 'Documentation' folder

## Pipeline configuration

The pipeline process for this code, running via CircleCI, is to:
1. Install the latest version of node
2. Checkout the code from github
3. Setup the CircleCI AWS command line service and the CircleCI Elastic Beanstalk command line service
4. Install dependencies for the front-end and back-end
5. Test and Build the front-end and back-end
6. Deploy the front-end by copying the build folder to the Amazon S3 bucket
7. Deploy the back-end by setting environment variables and then using the 'eb deploy' command

The pipeline configuration file is stored in ./.circleci/config.yaml

## Dependencies

```
- Latest Node LTS version

- npm 6.14.8 (LTS) or more recent

- AWS CLI v2

- A publicly-available RDS database running Postgres.

- A publicly-available S3 bucket for hosting the static website

- An existing Elastic Beanstalk environment to host the API

- An active Github account with this public repository

- A CircleCI account linked to the github account and watching the public repository

```

## Included screenshots

The project rubric requires several screenshots which are included in the Documentation/screenshots folder.  The screenshots match the rubric in the following ways:

Rubric requirement: "Screenshots of the AWS console indicate that the following services are properly set up, i.e. healthy and accessible".  Matching screenshots: 'Elastic Beanstalk Healthy Back-End', 'RDS Healthy database', 'S3 healthy frontend', and 'S3 state website hosting'.

Rubric requirement: "A screenshot of the last build shows that the student’s CircleCi account is authorized to access his/her repo on Github and is detecting changes each time he/she is pushing to the main branch."  Matching screenshots: 'Circle CI Build Success' 1 and 2, and 'CircleCI Connected Pipeline' 1 and 2.

Rubric requirement: "All the secrets found in the application are configured inside CircleCi and passed to the production application. A screenshot of the configuration screen is present to show where secrets were added."  Matching screenshot: 'CircleCI Environment Variables'

## Non-Inuitive Code Requirements

The link from the front-end to the back-end is hard-coded into the front end in the in the Product service at './store-frontend/src/app/services/product.service.ts'.  In this service, the front end calls the API in the getProducts() function.

The link from the back-end to the database is not hard coded but instead requires the following environment variables to be set in the CircleCI pipeline settings: 
POSTGRES_HOST = the publically accessible name of the RDS database
POSTGRES_DB = the name of the RDS database
POSTGRES_USER = the RDS username
POSTGRES_PASSWORD = the RDS password
POSTGRES_PORT = the RDS port