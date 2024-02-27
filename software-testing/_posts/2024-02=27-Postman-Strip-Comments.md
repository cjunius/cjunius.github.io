---
layout: post
title: Postman script to remove commented lines from JSON request body
---

Javascript to remove commented lines from a JSON request body. Place in the pre-request script section in Postman.
```
// Strip JSON Comments
if (pm?.request?.body?.options?.raw?.language === 'json') {
    const rawData = pm.request.body.toString();
    const strippedData = rawData.replace(
        /\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g,
        (m, g) => g ? "" : m
    );
    pm.request.body.update(JSON.stringify(JSON.parse(strippedData)));
}
```

Useful when performing fuzz testing for missing fields in a request.