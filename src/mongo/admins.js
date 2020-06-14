const mongoCollections = require("./collection");
const admins = mongoCollections.admins;
const cart = mongoCollections.cart;
const tempCart = mongoCollections.tempCart;
const orderLog = mongoCollections.orderLog;
const products = mongoCollections.products;

const get = async function get(id){
	if(id == undefined){
		throw new Error("id is not defined");
	}
	var adminsCollection = await admins();
	let nameExists = await adminsCollection.findOne({id: id});
	if(nameExists == null){
		throw new Error("no fruit with that name");
	}
	return nameExists;
}

const getOrders = async function getOrders(){
	var cartCollection = await cart();
	let cartExists = await cartCollection.find({}).toArray();
	return cartExists;
}

const getProducts = async function getProducts(){
	var productCollection = await products();
	let prodExists = await productCollection.find({}).toArray();
	return prodExists;
}
const addProduct = async function addProduct(name, price){
	var prodCollection = await products();
	var newProd = {
		"name": name,
		"price": price
	}
	var insert = await prodCollection.insertOne(newProd);

	return 0;
}

const removeOrder = async function removeOrder(id){
	console.log("remove order");
	if(id == undefined){
		throw new Error("id is not defined");
	}
	
	var cartCollection = await cart();
	var ObjectId = require('mongodb').ObjectID;

	let updated = await cartCollection.removeOne({_id: ObjectId(id)});
	if(updated.deletedCount === 0){
		throw new Error("could not remove");
	}
	return await getOrders();
}

const getCartByIdTemp = async function getCartByIdTemp(id){
	console.log("idT: " + id);
	if(id == undefined){
		throw new Error("id is not defined");
	}
	if(typeof(id) !== "string" && typeof(id) !== "object"){
		throw new Error("id is not of type string");
	}
	var cartCollection = await tempCart();
	var ObjectId = require('mongodb').ObjectID;
	let cartExists = await cartCollection.findOne({_id: ObjectId(id)});
	if(cartExists == null){
		throw new Error("no cart with that id");
	}
	return cartExists;
}

const getCartById = async function getCartById(id){
	console.log("id: " + id);
	if(id == undefined){
		throw new Error("id is not defined");
	}
	if(typeof(id) !== "string" && typeof(id) !== "object"){
		throw new Error("id is not of type string");
	}
	var cartCollection = await cart();
	var ObjectId = require('mongodb').ObjectID;
	console.log("breaks here");
	let cartExists = await cartCollection.findOne({_id: ObjectId(id)});
	console.log("broke here");
	if(cartExists == null){
		throw new Error("no cart with that id");
	}
	return cartExists;
}
const deleteCart = async function deleteCart(id){
	console.log("id: " + id);
	if(id == undefined){
		throw new Error("id is not defined");
	}
	if(typeof(id) !== "string" && typeof(id) !== "object"){
		throw new Error("id is not of type string");
	}
	var cartCollection = await tempCart();
	var ObjectId = require('mongodb').ObjectID;
	let cartDeleted = await cartCollection.removeOne({_id: ObjectId(id)});
	return cartDeleted;
}
/* const getUserById = async function getUserById(id){
	if(id == undefined){
		throw new Error("id is not defined");
	}
	if(typeof(id) !== "string" && typeof(id) !== "object"){
		throw new Error("id is not of type string");
	}
	var userCollection = await users();
	let userExists = await userCollection.findOne({_id: id});
	if(userExists == null){
		throw new Error("no user with that id");
	}
	return userExists;
}
const makeUser = async function makeUser(){
	var userCollection = await users();
	var newUser = {	}
	var insert = await userCollection.insertOne(newUser);

	return getUserById(insert.insertedId);
} */

const updateAvail = async function updateAvail(name, bool){
	console.log("update avail func");
	if(name == undefined){
		throw new Error("name is not defined");
	}
	if(bool == undefined){
		throw new Error("bool is not defined");
	}
	if(typeof(name) !== "string"){
		throw new Error("name is not of type string");
	}
	if(typeof(bool) !== "boolean"){
		throw new Error("bool is not of type boolean");
	}
	var adminCollection = await admins();
	let fruitExists = await adminCollection.findOne({id: 1});
	var updated;
	if(name=="Strawberry"){
		updated = await adminCollection.updateOne({_id: fruitExists._id}, 
			{$set:{
				Strawberry: bool, 
				Corn: fruitExists.Corn, 
				Squash: fruitExists.Squash
			}});
	}else if(name=="Corn"){
		updated = await adminCollection.updateOne({_id: fruitExists._id}, 
			{$set:{
				Strawberry: fruitExists.Strawberry, 
				Corn: bool, 
				Squash: fruitExists.Squash
			}});
	}else if(name=="Squash"){
		updated = await adminCollection.updateOne({_id: fruitExists._id}, 
			{$set:{
				Strawberry: fruitExists.Strawberry, 
				Corn: fruitExists.Corn, 
				Squash: bool
			}});
	}

	return await get(1);
}

