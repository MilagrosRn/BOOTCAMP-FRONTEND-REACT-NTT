import { useEffect, useState } from 'react';
import distritosData from '../data/districts.json';

const useDistricts = () => {
  const [distritos, setDistritos] = useState<string[]>([]);

  useEffect(() => {
    const distritosArray = Object.keys(distritosData);
    setDistritos(distritosArray);
  }, []);

  return distritos;
};

export default useDistricts;
