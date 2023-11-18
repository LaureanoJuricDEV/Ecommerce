import React from 'react';
import { Button, Result } from 'antd';
import './styleNotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => (
    <Result  
      status="404" 
      title={<h3 className='text'>Mmm, no me suena esta pagina</h3>} 
      subTitle={<p className='text'>¿Volvemos al inicio?</p>}
      extra={<Link to={'/'}><Button type='primary'>Volver</Button></Link>}
    />
  );
  export default NotFound