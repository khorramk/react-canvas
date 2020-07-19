import React, { useState, useRef, createContext, useContext } from 'react';
import * as THREE from 'three';
let camera = {};
const Cameracontext = createContext({camera})
const Camera = (props) => {
    let {camera} = useContext(Cameracontext);
    camera = new THREE.PerspectiveCamera(props.fov, props.aspectRatio, props.far, props.close);
    camera.position.z = props.z;
    return (
        <Cameracontext.Provider value={{camera}}>
            {props.children}
        </Cameracontext.Provider>
    );
}

export {Cameracontext, Camera};