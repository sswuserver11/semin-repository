const { crew_info, Sequelize } = require(".");

module.exports = (sequelize,Sequelize) => {
    class crew_info extends Sequelize.Model {
        static async selecAll(){
            let crewinfo=await crew_info.findAll({});
            console.log(crewinfo[0].crew_name);
            // return crewinfo;
        }
    }


crew_info.init({
    identify_numb_manager: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    crew_name: {
        type: Sequelize.STRING,
        allowNull:false
    },
    identify_numb_member:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    application_question_1:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    application_question_2:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    application_question_3:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    application_question_4:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    application_question_5:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    region:{
        type: Sequelize.STRING,
        allowNull:false
    },
    field:{
        type: Sequelize.STRING,
        allowNull:false
    },
    like_numb:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
    },{
        sequelize,
        modelName: 'crewinfo'
    });
    return crew_info;
};