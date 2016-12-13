## Debug tool
This project has a built in debug tool. It only triggers if the environmental variable `DEBUG` is set to `true`. To run it, turn on the server with `DEBUG=true node src/app.js`.

### Usage
To run it simply do this:
```javascript
const util = require('utility-tool-sd');
const path = 'src/routes/api/api.js';
util.debug('My message', path, 'success');
```

Utility tool accepts 3 arguments: `message`, `path`, and `level`. `message` is the title of the object you are trying to log to the console. `path` is a path of file from which this message is coming from, which you should type manually. `level` is an importance of message. All of these variables are optional, but it would make a lot more sense if you define all of them.

In console messages are colored, depending on the level. There are 4 levels of messages: `notice` (or `n`), `success` (or `s`), `warning` (or `w`, or `warn`), and `error` (or `e`, or `err`). They are colored in blue, green, yellow, and red respectively. In log file the messages may look somewhat like this:

```
NOTICE [Sat Dec 03 2016 21:33:15 GMT-0500 (EST)] FILE: src/app.js SAYS: "Server running on port 3000"
```
