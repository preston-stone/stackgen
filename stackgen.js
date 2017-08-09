
var tech = {
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

    other_languages: [
        'QML',
        'Q',
        'Quartz Composer',
        'ksh',
        'KTurtle',
    ],

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
        'Polyhedra',
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
        'Mongoose',
        'Monkey',
        'NaviServer',
        'NCSA HTTPd',
        'Nginx',
        'OpenLink Virtuoso',
        'OpenLiteSpeed',
        'Oracle ',
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
        'Zope'

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

    clientSugar: [
        'HTML 5',
        'CSS 3',
        'Sass',
        'Less',
    ],

    serverSugar: [
        'Hadoop',
        'AWS Aurora',
        's3',
        'Redis',
        'Ec2'


    ],

    randomSugar: [
        'Minecraft',
        'Influx'
    ]
};

 
Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

class StackGen{
    constructor(word,tech){
        this.word = word;
        this.tech = tech;
        this.stack = [];
    }

    _stackFind(regval){
        var subarray = [];       
        var objKeys = Object.keys(this.tech);
        objKeys = objKeys.shuffle();

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
        var elems = this.word.split('');

        for ( var i = 0; i < elems.length; i++ ){
            var regval = new RegExp('^'+ elems[i], 'i');
            //console.log("Now searching " + elems[i]);
            this._stackFind(regval);
        }
        this.stack = this.stack.join(', ');
    }

    buildUses(){
        var buzzwords = [ 'driverless','automated','personalized','programmable','UTF-16 compliant','disposable','recyclable','on-demand' ];
        var appliances = [  ];

    }

    destroy(){
        this.stack = [];
    }


}


var stack = new StackGen('NOPE',tech);
stack.build();
console.log(stack.stack);
stack.destroy();
