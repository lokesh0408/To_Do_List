let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

let arr = []; // for storing the data
let obj = []; // for storing the li

btn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerText = inp.value;
  arr.push(li.innerText);
  // close pic
  const compButton = document.createElement("button");
  compButton.innerHTML = '<i class="gopal far fa-window-close"></i>';
  compButton.classList.add("complete-btn");
  li.append(compButton);

  // arrow up pic
  const arrowButton = document.createElement("button");
  arrowButton.innerHTML = '<i class="gopal1 fas fa-long-arrow-alt-up"></i>';
  arrowButton.classList.add("complete-btn");
  li.append(arrowButton);

  // arrow down pic
  const arrowUpButton = document.createElement("button");
  arrowUpButton.innerHTML = '<i class="gopal2 fas fa-long-arrow-alt-down"></i>';
  arrowUpButton.classList.add("complete-btn");
  li.append(arrowUpButton);
  ul.append(li);
  obj.push(li);
  inp.value = "";

  compButton.addEventListener("click", function () {
    li.remove();
  });
  arrowButton.addEventListener("click", function () {
    console.log(li.innerText);
    const index = arr.findIndex((i) => i === li.innerText);
    if (index > 0) {
      let temp = li.innerHTML;
      li.innerHTML = obj[index - 1].innerHTML;
      obj[index - 1].innerHTML = temp;

      console.log(arr);
      // Destructuring------------->
      [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
      [obj[index - 1], obj[index]] = [obj[index], obj[index - 1]];

      console.log(arr);
    }
  });

  arrowUpButton.addEventListener("click", function () {
    console.log(li.innerText);
    const index = arr.findIndex((i) => i === li.innerText);
    if (index >= 0) {
      let temp = li.innerHTML;
      //   console.log(obj[index + 1].innerHTML);
      //   console.log(temp);
      li.innerHTML = obj[index + 1].innerHTML;
      obj[index + 1].innerHTML = temp;

      console.log(arr);
      [arr[index + 1], arr[index]] = [arr[index], arr[index + 1]];
      [obj[index + 1], obj[index]] = [obj[index], obj[index + 1]];

      console.log(arr);
    }
  });
});
