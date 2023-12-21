function cloneObject(obj) {
    // ให้ใช้ JSON.parse() และ JSON.stringify() เพื่อ clone object
    return JSON.parse(JSON.stringify(obj));
  }
  
  let object1 = { name: { fname: 'andy', lname: 'howe' }, age: 45 };
  
  let object2 = cloneObject(object1);
  object2.name.fname = 'bobby';
  
  console.log(object1);
  console.log(object2);

  