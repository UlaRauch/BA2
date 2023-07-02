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


# jmeter home location
$jmeterPath = "C:\Program Files\Apache JMeter\apache-jmeter-5.5\bin\jmeter"

#for ($count = 100; $count -le 600; $count += 100) {
$count = 500

$folder = "manually"
#$max = 2
#     for ($i = 0; $i -le $max; $i++) {
$i = 2
        # outputfiles
        $outputFileNameStem = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\" + $folder + "\teapottests-"
        $outputHTMLNameStem = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\" + $folder + "\teapottests-"

        $outputFileName =  $outputFileNameStem + $endpoints[$i] + "-" + $count + ".csv"
        $outputHTMLName = $outputHTMLNameStem + $endpoints[$i] + "-" + $count
        
        $RAMP = ($count + ($count/10))
        $DURATION = ($count + 5)
#        $LOOPCOUNT = 5
        $TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHVGZ5eG9HVTBjbGxobzhnX3U1SGcwajNucUtjUjdwMUgzS2xXNi1BQTRBIn0.eyJleHAiOjE2ODgyNTUzMjksImlhdCI6MTY4ODIxOTMyOSwianRpIjoiN2E1M2Y0ODgtZjc2YS00MDk0LWFlNjQtYjdhNzA0NjI5MjRmIiwiaXNzIjoiaHR0cDovL2hvc3QuZG9ja2VyLmludGVybmFsOjEwMDAxL3JlYWxtcy90ZWFwb3QiLCJhdWQiOiJ0ZWEiLCJzdWIiOiIzMmU1NjQzYy02NWU5LTQ5NDYtOTJjMC04NzdlMWEzNTNlZjciLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJ0ZWFwb3QtZ2F0ZXdheSIsInNlc3Npb25fc3RhdGUiOiI5ZWM0MzQ5NC05OTM4LTRmNjAtYjMxZi0wNjExOWMyYjc2YjkiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLXRlYXBvdCIsInRlYV91c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsidGVhcG90LWdhdGV3YXkiOnsicm9sZXMiOlsicHJpdmlsZWdlZF91c2VyIiwidXNlciJdfX0sInNjb3BlIjoib3BlbmlkIHRlYV9yZWFkIHRlYSIsInNpZCI6IjllYzQzNDk0LTk5MzgtNGY2MC1iMzFmLTA2MTE5YzJiNzZiOSJ9.koUm2gV_AoI90wJJ7NyU_xBWQelBl0AUm1BNikbYFJEKAcEMBFDMT4HEoPPh9cNAhj46elCTUZBt3WyezAnNtuEEj-LH7IoHg0DSZ-gC5qSqNiIk03DHuSssJVxnmJ3lauJmRLvS3zhYdvwdg4LorwVIi0Q2YAfln8JXzcWC00ugrBPbbu9YxPw1Jdu4mpVGK_mCNjd1a_zNWCxzQTJaVclnQ1Md2mVzX8CwR1lH4LoYNtbeBIr7HkvCROzDdS7OOQIjoD0C0DuFlsbz5FAKlpJzeXmDG6qQ6cXnCRwTvGbObNaljh3g1m9-1sX3kLUKp1TtpYiT_MlFHXpdsrKGQw"
#        $SESSION = "0738f055-1bcd-4a80-809d-1060f7e3bebb"

        $arguments = "-JTHREADS=" + $count + " -JRAMP =" + $RAMP + " -DURATION=" + $DURATION + " -JTOKEN=" + $TOKEN  + " -JSESSION=" + $SESSION + " -n -t " + $testplans[$i] + " -l " + $outputFileName + " -e -o " + $outputHTMLName
        Write-Output -FilePath $jmeterPath -ArgumentList $arguments

        $process = Start-Process -PassThru -FilePath $jmeterPath -ArgumentList $arguments
        $process.WaitForExit()

        # write separator into output .csv file
        @("sep=,") + (Get-Content $outputFileName) | Set-Content $outputFileName
       
        #if (i -lt $max) {
        #Start-Sleep -Seconds 20
        #}
#       }
#}