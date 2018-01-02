import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {RequestOptionsArgs} from "../../../node_modules/@angular/http/src/interfaces";
//import '../t1_6.xml';

@Injectable()
export class FeedService {
  constructor (
    private http: Http
  ) {}

  getNews() {
    return this.http.get(`https://hn.algolia.com/api/v1/search_by_date?query=`)
    .map((res: Response) => res.json());
  }

  getHealthData() {
    /*const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    const requestOptions = {
      headers: new Headers(headerDict),
    };*/

    //var parseString = require('xml2js').parseString;
    //let headers = new Headers('Access-Control-Allow-Origin', 'http://localhost:8888');
    //headers = headers.append('Access-Control-Allow-Origin', 'http://localhost:8888');
    //this.createAuthorizationHeader(headers);
    //var xml = this.http.get(`http://www.heart.org/idc/groups/heart-public/@wcm/@global/documents/rssfeed/t1_6.xml`, <RequestOptionsArgs>requestOptions);


    //var xml = "D:\DIPS\Test Iteration\Project\angular5_testApp\src\t1_6.xml";

    //window.URL.createObjectURL(xml);

    //var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    //xmlDoc.async = false;
    //while(xmlDoc.readyState != 4) {};
    //xmlDoc.load(xml);

    //( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");

    /*var rawFile = new XMLHttpRequest();
    rawFile.open("GET", xml, false);*/

    //return rawFile.map((res: Response) => res.json());

    /*const cors = require('koa-cors');
    const Koa = require('koa');
    const app = new Koa();
    app.use(cors());*/

    //return window.URL.revokeObjectURL(xml).map((res: Response) => res.json());
    return this.http.get(`http://www.heart.org/idc/groups/heart-public/@wcm/@global/documents/rssfeed/t1_5.xml`)
      .map((res: Response) => res.json());
  }

  /*parseString(xml, function (err, result) {
  console.dir(result);
});*/








 /* importXML(xmlfile)
{
  try
  {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", xmlfile, false);
  }
  catch (Exception)
  {
    var ie = (typeof window.ActiveXObject != 'undefined');
    var xmlDoc;
    var xmlloaded = false;

    if (ie)
    {
      xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async = false;
      while(xmlDoc.readyState != 4) {};
      xmlDoc.load(xmlfile);
      readXML();
      xmlloaded = true;
    }
    else
    {
      xmlDoc = document.implementation.createDocument("", "", null);
      xmlDoc.onload = readXML;
      xmlDoc.load(xmlfile);
      xmlloaded = true;
    }
  }

  if (!xmlloaded)
  {
    xmlhttp.setRequestHeader('Content-Type', 'text/xml')
    xmlhttp.send("");
    xmlDoc = xmlhttp.responseXML;
    readXML();
    xmlloaded = true;
  }
}*/











  xmlToJson(xml) {

  // Create the return object
  var obj = {};

  if (xml.nodeType == 1) { // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (var j = 0; j < xml.attributes.length; j++) {
        var attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType == 3) { // text
    obj = xml.nodeValue;
  }

  // do children
  if (xml.hasChildNodes()) {
    for(var i = 0; i < xml.childNodes.length; i++) {
      var item = xml.childNodes.item(i);
      var nodeName = item.nodeName;
      if (typeof(obj[nodeName]) == "undefined") {
        obj[nodeName] = this.xmlToJson(item);
      } else {
        if (typeof(obj[nodeName].push) == "undefined") {
          var old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(this.xmlToJson(item));
      }
    }
  }
  return obj;
};

}
