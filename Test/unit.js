// // const db = require('../../server/db/games.js');
// const fs = require('fs');
// const path = require('path');
// // const testJsonFile = path.join(__dirname, '../../server/db/games.test.json');
// const expect = require('expect');
// const mongoose = require('mongoose');

// const Post = require('./../Server/model.js');


// describe('db unit tests', () => {
//   before(() => {
//     // Make sure "db" is empty
//     Post.remove({}, function(err) { 
//       console.log('collection removed') 
//     });
//   });

//   describe('#create', () => {
//     it('valid game is written to json file', () => {
//       let post = new Post({
//         id: 'suuuup',
//         date: Date.now(),
//         img: 'images.com',
//         likes: 0,
//         details: '',
//         // comments: [],
//         followCount: 0
//       });
//       post.save(function (err, post) {
//         if (err) return console.error(err);
//         return res.send(post);
//       });
//       const gameList = JSON.parse(fs.readFileSync(testJsonFile));
//       expect(gameList.length).toEqual(1);
//       expect(gameList[0].winner).toEqual('X');
//     });

//     // TODO: Finish unit testing the create function

//     it('game has unique ID field added', () => {
//       const game = { winner: 'X' };
//       db.create(game);
//       const gameList = JSON.parse(fs.readFileSync(testJsonFile));
//       expect(gameList.length - 1).toEqual(gameList[gameList.length - 1].id);
//     });

//     it('adding a second game does not overwrite first game', () => {
//       const gameList = JSON.parse(fs.readFileSync(testJsonFile));
//       expect(gameList.length).toEqual(2);
//     });

//     it('if winner field is not provided, game is not added and an error is returned', () => {
//       // TODO: Practice test-driven development here. Currently the create function does
//       // not return an error if the winner field is not provided. Follow the TDD approach:
//       //   1. Write a test that tests that an error is returned if the "winner" field is not provided
//       const game = {};
//       const gameList = JSON.parse(fs.readFileSync(testJsonFile));
      
//       expect(function() {return db.create(game)}).toThrow();

//       expect(gameList.length).toEqual(2);
//       //   2. Run the tests and make sure your new test fails (since this feature doesn't exist yet)
//       //   3. Add the functionality to create function in server/db/games.js to make your test pass
//     });

//     it('game has createdAt date for the current time', () => {
//       // Hint: To test this in-depth, try mocking the date with Sinon.js
//       // This way you can set a random date, create a new game in the database,
//       // and then assert that the game in the database matches the date you set exactly!
//       const game = { winner: 'X' };
//       const date = new Date().toISOString();
//       db.create(game);
//       const gameList = JSON.parse(fs.readFileSync(testJsonFile));
//       expect(date).toEqual(gameList[gameList.length - 1].createdAt);
//     });
//   });

//   // TODO: Unit test the #find and #drop functions

//   describe('#find', () => {
//     it('returns list of all games from the json file', () => {
//       const gameList = JSON.parse(fs.readFileSync(testJsonFile));
//       expect(gameList).toEqual(db.find());
//     });

//     it('works if the list of games is empty', () => {
//       db.drop();
//       const gameList = JSON.parse(fs.readFileSync(testJsonFile));
//       expect(gameList).toEqual(db.find());
//     });

//   describe('#drop', () => {
//     it('writes an empty array to the json file', () => {
//       const gameList = JSON.parse(fs.readFileSync(testJsonFile));
//       expect(gameList).toEqual([]);
//     });
//     });
//   });
// });
