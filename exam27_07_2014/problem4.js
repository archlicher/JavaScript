function solve(input){
    var output = {};
    var city, building, band, event;
    for (var str in input){
        event = input[str].split('|');
        city = event[1].trim();
        building = event[3].trim();
        band = event[0].trim();
        if(!output[city]){
            output[city]= [];
        }
        if(!output[city][building]){
            output[city][building] = [];
        }
        if(output[city][building].indexOf(band)==-1){
            output[city][building].push(band);
        }
    }
    output = sortKeys(output);
    for (var i in output){
        output[i] =  sortKeys(output[i]);
        for (var j in output[i]){
            output[i][j].sort();
        }
    }
    function sortKeys (obj){
        var keySorted = Object.keys(obj).sort();
        var sortedObj = {};
        for (var k in keySorted){
            var key = keySorted[k];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }

    console.log(JSON.stringify(output));
}