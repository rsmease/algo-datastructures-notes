## Serving Assets

- A CDN is great because it enables two features: (1) local caching of resources for faster retrieval and (2) paralell retrieval of resource from multiple servers
- Static content can be loaded without the header overhead associated with requests for dynamic assets, leading to faster retrieval of static assets
- Minify assets and combine assets (sprite images) where possible to reduce the number of requests

## Long-Polling

- Request/response pattern where client makes a request, server holds the request until database state changes and then reports the changes to the client, which automatically makes another request 
- Emulates a server push pattern

## Push vs. Pull Protocols

- Push protocols: client opens a connection to the server and keeps it constantly active
    - Server will send new events as they arise as long as the connection is opened
    - Messages and phone calls would operate under this framework, because you receive them instantly
- Pull protocols: client periodically connects to the server and checks all recent events
    - This can be done in a controlled manager that simulates server push
    - 'Push' notifications are actually pull notifications that are checked reasonably frequently
- Apple improves the battery life of its customers by providing just one push connection to all of the updates that pass through its servers to the apps where you have push notifications enabled

## Server-sent Events

- Similar pattern to long-polling, except that the connection subscribes the client indefinitely to the server, receiving updates whenever they arise
- One-way equivalent of WebSocks, which are a two-way stream of data
- SSEs have features that WebSockets lack, e.g. automatic reconection, event IDs and arbitrary events
- Near real-time communication; sent every 3 seconds

## WebSockets

- Must activate specific port for communcation, which is constant and two-way as long as the port is subscribed to the socket server
- Requires EventMachine server and an open port
- True real-time communication, native browser support
- Server holds the only process serving requests, client only does work when sending a message

## HTTP Header Params

- Age: time in seconds that the object has been in a proxy cache
- Cache-control: directives for caching mechanism in requests and responses
- Expires: date after which the request is stale
- Last-modified: last modified date of the resource 
- ETag - unique string identifying version of the resouce (can be used to match)
- Accept-Language: 'I want this language from the server'
- Access-Control-Allow-Origin: boolean describing the permissions for sharing this resource on other domains
- Access-Control-Allow-Headers: used in preflight requet to indicate which headers are allowed
- Do-Not-Track (DNT): specifies users tracking preferences (boolean)
- Date: date when originated
- Transfer-Encoding: what encoding to use to transfer the response (chunked, compress, gzip)
- If-Modified-Date: transmitted only if request has been modified after a certain date
- X-Frame-Options: can I render the page in an iFrame?
