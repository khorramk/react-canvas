import React, {useRef, useEffect, useContext, createContext} from 'react';
import * as THREE from 'three';
import {BoxContext} from './Box';
import {Cameracontext} from './camera';
const reactScene = new THREE.Scene();
const SceneContext = createContext({reactScene})
const Scene = (props) => {
    const sceneRef = useRef(new THREE.Scene());
    const { boxes } = useContext(BoxContext);
    const {reactScene} = useContext(SceneContext);
   // const {cameras} = useContext(Cameracontext);
    reactScene.add(boxes);
    return (
        <SceneContext.Provider value={{reactScene}}>
            {props.children}
        </SceneContext.Provider>
    );
}

export {SceneContext, Scene};