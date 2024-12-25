import { IBoxeador } from "../Interfaces/IBoxeador";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"; 
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
        id: doc.id,
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


export let eliminarboxeador = async (boxeador:IBoxeador) => {
    await deleteDoc(doc(db, "boxeador", boxeador.id));
}



export const obtenerBoxer = async (id: string) => {
    const docRef = doc(db, "boxeador", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {
            id: docSnap.id,
            nombre: docSnap.data().nombre,
            apellido: docSnap.data().apellido,
            edad: docSnap.data().edad,
            genero: docSnap.data().genero,
            categoria: docSnap.data().categoria,
            victorias: docSnap.data().victorias,
            derrotas: docSnap.data().derrotas,
            descripcion: docSnap.data().descripcion,
        };
    } else {
        return ;
    }
};
