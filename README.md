# Backend Assignment: Hierarchical Structure API

## Overview
This assignment involves implementing a set of APIs to manage a hierarchical data structure. The APIs will allow users to **create, update, fetch, and delete** data while maintaining the hierarchy.

## Hierarchy Structure
The structure follows the format below:

```
- Level 1
  -- Sublevel 1
    --- Item 1
    --- Item 2
  -- Sublevel 2
    --- Item 1
    --- Item 2
    --- Item 3
- Level 2
  -- Sublevel 1
    --- Item 1
    --- Item 2
    --- Item 3
    --- Item 4
- Level 3
  -- Sublevel 1
    --- Item 1
  -- Sublevel 2
    --- Item 1
  -- Sublevel 3
    --- Item 1
    --- Item 2
    --- Item 3
  -- Sublevel 4
    -- Item 1
    -- Item 2
```

## Data Structure
Each object in the hierarchy has the following attributes:
- **id**: Unique identifier
- **name**: Name of the level, sublevel, or item
- **level**: Depth of the object in the hierarchy
- **parent**: ID of the parent object (null for top-level objects)

### Example Data
#### Level Object:
```json
{
  "id": "29f4nlk83mkaejq",
  "name": "level 1",
  "level": 1,
  "parent": null
}
```

#### Sublevel Object (Child of Level 1):
```json
{
  "id": "asdlf32fafk0i2er313",
  "name": "sublevel 1",
  "level": 2,
  "parent": "29f4nlk83mkaejq"
}
```

#### Item Object (Child of Sublevel 1):
```json
{
  "id": "jaf224ur24wadf2342",
  "name": "item 1",
  "level": 3,
  "parent": "asdlf32fafk0i2er313"
}
```

## API Endpoints
### Fetch Data
- **GET** `localhost/level=1` → Fetch all objects at level 1.
- **GET** `localhost/parent=level1` → Fetch all objects whose parent is level 1.

### Create Data
- **POST** `localhost/` → Create an object with the necessary attributes.

### Update Data
- **PUT** `localhost/id=jaf224ur24wadf2342` → Update the object with the given ID.

### Delete Data
- **DELETE** `localhost/name=item 3` → Delete all objects with name "item 3".
- **DELETE** `localhost/id=jaf224ur24wadf2342` → Delete the object with the given ID.

## Notes
- You are free to use **MongoDB, PostgreSQL, or MySQL** as the database management system.
- **Use Postman to test your APIs** for correct functionality.
- **Preferably delete objects with name as "items" during testing** to avoid irregularities. Deleting higher-level objects can create **dangling pointers for their children**, as they are not deleted automatically.

