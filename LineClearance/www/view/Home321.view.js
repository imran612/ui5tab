sap.ui.jsview("com.jabil.lnclr.mob.view.Home", {

	getControllerName: function () {
		return "com.jabil.lnclr.mob.view.Home";
	},
	
	createContent: function (oController) {
		
            // alert(1);
              var page = new sap.m.Page({showHeader: true,
                                        showNavButton: false,
                                        alignItems:"center",
                                        });
              
              page.setCustomHeader(new sap.m.Bar("pageHdr",{contentLeft: new sap.m.Image("jblLogo",{src:"img/jabil-logo.jpg",height:"30px"}),contentRight:new sap.m.Button({icon:"sap-icon://log"}) }));
              
              //add welcome user text
            //  page.addContent(new sap.m.Text({text:"Welcome Imran",textAlign:sap.ui.core.TextAlign.Right}));
              page.addContent(new sap.m.Bar("welHdr",{contentRight:new sap.m.Text({text:"Welcome Imran"})}));
              
              //var fLyt=new sap.ui.layout.form.ResponsiveGridLayout("fRGL");
              
              
             
              var selFormPanel = new sap.m.Panel("selFormPanel",{headerText:"Line Clearance Processing Selection",width:"95%"});
             /* var selectionform = new sap.ui.layout.form.SimpleForm("selForm",{ maxContainerCols:2,
                                                                    content:[
                                                                              new sap.m.Label({text:"Plant"}),
                                                                              new sap.m.Input({type:sap.m.InputType.Text,showValueHelp:true,showSuggestion:true}),
                                                                             
                                                                              
                                    
                                                                              ]
                                                                    });
              selFormPanel.addContent(selectionform);
              page.addContent(selFormPanel);*/
              
              
              var resGLyt = new sap.ui.layout.form.ResponsiveGridLayout("RGLYT");
              
              var oForm1 = new sap.ui.layout.form.Form("selForm",{
                                                       //title: "Line Clearance Processing Selection",
                                                       layout: resGLyt,
                                                       formContainers: [
                                            new sap.ui.layout.form.FormContainer({
                                                        formElements: [
                                                            new sap.ui.layout.form.FormElement({
                                                            label: "Plant",
                fields: [new sap.m.Input({type:sap.m.InputType.Text,showValueHelp:true,showSuggestion:true,valueHelpRequest:oController.handValueHelp})]
                                                                                }),
                                                                new sap.ui.layout.form.FormElement({
                                                            label: "PO From",
                                        fields: [new sap.m.Input({type:sap.m.InputType.Text,tooltip:"Purchase Order From",showValueHelp:true,showSuggestion:true}), new sap.m.Text({text:"PO To"}),new sap.m.Input({type:sap.m.InputType.Text,showValueHelp:true,showSuggestion:true})
                                                                                        ]
                                                                                    }),
                                                                                new sap.ui.layout.form.FormElement({
                                                                                                label: "WC From",
                                                                                                 fields: [new sap.m.Input({type:sap.m.InputType.Text,showValueHelp:true,showSuggestion:true}), new sap.m.Text({text:"Work Center To"}),new sap.m.Input({type:sap.m.InputType.Text,showValueHelp:true,showSuggestion:true})
                                                                                            ]
                                                                                        }),
                                                                                           new sap.ui.layout.form.FormElement({
                                                                                            label: "Material",
                                                                                            fields: [new sap.m.Input({type:sap.m.InputType.Text,showValueHelp:true,showSuggestion:true}), new sap.m.Text({text:"Material To"}),new sap.m.Input({type:sap.m.InputType.Text,showValueHelp:true,showSuggestion:true})
                                                                                                ]
                                                                                        }),
                                                                                           new sap.ui.layout.form.FormElement({
                                                                                            label: "Batch",
                                                                                            fields: [new sap.m.Input({type:sap.m.InputType.Text,showValueHelp:true,showSuggestion:true}), new sap.m.Text({text:"Batch To"}),new sap.m.Input({type:sap.m.InputType.Text,showValueHelp:true,showSuggestion:true})
                                                                                            ]
                                                                                        })
                                                                                           
                                                                                    ]
                                                                            })
                                                                        ]
                                                       });
              
               selFormPanel.addContent(oForm1);
            
              selFormPanel.addContent(new sap.m.Text("lcStatusTxt",{text:"Line Clearance Status"}));
              selFormPanel.addContent(new sap.m.Bar("lcStatus",{contentLeft: new sap.m.CheckBox({text:"New"}),contentMiddle: new sap.m.CheckBox({text:"In Process"}),contentRight:new sap.m.CheckBox({text:"Completed"}) }));
              selFormPanel.addContent(new sap.m.Bar("lcBtn",{contentLeft: new sap.m.Button("canBtn",{text:"Cancel"}),contentRight:new sap.m.Button("subBtn",{text:"Submit",press:oController.detailList}) }));
              
              page.addContent(selFormPanel);
/*var list = new sap.m.List("homeButtonList",{noDataText:"Loading..."});
              var listItems = new sap.m.StandardListItem({
                                                         title: "{title}",
                                                         description: "{info}",
                                                         icon:"{icon}",
                                                         type: sap.m.ListType.Active,
                                                         press:oController.handleTilePress
                                                         });
              listItems.addStyleClass("homeButtons");
              list.bindItems("/HomeButtons",listItems,new sap.ui.model.Sorter("id"));
              /*  alert("1");
               var logoffDialog = new sap.m.Dialog("logoffDialog",{
               title: "Logoff Confirmation",
               showHeader: false,
               type: sap.m.DialogType.Standard,
               stretch: false,
               stretchOnPhone : false,
               // content: [new sap.m.Text({"Are you sure you want to logoff?"})],
               beginButton: new sap.m.Button({text:"Yes", press:oController.logoff}),
               endButton: new sap.m.Button({text:"No", press:oController.cancelLogoff})
               });
               logoffDialog.close();
               page.addContent(logoffDialog);*/
             // page.addContent(list);
              //alert(3);
            
              return page;
              
              }
});