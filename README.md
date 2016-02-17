webpack-deploy2war
=========

A small library for webpack config plugin to export war file

## Installation

  npm install webpack-deploy2war --save-dev

## Usage

  var DeployToWar = require('webpack-deploy2war');

  plugins: [
    new DeployToWar({
      fileName: "web.employee.war"
    })
  ]

## Release History

* 0.1.0 Initial release
