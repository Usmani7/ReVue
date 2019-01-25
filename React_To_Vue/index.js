var fs = require("fs"),
  path = require("path");
const babelParser = require("@babel/parser");
fs.readdir("React", (err, files) => {
  files.forEach(file => {
    var filePath = path.join(__dirname, "React/" + file);

    fs.readFile(filePath, { encoding: "utf-8" }, function(err, data) {
      if (!err) {
        const ast = babelParser.parse(data.toString("utf8"), {
          sourceType: "module",
          plugins: ["jsx"]
        });
        fs.writeFile(
          "./Vue/" + file.split(".")[0] + ".vue",
          astoperation(JSON.stringify(ast)),
          function(err) {
            if (err) {
              return console.log(err);
            }
          }
        );
      } else {
        console.log(err);
      }
    });
  });
});

const astoperation = ast => {
  var obj = JSON.parse(ast)
  var myvue;
  //<template
  myvue = "<template>" + "\n";
  //<div>
  myvue = myvue + '    ' + '<' + obj['program']['body'][0]['body']['body'][0]['body']['body'][0]['argument']['openingElement']['name']['name'] + '>' + '\n';
  for(var i = 1; i<obj['program']['body'][0]['body']['body'][0]['body']['body'][0]['argument']['children'].length; i=i+2){
  //<p>
  myvue = myvue + '        ' + '<' + obj['program']['body'][0]['body']['body'][0]['body']['body'][0]['argument']['children'][i]['openingElement']['name']['name'] + '>' ;
  //Hello, from react component
  myvue = myvue + obj['program']['body'][0]['body']['body'][0]['body']['body'][0]['argument']['children'][i]['children'][0]['value'];
  //</p>
  myvue = myvue + '</' + obj['program']['body'][0]['body']['body'][0]['body']['body'][0]['argument']['children'][i]['closingElement']['name']['name'] + '>' + '\n';
}
  //<div>
  myvue = myvue + '    ' + '</' + obj['program']['body'][0]['body']['body'][0]['body']['body'][0]['argument']['closingElement']['name']['name'] + '>' + '\n';
  //</template>
  myvue = myvue + "</template>";
  console.log(myvue);
  return myvue;
};
