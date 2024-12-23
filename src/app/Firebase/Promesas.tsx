import { IBoxeador } from "../Interfaces/IBoxeador";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore"; 
import { db } from "./Firebase";

export const registrarBoxeador = async(boxeador:IBoxeador)=>{
    const docRef = await addDoc(collection(db, "boxeador"), boxeador);
}
export const obtenerBoxeador = async()=>{
    const querySnapshot = await getDocs(collection(db, "boxeador"));
    let boxeadores:IBoxeador[]=[]
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    let boxeador:IBoxeador={
        nombre:doc.data()["nombre"],
        apellido:doc.data()["apellido"],
        edad:doc.data()["edad"],
        genero:doc.data()['genero'],
        victorias:doc.data()["victorias"],
        derrotas:doc.data()["derrotas"],
        descripcion:doc.data()["descripcion"],
        categoria:doc.data()['categoria']
        

    }
    boxeadores.push(boxeador)
});
return boxeadores

}