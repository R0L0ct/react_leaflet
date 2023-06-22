import axios from "axios";

const API = "http://localhost:4000";

export async function addCoordenadas(coor) {
  try {
    console.log(coor);
    const response = await axios.post(`${API}/coordenada`, coor);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function updateCoordenadas(id, coor) {
  try {
    const response = await axios.put(`${API}/coordenada/${id}`, coor);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCoordenadas(id) {
  try {
    const response = await axios.delete(`${API}/coordenada/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function addPoligono(poligono) {
  try {
    console.log(poligono);
    const response = await axios.post(`${API}/poligono`, poligono);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getPoligonos() {
  try {
    const response = await axios.get(`${API}/poligono`);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getPoligono(id) {
  try {
    const response = await axios.get(`${API}/poligono/${id}`);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function deletePoligono(id) {
  try {
    const response = await axios.delete(`${API}/poligono/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function updatePoligono(id, data) {
  try {
    const response = await axios.put(`${API}/poligono/${id}`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
}
