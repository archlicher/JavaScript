function solve(input) {
    var html = input.join('\n');
    var patt = /<a\s+([^>]+\s+)?href\s*=\s*('([^']*)'|"([^"]*)|([^\s>]+))[^>]*>/g;
    var match;
    while (match = patt.exec(html)) {
        for(var i = 3;i<6;i++){
            if(match[i]!=undefined){
                console.log(match[i]);
                break;
            }
        }
    }
}