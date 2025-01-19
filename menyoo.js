document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll(".posts article");
    const menu = document.getElementById("article-links");
    const sideMenu = document.getElementById("side-menu");
    const toggleButton = document.createElement("button");

    // Create the toggle button
    toggleButton.id = "menu-toggle";
    toggleButton.textContent = "Navigation Menu";
    document.body.appendChild(toggleButton);

    // Generate links for each article
    articles.forEach((article, index) => {
        const title = article.querySelector("header h2 a")?.innerText || `Article ${index + 1}`;
        const id = `article-${index}`;
        article.setAttribute("id", id);

        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#${id}`;
        a.textContent = title;
        li.appendChild(a);

        // Scale text size if needed to fit the width
        a.style.fontSize = "12px";
        if (a.scrollWidth > a.offsetWidth) {
            a.style.fontSize = "10px"; // Reduce font size for long titles
        }

        menu.appendChild(li);
    });

    // Position menu below the button
    const updateMenuPosition = () => {
        sideMenu.style.top = `${toggleButton.offsetHeight + 20}px`;
    };
    updateMenuPosition();
    window.addEventListener("resize", updateMenuPosition);

    // Toggle menu visibility
    toggleButton.addEventListener("click", () => {
        sideMenu.classList.toggle("collapsed");
    });
});
