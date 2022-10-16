# user-management

backend 
localhost:3005

router.get('/users', index);
router.post('/user/create', auth, create);
router.get('/show/:id', auth, detail);
router.delete('/:id', auth, remove);
router.post('/auth', login);
router.get('/auth', auth, profile);
router.post('/logout', logout);

i removed auth middleware on the "/users get list all " for for react listing . Will be setting sth for list check before all users.



interface 
react app

localhost:3000

main directory 

concurrecy can start the project 

"npm run dev"

mysql is using AWS ireland rds database 

and project is running on heroku  

https://protected-earth-85828.herokuapp.com/


* This project files generated from main private repo .
