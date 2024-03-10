// <{<{<{<{<{<{<{<{<{<{<{<    Tabs    >}>}>}>}>}>}>}>}>}>}>}>
const tabs = (headerSElector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSElector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = "none";
    });
  }

  function showTabContent() {}
};

export default tabs;
