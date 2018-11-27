
'use strict';

const utils =    require(__dirname + '/lib/utils'); // Get common adapter utils
const auth =     require(__dirname + '/lib/auth.js');
//const device =     require(__dirname + '/lib/datapoints.js');
const EventEmitter = require('events');
const EventSource = require('eventsource');

const adapter = new utils.Adapter('homeconnect');

const device=JSON.stringify(

    {"Oven":       				      [{"name" : "Setting.PowerState","type":"mixed"},
                                      {"name" : "Status.CurrentCavityTemperature","type":"number"},
                                      {"name" : "Status.DoorState","type":"mixed"},
                                      {"name" : "Status.LocalControlActive","type":"boolean"},
                                      {"name" : "Status.RemoteControlStartAllowed","type":"boolean"},
                                      {"name" : "Status.RemoteControlActive","type":"boolean"},
                                      {"name" : "Status.OperationState","type":"mixed"},
                                      {"name" : "Option.ProgramProgress","type":"number"},
                                      {"name" : "Option.ElapsedProgramTime","type":"number"},
                                      {"name" : "Option.RemainingProgramTime","type":"number"},
                                      {"name" : "Option.SetpointTemperature","type":"number"},
                                      {"name" : "Option.Duration","type":"number"},
                                      {"name" : "Root.ActiveProgram","type":"mixed"},
                                      {"name" : "Root.SelectedProgram","type":"mixed"},
                                      {"name" : "Event.ProgramFinished","type":"mixed"},
                                      {"name" : "Event.AlarmClockElapsed","type":"mixed"},
                                      {"name" : "Event.PreheatFinished","type":"mixed"}
       
       ]},
       {"Dishwasher":                [{"name" : "Setting.PowerState","type":"mixed"},
                                      {"name" : "Status.DoorState","type":"mixed"},
                                      {"name" : "Status.OperationState","type":"mixed"},
                                      {"name" : "Status.RemoteControlStartAllowed","type":"boolean"},
                                      {"name" : "Status.RemoteControlActive","type":"boolean"},
                                      {"name" : "Root.ActiveProgram","type":"mixed"},
                                      {"name" : "Root.SelectedProgram","type":"mixed"},
                                      {"name" : "Option.StartInRelative","type":"number"},
                                      {"name" : "Option.ProgramProgress","type":"number"},
                                      {"name" : "Option.RemainingProgramTime","type":"number"},
                                      {"name" : "Event.ProgramAborted","type":"mixed"},
                                      {"name" : "Event.ProgramFinished","type":"mixed"}
                                      
                                      
       ]},
       
       {"CoffeeMaker":               [{"name" : "Status.OperationState","type":"mixed"},
                                      {"name" : "Status.RemoteControlStartAllowed","type":"boolean"},
                                      {"name" : "Status.RemoteControlActive","type":"boolean"},
                                      {"name" : "Root.ActiveProgram","type":"mixed"},
                                      {"name" : "Root.SelectedProgram","type":"mixed"},
                                      {"name" : "Option.ProgramProgress","type":"number"},
                                      {"name" : "Option.RemainingProgramTime","type":"number"},
                                      {"name" : "Setting.PowerState","type":"mixed"}
       
       ]},
       
       {"Washer":					  [{"name" : "Root.ActiveProgram","type":"mixed"},
                                      {"name" : "Root.SelectedProgram","type":"mixed"},
                                      {"name" : "Option.Temperature","type":"mixed"},
                                      {"name" : "Option.SpinSpeed","type":"mixed"},
                                      {"name" : "Option.ProgramProgress","type":"number"},
                                      {"name" : "Option.RemainingProgramTime","type":"number"},
                                      {"name" : "Setting.PowerState","type":"mixed"},
                                      {"name" : "Status.RemoteControlStartAllowed","type":"boolean"},
                                      {"name" : "Status.RemoteControlActive","type":"boolean"},
                                      {"name" : "Status.LocalControlActive","type":"boolean"},
                                      {"name" : "Status.DoorState","type":"mixed"},
                                      {"name" : "Status.OperationState","type":"mixed"},
                                      {"name" : "Event.ProgramFinished","type":"mixed"}
       
       ]},
       
       {"Dryer":					  [{"name" : "Root.ActiveProgram","type":"mixed"},
                                      {"name" : "Root.SelectedProgram","type":"mixed"},
                                      {"name" : "Option.DryingTarget","type":"mixed"},
                                      {"name" : "Option.ProgramProgress","type":"number"},
                                      {"name" : "Option.RemainingProgramTime","type":"number"},
                                      {"name" : "Setting.PowerState","type":"mixed"},
                                      {"name" : "Status.RemoteControlStartAllowed","type":"boolean"},
                                      {"name" : "Status.RemoteControlActive","type":"boolean"},
                                      {"name" : "Status.LocalControlActive","type":"boolean"},
                                      {"name" : "Status.DoorState","type":"mixed"},
                                      {"name" : "Status.OperationState","type":"mixed"},
                                      {"name" : "Event.ProgramFinished","type":"mixed"}
                                      
       ]},
       
       {"WasherDryer":				  [{"name" : "Root.ActiveProgram","type":"mixed"},
                                      {"name" : "Root.SelectedProgram","type":"mixed"},
                                      {"name" : "Option.Temperature","type":"mixed"},
                                      {"name" : "Option.SpinSpeed","type":"mixed"},
                                      {"name" : "Option.DryingTarget","type":"mixed"},
                                      {"name" : "Option.ProgramProgress","type":"number"},
                                      {"name" : "Option.RemainingProgramTime","type":"number"},
                                      {"name" : "Setting.PowerState","type":"mixed"},
                                      {"name" : "Status.RemoteControlStartAllowed","type":"boolean"},
                                      {"name" : "Status.RemoteControlActive","type":"boolean"},
                                      {"name" : "Status.LocalControlActive","type":"boolean"},
                                      {"name" : "Status.DoorState","type":"mixed"},
                                      {"name" : "Status.OperationState","type":"mixed"},
                                      {"name" : "Event.ProgramFinished","type":"mixed"}
       
       ]},
       
       {"FridgeFreezer":			  [{"name" : "Setting.PowerState","type":"mixed"},
                                      {"name" : "Setting.SetpointTemperatureFreezer","type":"number"},
                                      {"name" : "Setting.SetpointTemperatureRefrigerator","type":"number"},
                                      {"name" : "Setting.SuperModeFreezer","type":"boolean"},
                                      {"name" : "Setting.SuperModeRefrigerator","type":"boolean"},
                                      {"name" : "Status.DoorState","type":"mixed"},
                                      {"name" : "Event.DoorAlarmFreezer","type":"mixed"},
                                      {"name" : "Event.DoorAlarmRefrigerator","type":"mixed"},
                                      {"name" : "Event.TemperatureAlarmFreezer","type":"mixed"}
                                      
       ]},
       
       {"Hob":					      [{"name" : "Root.ActiveProgram","type":"mixed"},
                                      {"name" : "Root.SelectedProgram","type":"mixed"},
                                      {"name" : "Setting.PowerState","type":"mixed"},
                                      {"name" : "Status.RemoteControlActive","type":"boolean"},
                                      {"name" : "Status.LocalControlActive","type":"boolean"},
                                      {"name" : "Status.OperationState","type":"mixed"},
                                      {"name" : "Event.ProgramFinished","type":"mixed"},
                                      {"name" : "Event.AlarmClockElapsed","type":"mixed"}
                                      
       ]},
       
       {"Hood":					  [{"name" : "Root.ActiveProgram","type":"mixed"},
                                      {"name" : "Option.Duration","type":"number"},
                                      {"name" : "Option.Hood.VentingLevel","type":"mixed"},
                                      {"name" : "Option.Hood.IntensiveLevel","type":"mixed"},
                                      {"name" : "Option.ProgramProgress","type":"number"},
                                      {"name" : "Option.ElapsedProgramTime","type":"number"},
                                      {"name" : "Option.RemainingProgramTime","type":"number"},
                                      {"name" : "Setting.PowerState","type":"mixed"},
                                      {"name" : "Status.RemoteControlStartAllowed","type":"boolean"},
                                      {"name" : "Status.RemoteControlActive","type":"boolean"},
                                      {"name" : "Status.LocalControlActive","type":"boolean"},
                                      {"name" : "Status.OperationState","type":"mixed"},
                                      {"name" : "Event.ProgramFinished","type":"mixed"}
                               
       ]}
                           
       
   );


