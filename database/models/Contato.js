module.exports = (sequelize, DataTypes) => {

    const c = sequelize.define(
        'Contato',
        {
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER
        },
        {
            tableName:'contatos',
            timestamps: false
        }
    );
    
    c.associate = (models)=> {
        c.hasMany(models.Telefone, {as:'telefones', foreignKey:'contatos_id'});
        c.belongsTo(models.Usuario, {as:'usuario', foreignKey:'usuarios_id'});
    }

    return c;
}