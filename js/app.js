document.getElementById('btn').addEventListener('click', loadUsers);

// Load GitHub Users

function loadUsers() {
    const ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://api.github.com/users', true);
    ourRequest.onreadystatechange = function(){

        if(this.readyState === 4 && this.status === 200) {
            let users = JSON.parse(this.responseText);
            
            let output = '';

            for(let user of users) {
                output += `
                <div class="user">
                    <img src="${user.avatar_url}">
                    <div class="text"><p>${user.id}</p> <h4>${user.login}</h4></div>
                    
                </div>                
                `                
            }
            document.getElementById('users').innerHTML = output;
        }
    }
    ourRequest.send();
}
