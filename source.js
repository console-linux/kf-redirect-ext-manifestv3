// Run when DOM is fully loaded
function fixCodeforcesUrls() {
  console.log("Codeforces redirector: Fixing URLs in page");

  // Function to update URL attributes
  function updateAttribute(element, attributeName) {
    if (element && element.getAttribute(attributeName)) {
      const originalValue = element.getAttribute(attributeName);
      let newValue = originalValue;

      // Replace codeforces.org URLs
      if (originalValue.includes("//codeforces.org")) {
        newValue = newValue.replace(
          "//codeforces.org",
          "//codeforces.com/codeforces.org",
        );
      }

      // Replace userpic.codeforces.org URLs
      if (originalValue.includes("//userpic.codeforces.org")) {
        newValue = newValue.replace(
          "//userpic.codeforces.org",
          "//codeforces.com/userpic.codeforces.org",
        );
      }

      if (newValue !== originalValue) {
        element.setAttribute(attributeName, newValue);
        console.log("Updated URL:", originalValue, "->", newValue);
      }
    }
  }

  // Update all script tags
  const scripts = document.getElementsByTagName("script");
  for (let i = 0; i < scripts.length; i++) {
    updateAttribute(scripts[i], "src");
  }

  // Update all image tags
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    updateAttribute(images[i], "src");
    updateAttribute(images[i], "srcset");
  }

  // Update all link tags (for CSS)
  const links = document.getElementsByTagName("link");
  for (let i = 0; i < links.length; i++) {
    updateAttribute(links[i], "href");
  }

  // Update all style tags and inline styles
  const elementsWithStyle = document.querySelectorAll("[style]");
  for (let i = 0; i < elementsWithStyle.length; i++) {
    const element = elementsWithStyle[i];
    const style = element.getAttribute("style");
    if (
      style &&
      (style.includes("codeforces.org") ||
        style.includes("userpic.codeforces.org"))
    ) {
      let newStyle = style
        .replace(/codeforces\.org/g, "codeforces.com/codeforces.org")
        .replace(
          /userpic\.codeforces\.org/g,
          "codeforces.com/userpic.codeforces.org",
        );
      element.setAttribute("style", newStyle);
    }
  }

  // Monitor for dynamically added elements
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType === 1) {
          // Element node
          if (node.tagName === "SCRIPT") {
            updateAttribute(node, "src");
          } else if (node.tagName === "IMG") {
            updateAttribute(node, "src");
            updateAttribute(node, "srcset");
          } else if (node.tagName === "LINK") {
            updateAttribute(node, "href");
          }
        }
      });
    });
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
}

// Run the function when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", fixCodeforcesUrls);
} else {
  fixCodeforcesUrls();
}
