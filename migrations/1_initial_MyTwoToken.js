var MyTwoToken = artifacts.require("MyTwoToken");

module.exports = function(deployer) {
    // Deploy the instance of the contract
    deployer.deploy(MyTwoToken);//, 10);
  
  };