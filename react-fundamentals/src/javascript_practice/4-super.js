//ES6 JS Classes
class User {
    constructor(username, password) {
        this.name = username;
        this.password= password;
        this.type = "trial user";
    }
    //method 1
    greet(){
        console.log('Welcome Back, '+ this.name);
    }
    //method 2
    status(){
        console.log('Current status: '+ this.type);
    }
}

let anonDude = new User('anonymous');
anonDude.greet();
anonDude.status();

class BronzeLevelUser extends User{
    //adding another property here 'ccinfo'
    constructor(username, password, ccinfo){

        //If you are going to use 'this' in your constructor, you must have a super that points to the parent constructor
        super(username,password); //this key doesnt work without it, sends error
        this.type = "Bronze User";
        this.ccinfo = ccinfo;
    }
    getInfo(){
        console.log(this.username, this.password, this.type, this.ccinfo);
    }

}

let bronzeGuy = new BronzeLevelUser('Bronze Dude', "bronze7589", '4242424242424242');
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);