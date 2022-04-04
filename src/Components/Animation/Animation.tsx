import React, { useEffect } from "react";
import './Animation.css'
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { AmountType } from "../../Types/AmountVisual";
import truckLateralItem from "../../Resources/Truck_Final_Lateral.png";
import truckFrontItem from "../../Resources/Truck_Final_Front.png";
import cement from "../../Resources/caja@4x.png";
import road from "../../Resources/carretera@4x.png";

export type Animation = {
	//Your component props
    amountVisual: AmountType[];
}

let x = 525;
const y = 30;
  
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
/*                 let posX = x+(i*70);
				let posY = y+(index*70); */
				let spaceX = 0;
				spaceX = index % 3 === 0 ? 0 : spaceX+=1;
				

				let posX = (x - (spaceX*58))  + (Math.floor(index/3)*58);
				let posY = (y+(spaceX*43)) + (Math.floor(index/3)*23);
				
				if(imgCement){
					p5.image(imgCement,posX,posY,70,70);
					
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

	}

	const moveAnimation = () => {
		bgPosY -= 0.15;
		bgPosX -= 0.323;
		if(bgPosX<-690){
			bgPosX = 0;
			bgPosY = 0;
		}
	}
	

	return <Sketch preload={preload}setup={setup} draw={draw} mouseClicked={mouseClicked}  />;
};


