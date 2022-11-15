Spring Boot API for Shopping

Functions Include:
user,product: search, add, edit, delete

Operating Environment: J2EE (use the most updated version)
Database: MySQL (Please Install and create your account, don't forget your password!!!)
Testing program: Postman


Setting up:
1. open eclipse(J2EE), select workplace
2. File -> Import
3. Search/Select "Existing Maven Projects"
4. for "Root Directory": "Browse" and select folder of this project
5. make sure the pom.xml is seleted
6. click Finish and wait for the eclipse to finish installing
7. in Package Explorer open this project, check if "JRE System Library" is [JavaSE-1.8]
if not: rightclick->Properties->Execution environment->find "JavaSE-1.8"-> Apply and Close
8. open src/main/resources->application.properties
9. change database infomation to local status: (Make sure the MySQL is installed and ready)
	spring.datasource.username = change to existing username
	spring.datasource.password = change to your password
	spring.jpa.hibernate.ddl-auto = none change to "auto" for making the program to create tables automatically
10. go to Go to src/main/java->com.usc.SpringBootDemo, open SpringBootDemoApplication
11. right click program, "Run As"->Java Application
	this would start the server, the default port is set as 8080
12. Open Postman, load url with "http://localhost:8080/users", Post with "username" and "password" to create user


# for creating admin users (Use with care and don't forget to turn back)
Go to src/main/java->com.usc.controller
open UserController
in "addUser" function, change "return userService.register(user);" to "return userService.registerAdm(user);"
save, the program will automatically reload
adding user now would create an admin account
change back the function to make the program create only regular accounts.
