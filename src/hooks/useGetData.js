import  {useState, useEffect} from 'react'

const api = 'http://us-central1-gndx-cv.cloudfunctions.net/me'

const useGetData = () =>{
    //estado y funcion que actualiza el estado
    //useState -> estado inicial
    const [mydata, setData] = useState([])

    useEffect(()=>{
        fetch(api)
        //trae la respuesta y la convierte a json
        .then(response => response.json())
        //luego la data pasa a la función setData para actualizar el estado
        .then(data => setData(data))
    }, [])

    return mydata

}

export default useGetData