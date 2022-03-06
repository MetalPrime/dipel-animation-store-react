import React, { useEffect } from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { AmountType } from "../../Types/AmountVisual";
import truckItem from "../../Resources/truck_lateral_2nd.svg";
import cement from "../../Resources/cement.svg";

export type Animation = {
	//Your component props
    amountVisual: AmountType[];
}

let x = 50;
const y = 50;
  
export const Animation: React.FC<Animation> = ({amountVisual}) => {
	
	let visualObjects = {amountVisual};
	let imgTruck: p5Types.Image ;
	let imgCement : p5Types.Image ;

	useEffect(() => {
		visualObjects = {...visualObjects, amountVisual}
		console.log(imgCement);
	},[amountVisual])

	const preload = (p5: p5Types) => {
		imgTruck = p5.loadImage(truckItem);
		
		p5.loadImage(cement,img => {
			imgCement = img;
		});
		imgCement = p5.loadImage(cement);
	}
    
	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(700, 700).parent(canvasParentRef);
		console.log(imgTruck);
		console.log(imgCement);
	};

	const draw = (p5: p5Types) => {
		
		
		p5.fill(255);
		
        visualObjects.amountVisual.forEach((object,i) =>{
            for (let index = 0; index < object.amount; index++) {
                
                p5.ellipse(x+(i*50), y+(index*50), 70, 70);
				if(imgCement){
					p5.image(imgCement,x+(i*50), y+(index*50),100,100);
					
				}
				
            }
            
        })
		p5.ellipse(50, 50, 70, 70);
		if(imgTruck){
			p5.image(imgTruck, 100,100,100,100)
		}
		
	};

	return <Sketch preload={preload}setup={setup} draw={draw} />;
};


