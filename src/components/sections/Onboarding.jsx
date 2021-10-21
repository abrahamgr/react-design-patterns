import { OnboardingFlow } from '../index';


const StepOne = () => {
    return <h2>Step One</h2>;
};
const StepTwo = () => {
    return <h2>Step Two</h2>;
};
const StepThree = () => {
    return <h2>Step Three</h2>;
};

export const Onboarding = () => {
    return (
        <>
            <h3>Onboarding</h3>
            <OnboardingFlow>
                <StepOne />                
                <StepTwo />
                <StepThree />
            </OnboardingFlow>
        </>
    );
};