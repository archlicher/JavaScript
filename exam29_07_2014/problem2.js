function solve(args){
    var field = [args.length];
    for (var i=0;i<args.length;i++){
        field[i]=[];
        for (var j =0;j<args[i].length;j++){
            field[i][j]=args[i].charAt(j).toLowerCase();
        }
    }
    var result = {'I':0,'L':0,'J':0,'O':0,'Z':0,'S':0,'T':0};
    for (var tr in result){
        result[tr]=countTremino(tr);
    }
    function countTremino(str){
        var counter=0;
        for (var row =0;row<field.length;row++) {
            for (var col =0;col<field[row].length;col++) {
                switch (str) {
                    case 'I':
                        if(row<field.length-3){
                            if(field[row][col]==='o' && field[row+1][col]==='o'&& field[row+2][col]==='o'&& field[row+3][col]==='o') counter++;
                        }
                        break;
                    case 'L':
                        if(row<field.length-2 && col<field[row].length-1){
                            if(field[row][col]==='o' && field[row+1][col]==='o'&& field[row+2][col]==='o'&& field[row+2][col+1]==='o') counter++;
                        }
                        break;
                    case 'J':
                        if(row<field.length-2 && col>0){
                            if(field[row][col]==='o' && field[row+1][col]==='o'&& field[row+2][col]==='o'&& field[row+2][col-1]==='o') counter++;
                        }
                        break;
                    case 'O':
                        if(row<field.length-1 && col<field[row].length-1){
                            if(field[row][col]==='o' && field[row+1][col+1]==='o'&& field[row+1][col]==='o'&& field[row][col+1]==='o') counter++;
                        }
                        break;
                    case 'Z':
                        if(row<field.length-1 && col<field[row].length-1 && col>0){
                            if(field[row][col-1]==='o' && field[row+1][col+1]==='o'&& field[row+1][col]==='o'&& field[row][col]==='o') counter++;
                        }
                        break;
                    case 'S':
                        if(row<field.length-1 && col<field[row].length-1 && col>0){
                            if(field[row+1][col-1]==='o' && field[row+1][col]==='o'&& field[row][col]==='o'&& field[row][col+1]==='o') counter++;
                        }
                        break;
                    case 'T':
                        if(row<field.length-1 && col<field[row].length-1 && col>0){
                            if(field[row][col-1]==='o' && field[row][col+1]==='o'&& field[row+1][col]==='o'&& field[row][col]==='o') counter++;
                        }
                        break;
                }
            }
        }
        return counter;
    }
    var output='{';
    for (var re in result) {
        output+='\"'+re+'\":'+result[re];
        if(re!='T') output+=',';
    }
    output+='}';
    console.log(output);
}