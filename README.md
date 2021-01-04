TODO: 
- tests
- logger
- data validation
- basic rate limiter 
- Refactor authentication class methods to DRY up code?
- rename controllers to include Controller in name ex. class AuthenticationController {}
- DB calls in Auth Object
- look up proper 400 status codes


To create secret keys we use the Node.js crypto library
- require('crypto').randomBytes(64).toString('hex');
- take that and assign it to our our secret keys
