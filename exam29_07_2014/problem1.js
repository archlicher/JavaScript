function solve(args){
    var prices = args.map(Number);
    var output = '<table>';
    console.log(output);
    output = '<tr><th>Price</th><th>Trend</th></tr>';
    console.log(output);
    var price = prices[0];
    var pricePrv = price.toFixed(2);
    output = '<tr><td>'+pricePrv+'</td><td><img src="fixed.png"/></td></td>';
    console.log(output);
    for(var i=1;i<prices.length;i++) {
        var p = prices[i];
        price = p.toFixed(2);
        p = prices[i-1];
        pricePrv = p.toFixed(2);
        if(price*100==pricePrv*100) output = '<tr><td>'+price+'</td><td><img src="fixed.png"/></td></td>';
        if(price*100>pricePrv*100) output = '<tr><td>'+price+'</td><td><img src="up.png"/></td></td>';
        if(price*100<pricePrv*100) output = '<tr><td>'+price+'</td><td><img src="down.png"/></td></td>';
        console.log(output);
    }
    console.log('</table>')
}