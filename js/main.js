$(document).ready(function(){

   

    


    $('#submitButton').click(function() {

    var f = parseFloat($('#factorial').val());
    $('#xyx').html('The Factorial of ' + f);
    var x = 1;
    

        while (f>1) {

            if (f < 0) {
                alert('Your number cannot be negative!');
            }

            x = x * f;
            f = f - 1;

            
            console.log(f);

        }



        $('#answer').html(' = ' + x.toString());

        

    });

});
