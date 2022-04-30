

var dayTrade =
`[
 {"user": "Rob", "company": "Google", "countOfStocks": 5},
 {"user": "Bill", "company": "Goldman", "countOfStocks": 18},
 {"user": "Rob", "company": "JPMorgan", "countOfStocks": 10},
 {"user": "Dave", "company": "Boeing", "countOfStocks": 10}
]`;

function getPageData(json_str, page_size, page_number) {
    
    let data = JSON.parse(json_str);
    let info = {};

    for (i = 0; i < data.length; i++) {
        if (!(data[i]['user'] in info)) {
            info[data[i]['user']] = 0;
        }
        info[data[i]['user']] += data[i]['countOfStocks']
    }

    let sort_arr = [];
    for (var stks in info) {
        sort_arr.push([stks, info[stks]]);
    }

    sort_arr.sort(function(a, b) {
        return a[1] - b[1];
    });
    sort_arr.reverse();

    let result = {}
    console.log(typeof JSON.stringify(sort_arr[0]));
}

getPageData(dayTrade, 4,5)
