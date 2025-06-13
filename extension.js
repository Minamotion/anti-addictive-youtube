const Youtube = new MutationObserver(() => {
	if (location.pathname != "/") return;
	const nodes = document.querySelectorAll("ytd-continuation-item-renderer.ytd-rich-grid-renderer");
	if (nodes.length <= 0) return;
	nodes.forEach((node) => {
		node.remove();
		console.log("Removed node:", node);
	})
});
Youtube.observe(document, { subtree: true, childList: true });