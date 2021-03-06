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
        "Windows PowerShell",
        "COBOL",
        "FORTRAN",
        "Hypertalk",
        "Assembly",
        "Lisp",
        "AWK",
        "Processing",
        "Prolog",
        "Haskell"
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

// eslint-disable-next-line
Object.defineProperty(Array.prototype, "shuffle", {
  value: function(){
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
});

const StackForm = ({handleUpdate,handleSubmit}) => {
  return (
  <form onSubmit={handleSubmit}>
      Name of Stack: <input type="text" onChange={handleUpdate} /> 
      <input type="submit" value="Submit" />
  </form>
  );
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {word: '',val: ''};
    this.tech = tech;
    this.stack = [];
    this.uses = [];
    }

    /**
     * Searches tech array to find matching products
     * @param {object} regval regular expression for search
     */
    _stackFind(regval){ 
        var techlist = this.tech;
        for ( var k of Object.keys(techlist) ){
            var thisArray = techlist[k].shuffle();
            
            for ( var i of thisArray ){
                if (i.search(regval) !== -1 && this.stack.includes(i) === false){
                    this.stack.push(i);

                    switch (k){
                        case 'servers':
                            delete techlist['servers'];
                            break;
                        case 'databases':
                            delete techlist['databases'];
                            break;
                        case 'OS':
                            delete techlist['OS'];
                            break;
                        default:
                    };
                    return true;
                }
            }
        }
    }

    _reorder(){
      var order = this.word.split('');
      var tempstack = this.stack;
      this.stack = [];

      for ( var o of order ){
        var regx = new RegExp('^'+o, 'i');

        for ( var s of tempstack ){
          if ( s.search(regx) !== -1 && !this.stack.includes(s) ){
            this.stack.push(s);
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
        }

        for ( var elem of elems ){
            var regval = new RegExp('^'+ elem, 'i');
            this._stackFind(regval);
        }

        if ( flip === 1){
            this.stack = this.stack.reverse();
        }
        this.stack = this.word.toUpperCase()+': '+this.stack.join(', ');
        this.buildUses();
    }

    buildUses(){
        var buzzwords = [ 'skeumorphic','modular','agile','scalable','minified','object-oriented','driverless','eye-tracking','voice-activated','automated','3D-printed','programmable','UTF-16 compliant','disposable','single-use','always-on','networked','mobile-responsive','web-enabled','set-top' ];
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
       this.build();
      this.setState({ val: e.target.value });
      console.log(this.state);
      
    }

    handleUpdate(e){
      this.setState({ word: e.target.value });
    }

  render() {
    return (
      <div className="App">
        <h2>{this.stack}</h2>
        <h3>{this.uses}</h3>
        <div className="form" id="form">
          <StackForm handleSubmit={this.handleSubmit.bind(this)} handleUpdate={this.handleUpdate.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
