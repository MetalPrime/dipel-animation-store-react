import React, { useEffect } from "react";
import './Animation.css'
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { AmountType } from "../../Types/AmountVisual";
import truckLateralItem from "../../Resources/Truck_Final_Lateral.png";
import truckFrontItem from "../../Resources/Truck_Final_Front.png";
import cement from "../../Resources/cement.svg";
import road from "../../Resources/carretera@4x.png";

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
	let imgRoadURL = road;
	let canvas;


	let imgTruckLateral: p5Types.Image ;
	let imgCement : p5Types.Image ;
	let imgTruckFront: p5Types.Image;
	let imgRoad : p5Types.Image ;

	let bgPosX : number = 0
	let bgPosY : number = 0

	useEffect(() => {
		visualObjects = {...visualObjects, amountVisual}
		imgTruckLateralURL = truckLateralItem;
		imgTruckFrontalURL = truckFrontItem;
		imgCementURL = cement;
		imgRoadURL = road;
	},[amountVisual])

	const preload = (p5: p5Types) => {
		imgTruckLateral = p5.loadImage(truckLateralItem);

		imgTruckFront = p5.loadImage(truckFrontItem);
		
		p5.loadImage(cement,img => {
			imgCement = img;
		});
		imgCement = p5.loadImage(cement);

		imgRoad = p5.loadImage(imgRoadURL);
	}
    
	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		canvas = p5.createCanvas(p5.windowWidth * .8,480).parent(canvasParentRef);
		
		console.log(imgTruckLateral);
		console.log(imgCement);

		
		
	};

	const draw = (p5: p5Types) => {
		p5.background(72, 111, 56);
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

		if (imgRoadURL) {
			imgRoad = p5.loadImage(imgRoadURL, (img) => imgRoad = img)
			imgRoadURL = '';
		}
		
		p5.fill(255);

		if(imgRoad){
			p5.image(imgRoad,bgPosX,bgPosY, window.innerWidth * 1.6,1200);
		}

		if(imgTruckLateral){
			p5.image(imgTruckLateral, 400,50,800,400);
		}


		
        visualObjects.amountVisual.forEach((object,i) =>{
            for (let index = 0; index < object.amount; index++) {
                
				if(imgCement){
					p5.image(imgCement,x+(i*50), y+(index*50),50,50);
					
				}

				if(object.amount >10){
					moveAnimation();
				}
				
            }
            
        })

		if(imgTruckFront){
			p5.image(imgTruckFront, 850,160,380,280)
		}

		
	};

	const mouseClicked = (p5: p5Types) => {
		bgPosY -= 4.8;
		bgPosX -= 10;
		if(bgPosX<-690){
			bgPosX = 0;
			bgPosY = 0;
		}
		
	}

	const moveAnimation = () => {
		bgPosY -= 0.45;
		bgPosX -= 0.97;
		if(bgPosX<-690){
			bgPosX = 0;
			bgPosY = 0;
		}
	}
	

	return <Sketch preload={preload}setup={setup} draw={draw} mouseClicked={mouseClicked}  />;
};


