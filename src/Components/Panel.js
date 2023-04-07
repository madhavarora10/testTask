import React from 'react'; 
import { Panel } from 'primereact/panel';
import { Ripple } from 'primereact/ripple';
import { BsFillCaretDownFill } from "react-icons/bs";
export default function TemplateDemo(props) {
    const template = (options) => {
        const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
        const className = `${options.className} justify-content-start`;
        const titleClassName = `${options.titleClassName} ml-2 text-primary `;
        const style = { fontSize: '1.2rem'};

        return (
            <div className={"flex justify-between "}>
               
                <div className="  flex flex-col ml-5 w-52">
                <span  className={titleClassName+" font-semibold text-base"} style={style}>{props.title}</span>
               
               <div className="flex mb-3">
               <span  className={titleClassName+" text-base"} >{props.date}</span>
                <span  className={titleClassName+" text-base"} >Length {props.length}</span>
               </div>
                </div>
               
                <button className={"ml-8"} onClick={options.onTogglerClick}>
                    <span ><BsFillCaretDownFill/> </span>
                    <Ripple />
                </button>
            </div>
        );
    };

    return (
        <Panel headerTemplate={template} toggleable>
            <p className="m-2">
             {props.descp}
                
            </p>
        </Panel>
    )
}