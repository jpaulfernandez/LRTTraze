﻿#pragma checksum "C:\Users\v-alaure\Desktop\HackATren\IntelligentKiosk\Cognitive-Samples-IntelligentKiosk-master\Kiosk\Views\FaceIdentificationSetup.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "62D66540723C32D1AE11FD3A9292763B"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IntelligentKioskSample.Views
{
    partial class FaceIdentificationSetup : 
        global::Windows.UI.Xaml.Controls.Page, 
        global::Windows.UI.Xaml.Markup.IComponentConnector,
        global::Windows.UI.Xaml.Markup.IComponentConnector2
    {
        /// <summary>
        /// Connect()
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Windows.UI.Xaml.Build.Tasks"," 10.0.17.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public void Connect(int connectionId, object target)
        {
            switch(connectionId)
            {
            case 2: // Views\FaceIdentificationSetup.xaml line 22
                {
                    this.commandBar = (global::Windows.UI.Xaml.Controls.CommandBar)(target);
                }
                break;
            case 3: // Views\FaceIdentificationSetup.xaml line 215
                {
                    this.progressControl = (global::Windows.UI.Xaml.Controls.ProgressRing)(target);
                }
                break;
            case 4: // Views\FaceIdentificationSetup.xaml line 176
                {
                    this.selectedPersonFacesGridView = (global::Windows.UI.Xaml.Controls.GridView)(target);
                }
                break;
            case 6: // Views\FaceIdentificationSetup.xaml line 196
                {
                    global::Windows.UI.Xaml.Controls.Image element6 = (global::Windows.UI.Xaml.Controls.Image)(target);
                    ((global::Windows.UI.Xaml.Controls.Image)element6).DataContextChanged += this.OnImageDataContextChanged;
                }
                break;
            case 7: // Views\FaceIdentificationSetup.xaml line 162
                {
                    this.deleteFaceButton = (global::Windows.UI.Xaml.Controls.Button)(target);
                    ((global::Windows.UI.Xaml.Controls.Button)this.deleteFaceButton).Click += this.OnDeleteFaceClicked;
                }
                break;
            case 8: // Views\FaceIdentificationSetup.xaml line 166
                {
                    this.addFacesButton = (global::Windows.UI.Xaml.Controls.Button)(target);
                }
                break;
            case 9: // Views\FaceIdentificationSetup.xaml line 169
                {
                    this.trainingImageCollectorFlyout = (global::Windows.UI.Xaml.Controls.Flyout)(target);
                    ((global::Windows.UI.Xaml.Controls.Flyout)this.trainingImageCollectorFlyout).Opened += this.OnImageSearchFlyoutOpened;
                }
                break;
            case 10: // Views\FaceIdentificationSetup.xaml line 170
                {
                    this.bingSearchControl = (global::IntelligentKioskSample.Controls.ImageSearchUserControl)(target);
                    ((global::IntelligentKioskSample.Controls.ImageSearchUserControl)this.bingSearchControl).OnImageSearchCompleted += this.OnImageSearchCompleted;
                    ((global::IntelligentKioskSample.Controls.ImageSearchUserControl)this.bingSearchControl).OnImageSearchCanceled += this.OnImageSearchCanceled;
                }
                break;
            case 11: // Views\FaceIdentificationSetup.xaml line 139
                {
                    this.personGroupPeopleListView = (global::Windows.UI.Xaml.Controls.ListView)(target);
                    ((global::Windows.UI.Xaml.Controls.ListView)this.personGroupPeopleListView).SelectionChanged += this.OnPersonSelectionChanged;
                }
                break;
            case 13: // Views\FaceIdentificationSetup.xaml line 119
                {
                    this.deletePersonButton = (global::Windows.UI.Xaml.Controls.Button)(target);
                    ((global::Windows.UI.Xaml.Controls.Button)this.deletePersonButton).Click += this.OnDeletePersonClicked;
                }
                break;
            case 14: // Views\FaceIdentificationSetup.xaml line 126
                {
                    this.addPersonFlyout = (global::Windows.UI.Xaml.Controls.Flyout)(target);
                }
                break;
            case 15: // Views\FaceIdentificationSetup.xaml line 128
                {
                    this.personNameTextBox = (global::Windows.UI.Xaml.Controls.AutoSuggestBox)(target);
                    ((global::Windows.UI.Xaml.Controls.AutoSuggestBox)this.personNameTextBox).QuerySubmitted += this.OnPersonNameQuerySubmitted;
                    ((global::Windows.UI.Xaml.Controls.AutoSuggestBox)this.personNameTextBox).TextChanged += this.OnPersonNameTextBoxChanged;
                }
                break;
            case 16: // Views\FaceIdentificationSetup.xaml line 129
                {
                    this.addButton = (global::Windows.UI.Xaml.Controls.Button)(target);
                    ((global::Windows.UI.Xaml.Controls.Button)this.addButton).Click += this.OnAddPersonButtonClicked;
                }
                break;
            case 17: // Views\FaceIdentificationSetup.xaml line 130
                {
                    this.cancelButton = (global::Windows.UI.Xaml.Controls.Button)(target);
                    ((global::Windows.UI.Xaml.Controls.Button)this.cancelButton).Click += this.OnCancelAddPersonButtonClicked;
                }
                break;
            case 18: // Views\FaceIdentificationSetup.xaml line 99
                {
                    this.personGroupsListView = (global::Windows.UI.Xaml.Controls.ComboBox)(target);
                    ((global::Windows.UI.Xaml.Controls.ComboBox)this.personGroupsListView).SelectionChanged += this.OnGroupSelectionChanged;
                }
                break;
            case 20: // Views\FaceIdentificationSetup.xaml line 82
                {
                    this.deleteGroupButton = (global::Windows.UI.Xaml.Controls.Button)(target);
                    ((global::Windows.UI.Xaml.Controls.Button)this.deleteGroupButton).Click += this.OnDeletePersonGroupClicked;
                }
                break;
            case 21: // Views\FaceIdentificationSetup.xaml line 88
                {
                    this.addPersonGroupFlyout = (global::Windows.UI.Xaml.Controls.Flyout)(target);
                }
                break;
            case 22: // Views\FaceIdentificationSetup.xaml line 90
                {
                    this.personGroupNameTextBox = (global::Windows.UI.Xaml.Controls.TextBox)(target);
                }
                break;
            case 23: // Views\FaceIdentificationSetup.xaml line 91
                {
                    global::Windows.UI.Xaml.Controls.Button element23 = (global::Windows.UI.Xaml.Controls.Button)(target);
                    ((global::Windows.UI.Xaml.Controls.Button)element23).Click += this.OnAddPersonGroupButtonClicked;
                }
                break;
            case 24: // Views\FaceIdentificationSetup.xaml line 92
                {
                    global::Windows.UI.Xaml.Controls.Button element24 = (global::Windows.UI.Xaml.Controls.Button)(target);
                    ((global::Windows.UI.Xaml.Controls.Button)element24).Click += this.OnCancelAddPersonGroupButtonClicked;
                }
                break;
            case 25: // Views\FaceIdentificationSetup.xaml line 24
                {
                    global::Windows.UI.Xaml.Controls.AppBarButton element25 = (global::Windows.UI.Xaml.Controls.AppBarButton)(target);
                    ((global::Windows.UI.Xaml.Controls.AppBarButton)element25).Click += this.OnStartTrainingClicked;
                }
                break;
            case 26: // Views\FaceIdentificationSetup.xaml line 27
                {
                    global::Windows.UI.Xaml.Controls.AppBarButton element26 = (global::Windows.UI.Xaml.Controls.AppBarButton)(target);
                    ((global::Windows.UI.Xaml.Controls.AppBarButton)element26).Click += this.OnSelectFolderButtonClicked;
                }
                break;
            case 27: // Views\FaceIdentificationSetup.xaml line 30
                {
                    this.addPeopleInBatchesFlyout = (global::Windows.UI.Xaml.Controls.Flyout)(target);
                }
                break;
            case 28: // Views\FaceIdentificationSetup.xaml line 36
                {
                    this.importImageSearchKeywordPrefix = (global::Windows.UI.Xaml.Controls.TextBox)(target);
                }
                break;
            case 29: // Views\FaceIdentificationSetup.xaml line 37
                {
                    this.importImageSearchKeywordSufix = (global::Windows.UI.Xaml.Controls.TextBox)(target);
                }
                break;
            case 30: // Views\FaceIdentificationSetup.xaml line 40
                {
                    this.ComfirmImportActionButton = (global::Windows.UI.Xaml.Controls.AppBarButton)(target);
                    ((global::Windows.UI.Xaml.Controls.AppBarButton)this.ComfirmImportActionButton).Click += this.OnConfirmImportButtonClicked;
                }
                break;
            case 31: // Views\FaceIdentificationSetup.xaml line 44
                {
                    global::Windows.UI.Xaml.Controls.AppBarButton element31 = (global::Windows.UI.Xaml.Controls.AppBarButton)(target);
                    ((global::Windows.UI.Xaml.Controls.AppBarButton)element31).Click += this.OnCancelImportButtonClicked;
                }
                break;
            case 32: // Views\FaceIdentificationSetup.xaml line 33
                {
                    this.importNamesTextBox = (global::Windows.UI.Xaml.Controls.TextBox)(target);
                }
                break;
            default:
                break;
            }
            this._contentLoaded = true;
        }

        /// <summary>
        /// GetBindingConnector(int connectionId, object target)
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Windows.UI.Xaml.Build.Tasks"," 10.0.17.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public global::Windows.UI.Xaml.Markup.IComponentConnector GetBindingConnector(int connectionId, object target)
        {
            global::Windows.UI.Xaml.Markup.IComponentConnector returnValue = null;
            return returnValue;
        }
    }
}

