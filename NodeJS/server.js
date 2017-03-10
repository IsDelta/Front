require('./user.js');
function User(name) {
    this.name = name;
}
User.prototype.hello = function(who){
    console.log("Hello", who.name);
};
var nikita = new User("Nikita");
var delta = new User("Delta");
delta.hello(nikita);