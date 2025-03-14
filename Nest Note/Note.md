## Controller
- Path
- เรียก Service
> return this.appService.getHello();

## Service
- ส่งข้อมูลไปไห้ Controller เช่น Function getHello


------
##  Why Use async for Some Functions?
- Create
- Update
- Delete

In NestJS (or any Node.js backend), we use async when working with asynchronous operations, such as:
- Database queries (e.g., findOneBy(), save(), insert(), delete())
- External API calls
- File system operations
- Any function that returns a Promise

These operations do not execute instantly. Using async + await ensures that the function waits for the result before continuing.

Without async, the function would return a pending promise instead of actual deletion data.

## Sum Up
Use async + await whenever your function interacts with the database, API, or any async process.