function clockShows() {
  const time = document.querySelector(".time");

  const newTime = new Date();

  const clockHours = String(newTime.getHours()).padStart(2, "0");
  const clockminutes = String(newTime.getMinutes()).padStart(2, "0");
  const clockSeconds = String(newTime.getSeconds()).padStart(2, "0");

  const clock = clockHours + ":" + clockminutes + ":" + clockSeconds;

  time.innerHTML = clock;
}

clockShows();
setInterval(clockShows, 1000);

function dateShows() {
  const date = document.querySelector(".date");

  const dateSelect = new Date();

  const dateYear = dateSelect.getFullYear();
  const dateMonth = String(dateSelect.getMonth()).padStart(2, "0");
  const dateDay = String(dateSelect.getDate()).padStart(2, "0");

  const dateText = dateYear + "-" + dateMonth + "-" + dateDay;

  date.innerText = dateText;
}

dateShows();
setInterval(dateShows, 60000);

// f768a2ad5d4b271b6e705c978d08a3b0 날씨 api 키

function memoAdd() {
  const memo = document.querySelector(".memo");
  const memoInput = document.querySelector(".memoInput");
  const memoButton = document.querySelector(".memoButton");

  let savedMemo = localStorage.getItem("memos");
  var memoArray;

  if (!savedMemo) {
    memoArray = [memoInput.value];
  } else {
    memoArray = JSON.parse(savedMemo);
    memoArray.push(memoInput.value);
  }

  localStorage.setItem("memos", JSON.stringify(memoArray));

  memo.innerText = memoArray.join(",");
}

memoAdd();

function memoSub() {
  const memoDelete = document.querySelector(".memoDelete");
  const memoDeleteNum = document.querySelector(".memoDeleteNum");

  if (!memoArray) {
    return;
  } else {
    delete memoArray[memoDeleteNum.value];
  }
}

memoSub();
