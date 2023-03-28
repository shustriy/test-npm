SVG.on(document, 'DOMContentLoaded', function() {
    const draw = SVG()
        .addTo('body')
        .size(300, 300);

    const rect = draw
        .rect(100, 100)
        .attr({ fill: '#f06' });
  })