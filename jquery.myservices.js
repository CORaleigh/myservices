;(function ( $, window, document, undefined ) {
   var pluginName = "myservices",

        defaults = {
           features: [],
           data: [],
           services:{
               url:"https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/query",
               categories:[
                   {title:"Community",
                       services:[
                           {
                                url:"https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/4/query",
                                texts:                       
                                [
                                    {
                                        title:"<a href='/business/content/PlanDev/Articles/DevServ/Annexations.html'>Annexation Year</a>:",
                                        labels:"[CASE_YEAR]"
                                    }
                                ]
                            },
                            {
                                url:"https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/1/query",
                                texts:                       
                                [
                                    {
                                        title:"<a href='/community/content/CommServices/Articles/CitizensAdvisoryCouncil.html'>CAC</a>:",
                                        labels:"[NAME]"
                                    }
                                ]
                            },                                                      
                            {
                                url:"https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/2/query",
                                texts:                       
                                [
                                    {
                                        title:"<a href='/government/content/BoardsCommissions/Articles/CityCouncil.html'>City Council District</a>:",
                                        labels:"[COUNCIL_DIST]"
                                    },
                                    {
                                        title:"<a href='/government/content/PubAffairs/Articles/CityCouncilBiographies.html'>Council Member</a>:",
                                        labels:"[COUNCIL_PERSON]"
                                    }                                    
                                ]
                            },   
                            {
                                url:"https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/3/query",
                                texts:                       
                                [
                                    {
                                        title:"<a href='/safety/content/Police/Articles/[DISTRICT]District.html'>Police District</a>:",
                                        labels:"[DISTRICT]"
                                    }
                                ]
                            }
                       ]
                   },
                   {title:"Elections",
                       services:[
                        {
                            url:"https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/6/query",
                            texts:                       
                            [
                                {
                                    title:"<a href='http://www.wakegov.com/elections/Pages/default.aspx' target='_blank'>Polling Place</a>:",
                                    labels:"[WAKE.POLLING_PLACES.POLL_PL]"
                                },
                                {
                                    title:"<a href='http://www.wakegov.com/elections/Pages/default.aspx' target='_blank'>Voting Precinct</a>:",
                                    labels:"[WAKE.POLLING_PLACES.PRECINCT]"                                    
                                }
                            ]
                        }
                       ]
                   },
                   {title:"Environmental",
                       services:[
                        {
                            url:"https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/10/query",
                            texts:                       
                            [
                                {
                                    title:"<a href='/services/content/PWksStormwater/Articles/Stormwater.html'>Drainage Basin</a>:",
                                    labels:"[BASINS:proper]"                                 
                                }
                            ]
                        }
                       ]                       
                   },
                   {title:"Leaf Collection",
                   services:[
                    {
                        url:"https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/8/query",
                        texts:                       
                        [
                            {
                                title:"<a href='http://ral.maps.arcgis.com/apps/webappviewer/index.html?id=3ec0bcd2a27b4dae94e024a91b5aea5b&query=Leaf Collection Zones,SECTION,[SECTION]'>Zone</a>:",
                                labels:"[SECTION]"                                
                            },
                            {
                                title:"<a href='/services/content/PublicWorks/Articles/AnnualLeafCollection.html'>Starts</a>:",
                                labels:"[START_DATE:date]"                              
                            },
                            {
                                title:"<a href='/services/content/PublicWorks/Articles/AnnualLeafCollection.html'>Status</a>:",
                                labels:"[STATUS]"                           
                            }                                                        
                        ]
                    }
                   ]                       
                   },
                   {title:"Recreation",
                   services:[
                    {
                        url:"https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/14/query",
                        texts:                       
                        [
                            {
                                title:"<a href='/parks/content/PRecRecreation/Articles/AthleticYouthRegistrationDates.html'>Athletic District</a>:",
                                labels:"[DISTRICT]"                                
                            }
                        ]
                    }
                   ]                         
                   },
                   {title:"Recycling",
                       services:[
                        {
                            url:"https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/12/query",
                            texts:                       
                            [
                                {
                                    title:"<a href='/services/content/SolidWaste/Articles/RecyclePages.html'>Day</a>:",
                                    labels:"[DAY]"                              
                                },
                                {
                                    title:"<a href='/services/content/SolidWaste/Articles/Recyclables.html'>Route</a>:",
                                    labels:"[RECYCLE]"                            
                                },
                                {
                                    title:"<a href='/services/content/SolidWaste/Articles/ServiceSchedule.html'>Week</a>:",
                                    labels:"[WEEK]"                        
                                }                                                        
                            ]
                        }
                       ]                         
                   },
                   {title:"Solid Waste",
                       services:[
                        {
                            url:"https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/12/query",
                            texts:                       
                            [
                                {
                                    title:"<a href='/services/content/SolidWaste/Articles/ServiceSchedule.html'>Garbage Day</a>:",
                                    labels:"[DAY:proper]"                           
                                },
                                {
                                    title:"<a href='/services/content/SolidWaste/Articles/ServiceSchedule.html'>Garbage Route</a>:",
                                    labels:"[GARBAGE]"                           
                                },
                                {
                                    title:"<a href='/services/content/SolidWaste/Articles/ServiceSchedule.html'>Yard Waste Day</a>:",
                                    labels:"[DAY:proper]"                       
                                }
                                ,
                                {
                                    title:"<a href='/services/content/SolidWaste/Articles/ServiceSchedule.html'>Yard Waste Route</a>:",
                                    labels:"[YARDWASTE]"                      
                                }                                                                                            
                            ]
                        }
                       ]                            
                   }
               ]
           }
       };
   function Plugin( element, options ) {
       this.element = element;

       this.options = $.extend( {}, defaults, options );

       this._defaults = defaults;
       this._name = pluginName;
       Plugin.prototype.options = this.options;
       this.init();
   }

   Plugin.prototype = {
       init: function() {
           var container = $(this.element);
           var list = $("<ul id='servicesList' class='nolist'></ul>");
           var input = $("<input class='typeahead' id='Address' type='text' placeholder='222 West Hargett Street'></input>").appendTo(container);
           input.keydown(this.inputKeyDown);
        $('<link/>')
            .appendTo('head')
            .attr({type: 'text/css', rel: 'stylesheet'})
            .attr('href', '/content/static/styles/typeahead.css');
       this.setTypeahead(input);
       container.append(list);
       $("#servicesList").append("<li>Enter an address to view service information</li>");
       container.prepend("<label for='Address' class='ally'>Address</label>");
       },
    inputKeyDown: function (e) {
      if (e.keyCode === 13) {
        Plugin.prototype.geocodeAddress($(this).val());
      }
    },
    geocodeAddress: function (address) {
      $.ajax({
        url: 'https://maps.raleighnc.gov/arcgis/rest/services/Locators/CompositeLocator/GeocodeServer/findAddressCandidates',
        type: 'GET',
        dataType: 'json',
        data: {singleLine: address + ", Raleigh",
          searchExtent: { "xmin" : -78.8251, "ymin" : 35.7025, "xmax" :  -78.4689, "ymax" : 35.9751, "spatialReference" : {"wkid" : 4326} },
          f: 'json'},
      })
      .done(function(data) {
        if (data.candidates.length > 0) {
            Plugin.prototype.getServices(data.candidates[0].location);
        }
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
      
    },
    setTypeahead:function(input){
       var addresses = new Bloodhound({
        datumTokenizer: function (datum) {
            return Bloodhound.tokenizers.whitespace(datum.value);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
            ajax: {
                type: "GET",
                dataType: "jsonp"
            },            
            url: "https://maps.raleighnc.gov/arcgis/rest/services/Addresses/MapServer/0/query?f=pjson&oderByFields=ADDRESS&returnGeometry=false&outFields=ADDRESS&returnDistinctValues=false",
            filter: function (resp) {
                var data = []
                if (resp.features.length > 0) {
                        $(resp.features).each(function (i, f) {
                        data.push({value:f.attributes['ADDRESS']});
                    });
                }
                return data;
            },
            replace: function (url, uriEncodedQuery) {
                var newUrl = url + '&where=ADDRESSU like ' + "'" + Plugin.prototype.checkAbbreviations(uriEncodedQuery).toUpperCase() + "%'";
                return encodeURI(newUrl);
            }
        }
       });
       addresses.initialize();
       input.typeahead({hint: true, highlight: true, minLength: 1},
        {name: 'Addresses',
         displayKey:'value',
             source: addresses.ttAdapter()}).on('typeahead:selected', this.typeaheadSelected);
    },
       checkAbbreviations:function (value) {
           var abbreviations = [{full: "Saint ", abbr: " St "}, 
           {full: "North ", abbr:" N "}, 
           {full: "South ", abbr: " S "},
           {full: "West ", abbr:" W "},
           {full: "East ", abbr: " E "},
           {full: "Martin Luther King Jr", abbr: " MLK"}];
           value = value.replace("'", "");
           value = value.replace(".", "");
           $.each(abbreviations, function (i, a) {
               value = value.replace(new RegExp(a.abbr, 'gi'), a.full);
           });
           return value;
       },
    typeaheadSelected:function (obj, data, dataset) {
        $.ajax({
            url: 'https://maps.raleighnc.gov/arcgis/rest/services/Addresses/MapServer/0/query',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                f: 'pjson',
                where: "ADDRESS = '" + data.value + "'",
                returnGeometry: true
            }
        }).done(function (data) {
            if (data.features.length > 0) {
                Plugin.prototype.getServices(data.features[0].geometry);
            }
        });
    },
       getServices:function(geometry){
           var list = $("#servicesList");
           if(defaults.services){
           var point = {x: geometry.x, y: geometry.y, spatialReference:{wkid: 102719, latestWkid: 2264}},
               extent = {xmin:point.x-2,ymin:point.y-2,xmax:point.x+2,ymax:point.y+2,spatialReference:point.spatialReference},
            data = {
                geometry: JSON.stringify(point),
                layerDefs: JSON.stringify([{ "layerId" : 1,"where": "1=1", "outfields": "NAME"},
                    { "layerId" : 2,"where": "1=1", "outfields": "COUNCIL_DIST,COUNCIL_PERSON"},
                    { "layerId" : 3,"where": "1=1", "outfields": "DISTRICT"},
                    { "layerId" : 4,"where": "1=1", "outfields": "CASE_YEAR"},
                    { "layerId" : 6,"where": "1=1", "outfields": "PRECINCT,POLL_PL"},
                    { "layerId" : 8,"where": "1=1", "outfields": "SECTION,START_DATE"},
                    { "layerId" : 10,"where": "1=1", "outfields": "BASINS"},
                    { "layerId" : 12,"where": "1=1", "outfields": "DAY,RECYCLE,GARBAGE,YARDWASTE,WEEK"},
                    { "layerId" : 14,"where": "1=1", "outfields": "DISTRICT"}]),
                geometryType: "esriGeometryPoint",  
                returnGeometry: false,
                //layers: "all" + ((this.options.layers) ? ':' + this.options.layers.toString():''),
                f: "pjson"
            };
            data = {
                geometry: JSON.stringify(point),
                geometryType: "esriGeometryPoint",  
                returnGeometry: false,
                f: "pjson",
                outFields: '*'
            }        
            Plugin.prototype.getCategories(defaults.services.categories, data).then(function() {
                defaults.data=  defaults.data.sort(Plugin.prototype.sortByCategory)
                console.log(defaults.data)
                list.empty();
                                       var html = "";
                       var numadded = 0;
                $(defaults.data).each(function(i, item){
                     list.append("<li><h4>"+item.category.title+"</h4></li>");
                     var div = $("<ul class='nolist'></ul>");

                                $(item.features).each(function(i, feature){
                                    if (feature.features.length > 0) {
                                        $(feature.service.texts).each(function(j, text) {
                                            if (item.category.title == "Leaf Collection") {
                                                console.log(item);
                                                if (feature.features[0].attributes.PASS) {
                                                if (feature.features[0].attributes.PASS === "2") {
                                                    text.labels = text.labels.replace("START_DATE", "START_DATE_1");
                                                    text.labels = text.labels.replace("END_DATE", "END_DATE_1");                                     
                                                } else {
                                                    text.labels = text.labels.replace("START_DATE_1", "START_DATE");
                                                    text.labels = text.labels.replace("END_DATE_1", "END_DATE");                                           
                                                }
                                                }
                                            }                                
                                            var li = $("<li></li>");
                                            var html = Plugin.prototype.getServiceLabel(text.title, feature.service.layerId, feature.features[0])+" "+Plugin.prototype.getServiceLabel(text.labels, feature.service.layerId, feature.features[0]);
                                                
                                                if (html.indexOf('Null') < 0 && html.indexOf('undefined') < 0) {
                                                    li.append(html);
                                                    div.append(li);
                                                }
                                        });
                                    }
                                    numadded++;
                                    if (numadded > 0){
                                        list.append(div);
                                    }else{
                                            var li = $("<li>No information available</li>");
                                            div.append(li);
                                            list.append(div) ;
                                    }                                       
                                    });

                              
                });

            });
                
            // var promises = [];

            // for (var i = 0;i < defaults.services.categories.length; i++) {
            //     for (j = 0; j < defaults.services.categories[i].services.length; j++) {

            //         var def = new $.Deferred();

            //         var url = defaults.services.categories[i].services[j].url;

            //     $.when( Plugin.prototype.queryServices(data, url) ).then(function (data) {
            //         console.log(data);
            //     });
            // }
                // $.ajax({
                //     url: defaults.services.categories[i].services[cnt].url,
                //     type: 'GET',
                //     dataType: 'jsonp',
                //     data: data
                // }).then(function (data) {
                //     if (cnt < services.length) {

                //     }
                //     cnt += 1;

                // });
                // for (j = 0; j < defaults.services.categories[i].services.length; j++) {


                // }
            }
            //    $.ajax({
            //     url: defaults.services.url,
            //     type: 'GET',
            //     dataType: 'jsonp',
            //     data: data
            // }).done(function (data) {
            //        list.empty();
            //        if (Plugin.prototype.options.layers) {
            //            defaults.services.categories = $(defaults.services.categories).filter(function () {
            //                var cnt = 0;
            //                $.each(this.services, function (i, service) {
            //                    if ($.inArray(service.layerId, Plugin.prototype.options.layers) > -1) {
            //                        cnt +=1;
            //                    }
            //                });
            //                return cnt > 0;
            //            });
            //        }
            //        $(defaults.services.categories).each(function(i, category){
            //            var html = "";
            //            var numadded = 0;
            //         //    if(category.title == "Recycling" || category.title == "Solid Waste"){
            //         //        Plugin.prototype.addSwsCallout(list, data.layers);
            //         //    }
  
            //            list.append("<li><h4>"+category.title+"</h4></li>");
            //            var div = $("<ul class='nolist'></ul>");
            //            $(category.services).each(function(j,service){
            //                var result = $(data.layers).filter(function(){
            //                    return this.id == service.layerId;
            //                });
            //                if (result[0]) {
            //                 if(result[0].features.length > 0){
            //                     $(result[0].features).each(function(i, item){
            //                         if (category.title == "Leaf Collection") {
            //                             console.log(item);
            //                             if (item.attributes.PASS) {
            //                             if (item.attributes.PASS === "2") {
            //                                 service.labels = service.labels.replace("START_DATE", "START_DATE_1");
            //                                 service.labels = service.labels.replace("END_DATE", "END_DATE_1");                                     
            //                             } else {
            //                                 service.labels = service.labels.replace("START_DATE_1", "START_DATE");
            //                                 service.labels = service.labels.replace("END_DATE_1", "END_DATE");                                           
            //                             }
            //                             }
            //                         }                                
            //                         var li = $("<li></li>");
            //                         var html = Plugin.prototype.getServiceLabel(service.title, service.layerId, item)+" "+Plugin.prototype.getServiceLabel(service.labels, service.layerId, item);
                                        
            //                             if (html.indexOf('Null') < 0 && html.indexOf('undefined') < 0) {
            //                                 li.append(html);
            //                                 div.append(li);
            //                             }
            //                     });
            //                     numadded++;
            //                 }
            //                }
            //            });

            //            if (numadded > 0){
            //                list.append(div);
            //            }else{
            //                    var li = $("<li>No information available</li>");
            //                    div.append(li);
            //                    list.append(div) ;
            //            }
            //        });
            //    });
           //}
       },
       getCategories: function(categories, data) {
        defaults.data = [];
        var deferreds = [];

        $.each(categories, function(i, category) {

            var def =  Plugin.prototype.getServices2(category.services, data).then(function(results){
                defaults.data.push({category: category, features: defaults.features})
             });
             deferreds.push(def);
        });
        return $.when.apply($, deferreds).then(function () {
        });

       },

       sortByCategory: function (a, b) {
        if (a.category.title < b.category.title)
        return -1;
        if (a.category.title > b.category.title)
            return 1;
        return 0;
       },



        getServices2: function (services, data) {
        var deferreds = [];
        var features = [];
        $.each(services, function(i, service) { 
            var def = $.ajax({
                url: service.url,
                type: 'GET',
                dataType: 'jsonp',
                data: data
            }).done(function (results) {
                features.push({ service: service, features: results.features });
            });
            deferreds.push(def)
        });


        //return $.when.apply(undefined, promises).promise();
        return $.when.apply($, deferreds).then(function () {

            defaults.features = features;
        });



       },
       queryServices:function (data, url) {
        var dfd = jQuery.Deferred();

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'jsonp',
            data: data
        }).then(function (data) {
            dfd.resolve({url: url, features: data.features});
        });
        return dfd.promise();

       },
       getServiceLabel:function(label, id, service){
               var plugin = this;
               var fieldCnt = label.split("[").length - 1;
               for (var i=0;i < fieldCnt;i++){
                   var start = label.indexOf("[")+1;
                   var end = label.indexOf("]");
                   var field = label.substring(start,end);
                   var arr = field.split(":");
                   field = arr[0];
                   var value = service.attributes[field];
                   if (arr.length > 1){
                       value = Plugin.prototype.checkCase(value, arr[1]);
                       label = label.replace(new RegExp(field+":"+arr[1],"gi"), field);
                   }
                   label = label.replace('['+field+']', value);
               }
           label = label.replace(new RegExp(";", "gi"), "<br/>");
           return label;
       },
       addSwsCallout:function(list, results){
           var day = "";
           var newDay = "";
           var newWeek = "";
           var week = "";
           $.each(results, function(index, result) {
             if (result.layerName == 'Collection Areas'){

               if(result.attributes['Service Day']){
                   day = result.attributes['Service Day'];
               }
               if(result.attributes['New Service Day']){
                   newDay = result.attributes['New Service Day'];
               }
               if(result.attributes['New Recycling Week']){
                   newWeek = result.attributes['New Recycling Week'];
               }
             }
             if (result.layerName == 'Bi-Weekly Recycling Phase'){
               if(result.attributes.WEEK){
                   week = result.attributes.WEEK;
               }
             }
           });
           if ($(".callout", list).length == 0){
               if ((week != "" && day != "" && newDay != "" && newWeek != "")){
                   if(day != newDay && week != newWeek){
                       list.append("<div class='callout'><h4>Recycling & Waste Changes</h4>Starting <b>September 2013</b> your new collection day will be <b>"+newDay+"</b> and your new week will be <b>"+newWeek+"</b>.<br/><a href='http://www.raleighnc.gov/home/news/content/CorNews/Articles/SWSSeptemberChanges.html' target='_blank'>learn more</a></div>");
                   }else if (day != newDay){
                       list.append("<div class='callout'><h4>Recycling & Waste Changes</h4>Starting <b>September 2013</b> your new collection day will be <b>"+newDay+"</b>.<br/><a href='http://www.raleighnc.gov/home/news/content/CorNews/Articles/SWSSeptemberChanges.html' target='_blank'>learn more</a></div>");
                   }else if (week != newWeek){
                       list.append("<div class='callout'><h4>Recycling & Waste Changes</h4>Starting <b>September 2013</b> your new collection week will be <b>"+newWeek+"</b>.<br/><a href='http://www.raleighnc.gov/home/news/content/CorNews/Articles/SWSSeptemberChanges.html' target='_blank'>learn more</a></div>");
                   }else{
                        list.append("<div class='callout'><h4>Recycling & Waste Changes</h4>No changes will be made to your collection day or recycling week in <b>September 2013</b>.</div>");
                   }
               }
           }
       },
       checkCase:function(value, caseType){
           if (value) {
               switch (caseType){
                   case "upper":
                       value = value.toUpperCase();
                       break;
                   case "lower":
                       value = value.toLowerCase();
                       break;
                   case "proper":
                       value = Plugin.prototype.toProperCase(value);
                       //handle NC abbreviation
                       value = value.replace(" Nc"," NC");
                       break;
                   case "date":
                       if (value != "Null") {
                         var date = new Date(value);                        
                         value = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
                       }
                       break;                       
               }                
           } else {
               value = '';
           }

           return value;
       },
    toProperCase:function(value) {
            return value.toLowerCase().replace(/^(.)|\s(.)/g,
                function($1) { return $1.toUpperCase(); });
    }
    };
  $.fn[pluginName] = function(options) {
       return this.each(function() {
           if (!$.data(this, 'plugin_' + pluginName)) {
               $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
           }
           else if ($.isFunction(Plugin.prototype[options])) {
               $.data(this, 'plugin_' + pluginName)[options]();
           }
       });
   }
})( jQuery, window, document );