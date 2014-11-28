function solve(args){
    var output = {};
    for (var row in args){
        var matches = args[row].split(':');
        var teams = matches[0].split('/');
        var scores = matches[1].split('-');
        var teamHome = teams[0].trim();
        var teamAway = teams[1].trim();
        var gScored = Number(scores[0].trim());
        var gConceded = Number(scores[1].trim());
        if(!output[teamHome]) output[teamHome] = {'goalsScored':0,'goalsConceded':0,'matchesPlayedWith':[]};
        if(output[teamHome].matchesPlayedWith.indexOf(teamAway)<0) output[teamHome].matchesPlayedWith.push(teamAway);
        if(!output[teamAway]) output[teamAway] = {'goalsScored':0,'goalsConceded':0,'matchesPlayedWith':[]};
        if(output[teamAway].matchesPlayedWith.indexOf(teamHome)<0) output[teamAway].matchesPlayedWith.push(teamHome);
        output[teamHome].goalsScored += gScored;
        output[teamHome].goalsConceded += gConceded;
        output[teamAway].goalsScored += gConceded;
        output[teamAway].goalsConceded += gScored;
    }
    for (var team in output){
        output[team].matchesPlayedWith.sort();
    }
    output = sortOutput(output);
    function sortOutput(obj){
        var result = {};
        var sorted = Object.keys(obj).sort();
        for (var sor in sorted){
            result[sorted[sor]] = obj[sorted[sor]];
        }
        return result;
    }
    console.log(JSON.stringify(output));
}