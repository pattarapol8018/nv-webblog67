module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('Blog', {
        Brand: DataTypes.STRING,         // ยี่ห้อของรถ
        thumbnail: DataTypes.STRING,     // รูปภาพ thumbnail ของรถ
        pictures: DataTypes.STRING,      // ภาพทั้งหมดของรถ
        content: DataTypes.TEXT,         // รายละเอียดของรถ
        cc: DataTypes.STRING,            // ขนาดเครื่องยนต์ (cc)
        modelName: DataTypes.STRING      // ชื่อรุ่นของรถ
    });

    return Blog;
}
