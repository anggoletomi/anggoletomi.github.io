var viz;

function initializeViz() {
  // JS object that points at empty div in the html
  var placeholderDiv = document.getElementById("tableauViz");
  // URL of the viz to be embedded
  var url = "https://public.tableau.com/views/IndonesiaCOVID-19/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link";
  // An object that contains options specifying how to embed the viz
  var options = {
    // width: 400,
    // height: "auto",
    // device:"desktop",
    hideTabs: true,
    hideToolbar: true,
  };
  viz = new tableau.Viz(placeholderDiv, url, options);
}

function exportToPDF() {
      viz.showExportPDFDialog();
}
