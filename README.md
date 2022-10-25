1. Download chart.js
Url: https://www.chartjs.org/docs/latest/ 
2. Install chart.js module
```
npm i chart.js
```
3. Modify Content-Security-Policy of index.html
* Add 'unsafe-inline' to  script-src
```html
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'">
```
4. Add canvas with id
5. Add chart.js script at the end of index.html body
```
<script src="./node_modules/chart.js/dist/chart.min.js"></script>
```
