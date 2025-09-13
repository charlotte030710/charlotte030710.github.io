document.addEventListener("DOMContentLoaded", function () {
  const titleElement = document.querySelector("#site-title");
  if (!titleElement) return; // 不是首页，直接退出

  const poems = [
    "孤舟蓑笠翁，独钓寒江雪。",
    "长风破浪会有时，直挂云帆济沧海。",
    "人生若只如初见，何事秋风悲画扇。"
  ];

  let poemIndex = 0;
  let charIndex = 0;
  const speed = 120; // 打字速度
  const delay = 2000; // 一句结束后的停顿时间

  titleElement.textContent = "";

  function typeWriter() {
    if (charIndex < poems[poemIndex].length) {
      titleElement.textContent += poems[poemIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(() => {
        titleElement.textContent = "";
        charIndex = 0;
        poemIndex = (poemIndex + 1) % poems.length;
        typeWriter();
      }, delay);
    }
  }

  typeWriter();
});
