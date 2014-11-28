function solve(args){
    var result = {};
    for(var arg in args) {
        var lines = args[arg].split('&');
        for (var l in lines) {
            var key = lines[l].split('=');
            if (key[0].search(/\?/g) > -1) {
                var questionMark = 1 + key[0].indexOf('?');
                key[0] = key[0].substr(questionMark, key[0].length);
            }
            if (key[0].search(/(\+)|(%20)/g) > -1) {
                key[0] = key[0].replace(/(\+)|(%20)/g, ' ');
                key[0] = key[0].trim();
            }
            if (!result[key[0]]) result[key[0]] = [];
            if (key[1].search(/(\+)|(%20)/g) > -1) {
                key[1] = key[1].replace(/(\+)|(%20)/g, ' ')
            }
            key[1] = key[1].trim();
            while(key[1].search('  ')>0){
                key[1]=key[1].replace('  ',' ');
            }
            result[key[0]].push(key[1]);
        }
        var output ='';
        for(var k in result){
            output+=k+'=[';
            for(var v in result[k]){
                output+=result[k][v];
                if(v<result[k].length-1) output+=', ';
            }
            output+=']';
        }
        console.log(output);
        result = {};
    }
}