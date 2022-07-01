
/* 29. Object constructor */
function User(firstName, lastName, avatar) {
  this.firstName = firstName,
    this.lastName = lastName,
    this.avatar = avatar
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`
  }
}
var author = new User('Binh', 'Nguyen', 'Avatar');
var user = new User('Vu', 'Nguyen', 'Avatar');
author.title = 'share code';
user.comment = 'ok hehe';
console.log(author.getName());
console.log(user.getName());

/* 30. Object prototype 
  1. prototype là gì? - thêm thuộc tính bên ngoài hàm tạo
  2. sử dụng khi nào?
*/
User.prototype.className = "F9";
User.prototype.getClassName = function () {
  return this.className;
}
console.log(user.getClassName());
console.log(user);


/* 31. Đối tượng Date */
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
console.log(`${day}/${month}/${year}`);


/* 32. Câu lệnh rẽ nhánh - if else */
var date = 2;
if (date === 2) {
  console.log("Hôm nay là thứ 2");
} else if (date === 3) {
  console.log("Hôm nay là thứ 3");
} else if (date === 4) {
  console.log("Hôm nay là thứ 4");
} else {
  console.log("không biết");
}


/* 33. Câu lệnh rẽ nhánh - switch */
var date = 3;
switch (date) {
  case 2:
  case 3:
  case 4:
    console.log("Hôm nay là thứ 2,3,4");
    break;
  case 5:
    console.log("Hôm nay là thứ 5");
    break;
  default:
    console.log("Không biết");
}


/* 34. Toán tử 3 ngôi - Ternary operator */
var course = {
  name: 'Javascript',
  coin: 250
}
// if (course.coin > 0) {
//   console.log(`${course.coin} Coins`);
// } else {
//   console.log('Miễn phí');
// }
var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
console.log(result);


/* 35. Giới thiệu vòng lặp - loop 
  1. for - Lặp với điều kiện đúng
  2. for/in - Lặp qua key của đối tượng
  3. for/of - Lặp qua value của đối tượng
  4. while - Lặp khi điều kiện đúng
  5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
*/


/* 36. For loop */
for (var i = 1; i <= 1000; i++) {
  console.log(i);
}


/* 37. For loop 2 */
var i = 1;
for (; i <= 1000; i++) {
  console.log("another: ", i);
};


/* 38. For loop 3 */
var myArr = [
  'Javascript',
  'PHP',
  'Java',
  'Dart'
];
var arrLength = myArr.length;
for (var i = 0; i < arrLength; i++) {
  console.log(myArr[i]);
};


/* 39. For/in loop */
var myInfo = {
  name: 'BinhDev',
  age: 19,
  address: 'Da Nang'
};
for (var key in myInfo) {
  console.log(myInfo[key]);
}
var langs = ['Java', 'Javascript', 'PHP', 'Ruby'];
for (var key in langs) {
  console.log(langs[key]);
}


/* 40. For/of loop */
var langus = ['Java', 'Javascript', 'PHP', 'Ruby'];
var us = {
  name: "Binh",
  age: 19
}
// for (var value of Object.keys(us)) {
//   console.log(us[value]);
// }
for (var value of Object.values(us)) {
  console.log('value: ', value);
}


/* 41. Vòng lặp While loop */
var i = 0;
while (i < 1000) {
  i++;
  console.log(i);
}


/* 42. Vòng lặp Do/while loop */
var i = 0;
var isSuccess = false;
do {
  i++;
  console.log('Nạp lần: ' + i);
  if (false) {
    isSuccess = true;
  }
} while (!isSuccess && i <= 3);


/* 43. Break & Continue in loop */
for (var i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
  // if (i >= 5) {
  //   break;
  // }
}


/* 44. Vòng lặp lồng nhau - Nested loop */
var mArr = [
  [1, 2],
  [3, 4],
  [5, 6]
];
for (var i = 0; i < mArr.length; i++) {
  console.log(mArr[i]);
  for (var j = 0; j < mArr[i].length; j++) {
    console.log(mArr[i][j]);
  }
}


/* 45. Loop sample */
for (var i = 100; i > 0; i--) {
  console.log(i);
}
for (var i = 0; i <= 100; i += 5) {
  console.log(i);
}
for (var i = 100; i >= 0; i -= 5) {
  console.log("sample: ", i);
}


/* 46. Làm việc với mảng 
  Array method
  1. forEach() - duyệt qua từng phần tử của mảng
  2. every() - kiểm tra tất cả phần tử thỏa điều kiện
  3. some() - ngược lại với every, dừng nếu có 1 phần tử thỏa
  4. find() - tìm phần tử trả về phần tử thỏa đầu tiên
  5. filter() - tìm phần tử trả về tất cả phần tử thỏa mãn
  6. map() - thay đổi element của 1 array
  7. reduce()
*/
var courses = [
  {
    id: 1,
    name: 'Javascript',
    coin: 250
  },
  {
    id: 2,
    name: 'Ruby',
    coin: 0
  },
  {
    id: 3,
    name: 'PHP',
    coin: 100
  },
  {
    id: 4,
    name: 'HTML, CSS',
    coin: 0
  },
  {
    id: 5,
    name: 'Ruby',
    coin: 220
  }
];
courses.forEach(function (course, index) { // hàm được truyền dưới dạng tham số được gọi là call back
  console.log(index, course);
})
var isFree = courses.some(function (course, index) {
  return course.coin === 0;
});
var course = courses.filter(function (course, index) {
  return course.name === 'Ruby';
})
console.log(course);


/* 47. Array map() method trong javascript */
function courseHandler(course, index) {
  // console.log(course);
  return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`,
    coin: course.coin,
    coinText: `Gia: ${course.coin}`,
    index: index,
    originArray: courses
  }
}
var newCourses = courses.map(courseHandler);
console.log(newCourses);


