# Zuri-DB-connect
Task on performing CRUD opertaions on db from node app

1. Create payload:
    endpoint: base_url/create
    method: POST
    params: {name: $name,email: $email,country: country} 
    return (success): 
    {"message": "New payload added",
        "resp": {"name": $name,"email": $email,"country": $country,"_id": "xxxxxxxxxxxxxxxx","__v": 0}
    }

2. update payload:
    endpoint: base_url/update/:id
    method: PUT
    params: {name: $name,email: $email,country: country} 
    return (success): 
    {"message": "New payload added",
        "resp": {"name": $name,"email": $email,"country": $country,"_id": "xxxxxxxxxxxxxxxx","__v": 0}
    }

3. fetch all payloads
    endpoint: base_url/fetch   
    method: GET 
    return (success)
    {
        "payloads": [
            {
                "name": $name,
                "email": $email,
                "country": $country,
                "_id": "xxxxxxxxxxxxxxxxxxxx",
                "__v": 0
            },
            {
                "name": $name,
                "email": $email,
                "country": $country,
                "_id": "xxxxxxxxxxxxxxxxxxxx",
                "__v": 0
            }
        ]
    }

4. fetch single record
    endpoint: base_url/single/:id
    method: GET,
    return (success)
    {
        "resp": [
            {
                "name": $name,
                "email": $email,
                "country": $country,
                "_id": "xxxxxxxxxxxxxxxxxxxx",
                "__v": 0
            }
        ]
    }

5. delete record
    endpoint: base_url/delete/:id
    method: DELETE
    return (success): "record deleted"
