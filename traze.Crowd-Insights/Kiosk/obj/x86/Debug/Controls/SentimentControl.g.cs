﻿#pragma checksum "C:\Users\v-alaure\Desktop\HackATren\IntelligentKiosk\Cognitive-Samples-IntelligentKiosk-master\Kiosk\Controls\SentimentControl.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "A94DCC7EAC5EC6DE5116BDEAA961CD61"
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
    partial class SentimentControl : 
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
            case 1: // Controls\SentimentControl.xaml line 1
                {
                    global::Windows.UI.Xaml.Controls.UserControl element1 = (global::Windows.UI.Xaml.Controls.UserControl)(target);
                    ((global::Windows.UI.Xaml.Controls.UserControl)element1).SizeChanged += this.OnSizeChanged;
                }
                break;
            case 2: // Controls\SentimentControl.xaml line 14
                {
                    this.GuideLine = (global::Windows.UI.Xaml.Controls.Grid)(target);
                }
                break;
            case 3: // Controls\SentimentControl.xaml line 26
                {
                    this.Pointer = (global::Windows.UI.Xaml.Controls.Grid)(target);
                }
                break;
            case 4: // Controls\SentimentControl.xaml line 27
                {
                    this.PointerText = (global::Windows.UI.Xaml.Controls.TextBlock)(target);
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

