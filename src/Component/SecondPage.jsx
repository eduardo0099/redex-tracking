import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrentStatus from './CurrentStatus';
import DetailsStatus from './DetailsStatus';
import {Layout} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

const {Header, Content,Footer} = Layout;

class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 2,
            details:[]
        }
    }

    infoPrincipal = (data) =>{
        let lista=[];
        //Estado de registro
        let obj1={};
        obj1.active = false;
        obj1.isLocation = false;
        obj1.titulo = "Registrado";
        obj1.descripcion = data.personaOrigen;
        obj1.fecha = data.plan[0].fechaInicio;
        lista.push(obj1);
        let i=0;
        for (i=0 ;i<data.plan.length;i++){
            let obj2={};
            obj2.active = false;
            obj2.isLocation = true;
            obj2.titulo = "Esperando vuelo";
            obj2.logitude = data.plan[i].lonI;
            obj2.latitude= data.plan[i].latI;
            obj2.descripcion = "Oficina: " + data.plan[i].paisI;
            obj2.fecha = data.plan[i].fechaInicio;
            lista.push(obj2);
            let obj3={};
            if(data.plan[i].estado === "ACTIVO"){
                obj3.active = true;
            }else{
                obj3.active = false;
            }
            obj3.isLocation = false;
            obj3.titulo = "En vuelo";
            obj3.descripcion = "Oficina destino: " + data.plan[i].paisF;
            obj3.fecha = data.plan[i].fechaInicio;
            lista.push(obj3);
        }
        let obj4={};
        obj4.active = false;
        obj4.isLocation = true;
        obj4.titulo = "Entregado";
        obj4.logitude = data.plan[i-1].lonF;
        obj4.latitude= data.plan[i-1].latF;
        obj4.descripcion = "Oficina: " + data.plan[i-1].paisF;
        obj4.fecha = data.plan[i-1].fechaFin;
        lista.push(obj4);
        
        console.log(lista);
        return lista;
    }

    switchTag = (data) =>{
        let currentState ={
            active: data.estado,
            currentLocation: data.localizacion,
            addressee: data.personaDestino
        }
        let lista = this.infoPrincipal(data);
        
        switch(this.state.tab){
            case 1:
                return <CurrentStatus currentState={currentState}/>
            case 2:
                return <DetailsStatus details={lista} currentState={currentState}/>
            default:

        }
    }

    handleChangeTab= (val) =>{
        this.setState({
            tab: val
        });
    }

    render() {
        const {data}=this.props;

        return (
            <Layout className="layout">
            <Header>
                <h1 class="text-white">RedEx</h1>
            </Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff' }}>
            <div>
                <h1>Paquete {data.codigoRastreo}</h1>
                    <div>
                        <h3>Detalle</h3>
                    </div>
                    <div className="big-container">
                        {this.switchTag(data)}
                    </div>
            </div>
            </div>
            </Content>
            </Layout>
        );
    }
}

SecondPage.propTypes = {
    data: PropTypes.any.isRequired
};

export default SecondPage;