/* 48. Array reduce() method */
// tính tổng số coin
// 1. dễ hiểu
// 2. ngắn gọn
// 3. hiệu năng
// var totalCoin = 0;
// for (var course of courses) {
//   totalCoin += course.coin;
// }
// console.log(totalCoin);
var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
  i++;
  var total = accumulator + currentValue.coin;
  console.table({
    'Lượt chạy: ': i,
    'Biến tích trữ: ': accumulator,
    'Giá khóa học: ': currentValue.coin,
    'Tích trữ được: ': total
  });
  return total;
};
var totalCoin = courses.reduce(coinHandler, 0);


/* 49. Array reduce() method qua ví dụ */
// total coin
var totalC = courses.reduce(function (total, course) {
  return total + course.coin;
}, 0); // initial value
console.log(totalC);
// Flat - 'Làm phẳng' mảng từ Depth array - 'mảng sâu'
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
  return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);
// Lấy ra các khóa học đưa vào mảng mới
var topics = [
  {
    topic: 'front-end',
    courses: [
      {
        id: 1,
        title: 'html, css'
      },
      {
        id: 2,
        title: 'javascript'
      }
    ]
  },
  {
    topic: 'back-end',
    courses: [
      {
        id: 1,
        title: 'php'
      },
      {
        id: 2,
        title: 'nodejs'
      }
    ]
  }
]
var newCourses2 = topics.reduce(function (courses, topic) {
  return courses.concat(topic.courses);
}, [])
console.log(newCourses2);
var htmls = newCourses2.map(function (course) {
  return `
    <div>
      <h2>${course.title}</h2>
      <p>${course.id}</p>
    </div>
  `;
});
console.log(htmls.join(''));


// 50. String/Array includes() method
var title = 'Responsive web design';
console.log(title.includes('web'));
var courses2 = ['javascript', 'php', 'ruby'];
console.log(courses2.includes('ruby'));


/* 51. Math object
  Math.PI
  Math.round()
  Math.abs()
  Math.ceil()
  Math.floor()
  Math.random()
  Math.min()
  Math.max()
*/


/* 52. Callback? 
  1. Là hàm
  2. Được truyền qua đối số
*/
function myFunction(param) {
  param('Hoc Lap trinh');
}
function myCallback(val) {
  console.log('Value: ', val);
}
myFunction(myCallback);


/*
  53. Callback - phần 2?
  1. là hàm
  2. truyền qua đối số
  3. được gọi lại (trong hàm nhận đối số)
*/
var courses3 = [
  'javascript',
  'php',
  'ruby'
];
Array.prototype.map2 = function (callback) {
  var arLength = this.length;
  var output = [];
  for (var i = 0; i < arLength; i++) {
    var result = callback(this[i], i, this);
    output.push(result);
  }
  return output;
};
var html = courses3.map2(function (course, index, array) {
  return `<h2>${course}</h2>`
});
console.log(html.join(''));


// 54. empty elements of array?
// forEach, find, filter, some, every, reduce
var coursess = [
  'javascript',
  'php',
  'java',
  'false'
]
courses.length = 10;
// console.log(courses);
// for (var index in courses) {
//   console.log(courses[index]);
// }


