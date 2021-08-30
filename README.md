# Create Post using React & Apollo


## 1. :wrench: Setup Project

1. Make sure that you have Node.js v8.15.1 or above installed.
1. Clone this repo by running below command
	```sh
	git clone https://github.com/mknmohit/react-apollo.git
	```
1. Move to the appropriate directory i.e `cd react-apollo`.
1. Now follow below steps to setup/run server and client.

## 2. :rocket: Setup Server
1. To install the Prisma CLI globally with Yarn, use the following command:
	```sh
	yarn global add prisma
  	```
1. Move inside the _react-apollo/**server**_ directory by running the command `cd server` and run the following commands:
	```sh
	yarn install
	yarn start
	```
> **Note 1**: If you want to interact with the GraphQL API of the server inside a [GraphQL Playground](https://github.com/prisma/graphql-playground), you can navigate to [http://localhost:4000](http://localhost:4000).

> **Note 2**: If you face any problem while running up the server then you can follow the guideline on official documentation to migrate the db [https://www.prisma.io/docs/concepts/components/prisma-migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate)


## 3. :computer: Setup Client
Now that the server is running, you can start the React app as well. The commands need to be run in a new terminal tab/window inside the root directory `react-apollo` (because the current tab is blocked by the process running the server.
1. Go back to root directory by running `cd .../`
1. Run the following commands:
	```sh
	yarn install
	yarn start
	```
1. You can now open your browser and use the app on [http://localhost:3000](http://localhost:3000).
