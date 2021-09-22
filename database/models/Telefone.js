module.exports = (sequelize, DataTypes) => {

    const t = sequelize.define(
        'Telefone',
        {
            numero: DataTypes.STRING,
            contatos_id: DataTypes.INTEGER
        },
        {
            tableName: 'telefones',
            timestamps: false
        }
    )

    return t;

}