import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App(){
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9' 
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff' 
    },
    {
      nome: 'Data-Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2' 
    },
    {
      nome: 'Devops',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8' 
    },
    {
      nome: 'Ux e Desing',
      corPrimaria: '#d86ebf',
      corSecundaria: '#fae9f5' 
    },
    {
      nome: 'Mobile',
      corPrimaria: '#feba05',
      corSecundaria: '#fff5d9' 
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf' 
    }
  ]

  const [colaboradores, setColaboradores] = useState([]) 

  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className = "App">
      <Banner />
      <Formulario aoColaboradorCadastrado = {colaborador => aoNovoColaboradorCadastrado(colaborador)} />
      
      {times.map(time => <Time key = {time.nome} nome = {time.nome} corPrimaria = {time.corPrimaria} corSecundaria = {time.corSecundaria}/>)}
    </div> 
  )
}

export default App;