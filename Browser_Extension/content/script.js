chrome.runtime.onMessage.addListener(msg => {
    if (msg.action === "grayscale-toggle") {
        toggleFilter("grayscale");
    }
    if (msg.action === "invert-toggle") {
        toggleFilter("invert");
    }
    if (msg.action === "sepia-toggle") {
        toggleFilter("sepia")
    }
    if (msg.action === "hue-toggle") {
      toggleFilter("hue")
    }
    if (msg.action === "saturation-toggle") {
      toggleFilter("saturate")
    }
    
});


let styleFilters = {
    invert: {
        status: false,
        css: 'invert(100%)'
    },
    grayscale: {
        status: false,
        css: 'grayscale(100%)'
    },
    sepia: {
        status: false,
        css: 'sepia(100%)'
    },
    hue: {
      status: false,
      css: 'hue-rotate(270deg)'
    },
    saturate: {
      status: false,
      css: 'saturate(200%)'
    }

};

function toggleFilter(filter) {
    if (styleFilters.hasOwnProperty(filter)) {
        styleFilters[filter].status = !styleFilters[filter].status;
    }

    let filters_css = "";
    for (let fl in styleFilters) {
        filters_css += styleFilters[fl].status ? " " + styleFilters[fl].css : "";
    }
    document.body.style.filter = filters_css;
}
