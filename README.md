# Anti-Addictive [YouTube](https://youtube.com/)
Do you hate it when your addiction to [YouTube](https://youtube.com/) is **sooooooo** big that you have to download an extension to combat it?

Meet "Anti-Addictive [YouTube](https://youtube.com/)", a simple extension that doesn't let [YouTube](https://youtube.com/) load more videos when you reach the bottom of their Homepage
# Some questions you may have:

## Where can I get it?
[This is the link to the Firefox Addon. Note that Mozilla doesn't know this addon exists yet, so make sure to give a review if you can!](https://addons.mozilla.org/en-US/firefox/addon/anti-addictive-youtube/)

## Why is this extension so tiny?
As I said previously, this is:
> A simple extension that doesn't let [YouTube](https://youtube.com/) load more videos when you reach the bottom of their Homepage

## How do I set it up?
You just install it and that's it!
This extension is so simple, this is the entire code without the extension stuff (You can run it on the console and it'll do the same thing!):

```javascript
const Youtube = new MutationObserver(() => {
	if (location.pathname != "/") return;
	const nodes = document.querySelectorAll("ytd-continuation-item-renderer");
	if (nodes.length <= 0) return;
	nodes.forEach((node) => {
		node.remove();
	})
});
Youtube.observe(document, { subtree: true, childList: true });
```
