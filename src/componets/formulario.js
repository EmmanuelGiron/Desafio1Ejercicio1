import React, {Fragment, useState} from 'react'
import { useForm } from 'react-hook-form'


 const Formulario = () => {
    const {register, errors, handleSubmit} = useForm();
    const [porcentaje, setPorcentaje]=useState(0);
    const [descuento, setDescuento]=useState(0);
    const [total, setTotal]=useState(0);

    const calcular_descuento = curso => {
        if(cantidad!==0 ){
         if(cantidad>=2 && cantidad<=3) 
         {
            descuento=25*0.10;
            setTotal(curso.cantidad*25-descuento)
         }else if(cantidad>=4 && cantidad<=5){
            descuento=25*0.20;
            setTotal(curso.cantidad*25-descuento)
         }else if(cantidad>=6 && cantidad<=7){
            descuento=25*0.27;
            setTotal(curso.cantidad*25-descuento)
         }
         else if(cantidad>=9 && cantidad<10){
            descuento=25*0.37;
            setTotal(curso.cantidad*25-descuento)
         }else{
            descuento=25*0.53;
            setTotal(curso.cantidad*25-descuento)
         }
        }
    }
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        tipo_curso: '',
        cantidad: ''
    })
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <Fragment>
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label for="name">Nombre: </label>
        <input type="text" id="nombre" name="nombre_cliente" className="form-control mb-2" />
        <br></br>
        <label for="apellido">apellido</label>
        <input type="text" id="apellido" name="apellido_cliente" />
        <br></br>
        <select name="tipo-curso">
            <option value="ingles">Ingles</option>
            <option value="frances">Frances</option>
        </select>
        <br></br>
        <label for="cantidad">Cantidad de meses a pagar: </label>
        <input type="text" id="cantidad" name="cantidad" />
        </div>
        <button type="submit"className="btn btn-primary" onClick={()=>calcular_descuento(data)}> Enviar</button>
         </form>
        </div>
        
        </Fragment>
        );
    };
    
    export default Formulario;
    





