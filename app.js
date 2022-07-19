//Enter your code here..

const get_btn = document.getElementById("btnGet");
const msg_list = document.getElementById("message");

get_btn.onclick = function(){
    const promise = new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest;
        request.open('GET','https://jsonplaceholder.typicode.com/users');
        request.onload = () =>{
            if(request.status === 200){
                resolve(request.response);
            }
            else{
                reject(Error(request.statusText));
            }
        };
        request.onerror = () =>{
            reject(Error('Error fetching data'));
        }
        request.send();
    })
    promise.then((data)=>{
        console.log('Got data! Promise executed successfully!');
        const result = JSON.parse(data);
        console.log(result);
        var details = '<h2>Lists of Users</h2>';
        result.forEach(function(user) {
            details+=
            `<div class="player">
            <div class="strength">Name : ${user.name}</div>
            <div>Email   : ${user.email}</div>
            <div>Phone   : ${user.phone}</div>
            <div>Website : ${user.website}</div>
            <div>Company : ${user.company.name}</div>
            <div>City    : ${user.address.city}</div>
            <div>Zipcode : ${user.address.zipcode}</div>
            </div>`;
        });
        msg_list.innerHTML = details;
    },
    (error)=>{
        console.log('Promise Rejected!');
        console.log(error.message);
    })
}