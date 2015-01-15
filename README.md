# myservices
jQuery Plugin used on the City of Raleigh's services page to display City service related information to constituents.  Uses Twitter's Typeahead library and an Esri ArcGIS for Server map service.
<ol>
<li> Include jQuery and Typeahead (.js and .css) scripts in the head your HTML.</li>
<li> Include jquery.myservices.js scripts in the head of your HTML.</li>
<li> Add a div element to the body of your HTML with an ID.</li>
<li> Call the plugin using the following jQuery:</li>
$("#divid").myservices({layers:[]});
</ol>
The plugin accepts a layers option, which is a comma separated list of the layerIds you want to show form the ArcGIS for Server map service.  
$("#divid").myservices({layers:[1,2]});