const makeCart = async function makeCart(id){
	var cartCollection = await cart();
	var newCart = {
		"Strawberry": 0,
		"Corn": 0,
		"Squash": 0
	}
	var insert = await cartCollection.insertOne(newCart);

	return getCartById(insert.insertedId);
}
const sendOrder = async function sendOrder(strawbs, corn, squash){
	var cartCollection = await cart();
	var newCart = {
		"Strawberry": strawbs,
		"Corn": corn,
		"Squash": squash
	}
	var insert = await cartCollection.insertOne(newCart);

	return getCartById(insert.insertedId);
}
const tempOrder = async function tempOrder(strawbs, corn, squash){
	var cartCollection = await tempCart();
	var newCart = {
		"Strawberry": strawbs,
		"Corn": corn,
		"Squash": squash
	}
	var insert = await cartCollection.insertOne(newCart);

	return getCartByIdTemp(insert.insertedId);
}

const saveOrder = async function saveOrder(order){
	var orderCollection = await orderLog();

	var insert = await orderCollection.insertOne(order);
	var ObjectId = require('mongodb').ObjectID;
	console.log(order._id);
	return 0;//getCartById(ObjectId(order._id));
}

/* 
const updateCart = async function updateCart(id, name, num){
	console.log("update cart func");
	console.log(id);
	console.log(name);
	console.log(num);
	if(name == undefined){
		throw new Error("name is not defined");
	}
	if(num == undefined){
		throw new Error("num is not defined");
	}
	if(typeof(name) !== "string"){
		throw new Error("name is not of type string");
	}
	num = Number(num);
	if(isNaN(num)){
		throw new Error("num is not of type number");
	}
	//if(typeof(num) !== "number"){throw new Error("num is not of type number");}
	var cartCollection = await cart();
	//var userCollection = await users();
	var ObjectId = require('mongodb').ObjectID;
	let cartExists = await cartCollection.findOne({UserID: ObjectId(id)});//maybe do the object id here
	if(cartExists == null){
		cartExists = await makeCart(ObjectId(id));
	}
	console.log(cartExists);
	var updated;
	if(name=="Strawberry"){
		console.log("Strawe");
		updated = await cartCollection.updateOne({_id: cartExists._id}, 
			{$set:{
				UserID: cartExists.UserID,
				Strawberry: cartExists.Strawberry + num, 
				Corn: cartExists.Corn, 
				Squash: cartExists.Squash
			}});
	}else if(name=="Corn"){
		updated = await cartCollection.updateOne({_id: cartExists._id}, 
			{$set:{
				UserID: cartExists.UserID,
				Strawberry: cartExists.Strawberry, 
				Corn: cartExists.Corn + num, 
				Squash: cartExists.Squash
			}});
	}else if(name=="Squash"){
		updated = await cartCollection.updateOne({_id: cartExists._id}, 
			{$set:{
				UserID: cartExists.UserID,
				Strawberry: cartExists.Strawberry, 
				Corn: cartExists.Corn, 
				Squash: cartExists.Squash + num
			}});
	}
	if(updated.modifiedCount == 0){
		throw new Error("could not update cart");
	}
	console.log(updated);
	return getCartById(updated._id);
}


const removeFromCart = async function removeFromCart(name, num){
	console.log("remove from cart func");
	if(name == undefined){
		throw new Error("name is not defined");
	}
	if(num == undefined){
		throw new Error("num is not defined");
	}
	if(typeof(name) !== "string"){
		throw new Error("name is not of type string");
	}
	num = Number(num);
	if(isNaN(num)){
		throw new Error("num is not of type number");
	}
	var cartCollection = await cart();
	let fruitExists = await cartCollection.findOne({name: name});
	if(fruitExists == null){
		throw new Error("no fruit with that name");
		return;
	}
	var newfruit;
	if(fruitExists.num - num > 0){
		newfruit = fruitExists.num - num;
	}else{
		newfruit = 0
	}
	let updated = await cartCollection.updateOne({_id: fruitExists._id}, {$set:{name: fruitExists.name, num: newFruit}});
	if(updated.modifiedCount == 0){
		throw new Error("could not update cart");
	}
	return await get(name);
}

const clearCart = async function clearCart(){
	console.log("clear cart func");
	var cartCollection = await cart();
	let fruitExists = await cartCollection.findOne({name: name});
	if(fruitExists == null){
		throw new Error("no fruit with that name");
		return;
	}
	let updated = await cartCollection.updateOne({_id: fruitExists._id}, {$set:{name: fruitExists.name, num: 0}});
	if(updated.modifiedCount == 0){
		throw new Error("could not update cart");
	}
	return await get(name);
}

const addFruits = async function addFruits(){
	var cartCollection = await cart();
	var adminCollection = await admins();

	var newFruit1 = {
		"userID": 0, 
		"Strawberry": 0,
		"Corn": 0,
		"Squash": 1
	}
	var insert = await cartCollection.insertOne(newFruit1);

	var newFruit2 = {
		"Strawberry": 3,
		"Corn": 0,
		"Squash": 1
	}
	var insert = await cartCollection.insertOne(newFruit2);

	var newFruit3 = {
		"Strawberry": 5,
		"Corn": 98,
		"Squash": 0
	}
	var insert = await cartCollection.insertOne(newFruit3);

	var newFruit1 = {
		"id": 1,
		"Strawberry": true,
		"Corn": true,
		"Squash": false
	}
	var insert = await adminCollection.insertOne(newFruit1);
}

 */

module.exports = {get, getOrders, deleteCart, getProducts, addProduct, removeOrder, tempOrder, saveOrder, sendOrder, getCartById, getCartByIdTemp, updateAvail, makeCart};
//updateCart, clearCart, addFruits
