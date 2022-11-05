(function() {
  /**
    * Move the vivaldi button to the beginning of the toolbar
    * #app > #browser > #header > #titlebar > button.vivaldi
    * #app > #browser > #main > .UrlBar > .toolbar
    * #app > #browser > #main > .mainbar > .toolbar (220618)
    */

  const app = document.getElementById('app');

  // Create observer
  const observer = new MutationObserver(observerCallback);

  // Start
  observer.observe(app, {childList: true});

  // For debug
  let observerCount = 0;

  // Callback function
  function observerCallback(records) {
    // For debug
    observerCount++;
    console.log('observer:%s start', observerCount);
    console.log('observer:%s records.length:%s', observerCount, records.length);

    const vivaldiButton = document.querySelector('#titlebar button.vivaldi');
    const toolbar = document.querySelector('#main .mainbar .toolbar');
    // const toolbar = document.querySelector('#main .UrlBar .toolbar');

    if (vivaldiButton != null && toolbar != null) {
      // Create a buttonToolbar
      const buttonToolbar = document.createElement('div');
      buttonToolbar.className = 'button-toolbar';

      // Edit the vivaldi button and append it to the buttonToolbar
      vivaldiButton.style.height = '34px';
      vivaldiButton.classList.add('ToolbarButton-Button');
      vivaldiButton.classList.remove('vivaldi');
      buttonToolbar.appendChild(vivaldiButton);

      // Prepend the buttonToolbar to the toolbar
      toolbar.prepend(buttonToolbar);

      // End processing
      observer.disconnect();

      // For debug
      console.log('observer:%s disconnect', observerCount);
    }

    // For debug
    console.log('observer:%s end', observerCount);
  }

})();
