var scriptTag = document.getElementById("finnder-embedded"),
    scripts = document.querySelectorAll('script#finnder-embedded'),
    myScript = scripts[0],
    queryString = myScript.src.replace(/^[^\?]+\??/,''),
    params = parseQuery( queryString),
    prefix = "finnder_";

function parseQuery ( query ) {
    var Params = new Object ();
    if ( ! query ) return Params; // return empty object
    var Pairs = query.split(/[;&]/);
    for ( var i = 0; i < Pairs.length; i++ ) {
        var KeyVal = Pairs[i].split('=');
        if ( ! KeyVal || KeyVal.length != 2 ) continue;
        var key = unescape( KeyVal[0] );
        var val = unescape( KeyVal[1] );
        val = val.replace(/\+/g, ' ');
        Params[key] = val;
    }
    return Params;
}

//Default style
window["finnder_width"] = "600px",
window["finnder_width"] = "116px";

for (var prop in params) {
    if(params.hasOwnProperty(prop)){
        window[prefix + prop] = params[prop];
    }
}
console.log(window["finnder_width"]);
function route(){
    var addr0 = document.getElementById("finnder-addr0").value,
        addr1 = document.getElementById("finnder-addr1").value;

    window.open("http://localhost/finnder/web/app_dev.php/#!embedded/addr0=" + addr0 + "/addr1=" + addr1 + "/");
}

var htmlContent = "<div style='width: " + window["finnder_width"] + "; height: 116px;background-color: #EDEDED; padding-top: 20px; padding-left: 20px'>" +
    "<div style='font-size: 26px; margin-bottom: 5px'>Finnder: Plan your route!</div>" +
    "<div style='margin-bottom: 10px'>Input two address click the button to get your route.</div>" +
    "<input style='display: inline; width: 175px; height:  21px; margin-right: 13px; -webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;' placeholder='Origin Address' id='finnder-addr0' type='text'/>" +
    "<input style='display: inline; width: 175px; height:  21px; margin-right: 13px; -webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;' placeholder='Destination Address' id='finnder-addr1' type='text'/>" +
    "<button id='get-finnder-route' onclick='route();' style='color: white;border-radius: 5px;border: 0;width: 80px;height:25px;background: #0071B6;/* Old browsers */background: -moz-linear-gradient(top, #0071B6 1%, #1A327D 100%);/* FF3.6+ */background: -webkit-gradient(linear, left top, left bottom, color-stop(1%, #0071B6), color-stop(100%, #1A327D));/* Chrome,Safari4+ */background: -webkit-linear-gradient(top, #0071B6 1%, #1A327D 100%);/* Chrome10+,Safari5.1+ */background: -o-linear-gradient(top, #0071B6 1%, #1A327D 100%);/* Opera 11.10+ */background: -ms-linear-gradient(top, #0071B6 1%, #1A327D 100%);/* IE10+ */background: linear-gradient(to bottom, #0071B6 1%, #1A327D 100%);/* W3C */filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0071B6', endColorstr='#1A327D', GradientType=0);/* IE6-9 */'>Route!</button>" +
    "</div>";

scriptTag.insertAdjacentHTML('afterend', htmlContent);