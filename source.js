if (document.title.indexOf("Codeforces") !== -1) {
  // Function to update URL attributes
  function updateAttributes(elements, attributeName) {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i] && elements[i].attributes) {
        const attr = elements[i].attributes[attributeName];
        if (attr && attr.value) {
          attr.value = attr.value
            .replace("//codeforces.org", "//codeforces.com/codeforces.org")
            .replace(
              "//userpic.codeforces.org",
              "//codeforces.com/userpic.codeforces.org",
            );
        }
      }
    }
  }

  // Update script sources
  const scripts = document.getElementsByTagName("script");
  updateAttributes(scripts, "src");

  // Update image sources
  const images = document.getElementsByTagName("img");
  updateAttributes(images, "src");

  // Update link hrefs
  const links = document.getElementsByTagName("link");
  updateAttributes(links, "href");

  // Also handle other elements that might have URLs in style attributes
  const allElements = document.querySelectorAll("*");
  for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i];
    if (element.style && element.style.backgroundImage) {
      element.style.backgroundImage = element.style.backgroundImage
        .replace("//codeforces.org", "//codeforces.com/codeforces.org")
        .replace(
          "//userpic.codeforces.org",
          "//codeforces.com/userpic.codeforces.org",
        );
    }
  }
}
