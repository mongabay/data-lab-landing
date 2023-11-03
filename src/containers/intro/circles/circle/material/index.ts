"use client";

import { shaderMaterial } from '@react-three/drei';
import { Color } from '@react-three/fiber';

import glslify from 'glslify';
import FRAGMENT from 'raw-loader!glslify-loader!./fragment.glsl';
import VERTEX from 'raw-loader!glslify-loader!./vertex.glsl';

export type CircleMaterialProps = {
  uPosX: number;
  uPosY: number;
  uPrevPos: { x: number; y: number; z: number } | [number, number, number];
  uCurrentPos: [number, number, number];

  uTime: number;
  uStartTime: number;
  uDuration: number;
  uProgress: number;

  uRadius: number;
  uColor: Color,
  uOpacity: number;

  uStep: number;
  uPrevStep: number;

  uNoise: number;
  uPrevNoise: number;

  uVelocity: number[];
  uPrevVelocity: number[];
  transparent: boolean;
}

export const CircleMaterial = shaderMaterial(
  {
    uPosX: 0,
    uPosY: 0,
    uPrevPos: [0, 0, 0],
    uCurrentPos: [0, 0, 0],

    uTime: 0,
    uStartTime: 0,
    uDuration: 5,
    uProgress: 0,

    uRadius: 0,
    uColor: [1, 1, 0],
    uOpacity: 1,

    uStep: 0,
    uPrevStep: 0,

    uNoise: 0,
    uPrevNoise: 0,

    uVelocity: [0, 0],
    uPrevVelocity: [0, 0],
  },
  glslify(VERTEX),
  glslify(FRAGMENT)
);

export default CircleMaterial;
