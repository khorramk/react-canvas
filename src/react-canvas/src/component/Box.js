import React from 'react';
import * as THREE from 'three';
const BoxContext = React.createContext({});
const Box = (props) => {
    const {width, height, depth} = props
    
    
    return (

        <BoxContext.Provider value={{
            material: new THREE.MeshBasicMaterial({
                color: 0x00ff00
            }),
            width,
            height,
            depth,

        }}>
            {props.children}
        </BoxContext.Provider>
    )
}

export {BoxContext, Box};