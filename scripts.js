
  const myName = document.getElementById("my-name");
  const btn = document.getElementById("my-btn");

  function makeTextSizer(size) {
    return function changeSize() {
      myName.style.fontSize = `${size}px`;
    };
  }

  const size12 = makeTextSizer(12);
  const size50 = makeTextSizer(50);
  const size40 = makeTextSizer(40);
  const size65 = makeTextSizer(65);
  const size70 = makeTextSizer(70);

  btn.addEventListener("click", size70);