let getTokenInterval;

function stateGet(stat){

    return new Promise((resolve, reject) => {
    
    adapter.getState(stat, function (err, state) {
    
        if (err){
            reject(err);
        }else{
            if (typeof state != undefined && state != null){
            let value=state.val;
            resolve(value);
            }else{
                let value=false;
                resolve(value);
            }
        }
    }); 
    });
    }

    function getToken(){
        
        let stat='dev.devCode';
        
        stateGet(stat).then(
            (value)=>{
                let clientID=adapter.config.clientID;
                let deviceCode=value;
        auth.tokenGet(deviceCode,clientID).then(
            ([token,refreshToken,expires,tokenScope])=>{
                adapter.log.info('Accestoken generiert!');
                adapter.setState('dev.token', {val: token, ack: true});
                adapter.setState('dev.refreshToken', {val: refreshToken, ack: true});
                adapter.setState('dev.expires', {val: expires, ack: true});
                adapter.setState('dev.tokenScope', {val: tokenScope, ack: true});
                clearInterval(getTokenInterval);

                getTokenRefreshInterval=setInterval(getRefreshToken,3600000);

                function getRefreshToken(){
                auth.tokenRefresh(refreshToken).then(
                    ([token,refreshToken,expires,tokenScope])=>{
                        adapter.log.info('Accestoken erneuert...');
                        adapter.setState('dev.token', {val: token, ack: true});
                        adapter.setState('dev.refreshToken', {val: refreshToken, ack: true});
                        adapter.setState('dev.expires', {val: expires, ack: true}); 
                        adapter.setState('dev.tokenScope', {val: tokenScope, ack: true});
                    },
                    statusPost=>{
                        if (statusPost=='400'){
                            adapter.log.error('FEHLER beim Refresh-Token!');
                        }else{
                        adapter.log.error("Irgendwas stimmt da wohl nicht!! Refresh-Token!!    Fehlercode: " + statusPost );
                    }
                    }
                )
            }                        
            },
            statusPost=>{
                if (statusPost=='400'){
                    let stat='dev.authUriComplete';
        
                    stateGet(stat).then(
                    (value)=>{
                        adapter.log.error('Bitte ioBroker authorisieren!!  =====>>>   ' + value);
                    },
                    err=>{
                        adapter.log.error('FEHLER: ' + err);
                    }
                    );
                }else{
                adapter.log.error("Irgendwas stimmt da wohl nicht!! Token!!    Fehlercode: " + statusPost );
                clearInterval(getTokenInterval);
            }
        });
    },
            err=>{
                adapter.log.error('getToken FEHLER: ' + err);
                clearInterval(getTokenInterval);
            }
        )
    }

