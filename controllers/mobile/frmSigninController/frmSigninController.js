define({ 

  //Type your controller code here 
  onNavigate : function () {
    try{
      kony.print("inside onNavigate frmSignin");
      this._init();
    }catch(e){
      kony.print("exception in "+e);
    }
  },

  _init : function () {
    try{
      kony.print("inside init frmSignin");
      this.signinBindEvents();
    }catch(e){
      kony.print("exception in _init "+e);
    }
  },

  signinBindEvents : function (){
    try{
      this.view.btnSignin.onClick = this.getCreditDetails;
    }catch(e){
      kony.print("exception in signinBindEvents "+e);
    }
  },

  getCreditDetails : function(){
    try{
      var userName = this.view.txtUserName.text;
      var password = this.view.txtPassword.text;
      if(isNullandEmpty(userName)){
        if(isNullandEmpty(password)){
          var inputParams = {};
          var headers = {};
          var serviceName = "Credits";
          var operationId = "Credits_Credit_details_get";

          showLoadingIndicator();
          commonServiceInvokerHandler(serviceName, operationId, headers, inputParams, this.getCreditDetailsSuccessCb,this.getCreditDetailsErrorCb);
        }else{
          alert("please enter password");
        } 
      }else{
        alert("please enter username");
      }
    }catch(e){
      kony.print("exception in signinBindEvents "+e);
    }
  },

  getCreditDetailsSuccessCb : function(response){
    try{
      kony.print("inside getCreditDetailsSuccessCb ::  "+response);
      dismissLoadingIndicator();
      gblCreditResponse = response;
      if(response.opstatus == 0){
        new kony.mvc.Navigation("frmSummary").navigate();
      }
    }catch(e){
      kony.print("exception in getCreditDetailsSuccessCb "+e);
    }
  },

  getCreditDetailsErrorCb : function(response){
    try{
      dismissLoadingIndicator();
      kony.print("inside getCreditDetailsErrorCb ::  "+JSON.stringify(response));
    }catch(e){
      kony.print("exception in signinBindEvents "+e);
    }


  }

});