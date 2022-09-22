# TODO React Application using REST APIs


## Instructions to run the Project

1. Clone the project using the following command.
```bash
git clone "git@github.com:neu-mis-info6150-fall2021/assignment-8-sid-savant.git"
```

2. Make the necessary changes that you want. Stage the changes by using following command or if you want to add all the changes to the directory, then use following command.
```bash
git add "filename"
```
Or

```bash
git add .
```

3. Commit the changes that you made.
```bash
git commit -m "message"
```

4. Push the changes to remote repository
```bash
git push origin "local branch name"
```

Clone the repository
1. Open the folder in VScode
2. Split the terminal into 3 parts
3. `cd server` and `npm i` in the first terminal
4. `cd todos-ui` and `npm i` in the second terminal
5. Start the POSTMAN to test the network requests for the web page
6. Start a MONGODB interface like robo3t or MongoDB compass to create the database on the default localhost: 27017
7. Start the MongoDb database by typing `mongod` in the 3rd terminal
8. In the Backend terminal run `node server.js`
9. In the Frontend terminal run `npm run build` to build the react app
10. In the Frontend terminal run `npm run start` to start the react application
