const json = (callback) =>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status===200){
            callback(undefined,request.responseText);
        }
        else if(request.readyState===4){
            callback('could not fetch data',undefined);
        }
    })
    request.open('GET','json.json');
    request.send();
    }
    json((err,data)=>{
    console.log('callback is fired');
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
    });

    const jsonHTML = document.querySelector('.json');
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status===200){
            const data = JSON.parse(request.responseText);
            data.forEach(element=>{
                jsonHTML.innerHTML += `<p> Name: ${element.name} , Surname: ${element.surname} , Age: ${element.age} , Salary: ${element.salary} </p>`
            })
        }
    });
    request.open('GET', 'json.json');
    request.send();