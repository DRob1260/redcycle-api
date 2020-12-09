# redcycle-api

### Functionality

#### Endpoints
* User-facing application: `/redcycle`
* Admin application: `/redcycle/admin`
* Account actions
  * Signup: `/redcycle/api/account/signup`
  * Login: `/redcycle/api/account/login`
  * Password change: `/redcycle/api/account/password_change`
  * GET `/redcycle/api/account/current`
* REST endpoints:
  * GET, POST `/redcycle/api/users`
  * GET, POST `/redcycle/api/locations`
  * GET, POST `/redcycle/api/communityPosts`

### Development
Note: if it's the first time running the project run `npm install` then run `npm run dev` OR if you make any change to the UI, you will need to run `npm run dev` within the `ui` directory to rebuild it.

#### Run using Docker
* Install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) if they are not already installed.
* Run `docker-compose up --build`. It may take a while for the first build. 
* API will be running at 0.0.0.0:8000.

#### Run using Python
Note: these instructions are for a unix environment (not Windows).

1) Install pip
* `python3 -m pip install --user --upgrade pip`

2) Install virtualenv
* `python3 -m pip install --user virtualenv`

3) Set up a virtual environment
* `python3 -m venv env`
* `source env/bin/activate`

5) Install Dependencies
* `pip install -r requirements.txt`

6) Run application
* `python manage.py migrate`
* `python manage.py runserver`
* Server should be running.

#### Tests
Automated testing is implemented using Cypress.

* Start API: `docker-compose up --build`
* Go to `ui` directory: `cd ui`
* Start Cypress: `npm run cypress`