/* 55. my forEach() */
// 1. object prototype
// 2. for in
// 3. hasOwnProperty
Array.prototype.forEach2 = function (callback) {
  var output = [];
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      var result = callback(this[i], i, this);
      output.push(result);
    }
  }
  return output;
};
var html = coursess.forEach2(function (course, index, array) {
  return `(index: ${index}, value: ${course}) - `;
});

console.log(html.join(''));

/* find */
Array.prototype.find2 = function (callback) {
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      var result = callback(this[i], i, this);
      if (result) {
        return this[i];
      }
    }
  }
}
var html = coursess.find2(function (course, index, array) {
  return course === 'java';
});
console.log(html);


/* 56. filter */
var courses = [
  {
    name: 'javascript',
    coin: 680
  },
  {
    name: 'php',
    coin: 860
  },
  {
    name: 'ruby',
    coin: 980
  }
];
Array.prototype.filter2 = function (callback) {
  var output = [];
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      var result = callback(this[i], i, this);
      if (result) {
        output.push(this[i]);
      }
    }
  }
  return output;
};
var html = courses.filter2(function (course, index, array) {
  return course.coin > 700;
});
console.log(html);


/* 57. Some() */
var courses = [
  {
    name: 'javascript',
    coin: 680,
    isFinish: false
  },
  {
    name: 'php',
    coin: 860,
    isFinish: false
  },
  {
    name: 'ruby',
    coin: 980,
    isFinish: true
  }
];
Array.prototype.some2 = function (callback) {
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      var result = callback(this[i], i, this);
      if (result) {
        return true;
      }
    }
  }
  return false;
};
var html = courses.some2(function (course, index, array) {
  return course.isFinish
});
console.log(html);


/* 58. every() */
var courses = [
  {
    name: 'javascript',
    coin: 680,
    isFinish: true
  },
  {
    name: 'php',
    coin: 860,
    isFinish: true
  },
  {
    name: 'ruby',
    coin: 980,
    isFinish: true
  }
];
Array.prototype.every2 = function (callback) {
  var output = true;
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      var result = callback(this[i], i, this);
      if (!result) {
        return false;
      }
    }
  };
  return output;
}
var html = courses.every2(function (course, index, aray) {
  return course.isFinish;
})
console.log(html);


/* 59. Đệ quy */
var array = ['a', 'b', 'c', 'c', 'a', 'b'];
// console.log([[...(new Set(array))]]);
// 1. xác định điểm dừng
// 2. logic handle => Tạo ra điển dừng;
// function countDown(num) {
//   if (num > 0) {
//     console.log(num);
//     return countDown(num - 1);
//   }
//   return num;
// }
// countDown(10);
function loop(start, end, cb) {
  if (start < end) {
    cb(start);
    return loop(start + 1, end, cb);
  }
}
var array = ['javascript', 'php', 'ruby'];
loop(0, array.length, function (index) {
  console.log('index: ', array[index]);
});
// giai thừa
//  6 * 5 * 4 * 3 ...
// function giaiThua(num) {
//   var output = 1;
//   for (var i = num; i > 0; i--) {
//     output = output * i;
//   }
//   return output;
// }
// console.log(giaiThua(3));
function giaiThua(num) {
  if (num > 0) {
    return num * giaiThua(num - 1);
  }
  return 1;
}
console.log(giaiThua(6));


// 60. HTML DOM
// mô hình tài liệu được thể hiện dưới dạng đối tượng
/**
 * có 3 thành phần
 * 1. Element
 * 2. Attribute
 * 3. Text
 * Note: điểm gồ lên
 */


/** 61. HTML DOM và DOM API
 *  javascript: browser | server (nodejs)
 * browser: html -> dom -> web api
 */


/** 62. DOM trong javascript */
console.log(document);
document.write("Hello");


/** 63. Get element method */
/**
 * 1. Element: id, class, tag, css selector, html collection
 * 2. Attribute
 * 3. Text
 */
var heading = document.forms.formMy;
console.log(heading);


/** 64. Get Attribute*/
/**
 * 1. Element: id, class, tag, css selector, html collection
 * 2. Attribute
 * 3. Text
 */
var boxNode = document.querySelector('.box-1');
console.log(boxNode.querySelectorAll('li'));


/** 65. Get Elements methods*/
/**
 * 1. Element: id, class, tag, css selector, html collection
 */
/** 
 * 1. getElementById
 * 2. get ElementsByClassName
 * 3. get ElementsByTagName
 * 4. querySelector
 * 5. querySelectorAll
 * 6. HTML collection
 * 7. document.write
 */


