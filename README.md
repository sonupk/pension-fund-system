# pension-fund-system
Project Name: Pension Fund Management System
Backend : NodeJS
Database: MongoDB
Timeline: Backend Delivery Date: 7th of Jan, 2023

Functionality to be developed:
Build a User Management System with following Architecture:
Top Level:
//Single Database, with user accounts that can access all the banks.
1. Development Company | Ajinkya Technologies
2. Chartered Accountant | M/s P.G Ghali & Co

Bank Level: 
//This will have multiple databases getting replicated. Each Bank will have their dedicated tables. (Multi Tenet Application)
1. Roles 
2. Designations

Reference: https://dev.to/przpiw/nodejs-mongodb-multi-tenant-app-by-example-435n

Functionality:
Each Bank will have their own Database, but on the same server.
For now we will develop in the following manner:
Create Master Database, where we can add users. In Development Company and in Chartered Accountant Company.
Now, from Development Company Account and from CA Account, we can view Number of Banks that are created and their details.

During Bank creation, 
Register the details of the bank, *PS: Details of the Form will get updated at a later stage.
During Registration of Bank,
They can select multiple Admin Accounts too, who can manage the Users of that account.
Based on Standard Roles, they will have access to the functionalities at a later stage. 
Each User and Role Table would be dedicated to one single bank only. 

Data Capture Fields:
1. Development Company
Name of the person
Email Address
Mobile Number
Admin (Yes / No)

2. Chartered Accountant Company
Name of the person
Email Address
Mobile Number
Admin (Yes / No)

3. Bank Registration
Name of the Bank
Type of Bank (DropDown | Cooperative Society | Trust | Nationalised Bank | Others //others will have textbox)
Email address
Contact Person Name
Contact Person Number
Number of Employees (Range) // 10-50 ; 51-75 ; 76- 100 ; 101 - 200 ; 201 - 500 ; 500 - 1000 ; 1001 - 1500 ; 1501 and more
Address Line 1
Address Line 2
PIN Code
City 
District
State

Expected Outcome:
APIs with Database, functional on Postman.