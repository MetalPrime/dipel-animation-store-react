import React, { useEffect } from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { AmountType } from "../../Types/AmountVisual";
import truckLateralItem from "../../Resources/Truck_Final_Lateral.svg";
import truckFrontItem from "../../Resources/Truck_Final_Front.svg";
import cement from "../../Resources/cement.svg";

export type Animation = {
	//Your component props
    amountVisual: AmountType[];
}

let x = 50;
const y = 50;
  
export const Animation: React.FC<Animation> = ({amountVisual}) => {
	
	let visualObjects = {amountVisual};

	let imgTruckLateralURL = truckLateralItem;
	let imgTruckFrontalURL = truckFrontItem;
	let imgCementURL = cement;


	let imgTruckLateral: p5Types.Image ;
	let imgCement : p5Types.Image ;
	let imgTruckFront: p5Types.Image

	useEffect(() => {
		visualObjects = {...visualObjects, amountVisual}
		imgTruckLateralURL = truckLateralItem;
		imgTruckFrontalURL = truckFrontItem;
		imgCementURL = cement;
	},[amountVisual])

	const preload = (p5: p5Types) => {
		imgTruckLateral = p5.loadImage(truckLateralItem);

		imgTruckFront = p5.loadImage(truckFrontItem);
		
		p5.loadImage(cement,img => {
			imgCement = img;
		});
		imgCement = p5.loadImage(cement);
	}
    
	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(1080, 560).parent(canvasParentRef);
		console.log(imgTruckLateral);
		console.log(imgCement);
	};

	const draw = (p5: p5Types) => {
		p5.background(255);
		if (imgCementURL) {
			imgCement = p5.loadImage(imgCementURL, (img) => imgCement = img)
			imgCementURL = '';
		}

		if (imgTruckLateralURL) {
			imgTruckLateral = p5.loadImage(imgTruckLateralURL, (img) => imgTruckLateral = img)
			imgTruckLateralURL = '';
		}

		if (imgTruckFrontalURL) {
			imgTruckFront = p5.loadImage(imgTruckFrontalURL, (img) => imgTruckFront = img)
			imgTruckFrontalURL = '';
		}
		
		p5.fill(255);

		if(imgTruckLateral){
			p5.image(imgTruckLateral, 100,100)
		}
		
        visualObjects.amountVisual.forEach((object,i) =>{
            for (let index = 0; index < object.amount; index++) {
                
				if(imgCement){
					p5.image(imgCement,x+(i*50), y+(index*50),50,50);
					
				}
				
            }
            
        })

		if(imgTruckLateral){
			p5.image(imgTruckFront, 250,130)
		}

		
	};

	return <Sketch preload={preload}setup={setup} draw={draw} />;
};


