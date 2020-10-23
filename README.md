# redcycle-api

### Development

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

