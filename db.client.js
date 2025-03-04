const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgresql://esgi_cloud_exam_2_db_21052_user:6DFTgaiOMv8QEZQVQ2q5aUBw2HhbH5An@dpg-cv3c7il2ng1s73fu1990-a/esgi_cloud_exam_2_db_21052', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;