(() => {
  // If there's no element with data-za="product-price", we skip
  const headerEL = document.querySelector("[data-za='product-name']");
  const priceEL = document.querySelector("[data-za='product-price']");
  const brandEl = document.querySelector("[data-za='product-brand-name']");
  const mfrNumberEL = document.querySelector("[data-za='PDPMfrNo']");
  const unitTextEl = document.querySelector("[data-za='FuAZI6']");

  let headerText = headerEL ? headerEL.innerText.trim() : null;
  let priceText = priceEL ? priceEL.innerText.trim() : null;
  let brandText = brandEl ? brandEl.innerText.trim() : null;
  let mfrNumberText = mfrNumberEL ? mfrNumberEL.innerText.trim() : null;
  let unitText = unitTextEl ? unitTextEl.innerText.trim() : null;

  if (priceText) {
    chrome.runtime.sendMessage({
      type: 'DATA_COLLECTED',
      data: {
        url: window.location.href,
        title: document.title,
        priceText,
        headerText,
        brandText,
        mfrNumberText,
        unitText
      }
    });
  }
})();
