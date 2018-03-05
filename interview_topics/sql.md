## NoSQL and SQL

- keyspace: equivalent of database table
- node: machine where Cassandra is running
- data center: collection of multiple nodes
- cluster: collection of multiple data centers
- you don't have to define the structure of a keyspace at the beginning
- syntax can vary from keyspace to keyspace
- SQL databases tend to be vertically scalable
    - NoSQL database tend to be horizontally scalable
- NoSQL databases can be document-based, key-value pairs, graph database or wide-column stores
- Cassandra is a wide-column store
    - Columnar databases are very good at scanning large datasets
    - Only retrieve the data from the needed columns, where all column rows are paired by IDs
    - Where repeats occur, algorithms can be created to speed up retrieval
