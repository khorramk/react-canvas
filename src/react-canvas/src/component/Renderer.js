import React, { useRef, useContext, createContext,useEffect } from 'react';
import * as THREE from 'three';
import {SceneContext} from './Scene';
import {Cameracontext} from './camera';
const renderThree = new THREE.WebGL1Renderer();
const Rendercontext = createContext({renderThree})
const Renderer = (props)=> {

    // const renderRef = useRef(new THREE.WebGLRenderer());
    const renderElement = useRef(null);
    const {reactScene} = useContext(SceneContext);
    const {cameras} = useContext(Cameracontext);
    const { renderThree } = useContext(Rendercontext);
    renderThree.setSize(props.width, props.height);
    useEffect(() => {
        renderElement.current.appendChild(renderThree.domElement);
    //update render on scene
    renderThree.render(reactScene, cameras);
    });
    return (
        <div ref={renderElement}/>
    )
}

export default Renderer;