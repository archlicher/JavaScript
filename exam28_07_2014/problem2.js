function solve(args){
    var cntRot = Number(args[0].replace(/[^\d]/g,''))/90;
    var maxRow = -1;
    var matrix = [];
    var result;
    for (var word = 1; word<args.length;word++){
        maxRow = Math.max(maxRow,args[word].length);
        matrix.push(args[word].split(''))
    }
    for (var ch in matrix){
        while (matrix[ch].length<maxRow) matrix[ch].push(' ');
    }
    for(var rotate = 0;rotate<cntRot;rotate++){
        matrix = rotations(matrix);
    }
    for (var res in matrix){
        console.log(matrix[res].join(''));
    }
    function rotations (matrix){
        var row = matrix.length-1;
        var col = matrix[0].length-1;
        result = new Array(col);
        for (var c=0;c<=col;c++) {
            result[c]=new Array(row);
            for (var r = 0; r <=row; r++) {
                result[c][row-r]=matrix[r][c];
            }
        }
        return result;
    }
}