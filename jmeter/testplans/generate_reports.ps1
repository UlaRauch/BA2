# jmeter home location
$jmeterPath = "C:\Program Files\Apache JMeter\apache-jmeter-5.5\bin\jmeter"

$folder = "hellotea-rs"
$endpoint = "gatewayRsHellotea"

for ($threads = 100; $i -le 600; $threads +=  50) {


# output path
$outputFileNameStem = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\" + $folder + "\teapottests-" + $endpoint + "-" + $threads


        $arguments = "-g " + $outputFileNameStem + ".jtl" + " -o " + $outputFileNameStem
        #Write-Output -FilePath $jmeterPath -ArgumentList $arguments

        $process = Start-Process -PassThru -FilePath $jmeterPath -ArgumentList $arguments
        $process.WaitForExit()
}