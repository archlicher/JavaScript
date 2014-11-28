function solve(args){
    var result={};
    var counter ={};
    for (var str in args){
        var row = args[str].split('|');
        var student = row[0].trim();
        var lang = row[1].trim();
        var gradeStr = row[2].trim();
        var grade=Number(gradeStr);
        var visitStr = row[3].trim();
        var visit = Number(visitStr);
        if(!counter[lang]) counter[lang]=[];
        counter[lang].push(visitStr);
        if(!result[lang]) result[lang]={'avgGrade':0,'avgVisits':0,'students':[]};
        result[lang].avgGrade+=grade;
        result[lang].avgVisits+=visit;
        if(result[lang].students.indexOf(student)==-1) result[lang].students.push(student);
    }
    for(var l in result){
        var divider = counter[l].length;
        result[l].avgGrade/=divider;
        result[l].avgGrade = result[l].avgGrade.toFixed(2);
        result[l].avgGrade = Number(result[l].avgGrade).toString();
        result[l].avgGrade = Number(result[l].avgGrade);
        result[l].avgVisits/=divider;
        result[l].avgVisits = result[l].avgVisits.toFixed(2);
        result[l].avgVisits = Number(result[l].avgVisits).toString();
        result[l].avgVisits = Number(result[l].avgVisits);
        result[l].students.sort();
    }
    result = sortObject(result);
    function sortObject(obj){
        var sortKey = Object.keys(obj).sort();
        var sortObj = {};
        for(var key in sortKey){
            sortObj[sortKey[key]]=obj[sortKey[key]];
        }
        return sortObj;
    }
    console.log(JSON.stringify(result));
}