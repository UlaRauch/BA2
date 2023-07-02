$testplan = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\testplans\gw-helloauth-steps.jmx"

$outputname = "teapottests-steps-helloauth-cons-"
$outputfile = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\" + $outputname
$outputHTML = "C:\Users\Ula\Documents\FH\WFP_BA\BA2\teapot2-new\jmeter-tests\results\" + $outputname

$jmeterPath = "C:\Program Files\Apache JMeter\apache-jmeter-5.5\bin\jmeter"

#for ($count = 100; $count -le 100; $count += 1) {
Write-Output "Start"

$count = "300"
$RAMP = "2"
$DURATION = "3"
$TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHVGZ5eG9HVTBjbGxobzhnX3U1SGcwajNucUtjUjdwMUgzS2xXNi1BQTRBIn0.eyJleHAiOjE2ODYyMTQzNjQsImlhdCI6MTY4NjE3ODM2NCwianRpIjoiM2UzZDQ3OWYtNzY3OC00MjFkLTg4ZjQtOWYzMmQwMmQwNmYyIiwiaXNzIjoiaHR0cDovL2hvc3QuZG9ja2VyLmludGVybmFsOjEwMDAxL3JlYWxtcy90ZWFwb3QiLCJzdWIiOiI5ZGI1NzI3My1mNDVkLTQ0MGYtOTEwZS04ZGM3NjRjM2JjYjAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwb3N0bWFuLWNsaWVudCIsInNlc3Npb25fc3RhdGUiOiI4ZjIxZmVlZS03OTYzLTRkOGItODExOC1lZGUzMDcwMzc0ZTQiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtdGVhcG90Il19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI4ZjIxZmVlZS03OTYzLTRkOGItODExOC1lZGUzMDcwMzc0ZTQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InVsYSIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiJ9.K9Dt6uHrrNW1bziOB-K6tKZx4xPHdZycIuE5OZHhBl6iyz9xXj1RLkw99hWQSDk-qckpPBkLNv2EYksTQeha6JscJC_x2bQRcsUFHmhWWuzAuODCIrYXOM6_nZ1cTjAkryj0ewHH5HvB5co1jK3Ui1xES138ceAVj5yysuX9Np5nvMJbj8qVeeLXTYvR0eaf0kRL5G-UWs85vXGgPEvzURfAL9YPX3okStKlxRSAlyTcp9NYqnZB78l1I5nO0dT08NEJiE9Q9t6FHbU1lnCfGCfe5ytfaIh9HNr1UkFrozRg6qjNX8caG47QnZLCU4FkpVD8NUYOEAmXSTy3IJqNDg"
$SESSION = "e5b95370-7d8e-45ad-859c-4199febe7729"

$arguments = "-JTHREADS=" + $count + " -JRAMP=" + $RAMP + " -JDURATION=" + $DURATION + " -JTOKEN=" + $TOKEN + " -JSESSION=" + $SESSION + " -n -t " + $testplan + " -l " + $outputfile + $count + ".csv -e -o " + $outputHTML + $count
Write-Output $arguments

$proc = Start-Process -PassThru -FilePath $jmeterPath -ArgumentList $arguments
$proc.WaitForExit()

Write-Output "Done"
#}