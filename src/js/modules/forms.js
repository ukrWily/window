const forms = () => {
  const form = document.querySelectorAll("form"),
    input = document.querySelectorAll("input");

  const message = {
    loading: "Loading...",
    success: "Thanks. We will call you.",
    failure: "Something going wrong. :(",
  };

  const postData = async (url, data) => {
    document.querySelector("status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault;

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);

      const formData = new FormData(item);

      postData("assets/server.php", formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => (statusMessage.textContent = message.failure));
    });
  });
};

export default forms;
