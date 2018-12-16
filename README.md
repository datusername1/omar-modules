# Shoedidas -- Primary Producy Display\
This repository contains mocked examples of the primary product section of Adidas' product page as they appeared on December 2018.

All components shown in 10 seconds preview are fully modular microservices. They can be integrated with one another seamlessly.

**Tech Stack**\
React | Express | PostgreSQL | Amazon EC2 | Docker | Node.js


## Instructions if installing locally
**IMPORTANT**
Due to dependencies changes as of December 2018, it may not work correctly when cloned and run locally.

### How to run
```
install postgres => download webpack
> https://www.postgresql.org/docs/10/tutorial-start.html
- start postgres
- create a database => CREATE DATABASE addidas
- create a super user for postgres => CREATE USER username WITH SUPERUSER
- set password for super user => ALTER USER username PASSWORD "password"
- create env file that holds credentials (HOSTNAME, PORT, DB_NAME, DB_USERNAME, DB_PASSWORD)
- run install the package => npm install
- run the seed data => npm run seed
- run webpack => npm run webpack
- load the webpage
```

## Contributors
Omar Jandali
> https://github.com/omar-jandali
Kyle Mayers 
> https://github.com/krmayer
Hayden Betts
> https://github.com/haydenbetts
Tim Tran
> https://github.com/ttran835



