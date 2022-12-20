import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { AmountType } from '../../Types/AmountVisual';
import './Animation2.css';
import { Car } from './Car';
import { Cube } from './Cube';

interface IAnimation2 {
    amountVisual: AmountType[];
}

export const Animation2: React.FC<IAnimation2> = ({ amountVisual }) => {

    let visualObjects = { amountVisual };
    let visualAmount: number = 0;
    let perspective = document.getElementById('perspective');
    const [children, setChildren] = useState<React.ReactElement[]>([]);
    const visuals = () => {

        let visualAmount = 0;

        visualObjects.amountVisual.forEach((object) => {
            for (let index = 0; index < object.amount; index++) {
                if (visualAmount > 141) {
                    visualAmount = 141;
                } else {
                    visualAmount += 1;
                }

            }
        })



        return visualAmount;
    }

    console.log(children);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        visualObjects = { ...visualObjects, amountVisual }

        // eslint-disable-next-line react-hooks/exhaustive-deps
        visualAmount = visuals();

        let copyArray = [];

        for (let index = 0; index < visualAmount; index++) {

            if (index % 10 === 0 && index !== 0) {
                copyArray.push(<Cube />)

            }

        }

        setChildren(copyArray);
    }, [amountVisual]);



    return (
        <section className='Animation2'>
            <Car></Car>

            <div id="tridiv">
                <div className="scene" style={{ transform: "rotateX(-364deg) rotateY(-760deg)" }}>
                <div className="shape cuboid-2 cub-1">
                        <div className="face ft">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face bk">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face rt">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face lt">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face bm">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face tp">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                    </div>
                    <div className="shape cylinder-1 cyl-1">
                        <div className="face bm">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face tp">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face side s0">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.01);" }}></div>
                        </div>
                        <div className="face side s1">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.13);" }}></div>
                        </div>
                        <div className="face side s2">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.027);" }}></div>
                        </div>
                        <div className="face side s3">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face side s4">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.227);" }}></div>
                        </div>
                        <div className="face side s5">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.357);" }}></div>
                        </div>
                        <div className="face side s6">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.486);" }}></div>
                        </div>
                        <div className="face side s7">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.61);" }}></div>
                        </div>
                        <div className="face side s8">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.73);" }}></div>
                        </div>
                        <div className="face side s9">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.627);" }}></div>
                        </div>
                        <div className="face side s10">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face side s11">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.373);" }}></div>
                        </div>
                        <div className="face side s12">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.243);" }}></div>
                        </div>
                        <div className="face side s13">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.114);" }}></div>
                        </div>
                    </div>
                    <div className="shape cylinder-2 cyl-2">
                        <div className="face bm">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face tp">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face side s0">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.01);" }}></div>
                        </div>
                        <div className="face side s1">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.13);" }}></div>
                        </div>
                        <div className="face side s2">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.027);" }}></div>
                        </div>
                        <div className="face side s3">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face side s4">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.227);" }}></div>
                        </div>
                        <div className="face side s5">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.357);" }}></div>
                        </div>
                        <div className="face side s6">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.486);" }}></div>
                        </div>
                        <div className="face side s7">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.61);" }}></div>
                        </div>
                        <div className="face side s8">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.73);" }}></div>
                        </div>
                        <div className="face side s9">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.627);" }}></div>
                        </div>
                        <div className="face side s10">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face side s11">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.373);" }}></div>
                        </div>
                        <div className="face side s12">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.243);" }}></div>
                        </div>
                        <div className="face side s13">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.114);" }}></div>
                        </div>
                    </div>
                    <div className="shape cylinder-3 cyl-3">
                        <div className="face bm">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face tp">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face side s0">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.01);" }}></div>
                        </div>
                        <div className="face side s1">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.13);" }}></div>
                        </div>
                        <div className="face side s2">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.027);" }}></div>
                        </div>
                        <div className="face side s3">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face side s4">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.227);" }}></div>
                        </div>
                        <div className="face side s5">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.357);" }}></div>
                        </div>
                        <div className="face side s6">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.486);" }}></div>
                        </div>
                        <div className="face side s7">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.61);" }}></div>
                        </div>
                        <div className="face side s8">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.73);" }}></div>
                        </div>
                        <div className="face side s9">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.627);" }}></div>
                        </div>
                        <div className="face side s10">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face side s11">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.373);" }}></div>
                        </div>
                        <div className="face side s12">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.243);" }}></div>
                        </div>
                        <div className="face side s13">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.114);" }}></div>
                        </div>
                    </div>
                    <div className="shape cylinder-4 cyl-4">
                        <div className="face bm">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face tp">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face side s0">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.01);" }}></div>
                        </div>
                        <div className="face side s1">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.13);" }}></div>
                        </div>
                        <div className="face side s2">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.027);" }}></div>
                        </div>
                        <div className="face side s3">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face side s4">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.227);" }}></div>
                        </div>
                        <div className="face side s5">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.357);" }}></div>
                        </div>
                        <div className="face side s6">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.486);" }}></div>
                        </div>
                        <div className="face side s7">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.61);" }}></div>
                        </div>
                        <div className="face side s8">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.73);" }}></div>
                        </div>
                        <div className="face side s9">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.627);" }}></div>
                        </div>
                        <div className="face side s10">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face side s11">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.373);" }}></div>
                        </div>
                        <div className="face side s12">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.243);" }}></div>
                        </div>
                        <div className="face side s13">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.114);" }}></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="perspective" id='perspective'>

                {children}
            </div>
            <div id="tridiv">
                <div className="scene" style={{ transform: "rotateX(-364deg) rotateY(-760deg)" }}>
                    <div className="shape cuboid-1 frente">
                        <div className="face ft">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face bk">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face rt">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face lt">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face bm">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face tp">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="cr cr-0">
                            <div className="face side s0">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.024);" }}></div>
                            </div>
                            <div className="face side s1">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.118);" }}></div>
                            </div>
                            <div className="face side s2">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.027);" }}></div>
                            </div>
                        </div>
                        <div className="cr cr-1">
                            <div className="face side s0">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.176);" }}></div>
                            </div>
                            <div className="face side s1">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.325);" }}></div>
                            </div>
                            <div className="face side s2">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.475);" }}></div>
                            </div>
                        </div>
                        <div className="cr cr-2">
                            <div className="face side s0">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.624);" }}></div>
                            </div>
                            <div className="face side s1">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.718);" }}></div>
                            </div>
                            <div className="face side s2">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.573);" }}></div>
                            </div>
                        </div>
                        <div className="cr cr-3">
                            <div className="face side s0">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.424);" }}></div>
                            </div>
                            <div className="face side s1">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.275);" }}></div>
                            </div>
                            <div className="face side s2">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.125);" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="shape prism-1 pri-1">
                        <div className="face ft">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.157);" }}></div>
                        </div>
                        <div className="face bk">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face-wrapper rt">
                            <div className="face">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                            </div>
                        </div>
                        <div className="face-wrapper lt">
                            <div className="face">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                            </div>
                        </div>
                        <div className="face bm">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                    </div>
                    <div className="shape cuboid-3 cub-2">
                        <div className="face ft">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face bk">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face rt">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face lt">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face bm">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="face tp">
                            <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}></div>
                        </div>
                        <div className="cr cr-0">
                            <div className="face side s0">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.024);" }}></div>
                            </div>
                            <div className="face side s1">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.118);" }}></div>
                            </div>
                            <div className="face side s2">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.027);" }}></div>
                            </div>
                        </div>
                        <div className="cr cr-1">
                            <div className="face side s0">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.176);" }}></div>
                            </div>
                            <div className="face side s1">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.325);" }}></div>
                            </div>
                            <div className="face side s2">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.475);" }}></div>
                            </div>
                        </div>
                        <div className="cr cr-2">
                            <div className="face side s0">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.624);" }}></div>
                            </div>
                            <div className="face side s1">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.718);" }}></div>
                            </div>
                            <div className="face side s2">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.573);" }}></div>
                            </div>
                        </div>
                        <div className="cr cr-3">
                            <div className="face side s0">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.424);" }}></div>
                            </div>
                            <div className="face side s1">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.275);" }}></div>
                            </div>
                            <div className="face side s2">
                                <div className="photon-shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.125);" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}