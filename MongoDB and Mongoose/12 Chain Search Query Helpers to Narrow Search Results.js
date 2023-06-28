require('dotenv').config();


// 01 Install and Set Up Mongoose 

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Per:***@cluster0.4ch8y.mongodb.net/db-fcc?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });


// 02 Create a Model 

var Schema = mongoose.Schema;
let personSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: Number,
    favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);


// 03 Create and Save a Record of a Model 

const createAndSavePerson = (done) => {
    let Per = new Person({
        name: "Per",
        age: 100,
        favoriteFoods: ["eggs", "butter", "milk"]
    });

    Per.save(function(err, data){
        if(err) return console.log(err);
        done(null, data)
    });
};


// 04 Create Many Records with model.create()

const arrayOfPeople = [
    {name: 'Adams', age: 32, favoriteFoods: ['paella', 'rice', 'cereal']},
    {name: 'Baker', age: 33, favoriteFoods: ['tacos', 'hummus', 'croissant']},
    {name: 'Clark', age: 34, favoriteFoods: ['ham', 'lasagna', 'lobster']},
  { name: 'Davis', age: 35, favoriteFoods: ['chicken', 'sushi', 'ice cream']}
];

const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, function(err, people){
        if(err) return console.log(err);  
        done(null, people)
  });
};


// 05 Use model.find() to Search Your Database

const findPeopleByName = (personName, done) => {
    Person.find({name: personName}, function(err, personFound) {
        if(err) return console.log(err);
        done(null, personFound)
    });
};



// 06 Use model.findOne() to Return a Single Matching Document from Your Database

var findOneByFood = function(food, done) {
    Person.findOne({favoriteFoods: food}, function (err, data) {
        if (err) return console.log(err);
        done(null, data);
    });
};


// 07 Use model.findById() to Search Your Database By _id

const findPersonById = (personId, done) => {
    Person.findById(personId, function(err, data){
        if(err) return console.log(err);
        done(null, data)
    });
};


// 08 Perform Classic Updates by Running Find, Edit, then Save

const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";
    Person.findById(personId, function(err, person){
        if(err) return console.log(err);
  
        person.favoriteFoods.push(foodToAdd);
  
        person.save((err, updatedPerson) => {
            if(err) return console.log(err);
            done(null, updatedPerson)
        });
    });
};
  

// 09 Perform New Updates on a Document Using model.findOneAndUpdate()

const findAndUpdate = (personName, done) => {
    const ageToSet = 20;
    Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, function(err, updateDoc){
        if(err) return console.log(err);
        done(null, updateDoc);
    });
};
  

// 10 Delete One Document Using model.findByIdAndRemove

const removeById = (personId, done) => {
    Person.findByIdAndRemove(personId,(err, removedDoc) => {
        if(err) return console.log(err);
        done(null, removedDoc);
    }); 
};


// 11 Delete Many Documents with model.remove()

const removeManyPeople = (done) => {
    const nameToRemove = "Mary";
    Person.remove({name: nameToRemove}, (err, response) => {
        if(err) return console.log(err);
        done(null, response);
    });
};


// 12 Chain Search Query Helpers to Narrow Search Results

var queryChain = function(done) {
    var foodToSearch = "burrito";
    Person.find({ favoriteFoods: foodToSearch })
    .sort({ name: 1 })
    .limit(2)
    .select({ age: 0 })
    .exec((err, data) => {
        if(err)
        done(err);
        done(null, data);
    })
  };

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;