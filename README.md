# Circular Fashion Library

There .env files in the client and the server directory. The .env.example files show, what they should look like correspondingly.

## API endpoints

### Items

- `get /api/items` returns all items
- it can take a query as well, where all values are optional they are comined with AND, so all will match on the returned items
- ie. `/api/items?size=XS&gender=unisex`
- possible query parameters:

  - `limit=<number>` how many items get returned, default 12
  - `page=<number>`page you're on for pagination, default 1
  - `status=<available | repair | recycling | unavailable>`
  - `size=<XS|S|M|L|XL|XXL>`
  - `brand=<brandName>`
  - `color=<colorName>`
  - `gender=<male|female|unisex>`
  - `feat=<featureName>`
  - `cat=<categoryName>`

- `get /api/items/:id` returns item with specified id
- `post /api/items` creates an item
- `put /api/items/:id` updates an item with specified id
- `delete /api/items/:id` deletes one item with specified id

### Wardrobe

- `get /api/items/wardrobe/:id` returns all items a user has borrowed currently, where id is the users id

### Users

- `get /api/users` returns all users
- `get /api/users/:id` returns user with specified id
- `post /api/users` creates one user
- `put /api/users` updates an user with specified id
- `delete /api/users/:id` deletes one user with specified id

### Categories

### Features
