window.ChatWidget = {
  init: function (config) {

    const button = document.createElement("button");

    button.innerHTML = "💬";

    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.width = "60px";
    button.style.height = "60px";
    button.style.borderRadius = "50%";
    button.style.cursor = "pointer";
    button.style.zIndex = "9999";

    document.body.appendChild(button);

    const iframe = document.createElement("iframe");

    iframe.src = "https://ai-website-chat-agent.vercel.app";

    iframe.style.position = "fixed";
    iframe.style.bottom = "90px";
    iframe.style.right = "20px";
    iframe.style.width = "400px";
    iframe.style.height = "600px";
    iframe.style.border = "none";
    iframe.style.display = "none";
    iframe.style.zIndex = "9999";

    document.body.appendChild(iframe);

    button.onclick = () => {
      iframe.style.display =
        iframe.style.display === "none"
          ? "block"
          : "none";
    };
  }
};