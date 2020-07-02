import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Three from 'three';
import { Geometry } from 'three';

const SceneContext = React.createContext();
const CameraContext = React.createContext();
const BoxContext = React.createContext();
// class Application {
//     constructor(){
//         this.scene = new Three.Scene();

//     }

//     createScene(){
//         this.scene = new Three.Scene();

//     }
// }

class Scene extends Component {
    constructor(){
        this.scene = new Three.Scene();
    }

    add(mesh){
        this.scene.add(mesh);
    }

    render(){
        return (
            <SceneContext.Provider value="i am value">
                {this.props.children}
            </SceneContext.Provider>
        )
    }
}

class Camera extends Component{
    render(){
        return (
            <CameraContext.Provider/>
        )
    }
}

class Box extends Component{

    render(){
        const geom = new Three.BoxGeometry(this.props.width, this.props.height, this.props.depth);
        const Material = new Three.MeshBasicMaterial(this.props.material);
        return <BoxContext.Provider/>
    }
}

class App extends Component {
    componentDidMount(){

    }
    
    render(){
        return (
            <Scene>
                <Camera/>
                    <Box>
                        <RenderMesh/>
                    </Box>
                <Camera/>
            </Scene>
        )
    }
}