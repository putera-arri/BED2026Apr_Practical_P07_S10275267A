module.exports = {
  user: "booksapi_user",
  password: "Password123",
  server: "localhost",  // ✅ your actual server name
  database: "bed_db",
  trustServerCertificate: true,
                   // ✅ top level, not inside options
  options: {
    port: 1433, 
    connectTimeout: 60000,
  },
};