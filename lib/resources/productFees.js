const utils = require('../utils');

// TODO: Restore rates may vary for product fees operations --> x-amzn-RateLimit-Limit header is returned and should be respected
module.exports = {
  getMyFeesEstimateForSKU:(req_params) => {
  	utils.checkParams(req_params, {
      path:{
        SellerSKU:{
          type:'string'
        }
      }
    });
    return Object.assign(req_params, {
      method:'POST',
      api_path:'/products/fees/v0/listings/' + req_params.path.SellerSKU + '/feesEstimate',
      restore_rate:1
    });
  },
  getMyFeesEstimateForASIN:(req_params) => {
    utils.checkParams(req_params, {
      path:{
        Asin:{
          type:'string'
        }
      }
    });
    return Object.assign(req_params, {
      method:'POST',
      api_path:'/products/fees/v0/items/' + req_params.path.Asin + '/feesEstimate',
      restore_rate:1
    });
  },
};