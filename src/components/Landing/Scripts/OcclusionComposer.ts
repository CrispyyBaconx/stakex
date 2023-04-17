import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

// Import custom shaders
import AdditiveShader from '@/components/Landing/Shaders/Additive';
import ASCIIShader from '@/components/Landing/Shaders/ASCII';
import RippleShader from '@/components/Landing/Shaders/Ripple';
import ScanShader from '@/components/Landing/Shaders/Scan';
import VertexLitParticleShader from '@/components/Landing/Shaders/VertexLitParticle';
import VolumetricLightCylinderShader from '@/components/Landing/Shaders/VolumetricLightCylinder';
import VolumetricLightScatteringShader from "@/components/Landing/Shaders/VolumetricLightScattering";

export default class OcclusionComposer {
    composer: EffectComposer;
  
    constructor(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) {
        this.composer = new EffectComposer(renderer);
        
        // Add passes to the composer
        const renderPass = new RenderPass(scene, camera);
        this.composer.addPass(renderPass);
        
        const additivePass = new ShaderPass(AdditiveShader());
        this.composer.addPass(additivePass);
  
        const asciiPass = new ShaderPass(ASCIIShader());
        this.composer.addPass(asciiPass);

        const ripplePass = new ShaderPass(RippleShader());
        this.composer.addPass(ripplePass);

        const scanPass = new ShaderPass(ScanShader());
        this.composer.addPass(scanPass);

        const vertexLitParticlePass = new ShaderPass(VertexLitParticleShader());
        this.composer.addPass(vertexLitParticlePass);

        const volumetricLightCylinderPass = new ShaderPass(VolumetricLightCylinderShader());
        this.composer.addPass(volumetricLightCylinderPass);

        const volumetricLightScatteringPass = new ShaderPass(VolumetricLightScatteringShader());
        this.composer.addPass(volumetricLightScatteringPass);
    }
  
    render(delta: number) {
        this.composer.render(delta);
    }
}