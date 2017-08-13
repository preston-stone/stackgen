import React, { Component } from 'react';
import './App.css';


var tech = {
    databases: [
        '4th Dimension',
        'Adabas D',
        'Alpha Five',
        'Apache Derby',
        'Aster Data',
        'Amazon Aurora',
        'Altibase',
        'CA Datacom',
        'CA IDMS',
        'Clarion',
        'ClickHouse',
        'Clustrix',
        'CSQL',
        'CUBRID',
        'DataEase',
        'Database Management Library',
        'Dataphor',
        'dBase',
        'Derby',
        'Java DB',
        'Empress Embedded Database',
        'EXASolution',
        'EnterpriseDB',
        'eXtremeDB',
        'FileMaker Pro',
        'Firebird',
        'FrontBase',
        'Google Fusion Tables',
        'Greenplum',
        'GroveSite',
        'H2',
        'Helix database',
        'HSQLDB',
        'DB2',
        'Lotus Approach',
        'DB2 Express-C',
        'Influx',
        'Infobright',
        'Informix',
        'Ingres',
        'InterBase',
        'InterSystems Caché',
        'LibreOffice Base',
        'Linter',
        'MariaDB',
        'MaxDB',
        'MemSQL',
        'Access',
        'Jet',
        'Microsoft SQL Server',
        'Microsoft SQL Server Express',
        'SQL Azure',
        'Visual FoxPro',
        'Mimer SQL',
        'MonetDB',
        'mSQL',
        'MySQL',
        'Netezza',
        'NexusDB',
        'NonStop SQL',
        'NuoDB',
        'Openbase',
        'OpenLink Virtuoso',
        'OpenOffice.org Base',
        'Oracle',
        'Oracle Rdb',
        'Panorama',
        'Pervasive PSQL',
        'Polyhedra DBMS',
        'PostgreSQL',
        'Progress Software',
        'Qt',
        'RDM Embedded',
        'RDM Server',
        'R:Base',
        'SAND CDBMS',
        'SAP HANA',
        'Sybase',
        'SQL Anywhere',
        'ScimoreDB',
        'solidDB',
        'SQLBase',
        'SQLite',
        'SQream DB',
        'Sybase Advantage',
        'Teradata',
        'Tibero',
        'TimesTen',
        'Trafodion',
        'txtSQL',
        'Unisys RDMS 2200',
        'UniData',
        'UniVerse',
        'Vectorwise',
        'Vertica'
    ],

     servers: [
        'AOLserver',
        'Apache',
        'Tomcat',
        'Boa',
        'Caddy',
        'Caudium',
        'Cherokee',
        'GlassFish',
        'Hiawatha',
        'HFS',
        'IBM ',
        'IIS',
        'Jetty',
        'Jexus',
        'lighttpd',
        'LiteSpeed',
        'Minecraft',
        'Mongoose',
        'Monkey',
        'NaviServer',
        'NCSA HTTPd',
        'Nginx',
        'OpenLink Virtuoso',
        'OpenLiteSpeed',
        'Oracle HTTP Server',
        'iPlanet ',
        'WebLogic',
        'Resin',
        'thttpd',
        'TUX',
        'Wakanda',
        'WEBrick',
        'Xitami',
        'Yaws',
        'Zeus ',
        'Zope',
        'Quake 1 dedicated server'

    ],

        web_languages: [
        "ASP.NET", 
        "C",  
        "C++", 
        "D",   
        "Erlang",  
        "Go",  
        "Hack",    
        "Java",    
        "JavaScript",  
        "Perl",    
        "PHP", 
        "Python",  
        "Ruby",    
        "Scala",
        "VBScript",   
        "Xhp"
    ],

    OS: [
        'Mac OS X Server',
        'Windows',
        'Linux',
        'Solaris',
        'FreeBSD',
        'VMWare',
        'iOS',
        'Android',
        'RISC',
        'AmigaOS',
        'tvOS',
        'Newton OS',
        'Atari TOS',
        'BeOS',
        'UNIX',
        'Kronos',
        'DOS',
        'RDOS',
        'CP/M',
        'FlexOS',
        'HP-UX',
        'Chrome OS',
        'Multics',
        'OS/2',
        'Xenix',
        'Xbox OS',
        'Netware',
        'Open Enterprise Server',
        'TRSDOS',
        'Unisys MCP',
        'QNX',
        'Haiku',
        'VMS',
        'QDOS'
    ],

    presentations: [
        'Angular',
        'React',
        'React Native',
        'Bootstrap'
    ],

    controllers: [
        'Node',
        'ExpressJS'
    ],


    frameworks: [
        'Axis',
        'Axis2',
        'CXF',
        'Skytells',
        'CodeIgniter',
        'gSOAP',
        'Java Web Services ',
        'GlassFish',
        'Jello',
        'Jersey',
        '.NET',
        'WSIT',
        'WSIF',
        'WCF',
        'WSO2',
        'XFire',
        'CXF',
        'XML Interface for Network Services',
        'Yii',
        'Smart.Framework',
        'Zend',
        "Ample SDK",
        "Appcelerator Titanium",
        "Aware IM",
        "Blend4Web",
        "Cappuccino",
        "Curl",
        "DHTMLX",
        "Ebase Xi",
        "Ember.js",
        "ExtJS",
        "Google Web Toolkit",
        "Dojo",
        "iPFaces mobile framework",
        "Lively Kernel",
        "LiveCode",
        "Meteor",
        "OpenLaszlo",
        "PhoneGap",
        "qooxdoo",
        "ReSTbasis",
        "Rhomobile",
        "expanz",
        "Remote Application Platform",
        "Smart GWT & SmartClient",
        "Sproutcore",
        "Tersus",
        "Vaadin",
        "ZK",
        "JavaFX",
        "JavaScriptMVC",
        "Echo3",
        "JVx",
        "Unity",
        "Panda3D",
        "Wt",
        "Nexaweb",
        "Wakanda",
        "Webix",
        "Xojo",
        "Choo",
        "Flask",
        "Django"
    ],

    other_languages: [
        'QML',
        'Q',
        'Quartz Composer',
        'ksh',
        'KTurtle',
        "AppleScript",
        "AWK",
        "BeanShell",
        "Bash",
        "Ch",
        "CLIST",
        "ColdFusion",
        "ECMAScript",
        "ActionScript",
        "ECMAScript for XML",
        "Mocha",
        "LiveScript",
        "JScript",
        "CMS EXEC",
        "EXEC 2",
        "F-Script",
        "Falcon",
        "GML",
        "ICI",
        "Io",
        "JASS",
        "Groovy",
        "Join Java",
        "Julia",
        "Lasso",
        "Lua",
        "MAXScript",
        "MEL",
        "Oriel",
        "Pikt",
        "R",
        "REBOL",
        "RED",
        "REXX",
        "Revolution",
        "Smalltalk",
        "S-Lang",
        "sed",
        "Tea",
        "Tcl",
        "TorqueScript",
        "VBScript",
        "WebDNA",
        "Windows PowerShell"
    ],

    clientSugar: [
        'HTML 5',
        'CSS 3',
        'Sass',
        'Less',
        'DSSSL',
        'XSL',
        'SMIL',
        'JSSS',
        'Qt',
        'FOSI',
        'Stylus'

    ],

    serverSugar: [
        'Hadoop',
        'AWS Aurora',
        's3',
        'Redis',
        'Ec2',
        'ElastiCache'
    ]
};

