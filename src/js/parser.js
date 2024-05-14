// window.addEventListener("DOMContentLoaded", () => {
//   const body = document.querySelector("body");
//   body.childNodes.forEach((node) => {
//     console.log(node);
//   });
// });

const parser = () => {
  const body = document.querySelector("body");
  let textNodes = [];

  function recursion(element) {
    element.childNodes.forEach((node) => {
      /**
       * фільтруємо - ^ -на початку повинна бути буква - H, потім цифра- \d
       */
      if (node.nodeName.match(/^H\d/)) {
        const obj = {
          header: node.nodeName,
          body: node.textContent,
        };
        // only textContent
        // textNodes.push(node.textContent);

        // object for sending
        textNodes.push(obj);
        /**
         * якщо блок не пустий, рекурсивно перебираємо їх
         */
      } else {
        recursion(node);
      }
      //<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>
      // /**
      //  * пропускаємо усі пусті текстові блоки
      //  */
      // if (node.nodeName === "#text") {
      //   return;
      //   /**
      //    * якщо блок не пустий, рекурсивно перебираємо їх
      //    */
      // } else {
      //   console.log(node);
      //   recursion(node);
      // }
      //<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<{<>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>}>
      // /**
      //  * проходимось по всіх елементах
      //  */
      // if (element.childNodes.length > 1) {
      //   recursion(node);
      // }
    });
  }

  recursion(body);
  // console.log(textNodes);

  /**
   * send to server
   */
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(textNodes),
  })
    .then((response) => response.json())
    .then((response) => console.log(response));
};

export default parser;
