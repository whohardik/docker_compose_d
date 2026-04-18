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