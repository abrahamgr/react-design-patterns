import React from "react";
import { SplitScreen } from ".";

export const OnboardingFlow = ({ children }) => {

    const [ currentIndex, setCurrentIndex ] = React.useState(0);

    const newChildren = React.Children.toArray(children);
    if(!newChildren)
        return null;
    const currentChild = newChildren[currentIndex];

    const moveStep = (next) => {
        if(next){
            setCurrentIndex(currentIndex + 1);
        }
        else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <>
            {currentChild}
            <SplitScreen>
                <button onClick={() => moveStep(false)} disabled={currentIndex === 0} >Back</button>
                <button onClick={() => moveStep(true)}disabled={currentIndex === newChildren.length - 1}>Next</button>
            </SplitScreen>
        </>
    );
};