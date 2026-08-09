// 移动端导航：汉堡菜单开合 + 点击链接/页面其他区域自动收起
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  function setOpen(open) {
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    setOpen(!links.classList.contains("open"));
  });

  links.addEventListener("click", function (e) {
    if (e.target && e.target.tagName === "A") setOpen(false);
  });

  document.addEventListener("click", function (e) {
    if (!links.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });
})();