/** 66. Attribute node & text node*/
// Element
// Attribute
// Text


/** 67. DOM attribute */
var headingElement = document.querySelector('h1');
headingElement.setAttribute("href", "name");
console.log(headingElement.getAttribute("href"));


/** 68. InnerText vs textContent Property */
// getter
// setter
var getHeading = document.querySelector('#heading');
getHeading.innerText = "new heading";
console.log(getHeading.innerText);
console.log(getHeading.textContent);
var title = document.querySelector('.title');
console.log(title.textContent);


/** 69. InnerHTML Propertype */
// innerHTML, outerHTML
var boxElement = document.querySelector(".box");
console.log(boxElement);
boxElement.innerHTML = '<h1>heading</h1>'
console.log(document.querySelector('h1').innerText);
console.log(boxElement.outerHTML);


/** 70. Node properties */
var boxEle = document.querySelector('.box');
console.log([boxEle]);


/** 71. DOM style */
var boxEl = document.querySelector('.box');
Object.assign(boxEl.style, {
  width: '200px',
  height: '100px',
  backgroundColor: 'green'
})
console.log(boxEl.style.backgroundColor);


/** 72. ClassList Property */
// add 
// contains
// remove
// toggle
var boxElem = document.querySelector('.box');
console.log(boxElem.classList);
boxElem.classList.add('red');
console.log(boxElem.classList.contains('red'));
setInterval(() => {
  boxElem.classList.toggle('red');
}, 1000);


/** 73. DOM events */
// 1. Attribute events
// 2. Assign event using the element node
var h1Element = document.querySelectorAll('h2');
for (var i = 0; i < h1Element.length; i++) {
  h1Element[i].onclick = function (e) {
    console.log(e.target);
  }
}


/** 74. DOM events */
// 1. Input/select
// 2. Keyup/down
var inputVal;
var inputElement = document.querySelector('input[type="text"]');
console.log(inputElement);
inputElement.onkeydown = function (e) {
  console.log(e);
}
inputElement.onkeyup = function (e) {
  console.log(e.which);
  switch (e.which) {
    case 27:
      console.log('exit');
      break;
  }
}


/** 75.DOM Events
 *  1. preventDefault
 * 2. stopPropagation
 */
var aElements = document.anchors;
console.log(aElements);
for (var i = 0; i < aElements.length; ++i) {
  aElements[i].onclick = function (e) {
    console.log(e.target.href);
    if (!e.target.href.startsWith('https://google.com')) {
      e.preventDefault();
    }
  }
}
var ulElement = document.querySelector("ul");
ulElement.onmousedown = function (e) {
  e.preventDefault();
};
ulElement.onclick = function (e) {
  console.log(e.target);
};
document.querySelector("div").onclick = function () {
  console.log("DIV");
};
document.querySelector("button").onclick = function (e) {
  e.stopPropagation();
  console.log("Click me!");
}


/** 76. Event listener 
 *  1. Event listener
 *  2. JSON
 *  3. Fetch
 *  4. DOM location
 *  5. Local storage
 *  6. Session storage
 *  7. Coding convention
 *  8. Best Practices
 *  9. Mistakes
 *  10. Performance
 * 
 *  1. Xử lý nhiều vệc khi 1 event xảy ra
 *  2. Lắng nghe / huỷ bỏ lắng nghe
*/
var btn = document.getElementById("btn");
console.log(btn);
// btn.onclick = function() {
//   // Viec 1
//   console.log("Viec 1");
//   // Viec 2
//   console.log("Viec 2");
//   // Viec 3
//   alert("Viec 3");
// }
// setTimeout(function() {
//   btn.onclick = function() {};
// }, 3000);
function viec1() {
  console.log("viec 1");
}
btn.addEventListener("click", viec1);


