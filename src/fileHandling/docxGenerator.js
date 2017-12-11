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
    } );

    docx.on ( 'error', function ( err ) {
                console.log ( err );
            });

    // extract data

    var date = data.date;
    var batch = data.batch;
    var workStation = data.workStation;
    var process = data.process;
    var completedBy = data.completedBy;
    var verifiedBy = data.verifiedBy;
    var fileName= data.fileName;

    var pObj = docx.createP ();

    pObj.addText ( "Nature's Farm", { bold: true, underline: true, align: 'center', font_size: 40 } );

    //////////////////////////////////////////////////////////////////////

    var pObj = docx.createP ();
    
    pObj.addText ( 'Date: ', { bold: true, underline: true} );
    pObj.addText ( date);
    pObj.addLineBreak ();
    pObj.addText ( 'Batch: ', { bold: true, underline: true} );
    pObj.addText ( batch);
    pObj.addLineBreak ();
    pObj.addText ( 'Work Station: ', { bold: true, underline: true} );
    pObj.addText ( workStation);
    pObj.addLineBreak ();
    pObj.addText ( 'Process: ', { bold: true, underline: true} );
    pObj.addText ( process);
    pObj.addLineBreak ();
    pObj.addText ( 'Completed By: ', { bold: true, underline: true} );
    pObj.addText ( completedBy);
    pObj.addLineBreak ();
    pObj.addText ( 'Verified By: ', { bold: true, underline: true} );
    pObj.addText ( verifiedBy);
    
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
