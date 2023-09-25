import { useEffect, useRef } from "react";
import {
  Engine,
  Scene,
  MeshBuilder,
  StandardMaterial,
  Texture,
  Vector3,
} from "@babylonjs/core";
import { CloudProceduralTexture } from "@babylonjs/procedural-textures";

export default ({
  antialias,
  engineOptions,
  adaptToDeviceRatio,
  sceneOptions,
  onRender,
  onSceneReady,
  ...rest
}) => {
  const reactCanvas = useRef(null);

  // set up basic engine and scene
  useEffect(() => {
    const { current: canvas } = reactCanvas;

    if (!canvas) return;

    const engine = new Engine(
      canvas,
      antialias,
      engineOptions,
      adaptToDeviceRatio
    );

    const scene = new Scene(engine, sceneOptions);
    if (scene.isReady()) {
      onSceneReady(scene);
    } else {
      scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
    }

    var cloud = MeshBuilder.CreateSphere(
      "cloud",
      { segments: 100, diameter: 1000 },
      scene
    );
    var cloudMaterial = new StandardMaterial("cloudMat", scene);
    var cloudProcTexture = new CloudProceduralTexture("cloudTex", 5524, scene);
    cloudMaterial.emissiveTexture = cloudProcTexture;
    cloudMaterial.backFaceCulling = false;
    cloudMaterial.emissiveTexture.coordinatesMode = Texture.SKYBOX_MODE;
    cloud.material = cloudMaterial;
    cloud.position = new Vector3(0, 0, 1);

    engine.runRenderLoop(() => {
      if (typeof onRender === "function") onRender(scene);
      scene.render();
    });

    const resize = () => {
      scene.getEngine().resize();
    };

    if (window) {
      window.addEventListener("resize", resize);
    }

    return () => {
      scene.getEngine().dispose();

      if (window) {
        window.removeEventListener("resize", resize);
      }
    };
  }, [
    antialias,
    engineOptions,
    adaptToDeviceRatio,
    sceneOptions,
    onRender,
    onSceneReady,
  ]);

  console.log({ ...rest });

  return (
    <canvas style={{ height: "100vh", width: "100vw" }} ref={reactCanvas} />
  );
};
