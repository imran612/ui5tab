
sap.ui.controller("com.jbl.lnclr.tab.view.DocumentList", {
                  
            onInit: function () {
                 // alert("inside init");
                  //var oModel = new sap.ui.model.json.JSONModel("model/products.json");
                  //this.getView().setModel(oModel);
                  // sap.ui.getCore().setModel(oModel);
                 // var oModel = new sap.ui.model.json.JSONModel("model/products.json");
                  var oGroupingModel = new sap.ui.model.json.JSONModel({ hasGrouping: false});
                  sap.ui.getCore().byId("DocumentList").setModel(lcmod);
                   sap.ui.getCore().byId("DocumentList").setModel(oGroupingModel, 'Grouping');
                  
                  },
                  
                  handleNavBack: function () {
                  var nav = sap.ui.getCore().byId("Home").getController().nav;
                  nav.back("Home");
                  
                  },
                  handleSettings: function () {
                  
                  },
                  handleProcDetail: function () {
                      sap.ui.getCore().byId("Home").getController().nav.to("DocumentProc");
 
                  },
                  handleProcTableSetting: function () {
                    alert("table settings");
                  }
});

