# AngularPeopleSearch

AngularPeopleSearch is a .NET Core web application using EF Core for data access and
Angular for the front-end framework.

The application allows the user to enter a contiguos sequence of letters and returns
a list of people from the database whose first or last name contains the entire sequence.

## Setup

If you have sql server installed:
Update appsettings.json AngularPeopleSearchConnectionString with the correct connection string for your database.

If you are using a mac and don' have sql server installed or If you have docker for windows or mac installed, and have it set to use linux containers, you should be able to run the app by doing the following:

Execute:
docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Password123!' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2017-latest

Update appsettings.json:
"AngularPeopleSearchConnectionString": "Server=localhost;Database=AngularPeopleSearchDb;User=sa;Password=Password123!;MultipleActiveResultSets=true;"

## Usage

Enter any contiguous string of letters and click the Search button.