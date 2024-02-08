function defangIPaddr(nums) {
  let newAddress = nums.split(".").join("[.]");
  console.log(newAddress);
  return newAddress;
}

let address1 = defangIPaddr("1.1.1.1");
let address2 = defangIPaddr("255.100.50.0");

console.log(address1);
console.log(address2);
