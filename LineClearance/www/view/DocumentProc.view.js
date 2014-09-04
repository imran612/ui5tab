sap.ui.jsview("com.jbl.lnclr.tab.view.DocumentProc", {

	getControllerName: function () {
		return "com.jbl.lnclr.tab.view.DocumentProc";
	},
	
	createContent: function (oController) {
		
             // alert("in doc view");
              var page = new sap.m.Page({showHeader: true,
                                        showNavButton: true,
                                        alignItems:"center",
                                        navButtonPress:oController.handleNavBack,
                      //  headerContent: [new sap.m.Button({icon: "sap-icon://log", press: oController.handleSettings,visible:true})]
                                        });
              page.setCustomHeader(new sap.m.Bar("pageHdr2",
            {contentLeft: [new sap.m.Button({icon:"sap-icon://nav-back",press:oController.handleNavBack}),new sap.m.Image("jblLogo2",{src:"img/jabil-logo.jpg",height:"30px"})],contentRight:[new sap.m.Button({text:"Selection Screen"}).addStyleClass("selBtnHdr"),new sap.m.Button({icon:"sap-icon://log"}) ]}));
              
              //add welcome user text
              //  page.addContent(new sap.m.Text({text:"Welcome Imran",textAlign:sap.ui.core.TextAlign.Right}));
              page.addContent(new sap.m.Bar("welHdr2",{contentRight:new sap.m.Text({text:"Welcome Imran"})}));
             // var docTablePanel = new sap.m.Panel("docTablePanel",{headerText:"Line Clearance Document List",width:"95%"});
               var lcDocProcPanel = new sap.m.Panel("lcDocProcPanel",{headerText:"Line Clearance Document Processing",width:"95%"});
               var lcDocProcDetail = new sap.m.Panel("lcDocProcDetail",{headerText:"Process Details",expandable:true,expanded:true});
              var toolPD = new sap.m.Toolbar("procDetTB",{content:[new sap.m.Label({text:"Process Order:"}), new sap.m.Input({width:"50px"}), new sap.m.ToolbarSpacer(), new sap.m.Label({text:"Plant:"}),new sap.m.Text({text:"IL01"}),new sap.m.ToolbarSpacer(), new sap.m.Label({text:"LC Status:"}),new sap.m.Text({text:"New"})   ]  });
              
              lcDocProcDetail.addContent(toolPD);
              lcDocProcDetail.addContent(sap.ui.xmlfragment("com.jbl.lnclr.tab.view.fragment.ProcTableHelper",oController));
              
             
            
              var toolLCPD = new sap.m.Toolbar({content:[new sap.m.ToolbarSpacer(),new sap.m.Label({text:"LC Profile ID:"}),
                                                       new sap.m.Text({text: "PKG MOLD"}), new sap.m.ToolbarSpacer(),
                                            new sap.m.Label({text:"Type:"}),new sap.m.Text({text:"Complete"}),new sap.m.ToolbarSpacer()]  });
              
              
              lcDocProcDetail.addContent(toolLCPD);
             

              
    lcDocProcDetail.addContent(new sap.m.Text("infoTxt",{text: "Pkg Mold - Complete: WHen Process Order, Part Number and Resign changes (OR) when Process Order, Part Number and Raisin remain the same and Work Center (OR) maintainence performed with one condition above"}));
             
               lcDocProcPanel.addContent(lcDocProcDetail);
              
              var lcDocProcQsPanel = new sap.m.Panel({headerText:"Process Questionnaires",expandable:true,expanded:false}).addStyleClass("procQsPanel");;
              
              lcDocProcQsPanel.addContent(sap.ui.xmlfragment("com.jbl.lnclr.tab.view.fragment.Questions",oController));
              
              lcDocProcPanel.addContent(lcDocProcQsPanel);
              
              lcDocProcPanel.addContent(new sap.m.Text("remark",{text:"Remark"}));
              lcDocProcPanel.addContent(new sap.m.TextArea("remTxtArea"));
              lcDocProcPanel.addContent(new sap.m.Text("esignlabel",{text:"e-Sign Operation and Quality"}));
              
               var eSignPanel = new sap.m.Panel("eSignPanel");
              eSignPanel.addContent(new sap.m.Text("eSignTxt1",{text:"E-Sign has to be executed by Operation first and then Quality"}));
              eSignPanel.addContent(new sap.m.Text("eSignTxt2",{text:"OPERATION REP: I have carried out line clearence activity correctly"}));
              eSignPanel.addContent(new sap.m.Text("eSignTxt3",{text:"QUALITY REP: I have carried out line clearance actvity correctly"}));
              
              var hrLyt=new sap.ui.layout.HorizontalLayout("hLyt");
              hrLyt.addContent(new sap.m.Label({text:"e-Sign Operation & Quality:"}));
              hrLyt.addContent(new sap.m.Input({type:sap.m.InputType.Text,valueHelpRequest:oController.handleESignDialog,showValueHelp:true,showSuggestion:true,}));
              
             eSignPanel.addContent(hrLyt);
              
              
              
              lcDocProcPanel.addContent(eSignPanel);
              
              page.addContent(lcDocProcPanel);
              
              
              return page;
              
              }
});