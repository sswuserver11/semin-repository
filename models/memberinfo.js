module.exports = (sequelize, Sequelize) => {
const memberinfo = sequelize.define("memberinfo", {
        email: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        password: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        birth: {
            type: Sequelize.DATEONLY
        },
        phone_numb: {
            type: Sequelize.STRING
        },
        sex: {
            type: Sequelize.CHAR
        }
    },
    {
        timestamps: false //삽입이 된 엔티티가 언제 생성되고 언제 업뎃됐는지 관련 컬럼이 추가되는데 필요없으므로 false로 
    });
    return memberinfo;
}
