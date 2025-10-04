import {defineConfig }from "drizzle-kit"

export default defineConfig({
     dialect: "postgresql",  
    schema: "./src/drizzle/schema.ts", // where you found schema file 
    out: "./src/drizzle/migrations" , // here we save migration folder
    // driver: "pg" ,// database driver 
    dbCredentials:{
     connectionString: process.env.DATABASE_URL as string 
    },
    verbose: true, // show more detail about migration
    strict : true
})