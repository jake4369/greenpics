# GreenSpace

Visit GreenSpace [https://greenspace.onrender.com/]

To run GreenSpace on your local machine, clone the repo, and in your code editor terminal, run npm i in both the route folder and the frontend folder.

You will need to create a .env in the root folder, GreenSpace, and add the following environmental variables:
NODE_ENV=development
PORT = 8000
MONGO_URI=mongodb+srv://jsamuelsdev:yMGjFYbSFSvl1YiW@cluster0.xbs7fey.mongodb.net/greenpics
JWT_SECRET=my-super-secret-secret-jwt-secret

To start the dev server, run 'npm run dev' in the root folder called 'greenpics'. This will run both the server and open up the application in localhost:3000
