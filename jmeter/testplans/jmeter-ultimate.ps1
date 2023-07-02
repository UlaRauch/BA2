# testplans for each endpoint
$gateway0Helloauth = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_0_helloauth.jmx"
$gatewayClHelloauth = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_cl_helloauth.jmx"
$gatewayRsHelloauth = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_rs_helloauth.jmx"

$gateway0Hellotea = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_0_hellotea.jmx"
$gatewayClHellotea = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_cl_hellotea.jmx"
$gatewayRsHellotea = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gateway_rs_hellotea.jmx"

$teas0 = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\teas_0.jmx"
$teasRs = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\teas_rs.jmx"

$testplans = @($gateway0Helloauth, $gatewayClHelloauth, $gatewayRsHelloauth, $gateway0Hellotea, $gatewayClHellotea, $gatewayRsHellotea, $teas0, $teasRs)
$endpoints = @("gateway0Helloauth", "gatewayClHelloauth", "gatewayRsHelloauth", "gateway0Hellotea", "gatewayClHellotea", "gatewayRsHellotea", "teas0", "teasRs")

# outputfiles
$outputFileNameStem = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\ultimate\teapottests-"
$outputHTMLNameStem = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\ultimate\teapottests-"

# jmeter home location
$jmeterPath = "C:\Program Files\Apache JMeter\apache-jmeter-5.5\bin\jmeter"

#for ($count = 500; $count -le 500; $count += 100) {
#$count = 300

#    for ($i = 3; $i -lt 6; $i++) {
$i = 3
        $outputFileName =  $outputFileNameStem + $endpoints[$i] + "-" + ".csv"
        $outputHTMLName = $outputHTMLNameStem + $endpoints[$i]
        
#        $RAMP = $count/100
#        $DURATION = $count/100 + 2
#        $LOOPCOUNT = $count/100
        $TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHVGZ5eG9HVTBjbGxobzhnX3U1SGcwajNucUtjUjdwMUgzS2xXNi1BQTRBIn0.eyJleHAiOjE2ODYyNTEwNDEsImlhdCI6MTY4NjIxNTA0MSwianRpIjoiMGZiNTFiODgtZTZlZS00NTE3LTg5NGEtM2JmNWE4MWU1YjM3IiwiaXNzIjoiaHR0cDovL2hvc3QuZG9ja2VyLmludGVybmFsOjEwMDAxL3JlYWxtcy90ZWFwb3QiLCJzdWIiOiI5ZGI1NzI3My1mNDVkLTQ0MGYtOTEwZS04ZGM3NjRjM2JjYjAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwb3N0bWFuLWNsaWVudCIsInNlc3Npb25fc3RhdGUiOiJkODc4MDA0Ny01NWJkLTQwNjEtYjRlMy05YTI2MjNiMjE2ZjMiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtdGVhcG90Il19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJkODc4MDA0Ny01NWJkLTQwNjEtYjRlMy05YTI2MjNiMjE2ZjMiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InVsYSIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiJ9.BrGnsK9qpxVz01LffT1a24MatmHqF3Edmom0hBhQOPtO01tePT9yqpYUTcCAipKZv2gJUq0gjPJN-ohn6hYqWrVwIj009IvnlVRTJScgsZ0auWRDycvoSn8hVc4Tz9HFcmuBAsb7AjdFzXXQ0PVDifbhULtJM5zRGXqcWj387IK0fzmokq2sy6iEVAbDI78geDLsSAR1aqZZOZE625pBcy5cIGfZR_ks9We8L-UwIHooobLXUCTGmmq1mX6ix1l7VDkNkj2pzUHPoC7fjbKIGXLaQ6as_HVULO9rE7tQrYlhpZrmIPTCj7VskdLTn07tXoT710KUawJMP05kiSwFTQ"
        $SESSION = "358a56f2-7b54-4487-bf2d-13a113b3e45b"

        $arguments = "-JTHREADS=" + $count + "-JTOKEN=" + $TOKEN + " -JSESSION=" + $SESSION + " -n -t " + $testplans[$i] + " -l " + $outputFileName + " -e -o " + $outputHTMLName
        # Write-Output $arguments

        $process = Start-Process -PassThru -FilePath $jmeterPath -ArgumentList $arguments
        $process.WaitForExit()

#        Start-Sleep -Seconds 30

        # write separator into output .csv file
        @("sep=,") + (Get-Content $outputFileName) | Set-Content $outputFileName
#       }
#}