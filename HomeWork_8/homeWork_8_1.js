function mergeObjects(...objects) {
    let output = {};
  
    for (const obj of objects) {
      for (const [key, value] of Object.entries(obj)) {
        output[key] = value;
      }
    }
  
    return output;
  }
  
  let obj1 = { name: "Andy", age: 25 };
  let obj2 = { gender: "M", age: 30 };
  let obj3 = { name: "Bobby", age: 35 };
  
  console.log(mergeObjects(obj1, obj2, obj3));
  // Outputs: { name: 'Bobby', age: 35, gender: 'M' }
  
  console.log(mergeObjects(obj3, obj2, obj1));
  // Outputs: { name: 'Bobby', age: 35, gender: 'M' }
  