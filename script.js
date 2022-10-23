function navigatePage() {
        var url = window.location.pathname.split('index.html');
        var namePage = url.pop();
        url += '/gamePages/fishPage.html';
        window.location.href =   url + '?fase=1&ptn=0';
        //window.location.href =   '/gamePages/fishPage.html?fase=1&ptn=0';
}