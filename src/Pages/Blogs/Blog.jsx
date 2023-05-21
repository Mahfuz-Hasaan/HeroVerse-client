import React from "react";

const Blog = () => {
  return (
    <div className="my-20">
      <div className=" w-10/12 mx-auto">
        <div className="stack ">
          <div className="card shadow-md bg-teal-50 text-black">
            <div className="card-body">
              <h2 className="card-title">
              What is an access token and refresh token? How do they work and where should we store them on the client-side?
              </h2>
              <p className="pl-8">
              An access token is a short-lived credential used to access protected resources, while a refresh token is a long-lived credential used to obtain new access tokens. The access token is sent with each request to gain access to resources, while the refresh token is used to obtain a new access token when the current one expires. On the client-side, access tokens are typically stored in memory or browser storage, while refresh tokens should be securely stored, such as in an HTTP-only cookie or in secure storage mechanisms provided by the operating system or framework.
              </p>
            </div>
            <div className="card-body">
              <h2 className="card-title">
                Compare SQL and NoSQL databases??
              </h2>
              <ul className="pl-8">
                <p>SQL:</p>
                <li>Structure: SQL databases are based on a rigid structure with predefined schemas. They use tables with fixed columns and rows, enforcing data integrity and consistency.</li>
                <li>Relational Model: SQL databases are relational, meaning they establish relationships between tables using primary and foreign keys.</li>
                <li>Query Language: SQL databases use the SQL language for querying and manipulating data, providing powerful declarative capabilities for complex data operations.</li>
              </ul>
              <ul className="pl-8">
                <p>NOSQL:</p>
                <li>Flexible Structure: NoSQL databases offer a flexible schema or schema-less structure, allowing for dynamic and evolving data models without predefined schemas.</li>
                <li>Document, Key-Value, or Graph Model: NoSQL databases come in different models such as document stores (e.g., MongoDB), key-value stores (e.g., Redis), or graph databases (e.g., Neo4j), providing specialized data storage and retrieval mechanisms</li>
                <li>Query Language: NoSQL databases often use their query languages or APIs specific to the chosen model, which may vary in complexity and capabilities compared to SQL</li>
              </ul>
            </div>

            <div className="card-body">
              <h2 className="card-title">
              What is express js? What is Nest JS?
              </h2>
              <p className="pl-8">
              Express.js is a popular and lightweight web application framework for Node.js. It simplifies the development of server-side applications by providing a set of features and utilities for routing, middleware handling, and request/response management.
              </p>
              <p className="pl-8">
              Nest.js is a progressive, TypeScript-based framework for building scalable and efficient server-side applications. It is built on top of Express.js and offers additional features like dependency injection, modular architecture, and built-in support for TypeScript decorators, making it suitable for large-scale enterprise applications.
              </p>
            </div>
            <div className="card-body">
              <h2 className="card-title">
              What is MongoDB aggregate and how does it work
              </h2>
              <p className="pl-8">
              In MongoDB, the aggregate function is a powerful tool used to perform advanced data processing and analysis on collections. It allows you to execute a series of data transformation operations, known as pipeline stages, on the documents within a collection.
              </p>
            </div>
          </div>

          <div className="card shadow-sm bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Notification 3</h2>
              <p>You have 3 unread messages. Tap here to see.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
