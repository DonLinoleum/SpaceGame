import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import { spaceShipMove } from '../functions/spaceShipMove'

export function createSpaceship(scene,state){
    let gltfLoader = new GLTFLoader()
    gltfLoader.load('src/models/spaceship/scene.gltf',(gltf)=>{
      state.spaceship = gltf.scene
      state.spaceship.scale.set(0.45,0.45,0.45)
      state.spaceship.position.y = -1.0
      if (window.innerWidth <= 992)
        state.spaceship.scale.set(0.2,0.2,0.2)
      scene.add(state.spaceship)
      state.loading = {...state.loading, total : (state.loading.total + 1)}   
      },
      (xhr)=>{   
      },
        (error)=>{
          console.log(error)
        }
      )
}