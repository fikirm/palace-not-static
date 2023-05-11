document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.section');
    window.addEventListener('scroll', function() {
      var scrollPosition = window.pageYOffset;
      sections.forEach(function(section, index) {
        var sectionOffset = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionOffset - sectionHeight * 0.5 && scrollPosition < sectionOffset + sectionHeight) {
          section.style.backgroundPositionY = (scrollPosition - sectionOffset) * 0.7 + 'px';
        }
      });
    });
  });
  