 let dealsSection = document.getElementById("deals");

 //store the request URL.
 let requestURL = "https://sharsha2.github.io/API-Json/dailydeals.json";

 //create a new XHR object
 let request = new XMLHttpRequest();

 //open the request
 request.open('GET', requestURL);

 //setup responce type
 request.responseType = 'json';

 //send the request using send();
 request.send();

 request.onload = function () {
     let dailyDeals = request.response;
     console.log(dailyDeals);
     dealInfo(dailyDeals);
 };

 dealInfo(jsonObj) {
     let dalInfo = jsonObj['dailyDeals'];
     for(let i=0;i< dealInfo.length;i++) {
         let dev = document.createElement('div');
         Div.setAttribute('class', 'col-md-3');
        let description = document.createElement('h3');
        let price = document.createElement('p');
        let image = document.createElement('img');

        image.setAttribute('src', '')
    }
 }