'use strict';

const {
  db,
  models: { User, Class, Setting },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'joseph', password: '123' }),
    User.create({ username: 'david', password: '123' }),
    User.create({ username: 'steffan', password: '123' }),
    User.create({ username: 'alex', password: '123' }),
  ]);

  // Creating Settings
  const settings = await Promise.all([
    Setting.create({ id: 1, name: 'medieval fantasy' }),
    Setting.create({ id: 2, name: 'cyberpunk' }),
    Setting.create({ id: 3, name: 'apocalyptic' }),
    Setting.create({ id: 4, name: 'mystery' }),
    Setting.create({ id: 5, name: 'harry potter' }),
  ]);

  // Creating Clases
  const classes = await Promise.all([
    Class.create({ id: 1, name: 'knight', settingId: 1 }),
    Class.create({ id: 2, name: 'wizard', settingId: 1 }),
    Class.create({ id: 3, name: 'witcher', settingId: 1 }),
    Class.create({ id: 4, name: 'barbarian', settingId: 1 }),

    Class.create({ id: 5, name: 'hacker', settingId: 2 }),
    Class.create({ id: 6, name: 'corpo', settingId: 2 }),
    Class.create({ id: 7, name: 'cyborg', settingId: 2 }),
    Class.create({ id: 8, name: 'cop', settingId: 2 }),

    Class.create({ id: 9, name: 'mercenary', settingId: 3 }),
    Class.create({ id: 10, name: 'soldier', settingId: 3 }),
    Class.create({ id: 11, name: 'raider', settingId: 3 }),
    Class.create({ id: 12, name: 'rogue', settingId: 3 }),

    Class.create({ id: 13, name: 'detective', settingId: 4 }),
    Class.create({ id: 14, name: 'spy', settingId: 4 }),
    Class.create({ id: 15, name: 'serial killer', settingId: 4 }),
    Class.create({ id: 16, name: 'copper', settingId: 4 }),

    Class.create({ id: 17, name: 'gryffindor', settingId: 5 }),
    Class.create({ id: 18, name: 'hufflepuff', settingId: 5 }),
    Class.create({ id: 19, name: 'ravenclaw', settingId: 5 }),
    Class.create({ id: 20, name: 'slytherin', settingId: 5 }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${settings.length} settings`);
  console.log(`seeded ${classes.length} classes`);
  console.log(`seeded successfully`);

  return {
    users: {
      joseph: users[0],
      david: users[1],
      steffan: users[2],
      alex: users[3],
    },
    settings: {
      medievalFantasy: settings[0],
      cyberpunk: settings[1],
    },
    classes: {
      knight: classes[0],
      wizard: classes[1],
      hacker: classes[2],
      corpo: classes[3],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
