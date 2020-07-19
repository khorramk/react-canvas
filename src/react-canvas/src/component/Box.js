import React, {useRef, createContext, useContext} from 'react';
import * as THREE from 'three';

     
let boxes = {};
const BoxContext = createContext({boxes});
const Box = (props) => {
    
    let {boxes} = useContext(BoxContext);
    boxes.material = useRef(new THREE.MeshBasicMaterial({
        color: 0x00ff00
    }));
    boxes.geom = useRef(new THREE.BoxBufferGeometry(props.width, props.height, props.depth));
    
    boxes.make = useRef(new THREE.Mesh(boxes.geom.current, boxes.material.current));
    return (

        <BoxContext.Provider value={{boxes}}>
            {props.children}
        </BoxContext.Provider>
    )
}

export {BoxContext, Box};