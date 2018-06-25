Get them all ;)


# Suppose you have an API

    - GET api/users, api/users/:id
    - GET api/customers, api/customers:id - GET api/countries etc

You also have a SPA where you fetch users and customers and countries from API to render some page.
Probably you don’t want to make 3 or 5 or 10 ajax requests, instead you want to GET all resources in one go.

#  The task

Make API handle that - build a reusable module/middleware for GETting multiple resources in one go.
Should be easy to inject into any existing express app / api​.

# Example of final use

    - GET api/resources ? users=api/users & customer=api/customers/23 & countries=api/countries ..
    returns {users: [..], customer: {..}, countries: [..] }
    hints:
    - you like good performance and streams, right?
    - you like elegant and reliable test suits same as we do?
    - you like to publish modules your are proud of to npm? with travis banner? wow man!


Good luck!
Debitoor
