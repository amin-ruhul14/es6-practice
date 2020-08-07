const person = { name: 'Amin Ruhul', age: '21', jon: 'Student', gfName: 'Ema Watson', address: 'Dhanmondi', phone: '01303289455', friends: ['Pabel', 'Hridoy', 'Rabbi', 'Yeasfi', 'Bashar'] };


const { phone, gfName, address } = person;

const complexObject = {
    name: 'Amin',
    info: {
        address: 'Dhanmondi',
        leader: 'Ruhul'
    }
}

const { leader } = complexObject.info;
console.log(leader);

const friends = person.friends;
console.log(friends);

const gfName = person.gfName;
const phone = person.phone;
console.log(gfName, phone, address);
console.log(gfName, phone, address);

const friends = ['Pabel', 'Hridoy', 'Rabbi', 'Yeasfi', 'Bashar'];
const [...allFriends] = friends;
console.log(allFriends);