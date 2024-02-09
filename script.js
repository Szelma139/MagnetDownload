var labels = document.querySelectorAll('label.links');
labels.forEach(function(label) {
    if (label.textContent.includes('1080p')) {
        var link = label.nextElementSibling;
				console.log(link)
        if (link && link.tagName.toLowerCase() === 'a') {
            var url = link.getAttribute('href');
                window.open(url, '_blank');
				 //window.location.href = url;
        }
    }
});