/** 77. Form validation */
// Doi tuong
function Validator(options) {
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }
  var selectorRules = {};
  // Ham thuc hien validate
  function validate(inputElement, rule) {
    // var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
    var errorMessage;
    // Lay ra cac rule cua selector
    var rules = selectorRules[rule.selector];
    // Lap qua tung rule va kiem tra
    for (var i = 0; i < rules.length; ++i) {
      switch (inputElement.type) {
        case 'radio':
        case 'checkbox':
          errorMessage = rules[i](
            formElement.querySelector(rule.selector + ':checked')
          );
          break;
        default:
          errorMessage = rules[i](inputElement.value);
      }
      if (errorMessage) break;
    }
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      getParent(inputElement, options.formGroupSelector).classList.add("invalid");
    } else {
      errorElement.innerText = "";
      getParent(inputElement, options.formGroupSelector).classList.remove("invalid");
    }
    return !errorMessage;
  }
  // Lay element cua form can validate
  var formElement = document.querySelector(options.form);
  if (formElement) {
    formElement.onsubmit = function (e) {
      e.preventDefault();
      var isFormValid = true;
      // Lap qua tung rules va validate
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });
      if (isFormValid) {
        // Truong hop submit voi javascript
        if (typeof options.onSubmit === "function") {
          var enableInputs = formElement.querySelectorAll("[name]");
          var formValues = Array.from(enableInputs).reduce(function (values, input) {
            switch (input.type) {
              case 'radio':
                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                break;
              case 'checkbox':
                if (!input.matches(':checked')) return values;
                if (!Array.isArray(values[input.name])) {
                  values[input.name] = [];
                }
                values[input.name].push(input.value);
                break;
              case 'file':
                values[input.name] = input.files;
                break;
              default:
                values[input.name] = input.value;
            }
            return values;
          }, {});
          options.onSubmit(formValues);
        }
        // Truong hop submit voi hanh vi mac dinh
        else {
          formElement.submit();
        }
      }
    }
    // Lap qua moi rule va xu ly
    options.rules.forEach(function (rule) {
      // Luu rule cho input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }
      var inputElements = formElement.querySelectorAll(rule.selector);
      Array.from(inputElements).forEach(function (inputElement) {
        // Xu ly truong hop blur khoi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        }
        // Xu ly truong hop khi nguoi dung nhap
        inputElement.oninput = function () {
          var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
          errorElement.innerText = "";
          getParent(inputElement, options.formGroupSelector).classList.remove("invalid");
        }
      });
    });
  }
};
// Dinh nghia rules
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value ? undefined : message || "Please enter!"
    }
  };
};
Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : message || "Please enter correct email!"
    }
  };
};
Validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min ? undefined : message || `Please enter minimun ${min} character`;
    }
  };
};
Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value == getConfirmValue() ? undefined : message || "Value incorrect!";
    }
  }
}


/** 78. JSON */
// 1. Là 1 định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation
// 3. JSON: Number, String, Boolean, Null, Aray, Object
// Thao tác : mã hóa/encode và giải mã/decode
// stringify --> javascript type sang json
// parse --> json sang javascript type
var json = '{"name":"BinhDev","age":18}';
console.log(JSON.parse(json));
console.log(JSON.stringify());


/** 79. Promise */
// đồng bộ sync
// bất đồng bộ async
// nỗi đau
// lý thuyết, cách hoạt động
// thực hành, ví dụ
// Async: setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame
// Callback để xử lý bất đồng bộ
// Sync, Async
// setTimeout(function () {
//   console.log(1);
// }, 1000);
// console.log(2);
// callback hell
// pyramid of doom


/** 80. Promise pain */
// setTimeout(function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//     setTimeout(function () {
//       console.log(3);
//     }, 1000);
//   }, 1000);
// }, 1000);


/** 81. Promise lý thuyết, cách hoạt động */
// memory leak
// 1. pedding
// 2. fulfilled
// 3. Rejected
var promise = new Promise(
  // Excuter
  function (resolve, reject) {
    // Logic
    // Thành công: resolve()
    // Thất bại: reject()
    resolve();
  }
);
// promise
//   .then(function () {
//     console.log("Successfully!");
//   })
//   .catch(function (course) {
//     console.log(course);
//   })
//   .finally(function () {
//     console.log("Done!");
//   });


/** 82. Promise chain */
// promise
//   .then(function () {
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         resolve([1, 2, 3]);
//       }, 3000)
//     })
//   })
//   .then(function (data) {
//     console.log(data);
//     return 2;
//   })
//   .then(function (data) {
//     console.log(data);
//     return 3;
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (course) {
//     console.log(course);
//   })
//   .finally(function () {
//     console.log("Done!");
//   });
// function sleep(ms) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, ms);
//   })
// }
// sleep(1000)
//   .then(function(){
//     console.log(1);
//     return sleep(1000);
//   })
//   .then(function(){
//     console.log(2);
//     return sleep(1000);
//   })
//   .then(function(){
//     console.log(3);
//     return sleep(1000);
//   });


/** 83. Promise method(resolve, reject, all) */
function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  })
}
sleep(1000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })
  .then(function () {
    console.log(2);
    return new Promise(function (resolve, reject) {
      reject('error');
    });
  })
  .then(function () {
    console.log(3);
    return sleep(1000);
  })
  .catch(function (err) {
    console.log(err);
  });
