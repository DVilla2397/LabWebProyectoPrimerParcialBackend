let DashboardModel = require('../models/Dashboard')

exports.dashboard = (req, res) => {
  
  DashboardModel.all()
    .then((data) => {
      
      let rifa = data;

      res.render('pages/dashboard', { rifa: rifa });
    });
}