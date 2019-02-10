#!/usr/bin/env node
"use strict";

const program = require("commander");
const path = require("path");
const fs = require("fs-extra");
const component = require("./src/component");

let componentName;

program
  .arguments("<component-dir>")
  .action(name => {
    componentName = name;
  })
  .option("-c, --component", "Create a Class based component")
  .option("-scss, --scss", `Add ${componentName}.scss`)
  .parse(process.argv);

createComponent(componentName);

function createComponent(name) {
  const root = path.resolve(`./src/components`);

  if (!fs.existsSync(root)) {
    fs.mkdirSync(root);
  }

  //  component

  if (program.component) {
    fs.mkdirSync(`${root}/${name}`);
    fs.writeFileSync(
      path.join(`${root}/${name}`, `${name}.js`),
      component(name)
    );
  }

  console.log(`Component ${name} created`);
}
