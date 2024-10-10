module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('Blog', {
        Brand: DataTypes.STRING,        
        thumbnail: DataTypes.STRING,     
        pictures: DataTypes.STRING,     
        content: DataTypes.TEXT,         
        cc: DataTypes.STRING,           
        modelName: DataTypes.STRING,     
        price: DataTypes.STRING          
    });

    return Blog;
}
