# MongoDB
* Windows
    * Download MongoDB [here](https://www.mongodb.com/download-center/v2/community)
* Linux
    * There is a lot of set up lol
    * Just follow the instructions on their [website](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb-community-edition)
* Mac
```
$ brew update
$ brew install mongodb
$ mkdir -p /data/db
```

After all these steps, we should be able to run mongo

# Why we want to use Mongo
* We don't need to learn SQL
* It is awesome for scaling
* It is most similar to JavaScript

# Getting Started
* Make sure your mongodb daemon is running by running `mongod` on your command line
* run `mongo`

# Structure
* Basically a bunch of object literals

| Structure | Description |
| --------- | ----------- |
| Mongo | The instance itself  |
| Documents | The overall database which holds Collections - *use `show dbs`*|
| Collections | An object within the document that stores a collection of data - *use `db.foobar.insertOne( {name: 'Miggy' })`* |


# CRUD (Create, Remove, Update, Delete)