/* Eventstream
*/
function receive(token,haId){
    
    let openStream = () => {
           let baseUrl="https://api.home-connect.com/api/homeappliances/"+haId+"/events";
           let header = { headers: { Authorization: 'Bearer ' + token, Accept: 'text/event-stream' } }
           adapter.log.debug(header.headers.Authorization);
           let eventSource = new EventSource(baseUrl, header);
    adapter.log.debug('vor Errorhandling');
           // Error handling
           eventSource.onerror = (err => {
               adapter.log.error(err.status);
             if (err.status !== undefined) {
               adapter.log.error('Error (' + this.haId + ')', err)
              if (err.status === 401) {
                
                // Most likely the token has expired, try to refresh the token
              adapter.log.error("Token abgelaufen");
                
              } else {
                 adapter.log.error('FEHLER'); 
                throw(new Error(err.status))
              }
           }
          });
          adapter.log.debug('Add Eventlistener');
          eventSource.addEventListener('STATUS', (e) => processEvent(e), false)
          eventSource.addEventListener('NOTIFY', (e) => processEvent(e), false)
          eventSource.addEventListener('EVENT', (e) => processEvent(e), false)
          eventSource.addEventListener('CONNECTED', (e) => processEvent(e), false)
          eventSource.addEventListener('DISCONNECTED', (e) => processEvent(e), false)
          //this.eventSource.addEventListener('KEEP-ALIVE', () => lastAlive = new Date(), false)
        }
    
        // Open the event stream
        
        openStream();
         
        
        
}

