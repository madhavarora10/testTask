import React, { useState } from 'react'
import ToggleableDemo from './Panel'
import { useForm } from 'react-hook-form'
import { data } from '../json/dummydata';
import Card from './Card';
function Container() {
    const[dummydata,setdummydata]=useState(data)
    const [show,setshow]=useState(false);
    const[entity , setentity]=useState()
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onsubmit = ((data) => {
        setentity({title:data.box})
        console.log(data) 
        setshow(true)
        
    });
    const selectAll = watch('selectAll');
    const del=(databox)=>{
  dummydata.map((datas)=>{
        if(databox.box[0]===datas.title) {
            datas.status=0
        }
    return datas
    })

    }
    return (
        <div style={{
            height:'auto'
        }} className=" bg-white p-8 text-black  w-96">
           {show ? <Card title={entity}/>:
           <div>
           <p className="text-bold text-2xl">Requests</p>
           <p className='mt-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
            <form onSubmit={handleSubmit(onsubmit)} className="mt-5">
                <div>
                    <input   {...register("selectAll")} type={'checkbox'} />
                    <label className=" text-red-600 text-lg ml-3">Select All</label>
                </div>
                <div className="ml-5 mt-4 mb-5 ">
                    {dummydata.map((el, index) => (
                      
                    
                        <div key={index}  className="border-b-2 mb-3"> 
                           { el.status==='1' && <div className="flex ">
                            <input
                            className="mt-0"
                                checked={selectAll}
                                type={'checkbox'}
                                value={el.title} {...register("box", {
                                    required: {
                                        value: true,
                                        message: 'select one of the checkbox'
                                    }
                                })} />
                            < ToggleableDemo title={el.title}
                                date={el.date}
                                length={el.length}
                                descp={el.descp}

                            />

                        </div>}
                        </div>
                    
                    ))}
                 
                    


                </div>
                {errors.box && <span className="text-red-700">This field is required</span>}
                
               <button className="bg-black text-white p-4 w-full mt-3" type='submit'>Transfer Ownership</button>
               <button className="bg-black text-white p-4 w-full mt-3" onClick={handleSubmit(del)} type='submit'>Delete Request</button>
            </form>
           
           </div>}
           {show && <button className="bg-black text-white p-4 w-full  " >Return to Home page</button>}
        </div>
    )
}

export default Container





