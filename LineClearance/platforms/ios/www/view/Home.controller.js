var inputId;
var _valueHelpDialog;
sap.ui.controller("com.jbl.lnclr.tab.view.Home", {
                  
            onInit: function () {
                  //alert("inside init");
                  //var oModel = new sap.ui.model.json.JSONModel("model/products.json");
                  //this.getView().setModel(oModel);
                  // sap.ui.getCore().setModel(oModel);
                  
                  },
                handValueHelp: function (oController) {
                 // alert("inside value help");
                  this.inputId = oController.oSource.sId;
                  // create value help dialog
                  //if (!this._valueHelpDialog) {
                  var oModel = new sap.ui.model.json.JSONModel("model/products.json");
                  this._valueHelpDialog = sap.ui.xmlfragment(
                                                             "com.jbl.lnclr.tab.view.fragment.Dialog",
                                                              sap.ui.getCore().byId("Home").getController()
                                                             );
                 // this.getView().addDependent(this._valueHelpDialog);
                  //}
                  
                  oModel.inputF=this.inputId;
                  sap.ui.getCore().setModel(oModel,"listModel");
                   this._valueHelpDialog.setModel(oModel);
                  // open value help dialog
                  this._valueHelpDialog.open();
                  },
                  
            _handleValueHelpSearch : function (evt) {
                  //alert("in search");
                  var sValue = evt.getParameter("value");
                 // alert(sValue);
                  var oFilter = new sap.ui.model.Filter(
                                                        "Name",
                                                        sap.ui.model.FilterOperator.Contains, sValue
                                                        );
                  evt.getSource().getBinding("items").filter([oFilter]);
                  },
                  
            _handleValueHelpClose : function (evt) {
                 //alert("in close");
                 var oSelectedItem = evt.getParameter("selectedItem");
                  //alert(oSelectedItem);
                  //alert(oSelectedItem.getTitle());
                  //if (oSelectedItem) {
                  var oModel1 = sap.ui.getCore().getModel("listModel");
                  var productInput = sap.ui.getCore().byId(oModel1.inputF);
                  //alert(productInput);
                  productInput.setValue(oSelectedItem.getTitle());
                  
                  //}
                  evt.getSource().getBinding("items").filter([]);
                  
                  },
                  
                 detailList : function(evt) {
                    sap.ui.getCore().byId("Home").getController().nav.to("DocumentList");
                  }
});

function navigateToDetails(pageId, targetPage) {
    var page = sap.ui.getCore().byId(pageId);
    page.getController().nav.to(targetPage);
}