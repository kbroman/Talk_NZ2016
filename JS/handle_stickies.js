// Generated by CoffeeScript 1.8.0
var handle_stickies, stickies_on;

stickies_on = true;

handle_stickies = function() {
  return d3.select("p#remove_stickies").on("click", function() {
    if (stickies_on) {
      stickies_on = false;
      d3.select(this).text("Show stickies").on("mouseover", function() {
        return d3.select(this).style("opacity", 1);
      }).on("mouseout", function() {
        return d3.select(this).style("opacity", 0);
      });
      d3.selectAll("aside").style("opacity", 0).style("pointer-events", "none");
      return d3.selectAll("a").style("border-bottom", "none");
    } else {
      stickies_on = true;
      d3.select(this).text("Remove stickies").on("mouseover", function() {
        return [];
      }).on("mouseout", function() {
        return [];
      });
      d3.selectAll("aside").style("opacity", 1).style("pointer-events", "auto");
      return d3.selectAll("a").style("border-bottom", "").style("border-bottom", "dotted 1px #555;");
    }
  });
};

handle_stickies();
