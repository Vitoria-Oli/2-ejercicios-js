function calculo(){
  var iva = 21;
  
  var precio = $("input[name=monto]").val(5);
  
  var iva = (iva * precio )/100;

  $("input[name=iva]").val(21);
  
  $("input[name=total]").val(parseInt(precio)+parseInt(iva));
   
}