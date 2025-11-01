// Register redirect rules using declarativeNetRequest API
chrome.runtime.onInstalled.addListener(() => {
  const rules = [
    {
      id: 1,
      priority: 1,
      action: {
        type: "redirect",
        redirect: {
          transform: {
            host: "codeforces.com",
            path: "/codeforces.org/*",
          },
        },
      },
      condition: {
        urlFilter: "||codeforces.org",
        resourceTypes: ["stylesheet", "script", "image"],
      },
    },
    {
      id: 2,
      priority: 1,
      action: {
        type: "redirect",
        redirect: {
          transform: {
            host: "codeforces.com",
            path: "/userpic.codeforces.org/*",
          },
        },
      },
      condition: {
        urlFilter: "||userpic.codeforces.org",
        resourceTypes: ["stylesheet", "script", "image"],
      },
    },
  ];

  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: rules,
    removeRuleIds: rules.map((rule) => rule.id),
  });
});
