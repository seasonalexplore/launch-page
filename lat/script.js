document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.querySelector("iframe");
    iframe.onload = () => {
        console.log("Tally form loaded successfully.");
    };
});
