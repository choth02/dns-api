# DNS API

## Documentation
This DNS API allows you to perform various operations related to DNS records.

### Features
- Create DNS Records
- Read DNS Records
- Update DNS Records
- Delete DNS Records

## Usage Instructions

### Create a DNS record
To create a DNS record, use the following endpoint:
```
POST /api/dns/records
```

**Request Body**:
```json
{
  "type": "A",
  "name": "example.com",
  "data": "192.0.2.1",
  "ttl": 3600
}
```

### Read a DNS record
To read a DNS record, use the following endpoint:
```
GET /api/dns/records/{id}
```

### Update a DNS record
To update a DNS record, use the following endpoint:
```
PUT /api/dns/records/{id}
```

**Request Body**:
```json
{
  "ttl": 7200
}
```

### Delete a DNS record
To delete a DNS record, use the following endpoint:
```
DELETE /api/dns/records/{id}
```

## Example
Here is an example of how to create a DNS record using curl:
```bash
curl -X POST http://api.example.com/api/dns/records \
  -H "Content-Type: application/json" \
  -d '{"type":"A","name":"example.com","data":"192.0.2.1","ttl":3600}'
```