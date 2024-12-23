import { IBoxeador } from "../Interfaces/IBoxeador";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore"; 
import { db } from "./Firebase";
import { IUser } from "../Interfaces/IUser";

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

export const registerUser = async(user:IUser)=>{
    const docRef = await addDoc(collection(db, "user"), user);
}

export const loginUser = async()=>{
    const querySnapshot = await getDocs(collection(db, "user"));
    let usuarios:IUser[]=[]
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    let user:IUser={
        user:doc.data()["user"],
        contra:doc.data()["contra"],
        
    }
    usuarios.push(user)
});
return usuarios
}