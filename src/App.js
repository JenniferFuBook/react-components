// import React from 'react';

// function strongPasswordChecker(s) {
//   function needSpecial(str) {
//     let special = 3;
//     if (/\d/.test(str)) {
//       special--;
//     }
//     if (/[a-z]/.test(str)) {
//       special--;
//     }
//     if (/[A-Z]/.test(str)) {
//       special--;
//     }
//     return special;
//   }
//   let len = s.length;
//   if (len === 0) {
//     return 6;
//   }
//   let i = 1;
//   let same = 1;
//   let change = 0;
//   let special = needSpecial(s);
//   while (i <= len) {
//     if (same >= 3) {
//       const diff = Math.floor(same / 3);
//       change += diff;
//       special = special - diff;
//       if (special < 0) {
//         special = 0;
//       }
//       if (len > 20) {
//         if (same % 3 === 0) {
//           len--;
//         }
//       } else if (len < 6) {
//         len = Math.min(6, len + diff);
//       }
//       same = 1;
//     } else if (i < len && s[i] === s[i - 1]) {
//       same++;
//     }
//     i++;
//   }
//   if (len < 6) {
//     change += special;
//     len += special;
//     change += 6 - len;
//   } else if (len > 20) {
//     change += len - 20;
//     change += special;
//   } else {
//     change += special;
//   }
//   return change;
// }

// function addChildren() {
//   const startTime = new Date();
//   const result = [];
//   for (let i = 0; i < 1000000; i++) {
//     result.push(i);
//   }
//   const endTime = new Date();
//   console.log(endTime - startTime);
// }

function App() {
  // const a = [1, 2, 3, 4].map((_, i) => <div key={i}>{i}</div>);
  // console.log(a);
  /*
	A password is considered strong if below conditions are all met:
		1. It has at least 6 characters and at most 20 characters.
		2. It must contain at least one lowercase letter, at least one uppercase letter, and at least one digit.
		3. It must NOT contain three repeating characters in a row ("...aaa..." is weak, but "...aa...a..." is strong, assuming other conditions are met).
	Write a function strongPasswordChecker(s), that takes a string s as input, and return the MINIMUM change required to make s a strong password. If s is already strong, return 0.
	Insertion, deletion or replace of any one character are all considered as one change.
	*/

  return (
    <select>
      <option value="apple">Apple</option>
      <option value="pear">Pear</option>
    </select>
  );
}

export default App;
