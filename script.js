
function toggleContent(contentId) {
    var contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(function(section) {
        if (section.id === contentId) {
            section.classList.remove('hidden'); // Show the clicked content section
        } else {
            section.classList.add('hidden'); // Hide other content sections
        }
    });
}
