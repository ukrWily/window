const modals = () => {
  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]");

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((item) => {
          //todo```````close opened windows
          item.style.display = "none";
        });

        modal.style.display = "block";
        document.body.style.overflow = "hidden"; //todo  блокуємо вікно від скрола під модалкой
        // document.body.classList.add("modal-open"); //todo  Бутстрап!!!!
      });
    });

    close.addEventListener("click", () => {
      windows.forEach((item) => {
        //todo```````close opened windows
        item.style.display = "none";
      });

      modal.style.display = "none";
      document.body.style.overflow = "";
      // document.body.classList.remove("modal-open"); //todo  Бутстрап!!!!
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach((item) => {
          //todo```````close opened windows
          item.style.display = "none";
        });

        modal.style.display = "none";
        document.body.style.overflow = "";
        // document.body.classList.remove("modal-open"); //todo  Бутстрап!!!!
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(function () {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );

  showModalByTime(".popup", 60000);
};

export default modals;
// popup_calc_btn
