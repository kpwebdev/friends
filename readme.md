# Express Server with Friends CRUD API(s)

---

## How to run the express server

Step 1) Run `npm install` to install node_modules

Step 2) Run `npm start` to start the express server

## CRUD API(s)

### Get all the friends

```javascript
fetch(`${FRIENDS_API}`)
.then(response => response.json())
.then(friends => console.log(friends))
```

### Get a friend for the specified id

```javascript
fetch(`${FRIENDS_API}/${FRIEND_ID}`)
.then(response => response.json())
.then(friends => console.log(friends))
```

### Post a new friend

```javascript
fetch(`${FRIENDS_API}`, {
    headers: {"Content-Type": "application/json"},
    method: "POST",
    body: JSON.stringify(FRIEND_DATA)
})
.then(response => response.json())
.then(friends => console.log(friends))
```

### Delete a friend for the specified id

```javascript
fetch(`${FRIENDS_API}/${FRIEND_ID}`, {
    method: "DELETE"
})
.then(response => response.json())
.then(friends => console.log(friends))
```
