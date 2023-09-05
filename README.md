## Environment
1. node v18.16.0
## Requirement
1. if user not authenticated, should redirect to verification page
2. if user authenticated, should redirect to profile page

## verification page
1. should have 4 digit inputs
2. should focus on first input when page loaded
3. should focus on next input when user enter a digit
4. should focus on previous input when user press backspace
5. should auto submit when user enter 4 digits
6. should show error message when user enter wrong code
7. should show loading when user submit code
8. should redirect to profile page when user submit correct code
9. able to paste code from clipboard
10. input should be numeric only
11. each input should be 1 numeric only

## profile page
1. should show username, quote , user photo and logout button
2. should remove token and redirect to verification page when user click logout button
3. should not log out user when user refresh page

## Mock API Documentation

### Overview
This document provides detailed specifications and usage guidelines for the `/api/verify` and `/api/auth` endpoints.

---

### 1. Verification API - POST /api/verify

#### Request Body:

| Parameter | Type   | Description              |
|-----------|--------|--------------------------|
| code      | string | The verification code.   |

#### Example Request:

```json
{
    "code": "12345"
}
```

#### Response:
Returns whether the verification code is valid. If valid, a token is also provided.

#### Example Response (valid code):
```json
{
    "valid": true,
    "token": "example_token"
}
```
#### Example Response (invalid code):
```json
{
    "valid": false
}
```

### 2. Authorization API - POST /api/auth

#### Request Headers:

| Header Name   | Value  | Description                         |
|---------------|--------|-------------------------------------|
| Authorization | string | The token received from /api/verify |

#### Response:
If authorized, the response will contain the username,quote and photo. Otherwise, an error message will be provided.
If valid, a token is also provided.

#### Example Response (Authorized):
When valid:
```json
{
  "username": "johnDoe",
  "quote": "Hello, World!",
  "photo": "https://example.com/image.jpg"
}
```
#### Example Response (Unauthorized):
```json
{
    "message": "unauthorized"
}
```