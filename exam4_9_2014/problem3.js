function solve(args){
    var starOne = [];
    var str = args[0].split(' ');
    starOne.push(str[0].toLowerCase());
    var x = Number(str[1]);
    starOne.push(x);
    var y = Number(str[2]);
    starOne.push(y);
    var starTwo = [];
    str = args[1].split(' ');
    starTwo.push(str[0].toLowerCase());
    x = Number(str[1]);
    starTwo.push(x);
    y = Number(str[2]);
    starTwo.push(y);
    var starThree = [];
    str = args[2].split(' ');
    starThree.push(str[0].toLowerCase());
    x = Number(str[1]);
    starThree.push(x);
    y = Number(str[2]);
    starThree.push(y);
    var normandy = [];
    str =args[3].split(' ');
    x = Number(str[0]);
    normandy.push(x);
    y = Number(str[1]);
    normandy.push(y);
    var n = args[4];
    for(var i=0;i<=n;i++){
        if(normandy[0]<= starOne[1]+1 && normandy[0]>= starOne[1]-1 && normandy[1]<= starOne[2]+1 && normandy[1]>= starOne[2]-1) console.log(starOne[0]);
        else if(normandy[0]<= starTwo[1]+1 && normandy[0]>= starTwo[1]-1 && normandy[1]<= starTwo[2]+1 && normandy[1]>= starTwo[2]-1) console.log(starTwo[0]);
        else if(normandy[0]<= starThree[1]+1 && normandy[0]>= starThree[1]-1 && normandy[1]<= starThree[2]+1 && normandy[1]>= starThree[2]-1) console.log(starThree[0]);
        else console.log('space');
        normandy[1]++;
    }
}