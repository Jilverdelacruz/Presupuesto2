export const evaluarPresupuesto = (presupuesto, sobrante) =>{
    let clase;
 if ((presupuesto / 4) > sobrante){
    clase = 'alert alert-danger'
 } else if((presupuesto / 2) > sobrante){
    clase='alert alert-warning'
 } else{
     clase='alert alert-success'
 }

 return clase;
}