Array.prototype.shuffle = function()
{
  var i = this.length;
  while (i)
  {
    var j = Math.floor(Math.random() * i);
    var t = this[--i];
    this[i] = this[j];
    this[j] = t;
  }
  return this;
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {word: ''};
    this.tech = tech;
    this.stack = [];
    this.uses = [];
    this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    /**
     * Searches tech array to find matching products
     * @param {object} regval regular expression for search
     */
    _stackFind(regval){    
        var objKeys = Object.keys(this.tech);

        for ( var k = 0; k < objKeys.length; k++ ){
            var thisArray = this.tech[objKeys[k]].shuffle();
            var tech = this.tech;

            for ( var i = 0; i < thisArray.length; i++ ){
                if (thisArray[i].search(regval) !== -1){
                    this.stack.push(thisArray[i]);

                    switch ( objKeys[k] ){
                        case 'servers':
                            delete tech['servers'];
                            break;
                        case 'databases':
                            delete tech['databases'];
                            break;
                        case 'OS':
                            delete tech['OS'];
                            break;
                    };
                    return true;
                }
            }
        }
    }

    build(){
        this.destroy();
        this.word = this.state.word.replace(/[^a-zA-Z]/gi,'');
        var elems = this.word.split('');
        var flip = Math.floor(Math.random() * 2);

        if ( flip === 1 ){
            elems = elems.reverse();
            console.log("flipped");
        }

        for ( var i = 0; i < elems.length; i++ ){
            var regval = new RegExp('^'+ elems[i], 'i');
            this._stackFind(regval);
        }
        if ( flip === 1){
            this.stack = this.stack.reverse();
        }
        this.stack = this.word.toUpperCase()+': '+this.stack.join(', ');
        this.buildUses();
    }

    buildUses(){
        var buzzwords = [ 'driverless','eye-tracking','voice-activated','automated','3D-printed','programmable','UTF-16 compliant','disposable','single-use','always-on','networked','mobile-responsive','web-enabled','set-top' ];
        var appliances = [ 'toasters','razors','refrigerators','shoes','pants','tattoos','rollerblades','pens','thermostats','soda machines','glasses','gramophones','tents','pillows','coffee makers','thermoregulators','whirligigs' ];

        for ( var i = 0; i < 3; i++ ){
            this.uses[i] = buzzwords[Math.floor(Math.random() * buzzwords.length)]+' '+appliances[Math.floor(Math.random() * appliances.length)];
        }
        this.uses = 'Uses: '+this.uses.join(', ');
    }

    destroy(){
        this.stack = [];
        this.uses = [];
    }

    handleSubmit(e){
      e.preventDefault();
      this.setState({ word: this.element.value });
      this.build();
    }

    handleUpdate(e){
      console.log(this.element  );
      this.setState({ word: this.element.value});
    }

  render() {
    return (
      <div className="App">
        <h2>{this.stack}</h2>
        <h3>{this.uses}</h3>
        <div className="form" id="form">
        <form onSubmit={this.handleSubmit}>
        Name of Stack: <input type="text" className="textField" onChange={(e) => this.handleUpdate(e)} ref={el => this.element = el}/> 
        <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    );
  }
}

export default App;
