function solve(arr){
    var output;
    output = '<ul>';
    console.log(output);
    var rakiyaNums = [];
    for (var num=arr[0];num<=arr[1];num++) {
        if (num < 1000) {
            rakiyaNums[num] = false;
        }
        else {
            var str = Number(num).toString().split('');
            for (var i = 0; i < str.length - 2; i++) {
                for (var j = i + 2; j < str.length; j++) {
                    var digitOne = ''+str[i]+''+ str[i + 1];
                    var digitTwo = ''+str[j] +''+str[j + 1];
                    if (digitOne === digitTwo) {
                        rakiyaNums[num] = true;
                        break;
                    }
                }
                if(rakiyaNums[num])continue;
            }
        }
        output = '<li><span class=';
        if (rakiyaNums[num]){
            output+='\'rakiya\'>'+num+'</span><a href=\"view.php?id='+num+'>View</a></li>'
        }
        else {
            output+='\'num\'>'+num+'</span></li>';
        }
        console.log(output);
    }
    console.log('</ul>');
}