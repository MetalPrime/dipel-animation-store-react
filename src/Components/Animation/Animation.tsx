import React, { useEffect } from "react";
import './Animation.css'
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { AmountType } from "../../Types/AmountVisual";
import truckLateralItem from "../../Resources/Truck_Final_Lateral.png";
import truckFrontItem from "../../Resources/Truck_Final_Front.png";
import cement from "../../Resources/caja@4x.png";
import road from "../../Resources/carretera.png";

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
	let canvas: p5Types.Element;
	let parent: HTMLElement | null = document.querySelector('.react-p5');


	let imgTruckLateral: p5Types.Image ;
	let imgCement : p5Types.Image ;
	let imgTruckFront: p5Types.Image;
	let imgRoad : p5Types.Image ;
	let visualAmount : number ;

	let bgPosX : number = 0
	let bgPosY : number = 0

	useEffect(() => {
		visualObjects = {...visualObjects, amountVisual}
		imgTruckLateralURL = truckLateralItem;
		imgTruckFrontalURL = truckFrontItem;
		imgCementURL = cement;
		imgRoadURL = road;
		visualAmount = visuals();
	},[amountVisual]);

	const visuals = () =>{

		let visualAmount = 0;
		
		visualObjects.amountVisual.forEach((object) =>{
            for (let index = 0; index < object.amount; index++) {
				if(visualAmount >141){
					visualAmount = 141;
				} else {
					visualAmount += 1;
				}
				
			}
		})

		

		return visualAmount;
	}



	const preload = (p5: p5Types) => {
		imgTruckLateral = p5.loadImage(truckLateralItem);

		imgTruckFront = p5.loadImage(truckFrontItem);
		
		p5.loadImage(cement,img => {
			imgCement = img;
		});
		imgCement = p5.loadImage(cement);

		imgRoad = p5.loadImage(imgRoadURL);
	}
    
	//See annotations in JS for more informatio
	const setup = (p5: p5Types, canvasParentRef: Element ) => {
		canvas = p5.createCanvas(parent? parent.offsetWidth : p5.windowWidth * .8,480).parent(canvasParentRef);
		
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
			p5.image(imgRoad,bgPosX,bgPosY,parent? parent.offsetWidth * 3.6 : window.innerWidth * 1.6,2400);
		}

		if(imgTruckLateral){
			p5.image(imgTruckLateral,parent? parent.offsetWidth*0.242: 400,50,parent? parent.offsetWidth*0.55: 800,400);
		}
		p5.text(p5.mouseX + " " + p5.mouseY, p5.mouseX, p5.mouseY);

		for (let index = 0; index < visualAmount; index++) {
			
			let posX =  index % 20 === 0 ? (x - (2*56))  + (Math.floor(index/20)*56) : (x - (0*56))  + (Math.floor(index/20)*56);
			let posY =  index % 10 === 0 ? (y+(0*40)) + (Math.floor(index/20)*23):(y+(1*40)) + (Math.floor(index/20)*23);
			
			if(imgCement){
				if(index%10===0 && index!==0){
					p5.image(imgCement,parent? posX-parent.offsetWidth*0.02:posX,parent? posY+parent.offsetWidth*0.015:posY,70,70);
				}
					
				
				
			}


		}

		if(visualAmount >100){
			moveAnimation();
		}
				
            

		if(imgTruckFront){
			p5.image(imgTruckFront, parent? parent.offsetWidth*0.602:850,160,parent? parent.offsetWidth*0.28:380,280)
		}

		
	};


	const moveAnimation = () => {
		console.log(parent!.offsetWidth*0.001473);
		bgPosY = parent? bgPosY -= parent.offsetWidth*0.001473 : bgPosY -= 2.224;
		bgPosX = parent? bgPosX -= parent.offsetWidth*0.002946 : bgPosX -= 5.168;
		if(bgPosX<-3000){
			bgPosX = 0;
			bgPosY = 0;
		}
	}
	

	return <Sketch preload={preload}setup={setup} draw={draw}   />;
};


