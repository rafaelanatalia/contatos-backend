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

        // Associando um usuário com outros usuários(amizades) (muitos para muitos)!
        u.belongsToMany(
            models.Usuario,
            {
                as: 'colegas', // Nome do relacionamento!!!
                through: 'amizades', // Nome da tabela intermediária!!!
                foreignKey: 'usuarios1_id', // id do model codado na tb intermediária
                otherKey: 'usuarios2_id', // id do model relacionado na tb intemediária
                timestamps: false
            }
        )

    }

    return u;

}