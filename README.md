# Documentation for African Marketplace API

<b>BaseURL:</b> https://bw-african-marketplace.herokuapp.com/

<details>
<summary><b>POST - Register a new user</b></summary>

Endpoint: BaseURL/api/auth/register
Requires an object with an email and password, both string data types: 

```
{
	"email": "admin@email.com",
	"password": "password"
}
```

When successful will return status code of 201 (CREATED), the new user object and a token (example):

```
{
    "new_user": {
        "id": 2,
        "email": "admin@email.com",
        "name": null,
        "about": null,
        "avatar_url": null
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6kpXVCJ9..."
}
```
</details>

<details>
<summary><b>POST - Login a user</b></summary>
<br>
<b>Endpoint:</b> <code>BaseURL/api/auth/login</code>
<br>
<br>
Requires an object with an email and password, both string data types: 

```
{
	"email": "admin@email.com",
	"password": "password"
}
```

When successful will return status code of 200 (OK), the new item object and a token (example):

```
{
    "user": {
        "id": 2,
        "email": "admin@email.com",
        "name": null,
        "about": null,
        "avatar_url": null
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6kpXVCJ9..."
}
```
</details>

<details>
<summary><b>GET - Get a user by user id</b></summary>
<br>
<b>Endpoint:</b> <code>BaseURL/api/users/:id</code>
<br>
<br>
Restricted endpoint. Token required.
<br>
<br>
No body required in the request. 
<br>
<br>
When successful will return status code of 200 (OK) and a single user object with an array of the items they've posted as well as their list of favorite items. 
