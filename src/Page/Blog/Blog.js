import React from 'react';

const Blog = () => {
    return (
        <div className="">
            <div className="mb-5">
                <h1 className="text-2xl">1. How will you improve the performance of a React Application?</h1>
                <p>Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance. Nevertheless, there are several ways you can speed up your React application.</p>
            </div>
            <div className="mb-5">
                <h1 className="text-2xl">2. What are the different ways to manage a state in a React application?</h1>
                <p>React components have a built-in state object. The state is encapsulated data where you store assets that are persistent between component renderings.

                The state is just a fancy term for a JavaScript data structure. If a user changes state by interacting with your application, the UI may look completely different afterwards, because it's represented by this new state rather than the old state.</p>
            </div>
            <div className="mb-5">
                <h1 className="text-2xl">3. How does prototypical inheritance work?</h1>
                <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).</p>
            </div>
            <div className="mb-5">
                <h1 className="text-2xl">4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p>A product description is the marketing copy that explains what a product is and why it’s worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they’re compelled to buy.</p>
            </div>
            <div className="mb-5">
                <h1 className="text-2xl">5. What is a unit test? Why should write unit tests?</h1>
                <p>UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
            </div>
        </div>
    );
};

export default Blog;