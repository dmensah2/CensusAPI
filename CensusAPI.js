//XMLHttpRequest opens connection to an API by opening files and making an HTTP request (like requests library from python)
//new instance of xmlhttprequest class 
var request = new XMLHttpRequest();

//establish prompts to get inputs from user
const variable = prompt("Enter your variable(s)");
const geography = prompt("Enter your geography");

//create geography object (like Python's dictionaries)
const geography = {
ggg
}
//prefix url for which we will append the inputs from the prompts
const url = "https://api.census.gov/data/2016/acs/acs5?get=NAME";

//API Key
const apiKey = "6df8ecbbdd76fb9432d628ae6178349765cba241";

//constructs url endpoint we will make our request from
const link = `${url}${variable}${"&for=state:"}${geography}${"&key="}${apiKey}`;

//begin to access the JSON data
request.onreadystatechange = () => {
    const data = JSON.parse(request.response)
    if (request.readyState === XMLHttpRequest.DONE) {
        console.log(data)
    }
}

//opens a new connection, using the GET request on the URL endpoint
request.open("GET", link)

//Send request
request.send()
