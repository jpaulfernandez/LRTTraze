﻿#pragma checksum "C:\Users\v-alaure\Desktop\HackATren\IntelligentKiosk\Cognitive-Samples-IntelligentKiosk-master\Kiosk\Controls\CameraControl.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "5CA310705BC438ABB1325592AF279786"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IntelligentKioskSample.Controls
{
    partial class CameraControl : 
        global::Windows.UI.Xaml.Controls.UserControl, 
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
            case 1: // Controls\CameraControl.xaml line 1
                {
                    this.cameraControl = (global::Windows.UI.Xaml.Controls.UserControl)(target);
                }
                break;
            case 2: // Controls\CameraControl.xaml line 15
                {
                    this.webCamCaptureElement = (global::Windows.UI.Xaml.Controls.CaptureElement)(target);
                }
                break;
            case 3: // Controls\CameraControl.xaml line 16
                {
                    this.FaceTrackingVisualizationCanvas = (global::Windows.UI.Xaml.Controls.Canvas)(target);
                }
                break;
            case 4: // Controls\CameraControl.xaml line 18
                {
                    this.commandBar = (global::Windows.UI.Xaml.Controls.Grid)(target);
                }
                break;
            case 5: // Controls\CameraControl.xaml line 19
                {
                    global::Windows.UI.Xaml.Controls.Button element5 = (global::Windows.UI.Xaml.Controls.Button)(target);
                    ((global::Windows.UI.Xaml.Controls.Button)element5).Click += this.CameraControlButtonClick;
                }
                break;
            case 6: // Controls\CameraControl.xaml line 20
                {
                    this.cameraControlSymbol = (global::Windows.UI.Xaml.Controls.SymbolIcon)(target);
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

