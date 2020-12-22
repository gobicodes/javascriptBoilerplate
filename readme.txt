To be installed 
Node 
lerna - npm i lerna 
bash 
yarn 
-- verify 
lerna  --version
yarn --version 
bash --version

After checkout the code from repo 
go to root folder csp
run the below command 
bash dev_setup.sh - to manage the dependcies 

add the env variables to every micro services 
--add the required env samples here 
and start the service using npm start 

***- Environment --***
NODE_ENV - this need to be set 
--development, staging, production, testing
***---***

*** -- CONFIGS --- **** 
config/appConfig.json - file name 
{
    "development": {
        "config_id": "development",
        "app": {
            "port": 3000,
            "name": "account service  prod",
            "loglevel": "ALL"
        },
        "db": {
            "host": "localhost",
            "port": 27017,
            "name": "ydb",
            "username": "xxx",
            "password": "xxx",
            "type":"mysql"
        }
    },
    "testing": {
        "config_id": "testing",
        "app": {
            "port": 3000,
            "name": "account service  prod",
            "loglevel": "ALL"
        },
        "db": {
            "host": "localhost",
            "port": 27017,
            "name": "ydb",
            "username": "xxx",
            "password": "xxx",
            "type":"mysql"
        }
    },
    "staging": {
        "config_id": "staging",
        "app": {
            "port": 3000,
            "name": "account service  prod",
            "loglevel": "ALL"
        },
        "db": {
            "host": "localhost",
            "port": 27017,
            "name": "ydb",
            "username": "xxx",
            "password": "xxx",
            "type":"mysql"
        }
    },
    "production": {
        "config_id": "production",
        "app": {
            "port": 3000,
            "name": "account service  prod",
            "loglevel": "ALL"
        },
        "db": {
            "host": "localhost",
            "port": 27017,
            "name": "ydb",
            "username": "xxx",
            "password": "xxx",
            "type":"mysql"
        }
    }
}
*** -- CONFIGS --- **** 

