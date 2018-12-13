# Simple node application to handle client queues in a frond desk backed by express + JWT + MongoDB

This projects its just an example of creating a node.js application using socket.io

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

In order to get an development environment you need to install nodejs and npm in your system.

```
sudo apt install nodejs npm
```

### Installing

So after fulfill these requirements you just need to issue the next commands:

```
cp .env.example .env
vim .env # edit your parameters
npm install
npm start
```

Then you will be able to get information from http://localhost:3000

## Running the tests

```
npm test
```

## Built With

- [Socket.io(https://socket.io)] -  Socket.IO enables real-time, bidirectional and event-based communication.
- [NodeJS](https://nodejs.org/) - Language and VM
- [Express](https://expressjs.com/) - Node.js Express framework

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/frandieguez/6e0fe20139abc0285cd5955784843b21) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/frandieguez/node-restserver-api/tags).

## Authors

- **Fran Dieguez** - _Initial work_ - [frandieguez](https://github.com/frandieguez)

See also the list of [contributors](https://github.com/frandieguez/node-restserver-api/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
