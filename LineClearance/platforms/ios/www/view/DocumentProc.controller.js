
sap.ui.controller("com.jbl.lnclr.tab.view.DocumentProc", {
                  
            onInit: function () {
                  //alert("inside init");
                  //var oModel = new sap.ui.model.json.JSONModel("model/products.json");
                  //this.getView().setModel(oModel);
                  // sap.ui.getCore().setModel(oModel);
                  var oModel = new sap.ui.model.json.JSONModel("model/prodTable.json");
                  sap.ui.getCore().byId("DocumentProc").setModel(oModel);
                  //var oGroupingModel = new sap.ui.model.json.JSONModel({ hasGrouping: false});
                  //sap.ui.getCore().byId("DocumentList").setModel(oModel);
                  // sap.ui.getCore().byId("DocumentList").setModel(oGroupingModel, 'Grouping');
                  
                  },
                  
                  handleNavBack: function () {
                  var nav = sap.ui.getCore().byId("Home").getController().nav;
                  nav.back("DocumentList");
                  
                  },
                  handleSettings: function () {
                  
                  },
                  handleESignDialog: function () {
                 // alert("f");
                 // var oModel = new sap.ui.model.json.JSONModel("model/products.json");
                  this._eSignD = sap.ui.xmlfragment("com.jbl.lnclr.tab.view.ESignDialog",
                                                     sap.ui.getCore().byId("DocumentProc").getController()
                                                    );
                  // this.getView().addDependent(this._valueHelpDialog);
                  //}
                  //this._valueHelpDialog.setModel(oModel);
                  // open value help dialog
                  this._eSignD.open();

                  
                  },
                  onDialogCloseButton: function (oEvent) {
                 // alert("in close");
                  var sType = oEvent.getSource().data("dialogType");
                  this[sType].close();
                  }
});

