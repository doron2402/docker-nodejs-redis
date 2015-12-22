# docker-nodejs-redis
Node JS app with Redis all in docker compse file

#how to run
`docker-compose up`

## How to use?

  - `Counter`
    - `[POST] /counter`   will decr
    - `[GET] /counter`    will incr
  - `Users`
    - `[GET] /users`      Get all users id
    - `[GET] /users/:id`  Get single user data
    - `[POST] /users`     Create user
    - `[POST] /users/:id` Update user data
    - `[DEL] /users/:id`    Delete user
