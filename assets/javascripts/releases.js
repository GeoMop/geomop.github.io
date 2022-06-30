(function(window) {
  window.geomop = {};

  window.geomop.defaultVersion  = "2.0.0";
  window.geomop.packageRoot     = 'http://geomop.nti.tul.cz/packages';
  window.geomop.releaseList     = [
      {
        version:  "2.0.0",
        display:  "release 2.0.0",
        links:    ['download', 'features', 'changes', 'manual', 'readme'],
        documentation_relative: "html/index.html"
        // link to documentation file (PDF or HTML) relative to geomop.nti.tul.cz/packages/{version}/
      },
      {
        version:  "1.1.0",
        display:  "release 1.1.0",
        links:    ['download', 'features', 'changes', 'manual', 'readme'],
        documentation_relative: "Geomop 1.0.1 reference guide.pdf"
      },
      {
        version:  "1.0.0",
        display:  "release 1.0.0",
        links:    ['download', 'features', 'changes', 'manual', 'readme'],
        documentation_relative: "Geomop 1.0.0 reference guide.pdf"
      },
  ];
})(window);
