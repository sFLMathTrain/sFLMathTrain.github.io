var fs = require("fs");
var jade = require("jade");
var func = function(file) {
    fs.writeFileSync(
        file + ".html",
        require("html-minifier").minify(
            jade.renderFile(file + ".jade")
        ),
        "utf8"
    );
}