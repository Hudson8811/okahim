var inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
    var label	 = input.nextElementSibling,
        labelVal = label.innerHTML;

    input.addEventListener( 'change', function( e )
    {
        var fileName = '';
        if( this.files && this.files.length > 1 )
            fileName = 'файлов выбрано ' + this.files.length;
        else
            fileName = e.target.value.split( '\\' ).pop();

        if( fileName ) {
            label.querySelector( 'span' ).innerHTML = fileName;
            input.classList.add( 'has-file' );
        } else {
            label.innerHTML = labelVal;
            input.classList.remove( 'has-file' );
        }
    });

});