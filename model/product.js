module.exports = class Product{
    constructor(name, description, price, pic) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.pic = pic;
    }

    getName(){
        return this.name;
    }
    getDescription(){
        return this.description;
    }
    getPrice(){
        return this.price;
    }
    getPic(){
        return this.pic;
    }

    setName(name){
        this.name=name;
    }
    setDescription(description){
        this.description=description;
    }
    setPrice(price){
       this.price= price;
    }
    setPic(pic){
       this.pic=pic;
    }

    toString(){
        return "Name : " + this.name + " | Description : " + this.description + " | Price : " + this.price;
    }

}