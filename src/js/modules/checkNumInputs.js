const checkNumInputs = (selector) => {
  const numInputs = document.querySelectorAll(selector);

  numInputs.forEach((item) => {
    //todo---only numbers input check
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, ""); //todo`````if input != num, input == ''
    });
  });
};

export default checkNumInputs;
