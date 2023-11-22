import { CSSProperties } from "react";

export type Partner = {
    name: string;
    image: string;
    role: string;
    company: string;
    description: string;
    link: string;
    companyLink: string
};

export type Company = {
    name: string;
    image: string;
    imageWidth: number;
    imageHeight: number;
    link: string;
    style?: CSSProperties;
}