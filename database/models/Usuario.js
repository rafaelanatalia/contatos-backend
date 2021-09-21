module.exports = (sequelize, DataTypes) =>{

    const u = sequelize.define(
        'Usuario',
        {
            nome: DataTypes.STRING,
            email: {type: DataTypes.STRING, allowNull: false},
            senha: DataTypes.STRING
        },
        {
            tableName: "usuarios",
            timestamps: false
        }
    );

    return u;

}