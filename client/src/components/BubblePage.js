import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    const colorsData =() => {
      axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(response => {
				setColorList(response.data);
			})
      .catch(error =>{
        console.log(error);
      })
    }
    colorsData();
  }, []);
	return (
		<>
			<ColorList colors={colorList} updateColors={setColorList} />
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;

const axiosWithAuth = () => {
  const token=localStorage.getItem('token');
  console.log( token);

  return axios.create({
    headers: {
      'Content-Type': 'apllication/json',
      'Authorization': '${token}',
    },
  });
};