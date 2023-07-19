window.onload = function() {
    var content = document.getElementById('content');
    var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var link = 'cryptosynapse.ru';
    var colors = ['#00FF00', '#FF0000', '#0000FF'];
    var speed = 1; // Adjust scrolling speed (in pixels per frame)
    var delay = 30000; // Delay between shifts (in milliseconds)
    var timeout = null;

    function generateRandomText(length) {
        var text = '';
        for (var i = 0; i < length; i++) {
            text += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        return text;
    }

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function shiftContent() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        content.style.width = width + 'px';
        content.style.height = height + 'px';
        content.style.color = getRandomColor();
        content.innerHTML = generateRandomText(width * height / 24);
        var linkPositionX = Math.floor(Math.random() * (width - 300));
        var linkPositionY = Math.floor(Math.random() * (height - 50));
        var linkElement = document.createElement('a');
        linkElement.href = 'http://' + link;
        linkElement.target = '_blank';
        linkElement.style.position = 'absolute';
        linkElement.style.left = linkPositionX + 'px';
        linkElement.style.top = linkPositionY + 'px';
        linkElement.style.color = '#FFFFFF';
        linkElement.innerHTML = link;
        content.appendChild(linkElement);
        content.style.transform = 'translateY(0)';
        var contentHeight = content.clientHeight;
        content.style.transform = 'translateY(-' + contentHeight + 'px)';
        timeout = setTimeout(shiftContent, delay);
    }

    shiftContent();
};
          
