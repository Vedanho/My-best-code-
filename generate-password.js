function generatePassword(length,level,number = 1) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newPassword = '';
  const digits = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[]^_{|}~';
  const passwords = [];
  
  for (let j = 0; j < number; j++) {
  for(let i = 0; i < length; i++) {
    const ranodmDigit = digits[Math.floor(Math.random() * digits.length)];
    const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    if (level === 'easy') {
      newPassword += randomChar
    } else if (level === 'medium') {
    newPassword +=  ranodmDigit
    }
     else if (level === 'hard') {
    newPassword +=  randomSymbol
  }
}
   passwords.push(newPassword)
   newPassword = '';
 }
 if (number === 1) {
   return passwords.join (' ')
 }
  return passwords;
}
console.log(generatePassword(8, 'hard',5)) 
