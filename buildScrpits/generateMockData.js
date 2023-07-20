/* eslint-disable no-console */
 import chalk from "chalk"
// import { JSONSchemaFaker } from "json-schema-faker";
import {schema} from './mockDataSchema';
import fs from 'fs';

// console.log(chalk.bgGreen('startin app in dev mode'));

// JSONSchemaFaker.resolve(schema).then((sample) => {

//     fs.writeFile("./src/api/db.json", JSON.stringify(sample), function (err) {
//         if (err) {
//            console.log(chalk.red(err));
//         } else {
//           console.log(chalk.green("Mock data generated."));
//         }
//       });
// })

const jsf = require('json-schema-faker');
jsf.extend('faker', () => require('faker'));
// use the async-version (preferred way)
jsf.resolve(schema).then((sample) => {
      fs.writeFile("./src/api/db.json", JSON.stringify(sample), function (err) {
        if (err) {
           console.log(chalk.red(err));
        } else {
          console.log(chalk.green("Mock data generated."));
        }
      });

}).catch(err => {
    console.log(err)
})

// sync-version (blocking)

