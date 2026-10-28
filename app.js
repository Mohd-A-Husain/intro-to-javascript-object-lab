//Exercise 1: Read the menu

/*
const menuItems =['Tea','Coffee','Sandwich','Cookie']

console.log(menuItems[0])
console.log(menuItems[2])
console.log(menuItems.length)
console.log(menuItems[3])
*/

//------------------------------------------------------

//Exercise 2: Update the waiting list

/*
const waitingCustomers = ['Aisha', 'Omar', 'Noor'];

waitingCustomers[1]='Ali'
waitingCustomers.push('Dana')
console.log(waitingCustomers.length)
let removedCustomer= waitingCustomers.pop()
console.log(removedCustomer)
console.log(waitingCustomers)
*/

//------------------------------------------------------

//Exercise 3: Print a numbered menu

/*
const drinks = ['Water', 'Tea', 'Coffee', 'Juice'];

for(let i=0;i<drinks.length;i++){
    console.log(i+":"+drinks[i])
}
    */

//------------------------------------------------------

//Exercise 4: Calculate the prices

/*
const prices = [2, 5, 3, 6, 4];

let totalPrice=0
let expensiveItemCount=0

prices.forEach(element => {
    totalPrice+=element

    if(element>=4){
        expensiveItemCount++
    }
     
});

console.log(totalPrice)
console.log(expensiveItemCount)
*/

//------------------------------------------------------

//Exercise 5: Describe the café

/*
const cafe ={

name:'Campus Café',
location: 'Building A',
seats:24,
isOpen:true

 

};

console.log(cafe.name+ " is located in "+ cafe.location+".")
console.log("Avilable seats:"+cafe.seats)

*/

//------------------------------------------------------

//Exercise 6: Update a drink

/*

const drink = {
  name: 'Iced Coffee',
  price: 3,
  size: 'small',
  temporaryCode: 'TEMP-01',
};

drink.size='large'
drink.price=drink.price+1
drink.isAvailable=true
delete drink.temporaryCode

console.log(drink)

*/
//------------------------------------------------------

//Exercise 7: Check an order

/*

const order = {
  customerName: 'Mariam',
  itemName: 'Sandwich',
  price: 4,
  quantity: 3,
  isPaid: false,
};

let orderTotal= order.price * order.quantity

console.log(order.customerName+" order "+order.quantity+" " + order.itemName +" items.")
console.log("Order total: "+orderTotal)

order.isPaid= true

if(order.isPaid === true){

    console.log('Ready to prepare')

}else{
    console.log('Waiting for payment')
}

*/
//------------------------------------------------------

//Exercise 8: Plan a study session

/*
const studySession = {
  title: 'JavaScript Practice',
  room: 'Lab 2',
  topics: ['Variables', 'Arrays'],
};

studySession.topics.push('Objects')
console.log(studySession.topics.length)

studySession.topics.forEach(element => {

    console.log(element)
    
});

studySession.room= 'lab 3'

console.log("JavaScript Practice will take place in "+studySession.room)
console.log(studySession.topics)

*/

//------------------------------------------------------

/*

const products = [
  { name: 'Tea', price: 2 },
  { name: 'Sandwich', price: 4 },
  { name: 'Cookie', price: 1 },
];

console.log(products[1].name)
products[1].price=5

for(let i=0;i<products.length;i++){
    console.log(products[i].name +" costs "+products[i].price + " BD")
}

*/

//------------------------------------------------------

const studyGroup = {
  name: 'JavaScript Crew',
  members: [
    { name: 'Aisha', completedHomework: true },
    { name: 'Omar', completedHomework: false },
    { name: 'Noor', completedHomework: true },
  ],
};

console.log(studyGroup.name)
console.log(studyGroup.members.length)

let completedCount=0

studyGroup.members.forEach(element => {

    if(element.completedHomework== true){
        completedCount++
    }else{
    console.log(element.name+" needs to finish the homework.")
    }
});

console.log("Completed homework: "+completedCount)







