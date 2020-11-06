module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'fcamara',
    define: {
        timestamps: true, // created_at e updated_at
        underscored: true,
    },
}