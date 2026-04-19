## Manual installation 
- install bun locally 
- clone the repo
- install dependency (bun i)
- start db locally 
  - docker run -e POSTGRES_PASSWORD=testHardy -d -p 5432:5432 postgres
- Change the env 
- bunx prisma migrate
- bunx prisma generate 
- bun run build
- bun run start

## Docker Installation 
 - install docker
 - start postgres db using docker
    -  - docker run -e POSTGRES_PASSWORD=testHardy -d -p 5432:5432 postgres
    build the image -  `docker build -t learn-docker-compose .`
    run the image   -  `docker run -p 3000:3000 -e DATABASE_URL="postgresql://postgres:testHardy@host.docker.internal:5432/postgres" learn-docker-compose`

 ## Docker Compose Installation
  - install docker, docker compose
  - Run `docker compose up --build -d`
  - This will start both the database and the app automatically.
   