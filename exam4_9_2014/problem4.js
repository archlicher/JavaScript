function solve(args){
    var result={};
    for (var i in args){
        var str = args[i].split(' ');
        if(!result[str[1]]) result[str[1]]={'files':[],'memory':0};
        if(result[str[1]].files.indexOf(str[0])==-1) result[str[1]].files.push(str[0]);
        var digits = str[2].substr(0,str[2].length-2);
        var size = Number(digits);
        result[str[1]].memory+=size;
    }
    for (var ext in result){
        result[ext].files.sort();
        size = Number(result[ext].memory).toString();
        var dot = size.indexOf('.');
        if (dot==-1) size+='.00';
        else {
            var zeroes = (size.substr(dot,size.length)).length;
            if(zeroes !=3) {
                dot=1;
                while (dot < zeroes) {
                    size += '0';
                    dot++;
                }
            }
        }
        result[ext].memory = size;
    }
    result = sortObjects(result);
    function sortObjects(obj){
        var sortObjects={};
        var sortedKeys = Object.keys(obj).sort();
        for (var key in sortedKeys){
            sortObjects[sortedKeys[key]] = obj[sortedKeys[key]];
        }
        return sortObjects;
    }
    console.log(JSON.stringify(result));
}