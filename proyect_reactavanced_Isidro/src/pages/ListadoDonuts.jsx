import React, { useState, useEffect } from 'react'
import ListaDonutsComponent from '../components/listaDonuts/ListaDonutsComponent';
import DetalleDonut from '../components/DetalleDonut/DetalleDonut';
import EditarDonut from '../components/EditarDonut/EditarDonut';

const ListadoDonuts = () => {
  const [view, setView] = useState('list');
  const [donut, setDonut] = useState(null);

  const handleDetail = (donut) => {
    console.log(donut);
    if (donut) {
        setDonut(donut);
        setView('detail');
    } else {
      console.log("El donut recibido es undefined o null");
    }
};


  const handleEdit = () => {
      setView('edit');
  };

  const handleBack = () => {
      setView('list');
      setDonut(null);
  };

  return (
    <div>
      {view === 'list' && <ListaDonutsComponent onDetail={handleDetail} />}
       {view === 'detail' &&  donut &&<DetalleDonut donut={donut} onBack={handleBack} onEdit={handleEdit} />}
       {view === 'edit' && <EditarDonut donut={donut} onCancel={handleBack} />}
  </div>
  );
};

export default ListadoDonuts