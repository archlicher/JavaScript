function solve(args){
    var bladeLength = args.map(Number);
    for (var i in bladeLength){
        bladeLength[i]=Math.floor(bladeLength[i]);
    }
    var index = 0;
    var blades = [];
    var typeOfBlade = [];
    var applications = [];
    for(var i in bladeLength){
        if(bladeLength[i]>10){
            var length = bladeLength[i]%10;
            if(length>7) length-=5;
            switch (length){
                case 1:
                    blades[index]=bladeLength[i];
                    typeOfBlade[index]='blade';
                    if (bladeLength[i]>40) applications[index]='sword';
                    else applications[index]='dagger';
                    break;
                case 2:
                    blades[index]=bladeLength[i];
                    typeOfBlade[index]='quite a blade';
                    if (bladeLength[i]>40) applications[index]='sword';
                    else applications[index]='dagger';
                    break;
                case 3:
                    blades[index]=bladeLength[i];
                    typeOfBlade[index]='pants-scraper';
                    if (bladeLength[i]>40) applications[index]='sword';
                    else applications[index]='dagger';
                    break;
                case 4:
                    blades[index]=bladeLength[i];
                    typeOfBlade[index]='frog-butcher';
                    if (bladeLength[i]>40) applications[index]='sword';
                    else applications[index]='dagger';
                    break;
                case 5:
                    blades[index]=bladeLength[i];
                    typeOfBlade[index]='*rap-poker';
                    if (bladeLength[i]>40) applications[index]='sword';
                    else applications[index]='dagger';
                    break;
                case 6:
                    blades[index]=bladeLength[i];
                    typeOfBlade[index]='blade';
                    if (bladeLength[i]>40) applications[index]='sword';
                    else applications[index]='dagger';
                    break;
                case 7:
                    blades[index]=bladeLength[i];
                    typeOfBlade[index]='quite a blade';
                    if (bladeLength[i]>40) applications[index]='sword';
                    else applications[index]='dagger';
                    break;
                case 0:
                    blades[index]=bladeLength[i];
                    typeOfBlade[index]='*rap-poker';
                    if (bladeLength[i]>40) applications[index]='sword';
                    else applications[index]='dagger';
                    break;
            }
            index++;
        }
    }
    console.log('<table border="1">');
    console.log('<thead>');
    console.log('<tr><th colspan="3">Blades</th></tr>');
    console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>');
    console.log('</thead>');
    console.log('<tbody>');
    for (var i=0;i<index;i++){
        var output = '<tr><td>'+blades[i]+'</td><td>'+applications[i]+'</td><td>'+typeOfBlade[i]+'</td></tr>'
        console.log(output);
    }
    console.log('</tbody>');
    console.log('</table>');
}