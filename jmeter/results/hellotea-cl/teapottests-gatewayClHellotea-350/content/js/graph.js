/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 37.0, "minX": 0.0, "maxY": 257.0, "series": [{"data": [[0.0, 37.0], [0.1, 37.0], [0.2, 37.0], [0.3, 37.0], [0.4, 37.0], [0.5, 37.0], [0.6, 37.0], [0.7, 37.0], [0.8, 37.0], [0.9, 38.0], [1.0, 38.0], [1.1, 38.0], [1.2, 38.0], [1.3, 38.0], [1.4, 38.0], [1.5, 44.0], [1.6, 44.0], [1.7, 44.0], [1.8, 45.0], [1.9, 45.0], [2.0, 46.0], [2.1, 46.0], [2.2, 46.0], [2.3, 47.0], [2.4, 47.0], [2.5, 47.0], [2.6, 47.0], [2.7, 47.0], [2.8, 47.0], [2.9, 50.0], [3.0, 50.0], [3.1, 50.0], [3.2, 51.0], [3.3, 51.0], [3.4, 51.0], [3.5, 52.0], [3.6, 52.0], [3.7, 52.0], [3.8, 52.0], [3.9, 52.0], [4.0, 59.0], [4.1, 59.0], [4.2, 59.0], [4.3, 61.0], [4.4, 61.0], [4.5, 61.0], [4.6, 63.0], [4.7, 63.0], [4.8, 63.0], [4.9, 63.0], [5.0, 63.0], [5.1, 63.0], [5.2, 64.0], [5.3, 64.0], [5.4, 64.0], [5.5, 64.0], [5.6, 64.0], [5.7, 64.0], [5.8, 64.0], [5.9, 64.0], [6.0, 64.0], [6.1, 64.0], [6.2, 64.0], [6.3, 65.0], [6.4, 65.0], [6.5, 65.0], [6.6, 68.0], [6.7, 68.0], [6.8, 68.0], [6.9, 68.0], [7.0, 68.0], [7.1, 68.0], [7.2, 68.0], [7.3, 68.0], [7.4, 68.0], [7.5, 69.0], [7.6, 69.0], [7.7, 69.0], [7.8, 70.0], [7.9, 70.0], [8.0, 70.0], [8.1, 70.0], [8.2, 70.0], [8.3, 73.0], [8.4, 73.0], [8.5, 73.0], [8.6, 74.0], [8.7, 74.0], [8.8, 74.0], [8.9, 74.0], [9.0, 74.0], [9.1, 74.0], [9.2, 74.0], [9.3, 74.0], [9.4, 74.0], [9.5, 78.0], [9.6, 78.0], [9.7, 78.0], [9.8, 79.0], [9.9, 79.0], [10.0, 79.0], [10.1, 80.0], [10.2, 80.0], [10.3, 81.0], [10.4, 81.0], [10.5, 81.0], [10.6, 82.0], [10.7, 82.0], [10.8, 82.0], [10.9, 82.0], [11.0, 82.0], [11.1, 82.0], [11.2, 84.0], [11.3, 84.0], [11.4, 84.0], [11.5, 85.0], [11.6, 85.0], [11.7, 85.0], [11.8, 86.0], [11.9, 86.0], [12.0, 86.0], [12.1, 86.0], [12.2, 86.0], [12.3, 87.0], [12.4, 87.0], [12.5, 87.0], [12.6, 87.0], [12.7, 87.0], [12.8, 87.0], [12.9, 88.0], [13.0, 88.0], [13.1, 88.0], [13.2, 89.0], [13.3, 89.0], [13.4, 89.0], [13.5, 89.0], [13.6, 89.0], [13.7, 89.0], [13.8, 92.0], [13.9, 92.0], [14.0, 92.0], [14.1, 93.0], [14.2, 93.0], [14.3, 95.0], [14.4, 95.0], [14.5, 95.0], [14.6, 96.0], [14.7, 96.0], [14.8, 96.0], [14.9, 97.0], [15.0, 97.0], [15.1, 97.0], [15.2, 98.0], [15.3, 98.0], [15.4, 98.0], [15.5, 98.0], [15.6, 98.0], [15.7, 98.0], [15.8, 99.0], [15.9, 99.0], [16.0, 99.0], [16.1, 116.0], [16.2, 116.0], [16.3, 116.0], [16.4, 116.0], [16.5, 116.0], [16.6, 117.0], [16.7, 117.0], [16.8, 117.0], [16.9, 117.0], [17.0, 117.0], [17.1, 117.0], [17.2, 118.0], [17.3, 118.0], [17.4, 118.0], [17.5, 118.0], [17.6, 118.0], [17.7, 118.0], [17.8, 123.0], [17.9, 123.0], [18.0, 123.0], [18.1, 123.0], [18.2, 123.0], [18.3, 126.0], [18.4, 126.0], [18.5, 126.0], [18.6, 126.0], [18.7, 126.0], [18.8, 126.0], [18.9, 132.0], [19.0, 132.0], [19.1, 132.0], [19.2, 133.0], [19.3, 133.0], [19.4, 133.0], [19.5, 133.0], [19.6, 133.0], [19.7, 133.0], [19.8, 133.0], [19.9, 133.0], [20.0, 133.0], [20.1, 134.0], [20.2, 134.0], [20.3, 135.0], [20.4, 135.0], [20.5, 135.0], [20.6, 137.0], [20.7, 137.0], [20.8, 137.0], [20.9, 139.0], [21.0, 139.0], [21.1, 139.0], [21.2, 139.0], [21.3, 139.0], [21.4, 139.0], [21.5, 139.0], [21.6, 139.0], [21.7, 139.0], [21.8, 140.0], [21.9, 140.0], [22.0, 140.0], [22.1, 141.0], [22.2, 141.0], [22.3, 141.0], [22.4, 141.0], [22.5, 141.0], [22.6, 141.0], [22.7, 141.0], [22.8, 141.0], [22.9, 141.0], [23.0, 141.0], [23.1, 141.0], [23.2, 141.0], [23.3, 141.0], [23.4, 141.0], [23.5, 141.0], [23.6, 141.0], [23.7, 141.0], [23.8, 142.0], [23.9, 142.0], [24.0, 142.0], [24.1, 142.0], [24.2, 142.0], [24.3, 143.0], [24.4, 143.0], [24.5, 143.0], [24.6, 143.0], [24.7, 143.0], [24.8, 143.0], [24.9, 144.0], [25.0, 144.0], [25.1, 144.0], [25.2, 144.0], [25.3, 144.0], [25.4, 144.0], [25.5, 144.0], [25.6, 144.0], [25.7, 144.0], [25.8, 145.0], [25.9, 145.0], [26.0, 145.0], [26.1, 145.0], [26.2, 145.0], [26.3, 145.0], [26.4, 145.0], [26.5, 145.0], [26.6, 146.0], [26.7, 146.0], [26.8, 146.0], [26.9, 147.0], [27.0, 147.0], [27.1, 147.0], [27.2, 148.0], [27.3, 148.0], [27.4, 148.0], [27.5, 149.0], [27.6, 149.0], [27.7, 149.0], [27.8, 149.0], [27.9, 149.0], [28.0, 149.0], [28.1, 149.0], [28.2, 149.0], [28.3, 150.0], [28.4, 150.0], [28.5, 150.0], [28.6, 150.0], [28.7, 150.0], [28.8, 150.0], [28.9, 150.0], [29.0, 150.0], [29.1, 150.0], [29.2, 150.0], [29.3, 150.0], [29.4, 150.0], [29.5, 150.0], [29.6, 150.0], [29.7, 150.0], [29.8, 150.0], [29.9, 150.0], [30.0, 150.0], [30.1, 151.0], [30.2, 151.0], [30.3, 151.0], [30.4, 151.0], [30.5, 151.0], [30.6, 154.0], [30.7, 154.0], [30.8, 154.0], [30.9, 155.0], [31.0, 155.0], [31.1, 155.0], [31.2, 156.0], [31.3, 156.0], [31.4, 156.0], [31.5, 156.0], [31.6, 156.0], [31.7, 156.0], [31.8, 156.0], [31.9, 156.0], [32.0, 156.0], [32.1, 157.0], [32.2, 157.0], [32.3, 158.0], [32.4, 158.0], [32.5, 158.0], [32.6, 158.0], [32.7, 158.0], [32.8, 158.0], [32.9, 159.0], [33.0, 159.0], [33.1, 159.0], [33.2, 159.0], [33.3, 159.0], [33.4, 159.0], [33.5, 159.0], [33.6, 159.0], [33.7, 159.0], [33.8, 159.0], [33.9, 159.0], [34.0, 159.0], [34.1, 159.0], [34.2, 159.0], [34.3, 160.0], [34.4, 160.0], [34.5, 160.0], [34.6, 160.0], [34.7, 160.0], [34.8, 160.0], [34.9, 160.0], [35.0, 160.0], [35.1, 160.0], [35.2, 160.0], [35.3, 160.0], [35.4, 160.0], [35.5, 160.0], [35.6, 160.0], [35.7, 160.0], [35.8, 161.0], [35.9, 161.0], [36.0, 161.0], [36.1, 161.0], [36.2, 161.0], [36.3, 162.0], [36.4, 162.0], [36.5, 162.0], [36.6, 163.0], [36.7, 163.0], [36.8, 163.0], [36.9, 163.0], [37.0, 163.0], [37.1, 163.0], [37.2, 163.0], [37.3, 163.0], [37.4, 163.0], [37.5, 163.0], [37.6, 163.0], [37.7, 163.0], [37.8, 163.0], [37.9, 163.0], [38.0, 163.0], [38.1, 164.0], [38.2, 164.0], [38.3, 164.0], [38.4, 164.0], [38.5, 164.0], [38.6, 165.0], [38.7, 165.0], [38.8, 165.0], [38.9, 165.0], [39.0, 165.0], [39.1, 165.0], [39.2, 165.0], [39.3, 165.0], [39.4, 165.0], [39.5, 166.0], [39.6, 166.0], [39.7, 166.0], [39.8, 167.0], [39.9, 167.0], [40.0, 167.0], [40.1, 167.0], [40.2, 167.0], [40.3, 168.0], [40.4, 168.0], [40.5, 168.0], [40.6, 168.0], [40.7, 168.0], [40.8, 168.0], [40.9, 169.0], [41.0, 169.0], [41.1, 169.0], [41.2, 169.0], [41.3, 169.0], [41.4, 169.0], [41.5, 169.0], [41.6, 169.0], [41.7, 169.0], [41.8, 169.0], [41.9, 169.0], [42.0, 169.0], [42.1, 169.0], [42.2, 169.0], [42.3, 169.0], [42.4, 169.0], [42.5, 169.0], [42.6, 169.0], [42.7, 169.0], [42.8, 169.0], [42.9, 169.0], [43.0, 169.0], [43.1, 169.0], [43.2, 170.0], [43.3, 170.0], [43.4, 170.0], [43.5, 170.0], [43.6, 170.0], [43.7, 170.0], [43.8, 170.0], [43.9, 170.0], [44.0, 171.0], [44.1, 171.0], [44.2, 171.0], [44.3, 172.0], [44.4, 172.0], [44.5, 172.0], [44.6, 172.0], [44.7, 172.0], [44.8, 172.0], [44.9, 172.0], [45.0, 172.0], [45.1, 172.0], [45.2, 173.0], [45.3, 173.0], [45.4, 173.0], [45.5, 173.0], [45.6, 173.0], [45.7, 173.0], [45.8, 173.0], [45.9, 173.0], [46.0, 174.0], [46.1, 174.0], [46.2, 174.0], [46.3, 174.0], [46.4, 174.0], [46.5, 174.0], [46.6, 174.0], [46.7, 174.0], [46.8, 174.0], [46.9, 175.0], [47.0, 175.0], [47.1, 175.0], [47.2, 175.0], [47.3, 175.0], [47.4, 175.0], [47.5, 175.0], [47.6, 175.0], [47.7, 175.0], [47.8, 176.0], [47.9, 176.0], [48.0, 177.0], [48.1, 177.0], [48.2, 177.0], [48.3, 177.0], [48.4, 177.0], [48.5, 177.0], [48.6, 178.0], [48.7, 178.0], [48.8, 178.0], [48.9, 179.0], [49.0, 179.0], [49.1, 179.0], [49.2, 179.0], [49.3, 179.0], [49.4, 179.0], [49.5, 179.0], [49.6, 179.0], [49.7, 179.0], [49.8, 179.0], [49.9, 179.0], [50.0, 179.0], [50.1, 179.0], [50.2, 179.0], [50.3, 179.0], [50.4, 179.0], [50.5, 179.0], [50.6, 180.0], [50.7, 180.0], [50.8, 180.0], [50.9, 180.0], [51.0, 180.0], [51.1, 180.0], [51.2, 180.0], [51.3, 180.0], [51.4, 180.0], [51.5, 181.0], [51.6, 181.0], [51.7, 181.0], [51.8, 181.0], [51.9, 181.0], [52.0, 181.0], [52.1, 181.0], [52.2, 181.0], [52.3, 181.0], [52.4, 181.0], [52.5, 181.0], [52.6, 182.0], [52.7, 182.0], [52.8, 182.0], [52.9, 183.0], [53.0, 183.0], [53.1, 183.0], [53.2, 183.0], [53.3, 183.0], [53.4, 183.0], [53.5, 183.0], [53.6, 183.0], [53.7, 183.0], [53.8, 184.0], [53.9, 184.0], [54.0, 184.0], [54.1, 184.0], [54.2, 184.0], [54.3, 184.0], [54.4, 184.0], [54.5, 184.0], [54.6, 184.0], [54.7, 184.0], [54.8, 184.0], [54.9, 184.0], [55.0, 184.0], [55.1, 184.0], [55.2, 184.0], [55.3, 184.0], [55.4, 184.0], [55.5, 185.0], [55.6, 185.0], [55.7, 185.0], [55.8, 185.0], [55.9, 185.0], [56.0, 186.0], [56.1, 186.0], [56.2, 186.0], [56.3, 186.0], [56.4, 186.0], [56.5, 186.0], [56.6, 186.0], [56.7, 186.0], [56.8, 186.0], [56.9, 186.0], [57.0, 186.0], [57.1, 186.0], [57.2, 187.0], [57.3, 187.0], [57.4, 187.0], [57.5, 187.0], [57.6, 187.0], [57.7, 187.0], [57.8, 187.0], [57.9, 187.0], [58.0, 187.0], [58.1, 187.0], [58.2, 187.0], [58.3, 188.0], [58.4, 188.0], [58.5, 188.0], [58.6, 188.0], [58.7, 188.0], [58.8, 188.0], [58.9, 189.0], [59.0, 189.0], [59.1, 189.0], [59.2, 189.0], [59.3, 189.0], [59.4, 189.0], [59.5, 189.0], [59.6, 189.0], [59.7, 189.0], [59.8, 189.0], [59.9, 189.0], [60.0, 190.0], [60.1, 190.0], [60.2, 190.0], [60.3, 190.0], [60.4, 190.0], [60.5, 190.0], [60.6, 190.0], [60.7, 190.0], [60.8, 190.0], [60.9, 190.0], [61.0, 190.0], [61.1, 190.0], [61.2, 190.0], [61.3, 190.0], [61.4, 190.0], [61.5, 192.0], [61.6, 192.0], [61.7, 192.0], [61.8, 192.0], [61.9, 192.0], [62.0, 192.0], [62.1, 192.0], [62.2, 192.0], [62.3, 192.0], [62.4, 192.0], [62.5, 192.0], [62.6, 193.0], [62.7, 193.0], [62.8, 193.0], [62.9, 193.0], [63.0, 193.0], [63.1, 193.0], [63.2, 193.0], [63.3, 193.0], [63.4, 193.0], [63.5, 194.0], [63.6, 194.0], [63.7, 194.0], [63.8, 194.0], [63.9, 194.0], [64.0, 194.0], [64.1, 194.0], [64.2, 194.0], [64.3, 195.0], [64.4, 195.0], [64.5, 195.0], [64.6, 196.0], [64.7, 196.0], [64.8, 196.0], [64.9, 196.0], [65.0, 196.0], [65.1, 196.0], [65.2, 196.0], [65.3, 196.0], [65.4, 196.0], [65.5, 196.0], [65.6, 196.0], [65.7, 196.0], [65.8, 197.0], [65.9, 197.0], [66.0, 197.0], [66.1, 197.0], [66.2, 197.0], [66.3, 197.0], [66.4, 197.0], [66.5, 197.0], [66.6, 198.0], [66.7, 198.0], [66.8, 198.0], [66.9, 198.0], [67.0, 198.0], [67.1, 198.0], [67.2, 199.0], [67.3, 199.0], [67.4, 199.0], [67.5, 199.0], [67.6, 199.0], [67.7, 199.0], [67.8, 199.0], [67.9, 199.0], [68.0, 199.0], [68.1, 199.0], [68.2, 199.0], [68.3, 199.0], [68.4, 199.0], [68.5, 199.0], [68.6, 200.0], [68.7, 200.0], [68.8, 200.0], [68.9, 201.0], [69.0, 201.0], [69.1, 201.0], [69.2, 201.0], [69.3, 201.0], [69.4, 201.0], [69.5, 201.0], [69.6, 201.0], [69.7, 201.0], [69.8, 201.0], [69.9, 201.0], [70.0, 201.0], [70.1, 201.0], [70.2, 201.0], [70.3, 202.0], [70.4, 202.0], [70.5, 202.0], [70.6, 202.0], [70.7, 202.0], [70.8, 202.0], [70.9, 202.0], [71.0, 202.0], [71.1, 202.0], [71.2, 203.0], [71.3, 203.0], [71.4, 203.0], [71.5, 203.0], [71.6, 203.0], [71.7, 203.0], [71.8, 203.0], [71.9, 203.0], [72.0, 203.0], [72.1, 203.0], [72.2, 203.0], [72.3, 203.0], [72.4, 203.0], [72.5, 203.0], [72.6, 204.0], [72.7, 204.0], [72.8, 204.0], [72.9, 204.0], [73.0, 204.0], [73.1, 204.0], [73.2, 204.0], [73.3, 204.0], [73.4, 204.0], [73.5, 204.0], [73.6, 204.0], [73.7, 204.0], [73.8, 204.0], [73.9, 204.0], [74.0, 204.0], [74.1, 205.0], [74.2, 205.0], [74.3, 205.0], [74.4, 205.0], [74.5, 205.0], [74.6, 206.0], [74.7, 206.0], [74.8, 206.0], [74.9, 206.0], [75.0, 206.0], [75.1, 206.0], [75.2, 207.0], [75.3, 207.0], [75.4, 207.0], [75.5, 207.0], [75.6, 207.0], [75.7, 207.0], [75.8, 207.0], [75.9, 207.0], [76.0, 207.0], [76.1, 207.0], [76.2, 207.0], [76.3, 207.0], [76.4, 207.0], [76.5, 207.0], [76.6, 208.0], [76.7, 208.0], [76.8, 208.0], [76.9, 208.0], [77.0, 208.0], [77.1, 208.0], [77.2, 208.0], [77.3, 208.0], [77.4, 208.0], [77.5, 208.0], [77.6, 208.0], [77.7, 208.0], [77.8, 208.0], [77.9, 208.0], [78.0, 208.0], [78.1, 208.0], [78.2, 208.0], [78.3, 208.0], [78.4, 208.0], [78.5, 208.0], [78.6, 209.0], [78.7, 209.0], [78.8, 209.0], [78.9, 209.0], [79.0, 209.0], [79.1, 209.0], [79.2, 210.0], [79.3, 210.0], [79.4, 210.0], [79.5, 210.0], [79.6, 210.0], [79.7, 210.0], [79.8, 210.0], [79.9, 210.0], [80.0, 210.0], [80.1, 210.0], [80.2, 210.0], [80.3, 211.0], [80.4, 211.0], [80.5, 211.0], [80.6, 211.0], [80.7, 211.0], [80.8, 211.0], [80.9, 213.0], [81.0, 213.0], [81.1, 213.0], [81.2, 213.0], [81.3, 213.0], [81.4, 213.0], [81.5, 213.0], [81.6, 213.0], [81.7, 213.0], [81.8, 214.0], [81.9, 214.0], [82.0, 214.0], [82.1, 214.0], [82.2, 214.0], [82.3, 214.0], [82.4, 214.0], [82.5, 214.0], [82.6, 214.0], [82.7, 214.0], [82.8, 214.0], [82.9, 215.0], [83.0, 215.0], [83.1, 215.0], [83.2, 215.0], [83.3, 215.0], [83.4, 215.0], [83.5, 215.0], [83.6, 215.0], [83.7, 215.0], [83.8, 215.0], [83.9, 215.0], [84.0, 215.0], [84.1, 215.0], [84.2, 215.0], [84.3, 216.0], [84.4, 216.0], [84.5, 216.0], [84.6, 216.0], [84.7, 216.0], [84.8, 216.0], [84.9, 216.0], [85.0, 216.0], [85.1, 216.0], [85.2, 216.0], [85.3, 216.0], [85.4, 216.0], [85.5, 216.0], [85.6, 216.0], [85.7, 216.0], [85.8, 217.0], [85.9, 217.0], [86.0, 217.0], [86.1, 218.0], [86.2, 218.0], [86.3, 218.0], [86.4, 218.0], [86.5, 218.0], [86.6, 218.0], [86.7, 218.0], [86.8, 218.0], [86.9, 219.0], [87.0, 219.0], [87.1, 219.0], [87.2, 219.0], [87.3, 219.0], [87.4, 219.0], [87.5, 219.0], [87.6, 219.0], [87.7, 219.0], [87.8, 220.0], [87.9, 220.0], [88.0, 220.0], [88.1, 220.0], [88.2, 220.0], [88.3, 220.0], [88.4, 220.0], [88.5, 220.0], [88.6, 220.0], [88.7, 220.0], [88.8, 220.0], [88.9, 220.0], [89.0, 220.0], [89.1, 220.0], [89.2, 220.0], [89.3, 220.0], [89.4, 220.0], [89.5, 220.0], [89.6, 220.0], [89.7, 220.0], [89.8, 221.0], [89.9, 221.0], [90.0, 221.0], [90.1, 221.0], [90.2, 221.0], [90.3, 221.0], [90.4, 221.0], [90.5, 221.0], [90.6, 222.0], [90.7, 222.0], [90.8, 222.0], [90.9, 222.0], [91.0, 222.0], [91.1, 222.0], [91.2, 222.0], [91.3, 222.0], [91.4, 222.0], [91.5, 223.0], [91.6, 223.0], [91.7, 223.0], [91.8, 223.0], [91.9, 223.0], [92.0, 223.0], [92.1, 223.0], [92.2, 223.0], [92.3, 223.0], [92.4, 223.0], [92.5, 223.0], [92.6, 223.0], [92.7, 223.0], [92.8, 223.0], [92.9, 224.0], [93.0, 224.0], [93.1, 224.0], [93.2, 226.0], [93.3, 226.0], [93.4, 226.0], [93.5, 226.0], [93.6, 226.0], [93.7, 226.0], [93.8, 226.0], [93.9, 226.0], [94.0, 226.0], [94.1, 226.0], [94.2, 226.0], [94.3, 226.0], [94.4, 226.0], [94.5, 226.0], [94.6, 227.0], [94.7, 227.0], [94.8, 227.0], [94.9, 227.0], [95.0, 227.0], [95.1, 227.0], [95.2, 228.0], [95.3, 228.0], [95.4, 228.0], [95.5, 229.0], [95.6, 229.0], [95.7, 229.0], [95.8, 229.0], [95.9, 229.0], [96.0, 229.0], [96.1, 229.0], [96.2, 229.0], [96.3, 231.0], [96.4, 231.0], [96.5, 231.0], [96.6, 233.0], [96.7, 233.0], [96.8, 233.0], [96.9, 234.0], [97.0, 234.0], [97.1, 234.0], [97.2, 235.0], [97.3, 235.0], [97.4, 235.0], [97.5, 237.0], [97.6, 237.0], [97.7, 237.0], [97.8, 238.0], [97.9, 238.0], [98.0, 238.0], [98.1, 239.0], [98.2, 239.0], [98.3, 240.0], [98.4, 240.0], [98.5, 240.0], [98.6, 242.0], [98.7, 242.0], [98.8, 242.0], [98.9, 247.0], [99.0, 247.0], [99.1, 247.0], [99.2, 250.0], [99.3, 250.0], [99.4, 250.0], [99.5, 256.0], [99.6, 256.0], [99.7, 256.0], [99.8, 257.0], [99.9, 257.0], [100.0, 257.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 56.0, "minX": 0.0, "maxY": 184.0, "series": [{"data": [[0.0, 56.0], [100.0, 184.0], [200.0, 110.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 350.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 350.0, "series": [{"data": [[0.0, 350.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 138.76285714285723, "minX": 1.68830064E12, "maxY": 138.76285714285723, "series": [{"data": [[1.68830064E12, 138.76285714285723]], "isOverall": false, "label": "gateway_cl/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830064E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 66.0, "minX": 1.0, "maxY": 247.0, "series": [{"data": [[2.0, 229.0], [3.0, 223.0], [4.0, 220.0], [7.0, 208.0], [8.0, 216.0], [11.0, 203.0], [12.0, 215.0], [18.0, 214.83333333333334], [19.0, 220.0], [20.0, 177.0], [22.0, 223.0], [23.0, 213.0], [26.0, 218.0], [27.0, 217.0], [28.0, 219.0], [30.0, 226.0], [31.0, 173.0], [32.0, 220.0], [35.0, 208.0], [34.0, 211.0], [37.0, 247.0], [36.0, 186.0], [39.0, 229.0], [38.0, 176.0], [41.0, 200.0], [40.0, 226.0], [43.0, 214.0], [44.0, 206.0], [47.0, 214.66666666666666], [49.0, 169.0], [51.0, 201.0], [50.0, 234.0], [52.0, 86.25], [53.0, 130.0], [54.0, 125.5], [55.0, 91.0], [56.0, 96.33333333333334], [58.0, 205.0], [61.0, 193.5], [60.0, 206.0], [63.0, 214.5], [65.0, 95.66666666666666], [64.0, 98.33333333333334], [67.0, 196.0], [71.0, 190.0], [70.0, 171.33333333333334], [73.0, 211.5], [79.0, 66.0], [78.0, 179.0], [77.0, 203.0], [76.0, 186.33333333333334], [83.0, 130.5], [82.0, 101.66666666666666], [81.0, 68.0], [80.0, 199.5], [87.0, 113.0], [85.0, 100.75], [84.0, 137.25], [86.0, 204.0], [88.0, 143.5], [90.0, 82.0], [91.0, 144.5], [89.0, 223.0], [92.0, 118.33333333333334], [93.0, 74.0], [94.0, 199.0], [99.0, 76.5], [97.0, 187.0], [96.0, 191.0], [100.0, 160.25], [102.0, 195.0], [107.0, 214.0], [106.0, 190.5], [104.0, 204.5], [111.0, 133.66666666666666], [109.0, 98.0], [110.0, 220.0], [113.0, 156.0], [115.0, 193.5], [119.0, 179.33333333333334], [118.0, 97.0], [116.0, 88.0], [117.0, 207.0], [120.0, 118.33333333333334], [122.0, 232.5], [127.0, 141.0], [126.0, 191.0], [124.0, 201.0], [135.0, 207.0], [132.0, 179.0], [131.0, 204.0], [130.0, 208.5], [128.0, 208.0], [143.0, 185.0], [142.0, 201.0], [139.0, 197.0], [138.0, 201.0], [136.0, 191.66666666666666], [151.0, 211.0], [150.0, 145.0], [148.0, 172.0], [146.0, 205.0], [145.0, 218.0], [144.0, 199.0], [159.0, 193.0], [157.0, 167.0], [152.0, 203.0], [167.0, 220.0], [166.0, 184.0], [165.0, 147.5], [164.0, 192.5], [163.0, 174.0], [162.0, 182.33333333333334], [160.0, 174.5], [173.0, 127.5], [175.0, 122.33333333333333], [171.0, 130.0], [172.0, 189.0], [170.0, 139.0], [168.0, 177.0], [182.0, 210.0], [181.0, 210.0], [180.0, 170.0], [179.0, 173.66666666666666], [176.0, 169.0], [191.0, 139.5], [189.0, 186.0], [188.0, 156.0], [186.0, 164.0], [184.0, 147.5], [198.0, 183.0], [195.0, 162.0], [193.0, 173.0], [207.0, 170.5], [206.0, 150.0], [205.0, 143.0], [204.0, 191.5], [201.0, 159.0], [200.0, 202.5], [214.0, 202.0], [211.0, 169.5], [223.0, 201.0], [222.0, 160.0], [220.0, 187.75], [216.0, 206.25], [231.0, 150.5], [229.0, 137.0], [228.0, 184.5], [225.0, 137.0], [224.0, 196.0], [238.0, 141.0], [236.0, 145.0], [235.0, 134.0], [234.0, 162.0], [233.0, 145.5], [247.0, 189.0], [245.0, 171.5], [244.0, 194.0], [243.0, 172.0], [241.0, 151.0], [240.0, 192.0], [255.0, 149.0], [254.0, 167.0], [251.0, 118.0], [250.0, 187.0], [249.0, 123.0], [248.0, 157.0], [258.0, 151.0], [271.0, 148.0], [268.0, 156.0], [259.0, 160.0], [269.0, 150.0], [267.0, 153.4], [266.0, 158.0], [265.0, 141.0], [264.0, 147.0], [263.0, 142.5], [261.0, 157.75], [262.0, 163.0], [260.0, 149.5], [256.0, 141.0], [257.0, 160.66666666666666], [277.0, 142.66666666666666], [278.0, 133.0], [275.0, 146.33333333333334], [272.0, 159.0], [1.0, 227.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}, {"data": [[138.76285714285723, 167.1142857142857]], "isOverall": false, "label": "gateway_cl/hellotea/tea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 278.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1061.6666666666667, "minX": 1.68830064E12, "maxY": 2333.3333333333335, "series": [{"data": [[1.68830064E12, 2333.3333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68830064E12, 1061.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830064E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 167.1142857142857, "minX": 1.68830064E12, "maxY": 167.1142857142857, "series": [{"data": [[1.68830064E12, 167.1142857142857]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830064E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 167.11142857142858, "minX": 1.68830064E12, "maxY": 167.11142857142858, "series": [{"data": [[1.68830064E12, 167.11142857142858]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830064E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.9685714285714291, "minX": 1.68830064E12, "maxY": 0.9685714285714291, "series": [{"data": [[1.68830064E12, 0.9685714285714291]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830064E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 37.0, "minX": 1.68830064E12, "maxY": 257.0, "series": [{"data": [[1.68830064E12, 257.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68830064E12, 37.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68830064E12, 221.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68830064E12, 248.47000000000003]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68830064E12, 179.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68830064E12, 227.45]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830064E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 179.0, "minX": 350.0, "maxY": 179.0, "series": [{"data": [[350.0, 179.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 350.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 179.0, "minX": 350.0, "maxY": 179.0, "series": [{"data": [[350.0, 179.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 350.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 5.833333333333333, "minX": 1.68830064E12, "maxY": 5.833333333333333, "series": [{"data": [[1.68830064E12, 5.833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830064E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 5.833333333333333, "minX": 1.68830064E12, "maxY": 5.833333333333333, "series": [{"data": [[1.68830064E12, 5.833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830064E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 5.833333333333333, "minX": 1.68830064E12, "maxY": 5.833333333333333, "series": [{"data": [[1.68830064E12, 5.833333333333333]], "isOverall": false, "label": "gateway_cl/hellotea/tea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830064E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 5.833333333333333, "minX": 1.68830064E12, "maxY": 5.833333333333333, "series": [{"data": [[1.68830064E12, 5.833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830064E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

