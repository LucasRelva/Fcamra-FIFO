module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'fcamara',
    port: '3306',
    define: {
        timestamps: true, // created_at e updated_at
        underscored: true,
    },
} 