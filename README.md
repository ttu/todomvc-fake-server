# Redux TodoMVC Example modified to use Fake JSON Server

This is a sample project how to use [Fake JSON Server](https://github.com/ttu/dotnet-fake-json-server) as a generic Back End for any prototype or any Front End that needs a simple Back End.

This is a modified version of original [Redux TodoMVC example](https://github.com/reactjs/redux/tree/master/examples/todomvc).

## Get started
```sh
# Start Fake JSON Server (check README if wan't to run this with Docker)
$ git clone https://github.com/ttu/dotnet-fake-json-server.git
$ cd dotnet-fake-json-server/FakeServer
$ dotnet run --file tododb.json --urls http://localhost:57602

# Start Front End 
$ npm install
$ npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Step by step modification guide

TODO: Step by step guide how to modify original [Redux TodoMVC Example](https://github.com/reactjs/redux/tree/master/examples/todomvc) and end up with this.

### Notes

* Tests are not updated