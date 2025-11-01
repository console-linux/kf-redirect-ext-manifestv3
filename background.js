// Register redirect rules using declarativeNetRequest API
chrome.runtime.onInstalled.addListener(() => {
  const rules = [
    {
      id: 1,
      priority: 1,
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: "https://codeforces.com/codeforces.org\\1",
        },
      },
      condition: {
        regexFilter: "^https?://codeforces\\.org(.*)",
        resourceTypes: [
          "stylesheet",
          "script",
          "image",
          "font",
          "main_frame",
          "sub_frame",
        ],
      },
    },
    {
      id: 2,
      priority: 1,
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: "https://codeforces.com/userpic.codeforces.org\\1",
        },
      },
      condition: {
        regexFilter: "^https?://userpic\\.codeforces\\.org(.*)",
        resourceTypes: [
          "stylesheet",
          "script",
          "image",
          "font",
          "main_frame",
          "sub_frame",
        ],
      },
    },
  ];

  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: rules,
    removeRuleIds: rules.map((rule) => rule.id),
  });
});
