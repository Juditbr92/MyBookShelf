import { NavLink } from "react-router-dom";
import { Book } from "../config/types";
import { useState } from "react";

type ModalProps = {
    book: Book;
}

function Modal(props: ModalProps){

    const { book } = props; 

    // creamos el estado para controlar que se abra y cierre el modal:
    const [ openModal, setOpenModal ] = useState(false)

    return(
        <div className="items-center justify-center ml-4">
            <button className="px-10 py-2 rounded hover:border-2 hover:bg-custom-bg hover:text-white" onClick={()=>setOpenModal(true)}>My Thoughts</button>
            
            {openModal && (
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">             
                <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
            
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex size-16 shrink-0 items-center justify-center rounded-full bg-emerald-300 sm:mx-0 sm:size-12">
                                        <img className="size-8" src='img\pensamiento-removebg-preview.png'/>
                                    </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 className="text-base font-semibold text-gray-900" id="modal-title">My Thoughts</h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">{book.notes}</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button className="inline-flex w-full justify-center rounded-md bg-emerald-300 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-emerald-600 hover:text-white sm:ml-3 sm:w-auto" onClick={()=> setOpenModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}

        </div>
    )
}

export default Modal