'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console (just a convenience)
process.stdout.write('\x1Bc');

// Sample select 
knex('restaurants')
  // .select('id','name')
  // .count()
  // .from('restaurants')
  .where({id: '22'})
  .delete()
  // .update(
  //   {name: 'Dj Reynolds Pub and Restaurant'}
  // )
  // .whereIn('address_zipcode', ['10012','10013','10014'])
  // .orderBy('name','asec')
  // .limit(5)
  // .insert(
  //   [
  //     {name: 'Byte Cafe',
  //       borough: 'Brooklyn',
  //       cuisine: 'coffee',
  //       address_building_number: '1234',
  //       address_street: 'Atlantic Avenue',
  //       address_zipcode: '11231'},
  //     {name: 'Byte Cafe 2',
  //       borough: 'Brooklyn',
  //       cuisine: 'coffee',
  //       address_building_number: '12345',
  //       address_street: 'Atlantic Avenue',
  //       address_zipcode: '11231'},
  //     {name: 'Byte Cafe 3',
  //       borough: 'Brooklyn',
  //       cuisine: 'coffee',
  //       address_building_number: '123456',
  //       address_street: 'Atlantic Avenue',
  //       address_zipcode: '11231'}
  //   ]
  // )
  // .returning (['id','name'])
  .debug(true)
  .then(results => console.log(JSON.stringify(results, null, 2)));
