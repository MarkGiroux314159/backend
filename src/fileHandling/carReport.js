export default function generateDoc(data) {
    var async = require ( 'async' );
    var officegen = require('officegen');

    var fs = require('fs');
    var path = require('path');

    var themeXml = fs.readFileSync ( path.resolve ( __dirname, '../testTheme.xml' ), 'utf8' );

    var docx = officegen ( {
        type: 'docx',
        orientation: 'portrait',
        pageMargins: { top: 1000, left: 1000, bottom: 1000, right: 1000 }
        // The theme support is NOT working yet...
        // themeXml: themeXml
    } );

    // Remove this comment in case of debugging Officegen:
    // officegen.setVerboseMode ( true );

    docx.on ( 'error', function ( err ) {
                console.log ( err );
            });

    // extract data
    var carNo = data.carNo;
    var requestDate = data.requestDate;
    var replyDueDate = data.replyDueDate;
    var productName= data.productName;
    var stationName = data.stationName;
    var processName = data.processName;
    var programProj= data.programProj;
    var descripNonConform= data.descripNonConform;
    var correctionsImplem= data.correctionsImplem;
    var identifiedCauses= data.identifiedCauses;
    var preventRecurr= data.preventRecurr;
    var jobTitle= data.jobTitle;
    var date= data.date;
    var fileName = data.fileName;

    var pObj = docx.createP ();
    
    pObj.addText ( "Nature's Farm Corrective Action Report", { bold: false, underline: false, align: 'center', font_size: 14, font: 'Times New Roman' } );
    
    var pObj = docx.createP ();

    pObj.options.align = 'right';
    
    pObj.addText ( 'CAR No: ' + carNo );

    var table = [
        [{val:'Request Date: ' + requestDate, opts: {gridSpan: 1}}, {val:'Reply Due Date: ' + replyDueDate, opts: {gridSpan: 1}}],
        [{val:'Product Name: ' + productName, opts: {gridSpan: 1}}, {val:'Station Name: ' + stationName, opts: {gridSpan: 1}}],
        [{val:'Process Name: ' + processName, opts: {gridSpan: 1}}, {val:'Program or Project: ' + programProj, opts: {gridSpan: 1}}],
        [{val:'Description of Nonconformity and Requirement not met:     ' + descripNonConform, opts: {gridSpan: 2}}],
        [{val:'Corrections Implemented:     ' + correctionsImplem, opts: {gridSpan: 2}}],
        [{val:'Identified Cause(s):     ' + identifiedCauses, opts: {gridSpan: 2}}],
        [{val:'Corrective Action Taken to Prevent Recurrence:     ' + preventRecurr, opts: {gridSpan: 2}}],
        [{val:'Job Title: ' + jobTitle, opts: {gridSpan: 1}},{val:'Date: ' + date, opts: {gridSpan: 1}}],
    ]
    
    var tableStyle = {
        tableColWidth: 4261,
        tableSize: 24,
        tableColor: "ada",
        tableAlign: "left",
        tableFontFamily: "Times New Roman",
        borders: true, // enable borders in table
    }
    
    var pObj = docx.createTable (table, tableStyle);

    /////////////////////////////////////////////////////////////

    var out = fs.createWriteStream ( `tmp/${fileName}.docx` );

    out.on ( 'error', function ( err ) {
        console.log ( err );
    });

    async.parallel ([
        function ( done ) {
            out.on ( 'close', function () {
                console.log ( 'Created DOCX file.' );
                done ( null );
            });
            docx.generate ( out );
        }

    ], function ( err ) {
        if ( err ) {
            console.log ( 'error: ' + err );
        } // Endif.
    });
}
