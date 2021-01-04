TODO: 
- tests
- logger
- data validation
- basic rate limiter using IP address
- Refactor authentication class methods to DRY up code?
- rename controllers to include Controller in name ex. class AuthenticationController {}
- 


To create secret keys we use the Node.js crypto library
- require('crypto').randomBytes(64).toString('hex');
- take that and assign it to our our secret keys
