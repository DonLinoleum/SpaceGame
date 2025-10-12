import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { generateRandomValues } from "../functions/generateRandomValues";
export function createAsteroids(scene, state) {
  let gltfLoader = new GLTFLoader();
  gltfLoader.load(
    "src/models/asteroid_1_optimized/asteroid_1.glb",
    (glb) => {
      let asteroid = glb.scene;
      asteroid.traverse((element) => {
        if (element.isMesh) {
          element.castShadow = true;
          element.receiveShadow = true;
        }
      });
      let maxSize = 0.8;
      let minSize = 0.1;
      let randomSize = Math.random() * (maxSize - minSize) + minSize;
      let randomValues = generateRandomValues();
      asteroid.scale.set(randomSize, randomSize, randomSize);
      asteroid.position.x = randomValues.randomX;
      asteroid.position.y = randomValues.randomY;
      asteroid.speed = randomValues.randomSpeed;
      asteroid.position.z = -200;
      asteroid.trave;
      state.asteroids.push(asteroid);
      scene.add(asteroid);
      state.loading = { ...state.loading, total: state.loading.total + 1 };
    },
    (xhr) => {},
    (error) => {
      console.log(error);
    }
  );

  gltfLoader.load(
    "src/models/asteroid_2_optimized/asteroid_2.glb",
    (glb) => {
      let asteroid = glb.scene;
      asteroid.traverse((element) => {
        if (element.isMesh) {
          element.castShadow = true;
          element.receiveShadow = true;
        }
      });
      let maxSize = 0.8;
      let minSize = 0.1;
      let randomSize = Math.random() * (maxSize - minSize) + minSize;
      let randomValues = generateRandomValues();
      asteroid.scale.set(randomSize, randomSize, randomSize);
      asteroid.position.x = randomValues.randomX;
      asteroid.position.y = randomValues.randomY;
      asteroid.speed = randomValues.randomSpeed;
      asteroid.position.z = -300;
      state.asteroids.push(asteroid);
      scene.add(asteroid);
      state.loading = { ...state.loading, total: state.loading.total + 1 };
    },
    (xhr) => {},
    (error) => {
      console.log(error);
    }
  );

  gltfLoader.load(
    "src/models/asteroid_3_optimized/asteroid_3.glb",
    (glb) => {
      let asteroid = glb.scene;
      asteroid.traverse((element) => {
        if (element.isMesh) {
          element.castShadow = true;
          element.receiveShadow = true;
        }
      });
      let maxSize = 0.8;
      let minSize = 0.1;
      let randomSize = Math.random() * (maxSize - minSize) + minSize;
      let randomValues = generateRandomValues();
      asteroid.type = 3;
      asteroid.scale.set(randomSize * 15, randomSize * 15, randomSize * 15);
      asteroid.position.x = randomValues.randomX;
      asteroid.position.y = randomValues.randomY;
      asteroid.speed = randomValues.randomSpeed;
      asteroid.position.z = -300;
      state.asteroids.push(asteroid);
      scene.add(asteroid);
      state.loading = { ...state.loading, total: state.loading.total + 1 };
    },
    (xhr) => {},
    (error) => {
      console.log(error);
    }
  );
}
