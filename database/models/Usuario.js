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

    u.associate = (models) => {

        // Associando usuário com contatos (um usuário possui muitos contatos);
        u.hasMany(models.Contato, {as:'contatos', foreignKey:'usuarios_id'});

    }

    return u;

}