//Eventstream ==>> Datenpunkt

let processEvent = (msg) =>{
    
    adapter.setState(adapter.namespace + '.dev.eventStreamJSON', JSON.stringify(msg));

    
}



//////////////////////////////////////////////////////////////////////////////////////////////////////



adapter.on('unload', function (callback) {
    try {
        adapter.log.info('cleaned everything up...');
        clearInterval(getTokenRefreshInterval);
        clearInterval(getTokenInterval);
        callback();
    } catch (e) {
        callback();
    }
});

adapter.on('objectChange', function (id, obj) {
    adapter.log.info('objectChange ' + id + ' ' + JSON.stringify(obj));
});

adapter.on('stateChange', function (id, state) {

    //adapter.log.info('stateChange ' + id + ' ' + JSON.stringify(state));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

if (id==adapter.namespace + '.dev.eventStreamJSON'){
    
    /*Auswertung des Eventstreams*/
    
        let streamArray=state.val;
        let stream=JSON.parse(streamArray);
        let parseMsg=stream.data;
        let parseMessage=JSON.parse(parseMsg);
            
        let haIdUri=parseMessage.items[0].uri;
        let string = haIdUri.split("/");
        let haId=string.slice(3,4);
        let dpKey=parseMessage.items[0].key;
        let string2=dpKey.split('.');
        let dp2=string2.slice(3,4);
        let dp1=string2.slice(2,3);
        let dp=dp1+"."+dp2;
        let valueVal=parseMessage.items[0].value;
        
        eventSetDp(valueVal);
        
        
function eventSetDp(valueVal){        
        if (typeof valueVal != 'boolean'){
    
            let string3=valueVal.split('.');
            let value=string3.splice(4,5);
            adapter.setState(haId + '.' + dp , {val: value, ack: true});
            adapter.log.debug("Datenpunkt: "+ haId + '.' + dp + '    Value: ' + value);
            }else
            {
                let value=valueVal;
                adapter.setState(haId + '.' + dp , {val: value, ack: true});
                adapter.log.debug("Datenpunkt: "+ haId + '.' + dp + '    Value: ' + value);
            }

        }           
    
}

    if (id==adapter.namespace + '.dev.homeappliancesJSON'){
        let appliances=state.val;
        let appliancesArray=JSON.parse(appliances);
        let appliancesLength=appliancesArray.data.homeappliances.length;
        let appliancesCount=0;
        
        inventory(appliancesLength);

        function inventory(appliancesLength){

            inventorySub();

            function inventorySub(){

            if (appliancesCount < appliancesLength){
                
                let name=adapter.namespace + '.' + appliancesArray.data.homeappliances[appliancesCount].name;
                let brand=appliancesArray.data.homeappliances[appliancesCount].brand;
                let vib=appliancesArray.data.homeappliances[appliancesCount].vib;
                let connected=appliancesArray.data.homeappliances[appliancesCount].connected;
                let type=appliancesArray.data.homeappliances[appliancesCount].type;
                let enumber=appliancesArray.data.homeappliances[appliancesCount].enumber;
                let haId=appliancesArray.data.homeappliances[appliancesCount].haId;

                adapter.setObjectNotExists(haId + '.General.currentStatusJSON', {
                    type: 'state',
                    common: {
                        name: 'currentStatusJSON',
                        type: 'object',
                        role: 'indicator',
                        write: false,
                        read: true
                    },
                    native: {}
                });

                adapter.setObjectNotExists(haId + '.General.programsAvailableJSON', {
                    type: 'state',
                    common: {
                        name: 'programsAvailableJSON',
                        type: 'object',
                        role: 'indicator',
                        write: false,
                        read: true
                    },
                    native: {}
                });
                
                adapter.setObjectNotExists(haId + '.General.settingsAvailableJSON', {
                    type: 'state',
                    common: {
                        name: 'settingsAvailableJSON',
                        type: 'object',
                        role: 'indicator',
                        write: false,
                        read: true
                    },
                    native: {}
                });

                adapter.setObjectNotExists(haId, {
                    type: 'state',
                    common: {
                        name: 'haId',
                        type: 'mixed',
                        role: 'indicator',
                        write: false,
                        read: true
                    },
                    native: {}
                });

                adapter.setObjectNotExists(haId + '.General.brand', {
                    type: 'state',
                    common: {
                        name: 'brand',
                        type: 'mixed',
                        role: 'indicator',
                        write: false,
                        read: true
                    },
                    native: {}
                });

                adapter.setObjectNotExists(haId + '.General.vib', {
                    type: 'state',
                    common: {
                        name: 'vib',
                        type: 'mixed',
                        role: 'indicator',
                        write: false,
                        read: true
                    },
                    native: {}
                });

                adapter.setObjectNotExists(haId + '.General.connected', {
                    type: 'state',
                    common: {
                        name: 'connected',
                        type: 'boolean',
                        role: 'indicator',
                        write: false,
                        read: true
                    },
                    native: {}
                });

                adapter.setObjectNotExists(haId + '.General.type', {
                    type: 'state',
                    common: {
                        name: 'type',
                        type: 'mixed',
                        role: 'indicator',
                        write: false,
                        read: true
                    },
                    native: {}
                });

                adapter.setObjectNotExists(haId + '.General.enumber', {
                    type: 'state',
                    common: {
                        name: 'enumber',
                        type: 'mixed',
                        role: 'indicator',
                        write: false,
                        read: true
                    },
                    native: {}
                });

                adapter.setObjectNotExists(haId + '.General.haId', {
                    type: 'state',
                    common: {
                        name: 'haId',
                        type: 'mixed',
                        role: 'indicator',
                        write: false,
                        read: true
                    },
                    native: {}
                });

                
              
/*///////////////////////////////// verfügbare Datenpunkte ///////////////////////////////////

aktuellen Status abfragen und Datenpunkte anlegen und States setzen

*/

let deviceArray=JSON.parse(device);

switch (type){
    case "Oven":
    deviceArrayDp=deviceArray.Oven;
    break;
    
    case "Washer":
    deviceArrayDp=deviceArray.Washer;
    break;

    case "Dishwasher":
    deviceArrayDp=deviceArray.Dishwasher;
    break;

    case "Dryer":
    deviceArrayDp=deviceArray.Dryer;
    break;

    case "WasherDryer":
    deviceArrayDp=deviceArray.WasherDryer;
    break;

    case "FridgeFreezer":
    deviceArrayDp=deviceArray.FridgeFreezer;
    break;

    case "Hob":
    deviceArrayDp=deviceArray.Hob;
    break;

    case "Hood":
    deviceArrayDp=deviceArray.Hood;
    break;

    case "CoffeeMaker":
    deviceArrayDp=deviceArray.CoffeeMaker;
    break;

}

let deviceArrayDpLength=deviceArrayDp.length;
let counterdeviceArrayDp=0;

devicesDp();

function devicesDp(){

    if (counterdeviceArrayDp != deviceArrayDpLength){
        let dp=adapter.namespace + '.' + haId + '.' + deviceArrayDp[counterdeviceArrayDp].name;
        adapter.log.debug(' Datenpunkt : ' + dp );
        counterdeviceArrayDp++;
        devicesDp();
    }
        
}


/*
let stat=adapter.namespace + '.dev.token';
                stateGet(stat).then(
                    (value)=>{
                         let token=value;
                        
                        auth.getCurrentStatus(token,haId).then(
                            (currentStatus)=>{
                                adapter.setState(haId + '.General.currentStatusJSON', JSON.stringify(currentStatus));
                                    let regex=/([^.]+)\.?$/gm;
                                    let currentStatusArray=JSON.parse(JSON.stringify(currentStatus));
                                    let currentStatusLength=currentStatusArray.data.status.length;
                                    let currentStatusCount=0;
                                    
                                        currentStatusSetDp();

                                        function currentStatusSetDp(){
                                            if (currentStatusCount < currentStatusLength){
                                                let currentStatusDp=currentStatusArray.data.status[currentStatusCount].key;
                                                    let dp = currentStatusDp.match(regex);
                                                    adapter.setObjectNotExists(haId + '.Status.' + dp, {
                                                        type: 'state',
                                                        common: {
                                                            name: currentStatusDp,
                                                            type: typeof(currentStatusArray.data.status[currentStatusCount].value),
                                                            role: 'indicator',
                                                            write: true,
                                                            read: true
                                                        },
                                                        native: {}
                                                    });
                                                        adapter.setState(haId + '.Status.' + dp, currentStatusArray.data.status[currentStatusCount].value);

                                                currentStatusCount++;
                                                currentStatusSetDp();
                                            }
                                        }

                            },
                    ([statusGet,description])=>{
                        if (statusGet=='400'){
                            adapter.log.error('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
                        }else{
                            adapter.log.error('2:  Fehlercode: ' + statusGet + '   haId: ' + haId);
                            adapter.log.error(description);
            }
            }
        );


        /*

verfügbare Programme


                        auth.getProgramsAvailable(token,haId).then(
                            (programsAvailable)=>{
                                adapter.setState(haId + '.General.programsAvailableJSON', JSON.stringify(programsAvailable));
                                let regex=/([^.]+)\.?$/gm;
                                    let programsAvailableArray=JSON.parse(JSON.stringify(programsAvailable));
                                    let programsAvailableLength=programsAvailableArray.data.programs.length;
                                    let programsAvailableCount=0;
                                    
                                    programsAvailableSetDp();

                                        function programsAvailableSetDp(){
                                            if (programsAvailableCount < programsAvailableLength){
                                                let programsAvailableDp=programsAvailableArray.data.programs[programsAvailableCount].key;
                                                    let dp = programsAvailableDp.match(regex);
                                                    adapter.setObjectNotExists(haId + '.Programs.' + dp, {
                                                        type: 'state',
                                                        common: {
                                                            name: programsAvailableDp,
                                                            type: 'boolean',
                                                            role: 'button',
                                                            write: true,
                                                            read: true
                                                        },
                                                        native: {}
                                                    });
                                                        adapter.setState(haId + '.Programs.' + dp, false);

                                                        programsAvailableCount++;
                                                        programsAvailableSetDp();
                                            }
                                        }
                            },
                        ([statusGet,description])=>{
                        if (statusGet=='400'){
                            adapter.log.error('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
                        }else{
                            adapter.log.error('3: Fehlercode: ' + statusGet + '   haId: ' + haId);
                            adapter.log.error(description);
            }
            }
        );

/*        

verfügbare Settings 

 



auth.getSettingsAvailable(token,haId).then(
    (settingsAvailable)=>{
        adapter.setState(haId + '.General.settingsAvailableJSON', JSON.stringify(settingsAvailable));
        let regex=/([^.]+)\.?$/gm;
            let settingsAvailableArray=JSON.parse(JSON.stringify(settingsAvailable));
            let settingsAvailableLength=settingsAvailableArray.data.settings.length;
            let settingsAvailableCount=0;
            
            settingsAvailableSetDp();

                function settingsAvailableSetDp(){
                    if (settingsAvailableCount < settingsAvailableLength){
                        let settingsAvailableDp=settingsAvailableArray.data.settings[settingsAvailableCount].key;
                        let settingsAvailableDpValue=settingsAvailableArray.data.settings[settingsAvailableCount].value;
                            let dp = settingsAvailableDp.match(regex);
                            let dpValue=settingsAvailableDpValue.match(regex);
                            
                                                       
                            adapter.setObjectNotExists(haId + '.Setting.' + dp, {
                                type: 'state',
                                common: {
                                    name: settingsAvailableDp,
                                    type: typeof(dpValue),
                                    role: 'indicator',
                                    write: true,
                                    read: true
                                },
                                native: {}
                            });
                                adapter.log.debug('Value: '+haId + '.Setting.' + dp + ' : ' + dpValue);
                                adapter.setState(haId + '.Setting.' + dp,  {val: dpValue, ack: true});

                                settingsAvailableCount++;
                                settingsAvailableSetDp();
                    }
                }
    },
([statusGet,description])=>{
if (statusGet=='400'){
    adapter.log.error('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
}else{
    adapter.log.error('4: Fehlercode: ' + statusGet + '   haId: ' + haId);
    adapter.log.error(description);
}
}
);


///////////////////////////////////////////////////////////////////////////////////////////
*/

/*
},
                    err=>{
                        adapter.log.error('FEHLER: ' + err);
                    }
                    );
*/

/////////////////////////////////////////////////////////////////////////////////////////////*/

                setTimeout(function(){
                    appliancesStates()
                },3000);

                function appliancesStates(){
                    adapter.setState(haId + '.General.brand', brand);
                    adapter.setState(haId + '.General.vib', vib);
                    adapter.setState(haId + '.General.connected', connected);
                    adapter.setState(haId + '.General.type', type);
                    adapter.setState(haId + '.General.enumber', enumber);
                    adapter.setState(haId + '.General.haId', haId);
                }
                appliancesCount ++;
 ///////                       
                let stat2=adapter.namespace + '.dev.token';
                stateGet(stat2).then(
                    (value)=>{
                         let token=value;
                                                       
                        receive(token,haId); 
                                        
                    },
                    err=>{
                        adapter.log.error('FEHLER: ' + err);
                    }
                    );    
                    
/////////                    
                        inventorySub();
            }
        }
        }
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (id==adapter.namespace + '.dev.token'){
        let token=state.val;
        adapter.setState('dev.access', true);

        auth.getAppliances(token).then(
            (appliances)=>{
                adapter.setState(adapter.namespace + '.dev.homeappliancesJSON', JSON.stringify(appliances));
            },
            ([statusGet,description])=>{
                if (statusGet=='400'){
                adapter.log.error('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
                }else{
                adapter.log.error("1: Irgendwas stimmt da wohl nicht!!     Fehlercode: " + statusGet );
                adapter.log.error(description);
            }
            }
        )   
    }
    
    if (id==adapter.namespace + '.dev.devCode'){
        getTokenInterval=setInterval(getToken,10000);          // Polling bis Authorisation erfolgt ist
    }

    // you can use the ack flag to detect if it is status (true) or command (false)
    if (state && !state.ack) {
        //adapter.log.info('ack is not set!');
    }
});

// Some message was sent to adapter instance over message box. Used by email, pushover, text2speech, ...
adapter.on('message', function (obj) {
    if (typeof obj === 'object' && obj.message) {
        if (obj.command === 'send') {
            // e.g. send email or pushover or whatever
            console.log('send command');

            // Send response in callback if required
            if (obj.callback) adapter.sendTo(obj.from, obj.command, 'Message received', obj.callback);
        }
    }
});


adapter.on('ready', function () {
    main();
});

function main() {

    if (!adapter.config.clientID) {
        adapter.log.error('Client ID not specified!');
        }

//OAuth2 Deviceflow
//Get Authorization-URI to grant access ===> User interaction    
	
let scope=adapter.config.scope;
let clientID=adapter.config.clientID;
let stat=adapter.namespace + '.dev.access';

stateGet(stat).then(
    (value)=>{
            if (value == false){

            auth.authUriGet(scope,clientID).then(
                ([authUri,devCode,pollInterval])=>{
                    adapter.setState('dev.authUriComplete', authUri);
                    adapter.setState('dev.devCode', devCode);
                    adapter.setState('dev.pollInterval', pollInterval);
                },
                statusPost=>{
                    if (statusPost=='400'){
                        adapter.log.error('400 Bad Request (invalid or missing request parameters)');
                    }else{
                    adapter.log.error("Irgendwas stimmt da wohl nicht!!    Fehlercode: " + statusPost );
                }
            }
            );
            }else if (value == true){
                let stat=adapter.namespace + '.dev.token';
                stateGet(stat).then(
                    (value)=>{
                        let token=value;
                        auth.getAppliances(token).then(
                            (appliances)=>{
                                adapter.setState(adapter.namespace + '.dev.homeappliancesJSON', JSON.stringify(appliances));
                            },
                            (statusGet)=>{
                                if (statusGet=='400'){
                                    adapter.log.error('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
                                }else{
                                adapter.log.error("Irgendwas stimmt da wohl nicht!! Token!!    Fehlercode: " + statusGet );
                            }
                            }
                        )
                    },
                    err=>{
                            adapter.log.error('FEHLER: ' + err);
                    }
                )
            }
    },
    err=>{
            adapter.log.error('FEHLER: ' + err);
    }
)
    
    adapter.setObjectNotExists('dev.authUriComplete', {
        type: 'state',
        common: {
            name: 'AuthorizationURI',
            type: 'mixed',
            role: 'indicator',
            write: false,
            read: true
        },
        native: {}
    });

    adapter.setObjectNotExists('dev.devCode', {
        type: 'state',
        common: {
            name: 'DeviceCode',
            type: 'mixed',
            role: 'indicator',
            write: false,
            read: true
        },
        native: {}
    });

    adapter.setObjectNotExists('dev.pollInterval', {
        type: 'state',
        common: {
            name: 'Poll-Interval in sec.',
            type: 'mixed',
            role: 'indicator',
            write: false,
            read: true
        },
        native: {}
    });

    adapter.setObjectNotExists('dev.token', {
        type: 'state',
        common: {
            name: 'Access-Token',
            type: 'mixed',
            role: 'indicator',
            write: false,
            read: true
        },
        native: {}
    });

    adapter.setObjectNotExists('dev.refreshToken', {
        type: 'state',
        common: {
            name: 'Refresh-Token',
            type: 'mixed',
            role: 'indicator',
            write: false,
            read: true
        },
        native: {}
    });

    adapter.setObjectNotExists('dev.access',  {
        type: 'state',
        common: {
            name: 'access',
            type: 'boolean',
            role: 'indicator',
            write: true,
            read: true
        },
        native: {}
    });

    adapter.setObjectNotExists('dev.homeappliancesJSON', {
        type: 'state',
        common: {
            name: 'Homeappliances_JSON',
            type: 'object',
            role: 'indicator',
            write: false,
            read: true
        },
        native: {}
    });

    adapter.setObjectNotExists('dev.expires', {
        type: 'state',
        common: {
            name: 'Token expires in sec',
            type: 'number',
            role: 'indicator',
            write: false,
            read: true
        },
        native: {}
    });

    adapter.setObjectNotExists('dev.tokenScope', {
        type: 'state',
        common: {
            name: 'Scope',
            type: 'mixed',
            role: 'indicator',
            write: false,
            read: true
        },
        native: {}
    });

    adapter.setObjectNotExists('dev.eventStreamJSON', {
        type: 'state',
        common: {
            name: 'Eventstream_JSON',
            type: 'object',
            role: 'indicator',
            write: false,
            read: true
        },
        native: {}
    });
    
    //settingsAvailableJSON

    adapter.subscribeStates('*');
  
}