function submitData (name, email) {
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email
    })
  })
  .then( function(response) {
    return response.json();
  })
  .then(function(data){
    const bodyData = document.querySelector('body')
    return bodyData.innerHTML = data.id
  })
  .catch(function(error){
    alert('Unauthorized Access')
    return document.body.innerHTML = error.message;

  
  })
  
}

submitData("Steve", "steve@steve.com" )
submitData("Sam", "sam@sam.com" )



