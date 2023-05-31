import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useRef, useEffect } from 'react';
import Head from '../Media/3dModel/Alfred-3d-model.obj';

function Header() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Створення сцени
    const scene = new THREE.Scene();

    // Створення камери
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Створення рендерера
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xff0000); // Встановлення червоного кольору фону

    // Додавання рендерера на сторінку
    const canvas = canvasRef.current;
    canvas.appendChild(renderer.domElement);

    // Завантаження OBJ-моделі
    const loader = new OBJLoader();
    loader.load(Head, (objModel) => {
      // Зміщення та масштабування моделі
      objModel.position.set(0, 0, 0);
      objModel.scale.set(0.2, 0.2, 0.2);

      // Додавання моделі до сцени
      scene.add(objModel);

      renderer.render(scene, camera);
    });

    // Очищення пам'яті після завершення компонента
    return () => {
      canvas.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={canvasRef} />;
}

export default Header;