// Promise.resolve
// Promise.reject
// Promise.all
var prom = Promise.resolve('Success!');
prom
  .then(function (result) {
    console.log('result:', result);
  })
  .catch(function (err) {
    console.log('err:', err);
  });
var promise1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([1]);
  }, 2000);
});
var promise2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 5000)
})
Promise.all([promise1, promise2])
  .then(function ([result1, result2]) {
    console.log(result1.concat(result2));
  });


/** 84. ECMAScript 6 
 * 1. Let, const
 * 2. Template Literals
 * 3. Multi-line String
 * 4. Arrow function
 * 5. Classes
 * 6. Default paramenter values
 * 7. Destructuring
 * 8. Rest parameters
 * 9. Spread
 * 10. Enhanced object literals
 * 11. Tagged template literal
 * 12. Modules
 * 13. Optional chaining(?.)
 * // babel
*/
// 1. Var / Let, Const: Scope, Hosting
// 2. Const / Var, Let: Assignment
// Code block: if else, loop, {}, ....
if (true) {
  var cou = 'Javascript basic!';
}
console.log('course: ', cou);
var a = 1;
console.log(a);


/** 85. Arrow function */
// var logger = (log) => {
//   console.log(log);
//   logger('Message...');
//   var sum = (a, b) => a + b;
//   console.log(sum(2, 2));
//   const coursee = {
//     name: 'Javascript basicww!',
//     getName: function () {
//       return this.name; //context
//     }
//   };
//   console.log(coursee.getName());
// }


/** 86. Template Literals */
const courseName = 'Javascript';
const description = `Course name: ${courseName}`; // nội suy
console.log(description);


/** 87. Classes */
// function Course(name, price) {
//   this.name = name;
//   this.price = price;
// }
class Course {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
};
const phpCourse = new Course('php', 1000);
const jsCourse = new Course('javascript', 1200);
console.log(phpCourse);
console.log(jsCourse);


/** 88. Enhanced object literals */
// 1. định nghĩa key: value cho object
// 2. định nghĩa method cho object
// 3. định nghĩa key cho object dưới dạng biến
var name = 'jacascript';
var price = 1000;
var course = {
  name: name,
  price: price,
  getName() {
    return name;
  }
}
console.log(course.getName());


/** 89. Default parameter values */
function loggers(log = 'Defaults value') {
  console.log(log);
}
loggers('dadf');


/** 90. Destructuring, Rest parameters */
var array = ['javascript', 'php', 'ruby'];
// var a = array[0];
// var b = array[1];
// var c = array[2];
var [a, ...rest] = array;
console.log(a);
console.log(rest);
var course = {
  name: 'javascript',
  price: 2000,
  children: {
    name: 'ReactJs'
  },
  dess: 'value'
};
var { name: parentName, price, children: { name }, dess = 'default' } = course;
console.log(parentName, price, name, dess);
//Rest parameters
function loggerss(...params) {
  console.log(params);
}
console.log(loggerss(1, 2, 3, 4, 5));


/** 91. Spread */
var array1 = ['javascript', 'ruby', 'php'];
var array2 = ['Reactjs', 'dart'];
var array3 = [...array2, ...array1];
console.log(array3);
var arrrr = ['javascript', 'php'];
function loggersa(a, b, c) {
  console.log(a, b, c);
}
loggersa(...arrrr);


/** 92. Tagged template literals */
function highlight([first, ...strings], ...values) {
  return values.reduce(
    (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
    [first]
  ).join('');
}
var brand = 'f8';
var course = 'javascript';
const htmll = highlight`Hoc lap trinh ${course} tai ${brand} !`;
console.log(htmll);


/** 93. Modules */
// Import / Export
// bóc tách 1 thành phần xử lý một nghiệp vụ cụ thể ra 1 file
import logger from './logger.js';
import {
  TYPE_LOG,
  TYPE_WARN,
  TYPE_ERROR
} from './constants.js';
logger('Text message!', TYPE_ERROR);


/** 94. Optional chaining(?.) */
const obj = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
    // cat2: {
    //   name: 'Dinah2',
    //   cat3: {
    //     name: 'Dinah3'
    //   }
    // }
  }
}
if (obj.cat.cat2?.cat3) {
  console.log(obj.cat.cat2.cat3.name); 
}
